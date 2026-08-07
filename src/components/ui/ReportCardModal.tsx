'use client';

import React from 'react';
import { Student, SubjectScore, ReportCard } from '@/lib/types';
import { X, Printer, GraduationCap, CheckCircle2, Award, Download } from 'lucide-react';

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
  term = 'Term 3',
  session = '2025/2026',
}) => {
  if (!isOpen || !student) return null;

  const studentScores = scores.filter((s) => s.studentId === student.id);
  const totalScore = studentScores.reduce((acc, curr) => acc + curr.total, 0);
  const averageScore = studentScores.length > 0 ? (totalScore / studentScores.length).toFixed(1) : '0.0';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      {/* Modal Card */}
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
        {/* Top Control Bar (Hidden when printing) */}
        <div className="flex items-center justify-between no-print border-b border-slate-200 pb-4">
          <div>
            <h3 className="font-bold text-lg text-royal-950">Terminal Report Card Generator</h3>
            <p className="text-xs text-slate-500">Official Plan Aid Academy Student Assessment Sheet</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-royal-700 hover:bg-royal-800 text-white rounded-xl font-bold text-xs flex items-center space-x-1.5 shadow transition"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Sheet Container */}
        <div id="printable-report-card" className="bg-white p-6 rounded-xl border border-slate-300 space-y-6 text-slate-900">
          
          {/* Header Banner */}
          <div className="border-b-2 border-royal-900 pb-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-2xl bg-royal-950 text-primary-300 flex items-center justify-center font-bold shadow-md">
                <GraduationCap className="w-9 h-9" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-royal-950 tracking-tight">PLAN AID ACADEMY</h1>
                <p className="text-xs font-semibold text-royal-600 uppercase tracking-wider">
                  Kano • Kaduna • Abuja Campuses • NIGERIA
                </p>
                <p className="text-[11px] text-slate-500 italic">
                  Motton: "Nurturing Excellence in Academics, Character & Faith"
                </p>
              </div>
            </div>

            <div className="text-right space-y-1">
              <span className="inline-block px-3 py-1 bg-royal-950 text-white font-bold text-xs rounded-md">
                OFFICIAL REPORT SHEET
              </span>
              <div className="text-xs font-bold text-slate-700">{term} • {session}</div>
            </div>
          </div>

          {/* Student Demographics Table */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
            <div>
              <span className="text-slate-400 font-medium block uppercase text-[10px]">Student Name:</span>
              <span className="font-extrabold text-royal-950 text-sm">{student.fullName}</span>
            </div>
            <div>
              <span className="text-slate-400 font-medium block uppercase text-[10px]">Admission No:</span>
              <span className="font-mono font-bold text-slate-800">{student.admissionNo}</span>
            </div>
            <div>
              <span className="text-slate-400 font-medium block uppercase text-[10px]">Class & Arm:</span>
              <span className="font-bold text-slate-800">{student.class} ({student.arm || 'Gold'})</span>
            </div>
            <div>
              <span className="text-slate-400 font-medium block uppercase text-[10px]">School Section:</span>
              <span className="font-bold text-primary-700 uppercase">{student.section}</span>
            </div>
          </div>

          {/* Subject Scores Table */}
          <div className="space-y-2">
            <h4 className="font-bold text-sm text-royal-950 uppercase tracking-wider">Cognitive Performance Summary</h4>
            <table className="w-full text-left text-xs border-collapse border border-slate-300">
              <thead>
                <tr className="bg-royal-900 text-white font-bold">
                  <th className="p-2 border border-royal-800">Subject Title</th>
                  <th className="p-2 border border-royal-800 text-center">CA 1 (15)</th>
                  <th className="p-2 border border-royal-800 text-center">CA 2 (15)</th>
                  <th className="p-2 border border-royal-800 text-center">Exam (70)</th>
                  <th className="p-2 border border-royal-800 text-center">Total (100)</th>
                  <th className="p-2 border border-royal-800 text-center">Grade</th>
                  <th className="p-2 border border-royal-800">Teacher Remarks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-300">
                {studentScores.map((score, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="p-2 font-bold text-slate-800 border border-slate-300">{score.subjectName}</td>
                    <td className="p-2 text-center border border-slate-300">{score.ca1}</td>
                    <td className="p-2 text-center border border-slate-300">{score.ca2}</td>
                    <td className="p-2 text-center border border-slate-300">{score.exam}</td>
                    <td className="p-2 text-center font-extrabold text-royal-900 border border-slate-300">{score.total}</td>
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
          <div className="grid grid-cols-3 gap-4 bg-sky-50 p-4 rounded-xl border border-sky-200 text-center">
            <div>
              <div className="text-[11px] font-bold text-slate-500 uppercase">Grand Total</div>
              <div className="text-xl font-black text-royal-950">{totalScore}</div>
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-500 uppercase">Term Average</div>
              <div className="text-xl font-black text-primary-600">{averageScore}%</div>
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-500 uppercase">Class Position</div>
              <div className="text-xl font-black text-emerald-700">1st / 28</div>
            </div>
          </div>

          {/* Madrasah Quran & Hifz Progress (If applicable) */}
          {student.hifzProgress && (
            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-emerald-950 uppercase flex items-center space-x-1.5">
                  <span className="font-arabic text-sm">قرآن</span>
                  <span>Madrasah Tahfiz & Tajweed Assessment</span>
                </span>
                <span className="text-xs font-bold text-emerald-800">Level: {student.hifzProgress.tajweedLevel}</span>
              </div>
              <div className="text-xs text-emerald-900">
                Surahs Memorized: <strong>{student.hifzProgress.surahsMemorized} Surahs</strong> • Current: <strong>{student.hifzProgress.currentSurah}</strong>
              </div>
              <p className="text-xs italic text-emerald-800">
                Remark: "{student.hifzProgress.hifzTeacherRemark}"
              </p>
            </div>
          )}

          {/* Teacher & Principal Remarks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-royal-950 block">Class Teacher's Remark:</span>
              <p className="text-slate-600 italic">
                "{student.fullName} has demonstrated outstanding diligence and analytical thinking in STEM projects and daily assignments."
              </p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <span className="font-bold text-royal-950 block">Principal's Final Remark:</span>
              <p className="text-slate-600 italic">
                "Promoted to the next academic level with Distinction. Congratulations!"
              </p>
            </div>
          </div>

          {/* Footer Signatures */}
          <div className="pt-6 border-t border-slate-300 flex items-center justify-between text-xs">
            <div>
              <span className="text-slate-400 block">Next Term Resumption:</span>
              <span className="font-bold text-slate-800">Monday 14th September 2026</span>
            </div>
            <div className="text-center">
              <div className="w-32 border-b border-slate-800 mb-1" />
              <span className="text-[11px] font-bold text-slate-600">Form Teacher Signature</span>
            </div>
            <div className="text-center">
              <div className="w-32 border-b border-slate-800 mb-1" />
              <span className="text-[11px] font-bold text-royal-950">Principal's Stamp & Signature</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
