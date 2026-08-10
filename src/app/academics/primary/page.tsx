'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, CheckCircle2, ArrowRight, Heart, Brain, Users, ChevronRight } from 'lucide-react';

export default function PrimaryAcademicPage() {
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
            <span className="text-[#0F8B9E] font-semibold">Primary Education</span>
          </div>

          <div className="text-center space-y-2 pt-2">
            <span className="px-3 py-1 bg-white text-[#1B2A4A] border border-slate-200 text-xs font-semibold rounded uppercase tracking-wider">
              Basic Education Arm (Ages 5 – 11)
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B2A4A] tracking-tight">
              Primary Education Pathway
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
              Fostering early curiosity, logical thinking, foundational literacy, and moral character in a supportive learning environment.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-2xl font-bold text-[#1B2A4A]">
              Foundational Literacy, Logic & Early STEM
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Our Primary curriculum follows the National Basic Education framework enhanced with early block coding, hands-on science kits, phonics literacy, and foundational Islamic moral ethics.
            </p>

            <div className="space-y-3 pt-1">
              <div className="flex items-start space-x-3 p-3.5 bg-white rounded-lg border border-slate-200">
                <Brain className="w-5 h-5 text-[#0F8B9E] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-[#1B2A4A]">Early Computational Logic</div>
                  <div className="text-xs text-slate-500">Scratch block coding and puzzle solving to build early analytical skills.</div>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 bg-white rounded-lg border border-slate-200">
                <Heart className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-[#1B2A4A]">Character & Moral Foundation</div>
                  <div className="text-xs text-slate-500">Daily morning supplications, courtesy, and respect for elders and peers.</div>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3.5 bg-white rounded-lg border border-slate-200">
                <Users className="w-5 h-5 text-indigo-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-[#1B2A4A]">Collaborative Group Projects</div>
                  <div className="text-xs text-slate-500">Interactive team activities and annual junior science fair exhibitions.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
              alt="Primary Classroom"
              className="w-full h-80 lg:h-96 object-cover rounded-xl border border-slate-200 shadow-xs"
            />
          </div>
        </div>
      </section>

      {/* Subjects List */}
      <section className="bg-slate-50 py-12 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h3 className="text-xl font-bold text-[#1B2A4A] text-center">Core Primary Subjects</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              'Mathematics & Logic',
              'English Phonics & Reading',
              'Basic Science & Technology',
              'Islamic Studies & Hadith',
              'Computer Studies & Coding',
              'Social Studies & Civics',
              'Creative Arts & Drawing',
              'Physical Education'
            ].map((subject, idx) => (
              <div key={idx} className="bg-white p-3.5 rounded-lg border border-slate-200 flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#0F8B9E] shrink-0" />
                <span className="text-xs font-semibold text-[#1B2A4A]">{subject}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-4">
        <h3 className="text-2xl font-bold text-[#1B2A4A]">Enroll Your Child in Primary School</h3>
        <p className="text-xs sm:text-sm text-slate-600">Admission applications are currently open for Basic 1 through Basic 6.</p>
        <Link
          href="/admissions"
          className="inline-flex items-center space-x-2 px-6 py-2.5 bg-[#0F8B9E] hover:bg-[#0d7788] text-white font-bold text-xs sm:text-sm rounded-lg transition"
        >
          <span>Begin Application</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
