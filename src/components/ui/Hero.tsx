'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  BookOpen, 
  Award, 
  Users,
  ShieldCheck
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-100/70 via-white to-sky-50/40 pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Dynamic Aesthetic Background Elements */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-primary-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-24 w-80 h-80 bg-royal-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-primary-200 shadow-sm">
              <Sparkles className="w-4 h-4 text-primary-500 animate-pulse" />
              <span className="text-xs font-bold tracking-wide text-royal-950 uppercase">
                Admissions Open for 2026/2027 Session
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-royal-950 tracking-tight leading-[1.12]">
              Nurturing Excellence in <br className="hidden sm:inline" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 via-royal-600 to-royal-900">
                Academics, Character & Faith
              </span>
            </h1>

            {/* Sub-headline / Copy */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              Welcome to <strong>Plan Aid Academy</strong> — a premier multi-arm educational institution combining hands-on <strong>STEM Robotics & Coding</strong> with rigorous <strong>WAEC/NECO academic mastery</strong> and a revered <strong>Madrasah Tahfiz & Islamic heritage curriculum</strong>.
            </p>

            {/* Key Value Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center space-x-2 text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                <span>State-of-the-Art STEM & Robotics Lab</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Accredited Hifz & Tajweed Program</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-royal-600 shrink-0" />
                <span>Qualified & Passionate Educators</span>
              </div>
              <div className="flex items-center space-x-2 text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                <span>100% WAEC/NECO Distinction Target</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/admissions"
                className="px-7 py-3.5 text-base font-extrabold text-white bg-[#0F8B9E] hover:bg-[#0d7788] rounded-2xl shadow-lg shadow-teal-900/20 hover:scale-[1.03] hover:shadow-xl transition-all duration-300 flex items-center space-x-2 cursor-pointer active:scale-95 z-20"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact#tour"
                className="px-7 py-3.5 text-base font-bold text-royal-950 bg-white border border-primary-200 rounded-2xl shadow-sm hover:bg-primary-50 hover:border-primary-300 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Book a Campus Tour</span>
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-royal-950">750+</div>
                <div className="text-xs font-medium text-slate-500">Enrolled Students</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-primary-500">100%</div>
                <div className="text-xs font-medium text-slate-500">WAEC Pass Rate</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700">45+</div>
                <div className="text-xs font-medium text-slate-500">Hifz Graduates</div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Feature Showcase Card / Image Stack */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-royal-950 text-white">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                  alt="Plan Aid Academy STEM Robotics Lab"
                  className="w-full h-80 object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-primary-500 text-white text-xs font-bold">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>STEM Innovation Hub</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Interactive Robotics & AI Lab</h3>
                  <p className="text-xs text-slate-300 leading-normal">
                    Students design, build, and program micro-controllers, fostering early problem-solving skills.
                  </p>
                </div>
              </div>

              {/* Floating Overlay Badge 1: Quran Hifz */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-emerald-100 flex items-center space-x-3 hidden sm:flex">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-arabic font-bold text-xl shrink-0">
                  قرآن
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-800 uppercase tracking-wide">Madrasah Tahfiz</div>
                  <div className="text-sm font-extrabold text-royal-950">Accredited Tajweed</div>
                </div>
              </div>

              {/* Floating Overlay Badge 2: Distinction Award */}
              <div className="absolute -top-6 -right-6 bg-white p-3.5 rounded-2xl shadow-xl border border-primary-100 flex items-center space-x-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-royal-950">1st Place Winner</div>
                  <div className="text-[11px] text-slate-500 font-medium">National Robotics 2026</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
