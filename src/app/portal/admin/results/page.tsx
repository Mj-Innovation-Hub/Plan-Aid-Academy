'use client';

import React, { useState } from 'react';
import { GradebookGrid } from '@/components/ui/GradebookGrid';
import { ReportCardModal } from '@/components/ui/ReportCardModal';
import { GradeAnalyticsCharts } from '@/components/analytics/GradeAnalyticsCharts';
import { mockStudents, mockSubjectScores } from '@/lib/mockData';
import { Student } from '@/lib/types';
import { BarChart2, HelpCircle } from 'lucide-react';

export default function GradebookResultsPage() {
  const [selectedStudentForReportCard, setSelectedStudentForReportCard] = useState<Student | null>(null);
  const [isReportCardOpen, setIsReportCardOpen] = useState(false);

  const handleOpenReportCard = (student: Student) => {
    setSelectedStudentForReportCard(student);
    setIsReportCardOpen(true);
  };

  return (
    <div className="space-y-6 font-sans">
      {/* Top Banner Header */}
      <div className="bg-[#1B2A4A] text-white rounded-xl p-6 shadow-xs border border-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#0F8B9E] text-white uppercase tracking-wider">
            Academic Score Sheet & Statistical Module
          </span>
          <h1 className="text-xl sm:text-2xl font-bold text-white">Excel & SPSS Academic Result Sheet</h1>
          <p className="text-xs text-slate-300">Continuous Assessment (15+15) + Examination (70) = Total Score (100%) Matrix</p>
        </div>
      </div>

      {/* Guided Quick Help Banner */}
      <div className="bg-sky-50 p-4 rounded-xl border border-sky-200 text-xs text-[#1B2A4A] space-y-1">
        <div className="flex items-center space-x-1.5 font-bold text-[#0F8B9E]">
          <HelpCircle className="w-4 h-4" />
          <span>Excel & SPSS Score Sheet Guide:</span>
        </div>
        <p className="text-slate-700 leading-relaxed">
          Use the <strong>Excel Data View</strong> tab to type score entries inline (1st CA, 2nd CA, Exam). Switch to <strong>SPSS Variable View</strong> to inspect metadata definitions, or view <strong>SPSS Output & Descriptives</strong> for automated Mean (x̄), Standard Deviation (SD), and Pass Rate statistical metrics.
        </p>
      </div>

      {/* Interactive SPSS & Excel Gradebook Component */}
      <GradebookGrid
        students={mockStudents}
        initialScores={mockSubjectScores}
        onOpenReportCard={handleOpenReportCard}
      />

      {/* Statistical Recharts Visualization */}
      <div className="space-y-4 pt-4 border-t border-slate-200">
        <h3 className="font-bold text-base text-[#1B2A4A] flex items-center space-x-2">
          <BarChart2 className="w-4 h-4 text-[#0F8B9E]" />
          <span>Grade Analytics & Statistical Distribution</span>
        </h3>
        <GradeAnalyticsCharts />
      </div>

      {/* Printable Terminal Report Card Modal */}
      <ReportCardModal
        isOpen={isReportCardOpen}
        onClose={() => setIsReportCardOpen(false)}
        student={selectedStudentForReportCard}
        scores={mockSubjectScores}
      />
    </div>
  );
}
