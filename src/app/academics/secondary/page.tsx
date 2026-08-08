'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Cpu, Award, ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers, BookOpen } from 'lucide-react';

export default function SecondaryAcademicPage() {
  const [activeStream, setActiveStream] = useState<'science' | 'humanities' | 'commercial'>('science');

  const streamData = {
    science: {
      title: 'Science & Technology Stream',
      icon: Zap,
      color: 'text-primary-400',
      badgeBg: 'bg-primary-500/20 text-primary-300 border-primary-400/30',
      description: 'Prepares aspiring engineers, doctors, programmers, and research scientists through practical laboratory experiments and robotics simulation.',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Further Mathematics', 'Computer Science & Python', 'Technical Drawing']
    },
    humanities: {
      title: 'Humanities & Social Sciences Stream',
      icon: Layers,
      color: 'text-amber-400',
      badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-400/30',
      description: 'Fosters eloquent communicators, lawyers, diplomats, and policy leaders through critical analytical essays, debate tournaments, and Arabic literature.',
      subjects: ['Government', 'Literature-in-English', 'Arabic Studies & Literature', 'Economics', 'Civic Education', 'History & World Affairs']
    },
    commercial: {
      title: 'Commercial & Business Stream',
      icon: Award,
      color: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30',
      description: 'Nurtures future entrepreneurs, accountants, and finance executives with real-world financial modelling, data processing, and business ethics.',
      subjects: ['Financial Accounting', 'Commerce', 'Data Processing & Excel', 'Economics', 'Office Practice', 'Marketing & Sales']
    }
  };

  const currentStream = streamData[activeStream];
  const StreamIcon = currentStream.icon;

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-royal-100/70 via-white to-slate-50 py-12 sm:py-16 border-b border-royal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <span className="px-3.5 py-1 bg-royal-600 text-white font-bold text-xs rounded-full uppercase tracking-wider">
            Secondary College Arm (Ages 11 – 17)
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-royal-950 tracking-tight leading-tight">
            Secondary College & WAEC/NECO Track
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto text-sm sm:text-lg leading-relaxed">
            Empowering students with state-of-the-art STEM Robotics, advanced sciences, leadership clubs, and 100% WAEC/NECO distinction preparation.
          </p>
        </div>
      </section>

      {/* Robotics & STEM Focus */}
      <section id="stem" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-royal-600 uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>Flagship STEM Robotics Laboratory</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-royal-950">
              National Championship-Winning Automation Hub
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At Plan Aid Academy Secondary College, every student receives hands-on practical training in micro-controller programming (Arduino/Raspberry Pi), sensor integration, Python coding, and mechanical assembly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1">
                <div className="font-bold text-sm text-royal-950">Robotics & Automation</div>
                <div className="text-xs text-slate-500">Autonomous rovers, IoT weather stations, and solar engineering.</div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1">
                <div className="font-bold text-sm text-royal-950">WAEC / NECO / JAMB Prep</div>
                <div className="text-xs text-slate-500">Comprehensive mock exams and CBT computer practice.</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
              alt="STEM Robotics Laboratory"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-3xl shadow-xl border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Curriculum Streams Interactive */}
      <section className="bg-royal-950 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-primary-300 uppercase tracking-widest">Senior Secondary Specialization</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Academic Streams</h2>
          </div>

          {/* Interactive Stream Switcher Tabs */}
          <div className="flex justify-center space-x-2 sm:space-x-4 border-b border-royal-800/80 pb-4 overflow-x-auto">
            <button
              onClick={() => setActiveStream('science')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 whitespace-nowrap ${
                activeStream === 'science' ? 'bg-primary-500 text-white shadow' : 'bg-royal-900/60 text-slate-300 hover:text-white'
              }`}
            >
              <Zap className="w-4 h-4 text-primary-300" />
              <span>Science & Tech</span>
            </button>

            <button
              onClick={() => setActiveStream('humanities')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 whitespace-nowrap ${
                activeStream === 'humanities' ? 'bg-amber-500 text-white shadow' : 'bg-royal-900/60 text-slate-300 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4 text-amber-300" />
              <span>Humanities</span>
            </button>

            <button
              onClick={() => setActiveStream('commercial')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex items-center space-x-2 whitespace-nowrap ${
                activeStream === 'commercial' ? 'bg-emerald-600 text-white shadow' : 'bg-royal-900/60 text-slate-300 hover:text-white'
              }`}
            >
              <Award className="w-4 h-4 text-emerald-300" />
              <span>Commercial</span>
            </button>
          </div>

          {/* Active Stream Card */}
          <div className="bg-white/5 p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center ${currentStream.color}`}>
                  <StreamIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{currentStream.title}</h3>
                  <p className="text-xs text-slate-300 mt-1 max-w-xl">{currentStream.description}</p>
                </div>
              </div>

              <span className={`px-3 py-1 rounded-full text-xs font-bold border self-start sm:self-center ${currentStream.badgeBg}`}>
                WAEC / NECO Accredited
              </span>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Core Subjects Breakdown</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {currentStream.subjects.map((subj, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-medium text-slate-200 bg-white/5 p-3 rounded-xl border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0" />
                    <span>{subj}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-royal-950">Join Our Secondary College</h3>
        <p className="text-xs sm:text-sm text-slate-600">Entrance examination slots available for JSS 1 and SSS 1 streams.</p>
        <Link
          href="/admissions"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-royal-700 hover:bg-royal-800 text-white font-bold text-sm rounded-xl shadow transition"
        >
          <span>Apply Online</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
