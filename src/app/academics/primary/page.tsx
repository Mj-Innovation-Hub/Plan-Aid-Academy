'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, CheckCircle2, ArrowRight, Sparkles, Heart, Brain, Users } from 'lucide-react';

export default function PrimaryAcademicPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Banner with Primary Palette Accent (#20a7db) */}
      <section className="bg-gradient-to-b from-sky-100 via-white to-slate-50 py-16 border-b border-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <span className="px-3.5 py-1 bg-primary-100 text-primary-800 font-bold text-xs rounded-full uppercase tracking-wider">
            Basic Education Arm (Ages 5 – 11)
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-royal-950 tracking-tight">
            Primary Education Pathway
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Building early curiosity, logical reasoning, computational thinking, and moral character in a nurturing, joyful environment.
          </p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-extrabold text-royal-950">
              Foundational Literacy, Logic & Early STEM
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our Primary curriculum follows the National Basic Education framework enhanced with early block coding, hands-on science kits, phonics literacy, and foundational Islamic studies.
            </p>

            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-slate-200">
                <Brain className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-royal-950">Early Computational Logic</div>
                  <div className="text-xs text-slate-500">Scratch block coding and puzzle solving for young minds.</div>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-slate-200">
                <Heart className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-royal-950">Character & Moral Values</div>
                  <div className="text-xs text-slate-500">Daily morning supplications, courtesy, and respect for elders.</div>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-3 bg-white rounded-xl border border-slate-200">
                <Users className="w-5 h-5 text-royal-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-royal-950">Collaborative Group Projects</div>
                  <div className="text-xs text-slate-500">Interactive group presentations and science fair displays.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
              alt="Primary Classroom"
              className="w-full h-96 object-cover rounded-3xl shadow-xl border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Subjects List */}
      <section className="bg-sky-50/60 py-12 border-y border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h3 className="text-2xl font-bold text-royal-950 text-center">Core Primary Subjects</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              'Mathematics & Logic',
              'English Phonics & Literacy',
              'Basic Science & Tech',
              'Islamic Studies & Hadith',
              'Computer & Coding',
              'Social Studies & Civics',
              'Cultural & Creative Arts',
              'Physical Education'
            ].map((subject, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-primary-500 shrink-0" />
                <span className="text-xs font-bold text-royal-950">{subject}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-4">
        <h3 className="text-2xl font-bold text-royal-950">Enroll Your Child in Primary Arm</h3>
        <p className="text-sm text-slate-600">Admission applications are currently open for Primary 1 to Primary 5.</p>
        <Link
          href="/admissions"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-bold text-sm rounded-xl shadow transition"
        >
          <span>Begin Application</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
