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
        return <BookOpen className="w-6 h-6 text-primary-500" />;
      case 'secondary':
        return <Cpu className="w-6 h-6 text-royal-600" />;
      case 'madrasah':
        return <span className="font-arabic font-bold text-lg text-emerald-700">قرآن</span>;
      default:
        return <GraduationCap className="w-6 h-6 text-primary-500" />;
    }
  };

  const getBorderColor = () => {
    switch (section.id) {
      case 'primary':
        return 'hover:border-primary-400';
      case 'secondary':
        return 'hover:border-royal-500';
      case 'madrasah':
        return 'hover:border-emerald-600';
    }
  };

  return (
    <div className={`group rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${getBorderColor()}`}>
      <div className="space-y-4">
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
            {getIcon()}
          </div>
          {section.arabicTitle && (
            <span className="font-arabic text-lg font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              {section.arabicTitle}
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <div>
          <h3 className="text-xl font-bold text-royal-950 group-hover:text-primary-500 transition-colors">
            {section.title}
          </h3>
          <p className="text-xs font-semibold text-royal-600 mt-1">
            {section.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed">
          {section.description}
        </p>

        {/* Curriculum Highlights */}
        <div className="pt-2 space-y-1.5">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Focus Areas</div>
          <div className="grid grid-cols-2 gap-1.5">
            {section.curriculum.slice(0, 4).map((item, i) => (
              <div key={i} className="flex items-center space-x-1.5 text-xs font-medium text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary-500 shrink-0" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Link */}
      <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-500 font-medium">
          {section.studentCount} Students Enrolled
        </span>
        <Link
          href={`/academics/${section.id}`}
          className="inline-flex items-center space-x-1 text-xs font-bold text-royal-700 group-hover:text-primary-500 transition"
        >
          <span>Explore Arm</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
