'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Cpu, Award, ArrowRight, CheckCircle2, Zap, Layers, ChevronRight } from 'lucide-react';

export default function SecondaryAcademicPage() {
  const [activeStream, setActiveStream] = useState<'science' | 'humanities' | 'commercial'>('science');

  const streamData = {
    science: {
      title: 'Science & Technology Stream',
      icon: Zap,
      description: 'Prepares aspiring engineers, doctors, software developers, and research scientists through practical laboratory experiments and robotics simulation.',
      subjects: ['Physics', 'Chemistry', 'Biology', 'Further Mathematics', 'Computer Science & Python', 'Technical Drawing']
    },
    humanities: {
      title: 'Humanities & Social Sciences Stream',
      icon: Layers,
      description: 'Fosters articulate communicators, legal minds, diplomats, and policy leaders through critical analytical essays, debate forums, and Arabic literature.',
      subjects: ['Government', 'Literature-in-English', 'Arabic Studies & Literature', 'Economics', 'Civic Education', 'History & World Affairs']
    },
    commercial: {
      title: 'Commercial & Business Stream',
      icon: Award,
      description: 'Nurtures future entrepreneurs, accountants, and finance executives with financial modeling, data processing, and ethical business management.',
      subjects: ['Financial Accounting', 'Commerce', 'Data Processing & Excel', 'Economics', 'Office Practice', 'Marketing & Sales']
    }
  };

  const currentStream = streamData[activeStream];
  const StreamIcon = currentStream.icon;

  return (
    <div className="space-y-12 pb-16">
      {/* Breadcrumb & Header Banner */}
      <section className="bg-[#F8FAFC] py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center space-x-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-[#0F8B9E]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-700 font-medium">Academics</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0F8B9E] font-semibold">Secondary College</span>
          </div>

          <div className="text-center space-y-2 pt-2">
            <span className="px-3 py-1 bg-white text-[#1B2A4A] border border-slate-200 text-xs font-semibold rounded uppercase tracking-wider">
              Secondary College Arm (Ages 11 – 17)
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B2A4A] tracking-tight">
              Secondary College & WAEC/NECO Track
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
              Empowering students with state-of-the-art STEM Robotics, advanced sciences, leadership development, and 100% WAEC/NECO distinction target.
            </p>
          </div>
        </div>
      </section>

      {/* Robotics & STEM Focus */}
      <section id="stem" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#0F8B9E] uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>Flagship STEM Robotics Laboratory</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1B2A4A]">
              Practical Engineering & Computer Science
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              At Plan Aid Academy Secondary College, every student receives hands-on practical training in micro-controller programming (Arduino), sensor integration, Python coding, and mechanical assembly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-4 bg-white rounded-lg border border-slate-200 space-y-1">
                <div className="font-bold text-xs sm:text-sm text-[#1B2A4A]">Robotics & Automation</div>
                <div className="text-xs text-slate-500">Autonomous rovers, IoT weather stations, and electronic sensors.</div>
              </div>

              <div className="p-4 bg-white rounded-lg border border-slate-200 space-y-1">
                <div className="font-bold text-xs sm:text-sm text-[#1B2A4A]">WAEC / NECO / JAMB CBT</div>
                <div className="text-xs text-slate-500">Comprehensive mock exams and computer-based practice.</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
              alt="STEM Robotics Laboratory"
              className="w-full h-80 lg:h-96 object-cover rounded-xl border border-slate-200 shadow-xs"
            />
          </div>
        </div>
      </section>

      {/* Curriculum Streams Interactive */}
      <section className="bg-slate-50 py-12 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-1 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#0F8B9E] uppercase tracking-wider">Senior Secondary Specialization</span>
            <h2 className="text-2xl font-bold text-[#1B2A4A]">Academic Streams</h2>
          </div>

          {/* Interactive Stream Switcher Tabs */}
          <div className="flex justify-center space-x-2 border-b border-slate-200 pb-3">
            <button
              onClick={() => setActiveStream('science')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center space-x-2 ${
                activeStream === 'science' ? 'bg-[#1B2A4A] text-white shadow-xs' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-[#0F8B9E]" />
              <span>Science & Tech</span>
            </button>

            <button
              onClick={() => setActiveStream('humanities')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center space-x-2 ${
                activeStream === 'humanities' ? 'bg-[#1B2A4A] text-white shadow-xs' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-amber-500" />
              <span>Humanities</span>
            </button>

            <button
              onClick={() => setActiveStream('commercial')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center space-x-2 ${
                activeStream === 'commercial' ? 'bg-[#1B2A4A] text-white shadow-xs' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-emerald-500" />
              <span>Commercial</span>
            </button>
          </div>

          {/* Active Stream Card */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center text-[#0F8B9E]">
                  <StreamIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1B2A4A]">{currentStream.title}</h3>
                  <p className="text-xs text-slate-600 mt-0.5">{currentStream.description}</p>
                </div>
              </div>

              <span className="px-3 py-1 rounded bg-slate-100 text-[#1B2A4A] text-xs font-semibold border border-slate-200 shrink-0">
                WAEC / NECO Accredited
              </span>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Core Subjects</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {currentStream.subjects.map((subj, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0F8B9E] shrink-0" />
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
        <h3 className="text-2xl font-bold text-[#1B2A4A]">Join Secondary College</h3>
        <p className="text-xs sm:text-sm text-slate-600">Entrance placement testing available for JSS 1 through SSS 2.</p>
        <Link
          href="/admissions"
          className="inline-flex items-center space-x-2 px-6 py-2.5 bg-[#0F8B9E] hover:bg-[#0d7788] text-white font-bold text-xs sm:text-sm rounded-lg transition"
        >
          <span>Apply Online</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
