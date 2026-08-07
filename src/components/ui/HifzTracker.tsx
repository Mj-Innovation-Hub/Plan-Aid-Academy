'use client';

import React from 'react';
import { BookOpen, CheckCircle2, Award, Sparkles, Calendar, UserCheck } from 'lucide-react';

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

  const getTajweedBadge = () => {
    switch (hifzData.tajweedLevel) {
      case 'Mumtaz':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'Advanced':
        return 'bg-emerald-100 text-emerald-900 border-emerald-300';
      case 'Intermediate':
        return 'bg-sky-100 text-sky-900 border-sky-300';
      default:
        return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  };

  return (
    <div className="bg-gradient-to-br from-emerald-900 via-royal-950 to-slate-900 text-white rounded-2xl p-6 shadow-xl border border-emerald-500/20 relative overflow-hidden">
      {/* Arabic Calligraphy Background Deco */}
      <div className="absolute -right-8 -bottom-8 opacity-10 font-arabic text-9xl text-emerald-300 pointer-events-none select-none">
        القرآن
      </div>

      <div className="relative z-10 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center font-arabic font-bold text-xl text-emerald-300">
              قرآن
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">Madrasah Hifz & Tajweed Tracker</h3>
              <p className="text-xs text-emerald-300/80">Quran Memorization Progress Monitor</p>
            </div>
          </div>

          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getTajweedBadge()}`}>
            Tajweed: {hifzData.tajweedLevel}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-medium">
            <span className="text-slate-300">Memorization Progress</span>
            <span className="font-bold text-emerald-300">{hifzData.surahsMemorized} / {totalSurahs} Surahs ({percentage}%)</span>
          </div>
          <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-sky-400 rounded-full transition-all duration-1000 shadow-sm"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="bg-white/5 rounded-xl p-3.5 border border-white/10 space-y-1">
            <div className="text-[11px] text-slate-400 font-medium">Currently Memorizing</div>
            <div className="text-sm font-bold text-emerald-300 flex items-center space-x-1.5">
              <BookOpen className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{hifzData.currentSurah}</span>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-3.5 border border-white/10 space-y-1">
            <div className="text-[11px] text-slate-400 font-medium">Last Tested Date</div>
            <div className="text-sm font-bold text-slate-200 flex items-center space-x-1.5">
              <Calendar className="w-4 h-4 text-sky-400 shrink-0" />
              <span>{hifzData.lastTestedDate}</span>
            </div>
          </div>
        </div>

        {/* Hifz Ustadh Remarks */}
        <div className="bg-emerald-950/60 rounded-xl p-4 border border-emerald-500/30 space-y-1">
          <div className="flex items-center space-x-1.5 text-xs font-bold text-emerald-300">
            <UserCheck className="w-4 h-4 text-emerald-400" />
            <span>Hifz Ustadh's Remark:</span>
          </div>
          <p className="text-xs text-slate-300 italic leading-relaxed">
            "{hifzData.hifzTeacherRemark}"
          </p>
        </div>
      </div>
    </div>
  );
};
