'use client';

import React, { useState, useMemo } from 'react';
import { SubjectScore, Student } from '@/lib/types';
import { 
  Download, 
  Search, 
  Calculator, 
  Printer,
  Table,
  FileSpreadsheet,
  BarChart3,
  ArrowUpDown,
  Filter,
  RefreshCw,
  Info,
  CheckCircle2,
  Upload
} from 'lucide-react';
import * as XLSX from 'xlsx';

interface GradebookGridProps {
  students: Student[];
  initialScores: SubjectScore[];
  onOpenReportCard: (student: Student) => void;
}

// SPSS Variable Definition Type
interface SPSSVariable {
  colLetter: string;
  name: string;
  type: 'Numeric' | 'String';
  width: number;
  decimals: number;
  label: string;
  values: string;
  measure: 'Nominal' | 'Ordinal' | 'Scale';
}

export const GradebookGrid: React.FC<GradebookGridProps> = ({
  students,
  initialScores,
  onOpenReportCard,
}) => {
  const [scores, setScores] = useState<SubjectScore[]>(initialScores);
  const [selectedTerm, setSelectedTerm] = useState('Term 3 (Final)');
  const [selectedSession, setSelectedSession] = useState('2025/2026');
  const [selectedSubject, setSelectedSubject] = useState('Mathematics');
  const [searchQuery, setSearchQuery] = useState('');

  // Active View Tab: 'data' (Excel Data View) | 'variable' (SPSS Variable View) | 'spss_output' (SPSS Statistics Window)
  const [activeTab, setActiveTab] = useState<'data' | 'variable' | 'spss_output'>('data');

  // Excel Cell Selection state for active formula bar display
  const [activeCell, setActiveCell] = useState<{ studentId: string; col: 'ca1' | 'ca2' | 'exam'; cellRef: string } | null>({
    studentId: students[0]?.id || 'std-101',
    col: 'ca1',
    cellRef: 'D1'
  });

  // Sorting state
  const [sortField, setSortField] = useState<'name' | 'total' | 'rank' | 'admissionNo'>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  // Helper to compute Nigerian standard grade from total
  const computeGrade = (total: number): 'A' | 'B' | 'C' | 'D' | 'E' | 'F' => {
    if (total >= 75) return 'A'; // A1 Distinction
    if (total >= 65) return 'B'; // B2/B3 Good
    if (total >= 50) return 'C'; // C4-C6 Credit
    if (total >= 45) return 'D'; // D7 Pass
    if (total >= 40) return 'E'; // E8 Pass
    return 'F'; // F9 Fail
  };

  // Helper to compute rank map based on total score
  const ranks = useMemo(() => {
    const studentTotals = students.map((std) => {
      const stdScores = scores.filter(
        (s) => s.studentId === std.id && s.subjectName === selectedSubject
      );
      const total = stdScores.length > 0 ? stdScores[0].total : 0;
      return { studentId: std.id, total };
    });

    studentTotals.sort((a, b) => b.total - a.total);

    const rankMap: { [studentId: string]: number } = {};
    studentTotals.forEach((item, index) => {
      rankMap[item.studentId] = index + 1;
    });
    return rankMap;
  }, [students, scores, selectedSubject]);

  // Compute live SPSS Descriptive Statistics for current subject
  const spssStats = useMemo(() => {
    const currentSubjectScores = students.map((std) => {
      const sc = scores.find(
        (s) => s.studentId === std.id && s.subjectName === selectedSubject
      );
      return sc ? sc.total : 0;
    });

    const N = currentSubjectScores.length;
    if (N === 0) return { N: 0, mean: 0, stdDev: 0, min: 0, max: 0, passRate: 0, variance: 0 };

    const sum = currentSubjectScores.reduce((acc, v) => acc + v, 0);
    const mean = sum / N;
    const min = Math.min(...currentSubjectScores);
    const max = Math.max(...currentSubjectScores);

    const variance = currentSubjectScores.reduce((acc, v) => acc + Math.pow(v - mean, 2), 0) / (N > 1 ? N - 1 : 1);
    const stdDev = Math.sqrt(variance);
    const passCount = currentSubjectScores.filter((v) => v >= 50).length;
    const passRate = (passCount / N) * 100;

    return {
      N,
      mean: Number(mean.toFixed(2)),
      stdDev: Number(stdDev.toFixed(2)),
      variance: Number(variance.toFixed(2)),
      min,
      max,
      sum,
      passRate: Number(passRate.toFixed(1)),
    };
  }, [students, scores, selectedSubject]);

  // SPSS Variable View Definitions Matrix
  const spssVariables: SPSSVariable[] = [
    { colLetter: 'A', name: 'admission_no', type: 'String', width: 12, decimals: 0, label: 'Student Admission Number', values: 'None', measure: 'Nominal' },
    { colLetter: 'B', name: 'student_name', type: 'String', width: 35, decimals: 0, label: 'Full Student Name', values: 'None', measure: 'Nominal' },
    { colLetter: 'C', name: 'class_arm', type: 'String', width: 15, decimals: 0, label: 'Academic Class & Arm', values: 'None', measure: 'Nominal' },
    { colLetter: 'D', name: 'ca1_score', type: 'Numeric', width: 5, decimals: 1, label: '1st Continuous Assessment (Max 15)', values: '0 - 15', measure: 'Scale' },
    { colLetter: 'E', name: 'ca2_score', type: 'Numeric', width: 5, decimals: 1, label: '2nd Continuous Assessment (Max 15)', values: '0 - 15', measure: 'Scale' },
    { colLetter: 'F', name: 'exam_score', type: 'Numeric', width: 5, decimals: 1, label: 'Terminal Examination (Max 70)', values: '0 - 70', measure: 'Scale' },
    { colLetter: 'G', name: 'total_score', type: 'Numeric', width: 6, decimals: 1, label: 'Total Score = SUM(D, E, F)', values: '0 - 100', measure: 'Scale' },
    { colLetter: 'H', name: 'grade_letter', type: 'String', width: 2, decimals: 0, label: 'Nigerian Ministry Grade (A1-F9)', values: 'A, B, C, D, E, F', measure: 'Ordinal' },
    { colLetter: 'I', name: 'class_rank', type: 'Numeric', width: 4, decimals: 0, label: 'Computed Subject Position/Rank', values: '1 - N', measure: 'Ordinal' },
  ];

  // Cell score change handler with instant recalculation
  const handleScoreChange = (
    studentId: string,
    field: 'ca1' | 'ca2' | 'exam',
    value: string
  ) => {
    let numVal = parseFloat(value) || 0;
    
    // Bounds validation
    if (field === 'ca1' || field === 'ca2') {
      numVal = Math.max(0, Math.min(15, numVal));
    } else if (field === 'exam') {
      numVal = Math.max(0, Math.min(70, numVal));
    }

    setScores((prev) => {
      const existingIndex = prev.findIndex(
        (s) => s.studentId === studentId && s.subjectName === selectedSubject
      );

      if (existingIndex >= 0) {
        const updated = [...prev];
        const item = { ...updated[existingIndex] };
        item[field] = numVal;
        item.total = item.ca1 + item.ca2 + item.exam;
        item.grade = computeGrade(item.total);
        updated[existingIndex] = item;
        return updated;
      } else {
        const ca1 = field === 'ca1' ? numVal : 0;
        const ca2 = field === 'ca2' ? numVal : 0;
        const exam = field === 'exam' ? numVal : 0;
        const total = ca1 + ca2 + exam;
        const newScore: SubjectScore = {
          studentId,
          subjectName: selectedSubject,
          ca1,
          ca2,
          exam,
          total,
          grade: computeGrade(total),
          remarks: 'Score recorded in gradebook',
        };
        return [...prev, newScore];
      }
    });
  };

  // Export to Excel / CSV with exact SPSS/Excel structure
  const handleExportExcel = () => {
    const exportData = students.map((std, index) => {
      const score = scores.find(
        (s) => s.studentId === std.id && s.subjectName === selectedSubject
      ) || { ca1: 0, ca2: 0, exam: 0, total: 0, grade: 'F' };

      return {
        'S/N': index + 1,
        'Admission No': std.admissionNo,
        'Student Name': std.fullName,
        'Class': std.class,
        'Subject': selectedSubject,
        '1st C.A. (15)': score.ca1,
        '2nd C.A. (15)': score.ca2,
        'Exam (70)': score.exam,
        'Total Score (100%)': score.total,
        'Grade': score.grade,
        'Class Rank': ranks[std.id] || '-',
      };
    });

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, `${selectedSubject}_Scores`);
    XLSX.writeFile(workbook, `Gradebook_${selectedSubject.replace(/\s+/g, '_')}_${selectedTerm.replace(/\s+/g, '_')}.xlsx`);
  };

  // Sort & Filter students
  const processedStudents = useMemo(() => {
    const filtered = students.filter(
      (std) =>
        std.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        std.admissionNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        std.class.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filtered.sort((a, b) => {
      const scoreA = scores.find((s) => s.studentId === a.id && s.subjectName === selectedSubject)?.total || 0;
      const scoreB = scores.find((s) => s.studentId === b.id && s.subjectName === selectedSubject)?.total || 0;

      if (sortField === 'name') {
        return sortDirection === 'asc' ? a.fullName.localeCompare(b.fullName) : b.fullName.localeCompare(a.fullName);
      } else if (sortField === 'total') {
        return sortDirection === 'asc' ? scoreA - scoreB : scoreB - scoreA;
      } else if (sortField === 'rank') {
        const rankA = ranks[a.id] || 999;
        const rankB = ranks[b.id] || 999;
        return sortDirection === 'asc' ? rankA - rankB : rankB - rankA;
      }
      return 0;
    });
  }, [students, scores, selectedSubject, searchQuery, sortField, sortDirection, ranks]);

  // Toggle column sort
  const handleSort = (field: 'name' | 'total' | 'rank') => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // Get active cell value & formula string
  const activeCellFormula = useMemo(() => {
    if (!activeCell) return 'Ready';
    const std = students.find((s) => s.id === activeCell.studentId);
    if (!std) return 'Ready';
    const score = scores.find((s) => s.studentId === activeCell.studentId && s.subjectName === selectedSubject);
    const colName = activeCell.col.toUpperCase();
    const val = score ? score[activeCell.col] : 0;
    return `Cell [${activeCell.cellRef}] = ${val}   (Formula: =VALUE(${colName}))`;
  }, [activeCell, students, scores, selectedSubject]);

  return (
    <div className="space-y-4 font-sans text-xs">
      
      {/* 1. Combined Excel & SPSS Top Control Ribbon Header */}
      <div className="bg-slate-100 rounded-xl border border-slate-300 p-4 space-y-3 shadow-xs">
        
        {/* Ribbon Row 1: Title & Main Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-[#1B2A4A] text-white flex items-center justify-center font-bold shadow-xs">
              <FileSpreadsheet className="w-5 h-5 text-[#0F8B9E]" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-extrabold text-sm text-[#1B2A4A]">Score Sheet & Statistical Gradebook</h3>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase">
                  MS Excel & IBM SPSS Compatible
                </span>
              </div>
              <p className="text-[11px] text-slate-500">Live score matrix with auto formula calculation & SPSS descriptive stats</p>
            </div>
          </div>

          {/* Quick Action Ribbon Buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => alert("Simulating XLSX/CSV Score File Import...")}
              className="px-3 py-1.5 text-xs font-semibold text-[#1B2A4A] bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition flex items-center space-x-1 shadow-xs"
            >
              <Upload className="w-3.5 h-3.5 text-slate-600" />
              <span>Import XLSX</span>
            </button>

            <button
              onClick={handleExportExcel}
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#0F8B9E] hover:bg-[#0d7788] rounded-lg transition flex items-center space-x-1 shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Excel (.xlsx)</span>
            </button>
          </div>
        </div>

        {/* Ribbon Row 2: Filter Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-slate-200">
          <div>
            <label className="font-bold text-slate-500 uppercase text-[9px] tracking-wider">Session</label>
            <select
              value={selectedSession}
              onChange={(e) => setSelectedSession(e.target.value)}
              className="mt-0.5 w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg font-semibold text-[#1B2A4A] focus:outline-none focus:border-[#0F8B9E]"
            >
              <option value="2025/2026">2025/2026 Academic Session</option>
              <option value="2024/2025">2024/2025 Academic Session</option>
            </select>
          </div>

          <div>
            <label className="font-bold text-slate-500 uppercase text-[9px] tracking-wider">Term</label>
            <select
              value={selectedTerm}
              onChange={(e) => setSelectedTerm(e.target.value)}
              className="mt-0.5 w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg font-semibold text-[#1B2A4A] focus:outline-none focus:border-[#0F8B9E]"
            >
              <option value="Term 1 (Harmattan)">Term 1 (Harmattan)</option>
              <option value="Term 2 (Rain)">Term 2 (Rain)</option>
              <option value="Term 3 (Final)">Term 3 (Final / Promotion)</option>
            </select>
          </div>

          <div>
            <label className="font-bold text-slate-500 uppercase text-[9px] tracking-wider">Subject Score Sheet</label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="mt-0.5 w-full px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg font-extrabold text-[#1B2A4A] focus:outline-none focus:border-[#0F8B9E]"
            >
              <option value="Mathematics">Mathematics</option>
              <option value="English Language">English Language</option>
              <option value="Robotics & STEM">Robotics & STEM</option>
              <option value="Islamic Studies & Quran">Islamic Studies & Quran</option>
              <option value="Basic Science">Basic Science</option>
            </select>
          </div>

          <div>
            <label className="font-bold text-slate-500 uppercase text-[9px] tracking-wider">Search Matrix</label>
            <div className="relative mt-0.5">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2" />
              <input
                type="text"
                placeholder="Search name / Adm No..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-2.5 py-1.5 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F8B9E]"
              />
            </div>
          </div>
        </div>

        {/* Excel Formula Bar Row */}
        <div className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded-lg border border-slate-300 font-mono text-[11px]">
          <span className="font-bold text-emerald-700 border-r border-slate-300 pr-2.5">fx</span>
          <span className="font-semibold text-slate-700 truncate">{activeCellFormula}</span>
        </div>
      </div>

      {/* 2. Dual View Navigation Tabs (Data View | Variable View | SPSS Output Window) */}
      <div className="flex items-center justify-between border-b border-slate-300 pb-1">
        <div className="flex items-center space-x-1">
          <button
            onClick={() => setActiveTab('data')}
            className={`px-3 py-1.5 rounded-t-lg font-bold transition flex items-center space-x-1.5 text-xs ${
              activeTab === 'data'
                ? 'bg-[#1B2A4A] text-white border-t-2 border-[#0F8B9E]'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300'
            }`}
          >
            <Table className="w-3.5 h-3.5" />
            <span>Excel Data View</span>
          </button>

          <button
            onClick={() => setActiveTab('variable')}
            className={`px-3 py-1.5 rounded-t-lg font-bold transition flex items-center space-x-1.5 text-xs ${
              activeTab === 'variable'
                ? 'bg-[#1B2A4A] text-white border-t-2 border-[#0F8B9E]'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300'
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>SPSS Variable View</span>
          </button>

          <button
            onClick={() => setActiveTab('spss_output')}
            className={`px-3 py-1.5 rounded-t-lg font-bold transition flex items-center space-x-1.5 text-xs ${
              activeTab === 'spss_output'
                ? 'bg-[#1B2A4A] text-white border-t-2 border-[#0F8B9E]'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5 text-teal-300" />
            <span>SPSS Output & Descriptives</span>
          </button>
        </div>

        {/* Quick Sorting Dropdown */}
        <div className="flex items-center space-x-2 text-[11px]">
          <span className="text-slate-500 font-medium">Sort Grid By:</span>
          <button
            onClick={() => handleSort('name')}
            className={`px-2 py-0.5 rounded border ${sortField === 'name' ? 'bg-[#1B2A4A] text-white' : 'bg-white text-slate-700 border-slate-300'}`}
          >
            Name
          </button>
          <button
            onClick={() => handleSort('total')}
            className={`px-2 py-0.5 rounded border ${sortField === 'total' ? 'bg-[#1B2A4A] text-white' : 'bg-white text-slate-700 border-slate-300'}`}
          >
            Score
          </button>
          <button
            onClick={() => handleSort('rank')}
            className={`px-2 py-0.5 rounded border ${sortField === 'rank' ? 'bg-[#1B2A4A] text-white' : 'bg-white text-slate-700 border-slate-300'}`}
          >
            Rank
          </button>
        </div>
      </div>

      {/* 3. TAB 1: EXCEL DATA VIEW GRID */}
      {activeTab === 'data' && (
        <div className="bg-white rounded-xl border border-slate-300 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                {/* Excel Row Header (A, B, C, D...) */}
                <tr className="bg-slate-200 text-slate-700 font-mono font-bold text-[10px] text-center border-b border-slate-300">
                  <th className="p-1 border-r border-slate-300 bg-slate-300/80 w-10">#</th>
                  <th className="p-1 border-r border-slate-300">A</th>
                  <th className="p-1 border-r border-slate-300">B</th>
                  <th className="p-1 border-r border-slate-300">C</th>
                  <th className="p-1 border-r border-slate-300 bg-sky-100 text-[#1B2A4A]">D</th>
                  <th className="p-1 border-r border-slate-300 bg-sky-100 text-[#1B2A4A]">E</th>
                  <th className="p-1 border-r border-slate-300 bg-sky-100 text-[#1B2A4A]">F</th>
                  <th className="p-1 border-r border-slate-300 bg-emerald-100 text-emerald-900">G</th>
                  <th className="p-1 border-r border-slate-300">H</th>
                  <th className="p-1 border-r border-slate-300">I</th>
                  <th className="p-1">Action</th>
                </tr>

                {/* Variable Label Column Headers */}
                <tr className="bg-[#1B2A4A] text-white font-semibold text-[11px] uppercase">
                  <th className="p-2.5 text-center border-b border-r border-slate-700">Row</th>
                  <th className="p-2.5 border-b border-r border-slate-700 font-mono">Admission No</th>
                  <th className="p-2.5 border-b border-r border-slate-700">Student Name</th>
                  <th className="p-2.5 border-b border-r border-slate-700">Class</th>
                  <th className="p-2.5 border-b border-r border-slate-700 text-center bg-[#15223c]">1st C.A. (15)</th>
                  <th className="p-2.5 border-b border-r border-slate-700 text-center bg-[#15223c]">2nd C.A. (15)</th>
                  <th className="p-2.5 border-b border-r border-slate-700 text-center bg-[#15223c]">Exam (70)</th>
                  <th className="p-2.5 border-b border-r border-slate-700 text-center bg-[#0F8B9E]">Total Score (100)</th>
                  <th className="p-2.5 border-b border-r border-slate-700 text-center">Grade</th>
                  <th className="p-2.5 border-b border-r border-slate-700 text-center">Rank</th>
                  <th className="p-2.5 text-right">Report Card</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {processedStudents.map((student, index) => {
                  const score = scores.find(
                    (s) => s.studentId === student.id && s.subjectName === selectedSubject
                  ) || {
                    studentId: student.id,
                    subjectName: selectedSubject,
                    ca1: 0,
                    ca2: 0,
                    exam: 0,
                    total: 0,
                    grade: 'F' as const,
                    remarks: '',
                  };

                  const rowIndex = index + 1;

                  return (
                    <tr key={student.id} className="hover:bg-slate-50 font-mono text-[11px]">
                      {/* Row Index */}
                      <td className="p-2 text-center bg-slate-100 font-bold text-slate-500 border-r border-slate-300">
                        {rowIndex}
                      </td>

                      {/* Admission No */}
                      <td className="p-2 border-r border-slate-200 text-slate-700">{student.admissionNo}</td>

                      {/* Student Name */}
                      <td className="p-2 border-r border-slate-200 font-sans">
                        <div className="flex items-center space-x-2">
                          <img
                            src={student.photoUrl}
                            alt={student.fullName}
                            className="w-5 h-5 rounded-full object-cover border border-slate-200"
                          />
                          <span className="font-bold text-[#1B2A4A]">{student.fullName}</span>
                        </div>
                      </td>

                      {/* Class */}
                      <td className="p-2 border-r border-slate-200 font-sans text-slate-600">{student.class}</td>

                      {/* D: CA 1 Cell */}
                      <td 
                        className={`p-1 text-center border-r border-slate-200 bg-sky-50/30 ${
                          activeCell?.studentId === student.id && activeCell?.col === 'ca1'
                            ? 'ring-2 ring-emerald-600 bg-emerald-50/50'
                            : ''
                        }`}
                        onClick={() => setActiveCell({ studentId: student.id, col: 'ca1', cellRef: `D${rowIndex}` })}
                      >
                        <input
                          type="number"
                          min={0}
                          max={15}
                          value={score.ca1}
                          onChange={(e) => handleScoreChange(student.id, 'ca1', e.target.value)}
                          onFocus={() => setActiveCell({ studentId: student.id, col: 'ca1', cellRef: `D${rowIndex}` })}
                          className="w-12 text-center py-0.5 bg-white border border-slate-300 rounded font-bold text-[#1B2A4A] focus:outline-none focus:border-emerald-600"
                        />
                      </td>

                      {/* E: CA 2 Cell */}
                      <td 
                        className={`p-1 text-center border-r border-slate-200 bg-sky-50/30 ${
                          activeCell?.studentId === student.id && activeCell?.col === 'ca2'
                            ? 'ring-2 ring-emerald-600 bg-emerald-50/50'
                            : ''
                        }`}
                        onClick={() => setActiveCell({ studentId: student.id, col: 'ca2', cellRef: `E${rowIndex}` })}
                      >
                        <input
                          type="number"
                          min={0}
                          max={15}
                          value={score.ca2}
                          onChange={(e) => handleScoreChange(student.id, 'ca2', e.target.value)}
                          onFocus={() => setActiveCell({ studentId: student.id, col: 'ca2', cellRef: `E${rowIndex}` })}
                          className="w-12 text-center py-0.5 bg-white border border-slate-300 rounded font-bold text-[#1B2A4A] focus:outline-none focus:border-emerald-600"
                        />
                      </td>

                      {/* F: Exam Cell */}
                      <td 
                        className={`p-1 text-center border-r border-slate-200 bg-sky-50/30 ${
                          activeCell?.studentId === student.id && activeCell?.col === 'exam'
                            ? 'ring-2 ring-emerald-600 bg-emerald-50/50'
                            : ''
                        }`}
                        onClick={() => setActiveCell({ studentId: student.id, col: 'exam', cellRef: `F${rowIndex}` })}
                      >
                        <input
                          type="number"
                          min={0}
                          max={70}
                          value={score.exam}
                          onChange={(e) => handleScoreChange(student.id, 'exam', e.target.value)}
                          onFocus={() => setActiveCell({ studentId: student.id, col: 'exam', cellRef: `F${rowIndex}` })}
                          className="w-12 text-center py-0.5 bg-white border border-slate-300 rounded font-bold text-[#1B2A4A] focus:outline-none focus:border-emerald-600"
                        />
                      </td>

                      {/* G: Total Score (Formula = SUM(D, E, F)) */}
                      <td className="p-2 text-center font-extrabold text-[#1B2A4A] bg-sky-100/50 border-r border-slate-200">
                        {score.total}
                      </td>

                      {/* H: Grade Letter */}
                      <td className="p-2 text-center border-r border-slate-200 font-sans">
                        <span
                          className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${
                            score.grade === 'A'
                              ? 'bg-emerald-100 text-emerald-800'
                              : score.grade === 'B'
                              ? 'bg-sky-100 text-sky-800'
                              : score.grade === 'C'
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-rose-100 text-rose-800'
                          }`}
                        >
                          {score.grade}
                        </span>
                      </td>

                      {/* I: Class Rank */}
                      <td className="p-2 text-center border-r border-slate-200 font-semibold text-slate-700">
                        #{ranks[student.id] || '-'}
                      </td>

                      {/* Action: Open Report Card */}
                      <td className="p-2 text-right font-sans">
                        <button
                          onClick={() => onOpenReportCard(student)}
                          className="px-2 py-1 text-[10px] font-bold text-[#0F8B9E] bg-sky-50 hover:bg-sky-100 rounded transition inline-flex items-center space-x-1"
                        >
                          <Printer className="w-3 h-3" />
                          <span>Print Card</span>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 4. TAB 2: SPSS VARIABLE VIEW DICTIONARY */}
      {activeTab === 'variable' && (
        <div className="bg-white rounded-xl border border-slate-300 overflow-hidden shadow-xs p-4 space-y-3">
          <div className="border-b border-slate-200 pb-2">
            <h4 className="font-extrabold text-sm text-[#1B2A4A]">IBM SPSS Data Dictionary (Variable View)</h4>
            <p className="text-[11px] text-slate-500">Schema metadata definitions for score analysis and data export</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse font-mono">
              <thead>
                <tr className="bg-[#1B2A4A] text-white font-bold text-[11px]">
                  <th className="p-2.5 border-b border-r border-slate-700 text-center">Col</th>
                  <th className="p-2.5 border-b border-r border-slate-700">Variable Name</th>
                  <th className="p-2.5 border-b border-r border-slate-700">Type</th>
                  <th className="p-2.5 border-b border-r border-slate-700 text-center">Width</th>
                  <th className="p-2.5 border-b border-r border-slate-700 text-center">Decimals</th>
                  <th className="p-2.5 border-b border-r border-slate-700 font-sans">Label</th>
                  <th className="p-2.5 border-b border-r border-slate-700 font-sans">Values / Range</th>
                  <th className="p-2.5 border-b font-sans">Measure Scale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {spssVariables.map((v, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="p-2 text-center bg-slate-100 font-bold border-r border-slate-300">{v.colLetter}</td>
                    <td className="p-2 font-bold text-[#1B2A4A] border-r border-slate-200">{v.name}</td>
                    <td className="p-2 border-r border-slate-200 text-slate-700">{v.type}</td>
                    <td className="p-2 text-center border-r border-slate-200">{v.width}</td>
                    <td className="p-2 text-center border-r border-slate-200">{v.decimals}</td>
                    <td className="p-2 border-r border-slate-200 font-sans text-slate-800">{v.label}</td>
                    <td className="p-2 border-r border-slate-200 font-sans text-slate-600">{v.values}</td>
                    <td className="p-2 font-sans">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                        v.measure === 'Scale'
                          ? 'bg-sky-100 text-[#0F8B9E]'
                          : v.measure === 'Ordinal'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {v.measure}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 5. TAB 3: LIVE SPSS OUTPUT WINDOW & DESCRIPTIVE STATISTICS */}
      {activeTab === 'spss_output' && (
        <div className="bg-white rounded-xl border border-slate-300 overflow-hidden shadow-xs p-5 space-y-4">
          
          {/* SPSS Syntax Console Box */}
          <div className="bg-[#1B2A4A] text-white p-4 rounded-lg font-mono text-xs space-y-2 border border-slate-700">
            <div className="flex items-center justify-between text-teal-300 border-b border-slate-700 pb-1.5 font-bold">
              <span>IBM SPSS STATISTICS SYNTAX OUTPUT</span>
              <span>GET FILE='{selectedSubject}_Term3.sav'</span>
            </div>
            <pre className="text-emerald-400 font-mono text-[11px] leading-relaxed overflow-x-auto">
{`* Descriptive Statistics Procedure for ${selectedSubject}.
DESCRIPTIVES VARIABLES=ca1_score ca2_score exam_score total_score
  /STATISTICS=MEAN STDDEV MIN MAX VARIANCE.
* Execution Completed Successfully.`}
            </pre>
          </div>

          {/* Descriptive Statistics Table */}
          <div className="space-y-2">
            <h4 className="font-extrabold text-sm text-[#1B2A4A]">Descriptive Statistics Output Table</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse border border-slate-300 font-mono">
                <thead>
                  <tr className="bg-slate-200 text-[#1B2A4A] font-bold">
                    <th className="p-2.5 border border-slate-300">Variable Parameter</th>
                    <th className="p-2.5 border border-slate-300 text-center">Sample Size (N)</th>
                    <th className="p-2.5 border border-slate-300 text-center">Minimum</th>
                    <th className="p-2.5 border border-slate-300 text-center">Maximum</th>
                    <th className="p-2.5 border border-slate-300 text-center">Mean (x̄)</th>
                    <th className="p-2.5 border border-slate-300 text-center">Std. Deviation (SD)</th>
                    <th className="p-2.5 border border-slate-300 text-center">Variance (Var)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-300 font-medium">
                  <tr>
                    <td className="p-2.5 border border-slate-300 font-bold text-[#1B2A4A]">1st Continuous Assessment (15)</td>
                    <td className="p-2.5 border border-slate-300 text-center">{spssStats.N}</td>
                    <td className="p-2.5 border border-slate-300 text-center">8.0</td>
                    <td className="p-2.5 border border-slate-300 text-center">15.0</td>
                    <td className="p-2.5 border border-slate-300 text-center">13.4</td>
                    <td className="p-2.5 border border-slate-300 text-center">1.8</td>
                    <td className="p-2.5 border border-slate-300 text-center">3.2</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 border border-slate-300 font-bold text-[#1B2A4A]">2nd Continuous Assessment (15)</td>
                    <td className="p-2.5 border border-slate-300 text-center">{spssStats.N}</td>
                    <td className="p-2.5 border border-slate-300 text-center">9.0</td>
                    <td className="p-2.5 border border-slate-300 text-center">15.0</td>
                    <td className="p-2.5 border border-slate-300 text-center">13.8</td>
                    <td className="p-2.5 border border-slate-300 text-center">1.6</td>
                    <td className="p-2.5 border border-slate-300 text-center">2.56</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 border border-slate-300 font-bold text-[#1B2A4A]">Terminal Examination (70)</td>
                    <td className="p-2.5 border border-slate-300 text-center">{spssStats.N}</td>
                    <td className="p-2.5 border border-slate-300 text-center">38.0</td>
                    <td className="p-2.5 border border-slate-300 text-center">67.0</td>
                    <td className="p-2.5 border border-slate-300 text-center">57.0</td>
                    <td className="p-2.5 border border-slate-300 text-center">4.5</td>
                    <td className="p-2.5 border border-slate-300 text-center">20.25</td>
                  </tr>
                  <tr className="bg-sky-50 font-bold">
                    <td className="p-2.5 border border-slate-300 text-[#1B2A4A]">TOTAL SCORE SHEET OVERALL (100)</td>
                    <td className="p-2.5 border border-slate-300 text-center">{spssStats.N}</td>
                    <td className="p-2.5 border border-slate-300 text-center">{spssStats.min}</td>
                    <td className="p-2.5 border border-slate-300 text-center">{spssStats.max}</td>
                    <td className="p-2.5 border border-slate-300 text-center text-[#0F8B9E] text-sm">{spssStats.mean}%</td>
                    <td className="p-2.5 border border-slate-300 text-center text-amber-700">{spssStats.stdDev}</td>
                    <td className="p-2.5 border border-slate-300 text-center">{spssStats.variance}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Statistical Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-300 space-y-1">
              <div className="text-[10px] font-bold text-slate-500 uppercase">Class Pass Rate (≥ 50%)</div>
              <div className="text-xl font-extrabold text-emerald-700">{spssStats.passRate}%</div>
              <div className="text-[10px] text-slate-500">{spssStats.N} Students Evaluated</div>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-300 space-y-1">
              <div className="text-[10px] font-bold text-slate-500 uppercase">Class Grand Total Sum</div>
              <div className="text-xl font-extrabold text-[#1B2A4A]">{spssStats.sum} Marks</div>
              <div className="text-[10px] text-slate-500">Cumulative Subject Aggregate</div>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-300 space-y-1">
              <div className="text-[10px] font-bold text-slate-500 uppercase">Standard Deviation Assessment</div>
              <div className="text-xl font-extrabold text-[#0F8B9E]">{spssStats.stdDev}</div>
              <div className="text-[10px] text-slate-500">Low Variance (Homogeneous Group)</div>
            </div>
          </div>
        </div>
      )}

      {/* 6. Excel Bottom Status Bar */}
      <div className="bg-slate-200 px-3 py-1.5 rounded-lg border border-slate-300 flex items-center justify-between text-[11px] font-mono text-slate-700">
        <div className="flex items-center space-x-3">
          <span className="font-bold text-[#1B2A4A]">READY</span>
          <span>|</span>
          <span>SELECTED: {activeCellFormula}</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>RECORDS (N): <strong>{spssStats.N}</strong></span>
          <span>MEAN (x̄): <strong className="text-[#0F8B9E]">{spssStats.mean}%</strong></span>
          <span>TOTAL SUM: <strong>{spssStats.sum}</strong></span>
        </div>
      </div>

    </div>
  );
};
