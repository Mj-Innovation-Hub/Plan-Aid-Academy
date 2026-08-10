'use client';

import React from 'react';
import Link from 'next/link';
import { SchoolSectionConfig } from '@/lib/types';
import { BookOpen, Cpu, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';

interface SectionCardProps {
  section: SchoolSectionConfig;
}

export const SectionCard: React.FC<SectionCardProps> = ({ section }) => {
  const getIcon = () => {
    switch (section.id) {
      case 'primary':
        return <BookOpen className="w-5 h-5 text-[#0F8B9E]" />;
      case 'secondary':
        return <Cpu className="w-5 h-5 text-indigo-700" />;
      case 'madrasah':
        return <span className="font-arabic font-bold text-base text-emerald-700">قرآن</span>;
      default:
        return <GraduationCap className="w-5 h-5 text-[#0F8B9E]" />;
    }
  };

  return (
    <div className="rounded-xl bg-white border border-slate-200 p-6 shadow-xs hover:border-slate-300 hover:shadow-md transition flex flex-col justify-between">
      <div className="space-y-4">
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
            {getIcon()}
          </div>
          {section.arabicTitle && (
            <span className="font-arabic text-sm font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
              {section.arabicTitle}
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <div>
          <h3 className="text-lg font-bold text-[#1B2A4A]">
            {section.title}
          </h3>
          <p className="text-xs font-medium text-[#0F8B9E] mt-0.5">
            {section.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {section.description}
        </p>

        {/* Key Focus Highlights */}
        <div className="pt-2 space-y-1.5">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Key Focus Areas</div>
          <div className="grid grid-cols-2 gap-1.5">
            {section.curriculum.slice(0, 4).map((item, i) => (
              <div key={i} className="flex items-center space-x-1.5 text-xs text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0F8B9E] shrink-0" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Link */}
      <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-500 font-medium">
          {section.studentCount} Students
        </span>
        <Link
          href={`/academics/${section.id}`}
          className="inline-flex items-center space-x-1 text-xs font-bold text-[#1B2A4A] hover:text-[#0F8B9E] transition"
        >
          <span>Explore Program</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
