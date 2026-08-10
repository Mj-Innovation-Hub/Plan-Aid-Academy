'use client';

import React from 'react';
import { BookOpen, Calendar, UserCheck } from 'lucide-react';

interface HifzTrackerProps {
  hifzData: {
    surahsMemorized: number;
    currentSurah: string;
    tajweedLevel: 'Basic' | 'Intermediate' | 'Advanced' | 'Mumtaz';
    lastTestedDate: string;
    hifzTeacherRemark: string;
  };
}

export const HifzTracker: React.FC<HifzTrackerProps> = ({ hifzData }) => {
  const totalSurahs = 114;
  const percentage = Math.round((hifzData.surahsMemorized / totalSurahs) * 100);

  return (
    <div className="bg-[#1B2A4A] text-white rounded-xl p-5 border border-slate-700 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-700 pb-3">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-arabic font-bold text-lg">
            قرآن
          </div>
          <div>
            <h3 className="font-bold text-sm text-white">Madrasah Qur'an Hifz & Tajweed Tracker</h3>
            <p className="text-[11px] text-slate-300">Qur'anic Memorization Record for Student & Parent View</p>
          </div>
        </div>

        <span className="px-2.5 py-1 rounded bg-emerald-800 text-white text-xs font-bold border border-emerald-600">
          Tajweed Grade: {hifzData.tajweedLevel}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs font-medium">
          <span className="text-slate-300">Total Surahs Memorized</span>
          <span className="font-bold text-emerald-400">{hifzData.surahsMemorized} / {totalSurahs} Surahs ({percentage}%)</span>
        </div>
        <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
          <div 
            className="h-full bg-emerald-500 rounded-full transition-all duration-700"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
        <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700 space-y-1">
          <div className="text-[10px] font-semibold text-slate-400 uppercase">Current Surah Under Revision</div>
          <div className="font-bold text-emerald-300 flex items-center space-x-1.5">
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span>{hifzData.currentSurah}</span>
          </div>
        </div>

        <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700 space-y-1">
          <div className="text-[10px] font-semibold text-slate-400 uppercase">Last Examination Date</div>
          <div className="font-bold text-slate-200 flex items-center space-x-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#0F8B9E]" />
            <span>{hifzData.lastTestedDate}</span>
          </div>
        </div>
      </div>

      {/* Hifz Ustadh Remarks */}
      <div className="bg-slate-800/80 p-3.5 rounded-lg border border-slate-700 space-y-1 text-xs">
        <div className="flex items-center space-x-1.5 font-bold text-emerald-400">
          <UserCheck className="w-3.5 h-3.5" />
          <span>Hifz Ustadh's Remark:</span>
        </div>
        <p className="text-slate-300 italic text-[11px] leading-relaxed">
          "{hifzData.hifzTeacherRemark}"
        </p>
      </div>
    </div>
  );
};
