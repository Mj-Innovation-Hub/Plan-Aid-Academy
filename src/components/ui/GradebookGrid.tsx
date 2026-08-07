'use client';

import React, { useState } from 'react';
import { SubjectScore, Student } from '@/lib/types';
import { 
  Download, 
  Upload, 
  Search, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Plus, 
  Printer, 
  Calculator,
  Edit3
} from 'lucide-react';
import * as XLSX from 'xlsx';

interface GradebookGridProps {
  students: Student[];
  initialScores: SubjectScore[];
  onOpenReportCard: (student: Student) => void;
}

export const GradebookGrid: React.FC<GradebookGridProps> = ({
  students,
  initialScores,
  onOpenReportCard,
}) => {
  const [scores, setScores] = useState<SubjectScore[]>(initialScores);
  const [selectedTerm, setSelectedTerm] = useState('Term 3');
  const [selectedSession, setSelectedSession] = useState('2025/2026');
  const [selectedSubject, setSelectedSubject] = useState('Mathematics');
  const [searchQuery, setSearchQuery] = useState('');
  const [editingCell, setEditingCell] = useState<{ studentId: string; field: 'ca1' | 'ca2' | 'exam' } | null>(null);

  // Helper to compute grade from total
  const computeGrade = (total: number): 'A' | 'B' | 'C' | 'D' | 'E' | 'F' => {
    if (total >= 75) return 'A';
    if (total >= 65) return 'B';
    if (total >= 50) return 'C';
    if (total >= 45) return 'D';
    if (total >= 40) return 'E';
    return 'F';
  };

  // Helper to compute rank based on total score
  const getRankedStudents = () => {
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
  };

  const ranks = getRankedStudents();

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
        // Create new score record
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
          remarks: 'Score entered in gradebook',
        };
        return [...prev, newScore];
      }
    });
  };

  // Export to Excel / CSV
  const handleExportCSV = () => {
    const exportData = students.map((std) => {
      const score = scores.find(
        (s) => s.studentId === std.id && s.subjectName === selectedSubject
      );
      return {
        'Admission No': std.admissionNo,
        'Student Name': std.fullName,
        'Class': std.class,
        'Subject': selectedSubject,
        'CA1 (Max 15)': score ? score.ca1 : 0,
        'CA2 (Max 15)': score ? score.ca2 : 0,
        'Exam (Max 70)': score ? score.exam : 0,
        'Total (100)': score ? score.total : 0,
        'Grade': score ? score.grade : 'F',
        'Rank': ranks[std.id] || '-',
      };
    });

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, `${selectedSubject} Scores`);
    XLSX.writeFile(workbook, `Gradebook_${selectedSubject.replace(/\s+/g, '_')}_${selectedTerm}.xlsx`);
  };

  // Filter students
  const filteredStudents = students.filter(
    (std) =>
      std.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      std.admissionNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      std.class.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Top Controls Bar */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-royal-100 text-royal-700 flex items-center justify-center font-bold">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-royal-950">Score sheet and Analytics</h3>
              <p className="text-xs text-slate-500">Inline score entry with auto rank, grade calculation & statistical analytics</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={handleExportCSV}
              className="px-3.5 py-2 text-xs font-bold text-royal-700 bg-royal-50 hover:bg-royal-100 border border-royal-200 rounded-xl transition flex items-center space-x-1.5"
            >
              <Download className="w-4 h-4" />
              <span>Export CSV/Excel</span>
            </button>
          </div>
        </div>

        {/* Dropdowns Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2 border-t border-slate-100">
          <div>
            <label className="text-[11px] font-bold text-slate-500 uppercase">Academic Session</label>
            <select
              value={selectedSession}
              onChange={(e) => setSelectedSession(e.target.value)}
              className="mt-1 w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-primary-500"
            >
              <option value="2025/2026">2025/2026 Session</option>
              <option value="2024/2025">2024/2025 Session</option>
            </select>
          </div>

          <div>
            <label className="text-[11px] font-bold text-slate-500 uppercase">Term</label>
            <select
              value={selectedTerm}
              onChange={(e) => setSelectedTerm(e.target.value)}
              className="mt-1 w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-primary-500"
            >
              <option value="Term 1">Term 1 (Harmattan)</option>
              <option value="Term 2">Term 2 (Rain)</option>
              <option value="Term 3">Term 3 (Final)</option>
            </select>
          </div>

          <div>
            <label className="text-[11px] font-bold text-slate-500 uppercase">Subject</label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="mt-1 w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-primary-500 font-semibold text-royal-900"
            >
              <option value="Mathematics">Mathematics</option>
              <option value="English Language">English Language</option>
              <option value="Robotics & STEM">Robotics & STEM</option>
              <option value="Islamic Studies & Quran">Islamic Studies & Quran</option>
              <option value="Basic Science">Basic Science</option>
            </select>
          </div>

          <div>
            <label className="text-[11px] font-bold text-slate-500 uppercase">Search Student</label>
            <div className="relative mt-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Name or Admission No..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Spreadsheet Data Grid */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-royal-950 text-white text-xs font-semibold uppercase tracking-wider">
                <th className="p-3 border-b border-royal-800">S/N</th>
                <th className="p-3 border-b border-royal-800">Admission No</th>
                <th className="p-3 border-b border-royal-800">Student Name</th>
                <th className="p-3 border-b border-royal-800">Class</th>
                <th className="p-3 border-b border-royal-800 text-center bg-royal-900">CA 1 (15)</th>
                <th className="p-3 border-b border-royal-800 text-center bg-royal-900">CA 2 (15)</th>
                <th className="p-3 border-b border-royal-800 text-center bg-royal-900">Exam (70)</th>
                <th className="p-3 border-b border-royal-800 text-center bg-primary-700">Total (100)</th>
                <th className="p-3 border-b border-royal-800 text-center">Grade</th>
                <th className="p-3 border-b border-royal-800 text-center">Rank</th>
                <th className="p-3 border-b border-royal-800 text-right">Report Card</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredStudents.map((student, index) => {
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

                return (
                  <tr key={student.id} className="hover:bg-sky-50/50 transition">
                    <td className="p-3 font-medium text-slate-400">{index + 1}</td>
                    <td className="p-3 font-mono text-xs text-slate-600 font-semibold">{student.admissionNo}</td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <img
                          src={student.photoUrl}
                          alt={student.fullName}
                          className="w-7 h-7 rounded-full object-cover border"
                        />
                        <span className="font-bold text-royal-950">{student.fullName}</span>
                      </div>
                    </td>
                    <td className="p-3 text-xs text-slate-600 font-medium">{student.class}</td>

                    {/* CA1 Editable Cell */}
                    <td className="p-2 text-center bg-sky-50/30">
                      <input
                        type="number"
                        min={0}
                        max={15}
                        value={score.ca1}
                        onChange={(e) => handleScoreChange(student.id, 'ca1', e.target.value)}
                        className="w-16 text-center py-1 bg-white border border-slate-300 rounded font-bold text-slate-800 focus:ring-2 focus:ring-primary-500"
                      />
                    </td>

                    {/* CA2 Editable Cell */}
                    <td className="p-2 text-center bg-sky-50/30">
                      <input
                        type="number"
                        min={0}
                        max={15}
                        value={score.ca2}
                        onChange={(e) => handleScoreChange(student.id, 'ca2', e.target.value)}
                        className="w-16 text-center py-1 bg-white border border-slate-300 rounded font-bold text-slate-800 focus:ring-2 focus:ring-primary-500"
                      />
                    </td>

                    {/* Exam Editable Cell */}
                    <td className="p-2 text-center bg-sky-50/30">
                      <input
                        type="number"
                        min={0}
                        max={70}
                        value={score.exam}
                        onChange={(e) => handleScoreChange(student.id, 'exam', e.target.value)}
                        className="w-16 text-center py-1 bg-white border border-slate-300 rounded font-bold text-slate-800 focus:ring-2 focus:ring-primary-500"
                      />
                    </td>

                    {/* Total Score (Auto Calculated) */}
                    <td className="p-3 text-center font-extrabold text-royal-900 bg-sky-100/50">
                      {score.total}
                    </td>

                    {/* Grade Badge */}
                    <td className="p-3 text-center">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded text-xs font-black ${
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

                    {/* Rank */}
                    <td className="p-3 text-center font-semibold text-slate-600">
                      #{ranks[student.id] || '-'}
                    </td>

                    {/* Action: Open Printable Report Card */}
                    <td className="p-3 text-right">
                      <button
                        onClick={() => onOpenReportCard(student)}
                        className="px-3 py-1.5 text-xs font-bold text-primary-700 bg-primary-50 hover:bg-primary-100 rounded-lg transition flex items-center space-x-1 ml-auto"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>Report Card</span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
