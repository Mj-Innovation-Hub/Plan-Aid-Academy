'use client';

import React from 'react';
import Link from 'next/link';
import { Cpu, Award, ArrowRight, CheckCircle2, ShieldCheck, Zap, Layers } from 'lucide-react';

export default function SecondaryAcademicPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Banner with Royal Blue Accent (#305cde) */}
      <section className="bg-gradient-to-b from-royal-100/70 via-white to-slate-50 py-16 border-b border-royal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <span className="px-3.5 py-1 bg-royal-600 text-white font-bold text-xs rounded-full uppercase tracking-wider">
            Secondary College Arm (Ages 11 – 17)
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-royal-950 tracking-tight">
            Secondary College & WAEC/NECO Track
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Empowering students with state-of-the-art STEM Robotics, advanced sciences, leadership clubs, and 100% WAEC/NECO distinction preparation.
          </p>
        </div>
      </section>

      {/* Robotics & STEM Focus */}
      <section id="stem" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-royal-600 uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>Flagship STEM Robotics Laboratory</span>
            </div>
            <h2 className="text-3xl font-extrabold text-royal-950">
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
              className="w-full h-96 object-cover rounded-3xl shadow-xl border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Curriculum Streams */}
      <section className="bg-royal-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-primary-300 uppercase tracking-widest">Senior Secondary Specialization</span>
            <h2 className="text-3xl font-extrabold text-white">Academic Streams</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Science & Tech */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
              <Zap className="w-8 h-8 text-primary-400" />
              <h3 className="text-xl font-bold text-white">Science & Tech Stream</h3>
              <p className="text-xs text-slate-300">Physics, Chemistry, Further Mathematics, Computer Science, Technical Drawing.</p>
            </div>

            {/* Arts & Humanities */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
              <Layers className="w-8 h-8 text-amber-400" />
              <h3 className="text-xl font-bold text-white">Humanities & Social Sciences</h3>
              <p className="text-xs text-slate-300">Government, Literature-in-English, Arabic Studies, Economics, Civic Education.</p>
            </div>

            {/* Business & Commerce */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
              <Award className="w-8 h-8 text-emerald-400" />
              <h3 className="text-xl font-bold text-white">Commercial Stream</h3>
              <p className="text-xs text-slate-300">Financial Accounting, Commerce, Data Processing, Office Practice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-4">
        <h3 className="text-2xl font-bold text-royal-950">Join Our Secondary College</h3>
        <p className="text-sm text-slate-600">Entrance examination slots available for JSS 1 and SSS 1 streams.</p>
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
