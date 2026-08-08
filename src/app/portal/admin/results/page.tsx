'use client';

import React, { useState } from 'react';
import { GradebookGrid } from '@/components/ui/GradebookGrid';
import { ReportCardModal } from '@/components/ui/ReportCardModal';
import { GradeAnalyticsCharts } from '@/components/analytics/GradeAnalyticsCharts';
import { mockStudents, mockSubjectScores } from '@/lib/mockData';
import { Student } from '@/lib/types';
import { Calculator, BarChart2, Award, Printer } from 'lucide-react';

export default function GradebookResultsPage() {
  const [selectedStudentForReportCard, setSelectedStudentForReportCard] = useState<Student | null>(null);
  const [isReportCardOpen, setIsReportCardOpen] = useState(false);

  const handleOpenReportCard = (student: Student) => {
    setSelectedStudentForReportCard(student);
    setIsReportCardOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-royal-950 via-royal-900 to-royal-950 text-white rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold bg-primary-500 text-white uppercase tracking-wider">
            ACADEMIC RESULTS & GRADEBOOK MODULE
          </span>
          <h1 className="text-2xl font-black text-white mt-1">Score sheet and Analytics</h1>
          <p className="text-xs text-slate-300">Inline score editing, auto totals, grades, class rank, and printable Report Cards</p>
        </div>
      </div>

      {/* Statistical Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <div className="text-xs font-bold text-slate-400 uppercase">Class Mean Average</div>
          <div className="text-3xl font-black text-royal-950">84.2%</div>
          <div className="text-[11px] font-semibold text-emerald-600">JSS 3 Gold • Term 3 Final</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <div className="text-xs font-bold text-slate-400 uppercase">Highest Class Score</div>
          <div className="text-3xl font-black text-primary-500">97.0</div>
          <div className="text-[11px] font-semibold text-slate-600">Zayd Danjuma (Robotics)</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <div className="text-xs font-bold text-slate-400 uppercase">Pass Rate Percentage</div>
          <div className="text-3xl font-black text-emerald-700">100%</div>
          <div className="text-[11px] font-semibold text-emerald-600">28 / 28 Students Above 50%</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <div className="text-xs font-bold text-slate-400 uppercase">Standard Deviation</div>
          <div className="text-3xl font-black text-amber-600">5.82</div>
          <div className="text-[11px] font-semibold text-slate-500">Consistent performance distribution</div>
        </div>
      </div>

      {/* Interactive Gradebook Grid Component */}
      <GradebookGrid
        students={mockStudents}
        initialScores={mockSubjectScores}
        onOpenReportCard={handleOpenReportCard}
      />

      {/* Statistical Recharts Visualization */}
      <div className="space-y-4 pt-4">
        <h3 className="font-bold text-lg text-royal-950 flex items-center space-x-2">
          <BarChart2 className="w-5 h-5 text-primary-500" />
          <span>Grade Analytics & Subject Performance</span>
        </h3>
        <GradeAnalyticsCharts />
      </div>

      {/* Printable Report Card Modal */}
      <ReportCardModal
        isOpen={isReportCardOpen}
        onClose={() => setIsReportCardOpen(false)}
        student={selectedStudentForReportCard}
        scores={mockSubjectScores}
      />
    </div>
  );
}
