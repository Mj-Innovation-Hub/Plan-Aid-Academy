'use client';

import React, { useState } from 'react';
import { ReportCardModal } from '@/components/ui/ReportCardModal';
import { HifzTracker } from '@/components/ui/HifzTracker';
import { mockStudents, mockSubjectScores } from '@/lib/mockData';
import { 
  Award, 
  BookOpen, 
  CreditCard, 
  Printer, 
  CheckCircle2, 
  HelpCircle
} from 'lucide-react';

export default function StudentParentPortalPage() {
  const [selectedStudentId, setSelectedStudentId] = useState<string>('std-101');
  const [isReportCardOpen, setIsReportCardOpen] = useState(false);

  const currentStudent = mockStudents.find((s) => s.id === selectedStudentId) || mockStudents[0];

  return (
    <div className="space-y-6 pb-12 font-sans">
      {/* 1. Student Profile Hero Banner */}
      <div className="bg-[#1B2A4A] text-white rounded-xl p-5 sm:p-6 shadow-xs border border-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <img
            src={currentStudent.photoUrl}
            alt={currentStudent.fullName}
            className="w-14 h-14 rounded-full object-cover border-2 border-[#0F8B9E]"
          />
          <div className="space-y-0.5">
            <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#0F8B9E] text-white uppercase">
              Parent & Student Portal
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-white">{currentStudent.fullName}</h1>
            <div className="text-xs text-slate-300 flex flex-wrap items-center gap-2 font-medium">
              <span>Adm No: <strong className="font-mono text-white">{currentStudent.admissionNo}</strong></span>
              <span>•</span>
              <span>Class: <strong className="text-white">{currentStudent.class}</strong></span>
              <span>•</span>
              <span>Arm: <strong className="text-[#0F8B9E] uppercase">{currentStudent.section}</strong></span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => setIsReportCardOpen(true)}
          className="px-4 py-2.5 bg-[#0F8B9E] hover:bg-[#0d7788] text-white font-bold text-xs rounded-lg transition flex items-center space-x-2 self-start md:self-auto shadow-xs"
        >
          <Printer className="w-4 h-4" />
          <span>Print Official Report Card</span>
        </button>
      </div>

      {/* Guided Parent Instruction Box */}
      <div className="bg-sky-50 p-4 rounded-xl border border-sky-200 text-xs text-[#1B2A4A] space-y-1">
        <div className="flex items-center space-x-1.5 font-bold text-[#0F8B9E]">
          <HelpCircle className="w-4 h-4" />
          <span>Welcome Parent / Guardian:</span>
        </div>
        <p className="text-slate-700 leading-relaxed">
          Here you can view your child's <strong>Terminal Academic Results</strong>, monitor <strong>Qur'an Hifz Memorization Progress</strong>, and check <strong>School Fee Clearance Status</strong> for 2025/2026 Term 3.
        </p>
      </div>

      {/* 2. Stat Indicator Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Term Average */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Term 3 Average</span>
            <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#0F8B9E] flex items-center justify-center font-bold">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-[#1B2A4A]">82.4%</div>
          <div className="text-xs text-emerald-700 font-semibold">Grade A1 Distinction</div>
        </div>

        {/* Attendance Rate */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Class Attendance</span>
            <div className="w-8 h-8 rounded-lg bg-[#1B2A4A] text-white flex items-center justify-center font-bold">
              <CheckCircle2 className="w-4 h-4 text-[#0F8B9E]" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-[#1B2A4A]">96%</div>
          <div className="text-xs text-slate-500 font-medium">Regular & Punctual</div>
        </div>

        {/* Fee Status */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Tuition Fee Status</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <CreditCard className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold text-emerald-700">Cleared</div>
          <div className="text-xs text-slate-500 font-medium">Term 3 Paid in Full</div>
        </div>

        {/* Hifz Progress */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Madrasah Hifz</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-arabic font-bold text-sm">
              قرآن
            </div>
          </div>
          <div className="text-2xl font-extrabold text-emerald-800">14 Surahs</div>
          <div className="text-xs text-slate-500 font-medium">Level: Mumtaz (Excellent)</div>
        </div>
      </div>

      {/* 3. Madrasah Hifz Tracker */}
      {currentStudent.hifzProgress && (
        <HifzTracker hifzData={currentStudent.hifzProgress} />
      )}

      {/* 4. Subject Scores Table */}
      <div id="report-card" className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 className="font-bold text-base text-[#1B2A4A]">Terminal Subject Scores (2025/2026 Term 3)</h3>
            <p className="text-xs text-slate-500">Continuous Assessment (30 marks) + Examination (70 marks) = Total (100%)</p>
          </div>
          <button
            onClick={() => setIsReportCardOpen(true)}
            className="px-3 py-1.5 bg-[#0F8B9E] text-white text-xs font-bold rounded-lg transition inline-flex items-center space-x-1"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Report Card</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#1B2A4A] text-white font-semibold uppercase text-[11px]">
                <th className="p-3 border-b border-slate-700">Subject Name</th>
                <th className="p-3 border-b border-slate-700 text-center">1st C.A. (15)</th>
                <th className="p-3 border-b border-slate-700 text-center">2nd C.A. (15)</th>
                <th className="p-3 border-b border-slate-700 text-center">Exam (70)</th>
                <th className="p-3 border-b border-slate-700 text-center">Total (100%)</th>
                <th className="p-3 border-b border-slate-700 text-center">Grade</th>
                <th className="p-3 border-b border-slate-700">Teacher Remarks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockSubjectScores.filter(s => s.studentId === currentStudent.id).map((score, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-[#1B2A4A]">{score.subjectName}</td>
                  <td className="p-3 text-center">{score.ca1}</td>
                  <td className="p-3 text-center">{score.ca2}</td>
                  <td className="p-3 text-center">{score.exam}</td>
                  <td className="p-3 text-center font-extrabold text-[#1B2A4A] bg-sky-50/60">{score.total}</td>
                  <td className="p-3 text-center font-bold">
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-[#1B2A4A]">{score.grade}</span>
                  </td>
                  <td className="p-3 text-slate-600">{score.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Printable Report Card Modal */}
      <ReportCardModal
        isOpen={isReportCardOpen}
        onClose={() => setIsReportCardOpen(false)}
        student={currentStudent}
        scores={mockSubjectScores}
      />
    </div>
  );
}
