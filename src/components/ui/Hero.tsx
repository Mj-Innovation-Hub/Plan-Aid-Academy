'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Award, 
  BookOpen,
  ShieldCheck
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="bg-[#F8FAFC] pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-md bg-white border border-slate-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0F8B9E]" />
              <span className="text-xs font-semibold tracking-wide text-[#1B2A4A] uppercase">
                Admissions Open for 2026/2027 Academic Session
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B2A4A] tracking-tight leading-[1.15]">
              Nurturing Excellence in <br className="hidden sm:inline" />
              <span className="text-[#0F8B9E]">
                Academics, Character & Faith
              </span>
            </h1>

            {/* Sub-headline / Copy */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              Welcome to <strong>Plan Aid Academy</strong> — a distinguished educational institution integrating hands-on <strong>STEM Robotics & Computer Programming</strong> with rigorous <strong>WAEC/NECO academic mastery</strong> and a revered <strong>Madrasah Tahfiz & Islamic heritage curriculum</strong>.
            </p>

            {/* Key Value Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center space-x-2.5 text-xs sm:text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#0F8B9E] shrink-0" />
                <span>State-of-the-Art STEM & Robotics Lab</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs sm:text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Accredited Hifz & Tajweed Program</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs sm:text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#1B2A4A] shrink-0" />
                <span>Certified & Experienced Educators</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs sm:text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#0F8B9E] shrink-0" />
                <span>100% WAEC/NECO Distinction Focus</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/admissions"
                className="w-full sm:w-auto px-6 py-3 text-sm font-bold text-white bg-[#0F8B9E] hover:bg-[#0d7788] rounded-lg shadow-xs transition flex items-center justify-center space-x-2"
              >
                <span>Apply Online</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact#tour"
                className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-[#1B2A4A] bg-white border border-slate-300 hover:bg-slate-50 rounded-lg transition flex items-center justify-center space-x-2"
              >
                <span>Book a Campus Tour</span>
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <div className="text-xl sm:text-3xl font-bold text-[#1B2A4A]">750+</div>
                <div className="text-xs font-medium text-slate-500">Enrolled Students</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-bold text-[#0F8B9E]">100%</div>
                <div className="text-xs font-medium text-slate-500">WAEC Pass Rate</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-bold text-emerald-700">45+</div>
                <div className="text-xs font-medium text-slate-500">Hifz Graduates</div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Visual Image Card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Card */}
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-[#1B2A4A] text-white">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                  alt="Plan Aid Academy STEM Robotics Lab"
                  className="w-full h-64 sm:h-80 object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-[#1B2A4A]/30 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1.5">
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded bg-[#0F8B9E] text-white text-xs font-semibold">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>STEM Innovation Hub</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">Interactive Robotics & Tech Lab</h3>
                  <p className="text-xs text-slate-300 leading-normal">
                    Students program micro-controllers, learn Python, and build practical engineering solutions.
                  </p>
                </div>
              </div>

              {/* Floating Overlay Badge 1: Hifz */}
              <div className="absolute -bottom-5 -left-5 bg-white p-3.5 rounded-xl shadow-lg border border-slate-200 items-center space-x-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-arabic font-bold text-lg shrink-0">
                  قرآن
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-800 uppercase">Madrasah Tahfiz</div>
                  <div className="text-xs font-semibold text-[#1B2A4A]">Accredited Tajweed</div>
                </div>
              </div>

              {/* Floating Overlay Badge 2: Award */}
              <div className="absolute -top-5 -right-5 bg-white p-3 rounded-xl shadow-lg border border-slate-200 items-center space-x-3 hidden sm:flex">
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#0F8B9E] flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1B2A4A]">National Winner</div>
                  <div className="text-[11px] text-slate-500 font-medium">Robotics League 2026</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
