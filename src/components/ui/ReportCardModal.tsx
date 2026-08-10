'use client';

import React from 'react';
import { Student, SubjectScore } from '@/lib/types';
import { X, Printer, GraduationCap } from 'lucide-react';

interface ReportCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: Student | null;
  scores: SubjectScore[];
  term?: string;
  session?: string;
}

export const ReportCardModal: React.FC<ReportCardModalProps> = ({
  isOpen,
  onClose,
  student,
  scores,
  term = 'Term 3 (Final / Promotion)',
  session = '2025/2026 Academic Session',
}) => {
  if (!isOpen || !student) return null;

  const studentScores = scores.filter((s) => s.studentId === student.id);
  const totalScore = studentScores.reduce((acc, curr) => acc + curr.total, 0);
  const averageScore = studentScores.length > 0 ? (totalScore / studentScores.length).toFixed(1) : '0.0';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      {/* Modal Card */}
      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
        {/* Top Control Bar (Hidden when printing) */}
        <div className="flex items-center justify-between no-print border-b border-slate-200 pb-4">
          <div>
            <h3 className="font-bold text-base text-[#1B2A4A]">Official Terminal Report Card</h3>
            <p className="text-xs text-slate-500">Plan Aid Academy Standard Student Assessment Sheet</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-[#0F8B9E] hover:bg-[#0d7788] text-white rounded-lg font-bold text-xs flex items-center space-x-1.5 transition"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Sheet Container */}
        <div id="printable-report-card" className="bg-white p-6 rounded-lg border border-slate-300 space-y-5 text-slate-900">
          
          {/* Header Banner */}
          <div className="border-b-2 border-[#1B2A4A] pb-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 rounded-xl bg-[#1B2A4A] text-white flex items-center justify-center font-bold">
                <GraduationCap className="w-8 h-8 text-[#0F8B9E]" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-black text-[#1B2A4A] tracking-tight">PLAN AID ACADEMY</h1>
                <p className="text-xs font-semibold text-[#0F8B9E] uppercase">
                  Kano • Kaduna • Abuja Campuses • NIGERIA
                </p>
                <p className="text-[10px] text-slate-500 italic">
                  Motto: "Nurturing Excellence in Academics, Character & Faith"
                </p>
              </div>
            </div>

            <div className="text-right space-y-1">
              <span className="inline-block px-3 py-1 bg-[#1B2A4A] text-white font-bold text-xs rounded">
                STUDENT REPORT SHEET
              </span>
              <div className="text-xs font-bold text-slate-700">{term}</div>
              <div className="text-xs text-slate-500">{session}</div>
            </div>
          </div>

          {/* Student Demographics Table */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-3.5 rounded-lg border border-slate-200 text-xs">
            <div>
              <span className="text-slate-500 font-medium block uppercase text-[10px]">Student Name:</span>
              <span className="font-bold text-[#1B2A4A] text-sm">{student.fullName}</span>
            </div>
            <div>
              <span className="text-slate-500 font-medium block uppercase text-[10px]">Admission No:</span>
              <span className="font-mono font-bold text-slate-800">{student.admissionNo}</span>
            </div>
            <div>
              <span className="text-slate-500 font-medium block uppercase text-[10px]">Class & Arm:</span>
              <span className="font-bold text-slate-800">{student.class} ({student.arm || 'Gold'})</span>
            </div>
            <div>
              <span className="text-slate-500 font-medium block uppercase text-[10px]">School Arm:</span>
              <span className="font-bold text-[#0F8B9E] uppercase">{student.section}</span>
            </div>
          </div>

          {/* Subject Scores Table (Nigerian Standard Scheme: 15 + 15 + 70 = 100) */}
          <div className="space-y-2">
            <h4 className="font-bold text-xs text-[#1B2A4A] uppercase tracking-wider">Academic Cognitive Performance</h4>
            <table className="w-full text-left text-xs border-collapse border border-slate-300">
              <thead>
                <tr className="bg-[#1B2A4A] text-white font-bold text-[11px]">
                  <th className="p-2 border border-slate-700">Subject Title</th>
                  <th className="p-2 border border-slate-700 text-center">1st C.A. (15)</th>
                  <th className="p-2 border border-slate-700 text-center">2nd C.A. (15)</th>
                  <th className="p-2 border border-slate-700 text-center">Exam (70)</th>
                  <th className="p-2 border border-slate-700 text-center">Total (100%)</th>
                  <th className="p-2 border border-slate-700 text-center">Grade</th>
                  <th className="p-2 border border-slate-700">Teacher Remarks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-300">
                {studentScores.map((score, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="p-2 font-bold text-[#1B2A4A] border border-slate-300">{score.subjectName}</td>
                    <td className="p-2 text-center border border-slate-300">{score.ca1}</td>
                    <td className="p-2 text-center border border-slate-300">{score.ca2}</td>
                    <td className="p-2 text-center border border-slate-300">{score.exam}</td>
                    <td className="p-2 text-center font-extrabold text-[#1B2A4A] border border-slate-300">{score.total}</td>
                    <td className="p-2 text-center font-bold border border-slate-300">
                      <span className="px-2 py-0.5 rounded bg-slate-100">{score.grade}</span>
                    </td>
                    <td className="p-2 text-slate-600 border border-slate-300">{score.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Performance Metrics Bar */}
          <div className="grid grid-cols-3 gap-4 bg-sky-50/60 p-3.5 rounded-lg border border-sky-200 text-center">
            <div>
              <div className="text-[10px] font-bold text-slate-500 uppercase">Grand Total Marks</div>
              <div className="text-lg font-bold text-[#1B2A4A]">{totalScore}</div>
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-500 uppercase">Term Average Percentage</div>
              <div className="text-lg font-bold text-[#0F8B9E]">{averageScore}%</div>
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-500 uppercase">Class Position / Rank</div>
              <div className="text-lg font-bold text-emerald-700">1st out of 28</div>
            </div>
          </div>

          {/* Nigerian Ministry Grading Scale Key */}
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-[10px] space-y-1">
            <span className="font-bold text-[#1B2A4A] uppercase block">Nigerian Ministry Standard Grading Key:</span>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-slate-600">
              <div><strong>75 - 100%:</strong> A1 (Distinction)</div>
              <div><strong>70 - 74%:</strong> B2 (Very Good)</div>
              <div><strong>65 - 69%:</strong> B3 (Good)</div>
              <div><strong>50 - 64%:</strong> C4 - C6 (Credit)</div>
              <div><strong>40 - 49%:</strong> D7 - E8 (Pass)</div>
              <div><strong>0 - 39%:</strong> F9 (Fail)</div>
            </div>
          </div>

          {/* Madrasah Quran & Hifz Progress */}
          {student.hifzProgress && (
            <div className="bg-emerald-50 p-3.5 rounded-lg border border-emerald-200 space-y-1.5 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[#1B2A4A] uppercase flex items-center space-x-1.5">
                  <span className="font-arabic text-sm">قرآن</span>
                  <span>Madrasah Tahfiz & Tajweed Performance</span>
                </span>
                <span className="text-xs font-bold text-emerald-800">Tajweed Level: {student.hifzProgress.tajweedLevel}</span>
              </div>
              <div className="text-emerald-900">
                Surahs Memorized: <strong>{student.hifzProgress.surahsMemorized} Surahs</strong> • Current Surah: <strong>{student.hifzProgress.currentSurah}</strong>
              </div>
              <p className="italic text-emerald-800 text-[11px]">
                Ustadh's Remark: "{student.hifzProgress.hifzTeacherRemark}"
              </p>
            </div>
          )}

          {/* Teacher & Principal Remarks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
              <span className="font-bold text-[#1B2A4A] block">Form Teacher's Remark:</span>
              <p className="text-slate-600 italic">
                "{student.fullName} is an exceptionally hardworking student who demonstrates leadership in both STEM projects and classroom activities."
              </p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
              <span className="font-bold text-[#1B2A4A] block">Principal's Decision:</span>
              <p className="text-slate-600 italic">
                "Promoted to the next class with distinction. Congratulations!"
              </p>
            </div>
          </div>

          {/* Footer Signatures */}
          <div className="pt-4 border-t border-slate-300 flex items-center justify-between text-xs">
            <div>
              <span className="text-slate-500 block text-[10px]">Next Term Resumption Date:</span>
              <span className="font-bold text-[#1B2A4A]">Monday 14th September 2026</span>
            </div>
            <div className="text-center">
              <div className="w-28 border-b border-slate-700 mb-1" />
              <span className="text-[10px] font-semibold text-slate-600">Form Teacher Sign</span>
            </div>
            <div className="text-center">
              <div className="w-28 border-b border-slate-700 mb-1" />
              <span className="text-[10px] font-bold text-[#1B2A4A]">Principal Stamp & Sign</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
