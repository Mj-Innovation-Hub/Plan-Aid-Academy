'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function MadrasahAcademicPage() {
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
            <span className="text-emerald-700 font-semibold">Madrasah Tahfiz</span>
          </div>

          <div className="text-center space-y-2 pt-2">
            <div dir="rtl" className="font-arabic text-2xl text-emerald-800 font-bold">
              مدرسة التحفيظ والدراسات الإسلامية
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B2A4A] tracking-tight">
              Madrasah Tahfiz & Islamic Studies Arm
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
              Illuminating young hearts with authentic Qur’anic memorization (Hifz), mastery of Tajweed rules, classical Arabic grammar, and noble Islamic character (Akhlaq).
            </p>
          </div>
        </div>
      </section>

      {/* Four Core Pillars of Madrasah */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-1 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Curriculum Foundations</span>
          <h2 className="text-2xl font-bold text-[#1B2A4A]">The Four Pillars of Our Madrasah Track</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center font-arabic font-bold text-xl">
              حفظ
            </div>
            <h3 className="text-base font-bold text-[#1B2A4A]">Hifzul Qur'an</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Structured daily memorization and Muraja'ah (revision) schedules tailored to each student's pace under certified Tajweed masters.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center font-arabic font-bold text-xl">
              تجويد
            </div>
            <h3 className="text-base font-bold text-[#1B2A4A]">Science of Tajweed</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Phonetic accuracy, Makharij al-Huroof (articulation points), rules of Noon Sakinah, and vocal clarity.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center font-arabic font-bold text-xl">
              عربية
            </div>
            <h3 className="text-base font-bold text-[#1B2A4A]">Arabic Language</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fluent spoken Arabic, vocabulary building, Nahw (syntax), and Sarf (morphology) for direct Qur'anic comprehension.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center font-arabic font-bold text-xl">
              فقه
            </div>
            <h3 className="text-base font-bold text-[#1B2A4A]">Fiqh & Akhlaq</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Practical worship rules (Taharah, Salah), Hadith studies, Seerah of the Prophet (SAW), and exemplary moral etiquette.
            </p>
          </div>
        </div>
      </section>

      {/* RTL Arabic Quote & Highlight Block */}
      <section className="bg-[#1B2A4A] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <div dir="rtl" className="font-arabic text-xl sm:text-2xl text-emerald-300 font-bold leading-relaxed">
            «خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ»
          </div>
          <p className="text-xs sm:text-sm text-slate-300 italic max-w-xl mx-auto">
            "The best among you are those who learn the Qur’an and teach it." — Prophet Muhammad (PBUH) [Sahih Al-Bukhari]
          </p>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-4">
        <h3 className="text-2xl font-bold text-[#1B2A4A]">Enroll in Madrasah Tahfiz Track</h3>
        <p className="text-xs sm:text-sm text-slate-600">Both day-school integrated and intensive boarding Tahfiz programs available.</p>
        <Link
          href="/admissions"
          className="inline-flex items-center space-x-2 px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm rounded-lg transition"
        >
          <span>Register for Madrasah</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
