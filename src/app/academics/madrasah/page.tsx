'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, Award, CheckCircle2, ArrowRight, Sparkles, Heart } from 'lucide-react';

export default function MadrasahAcademicPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Banner with Emerald / Dark Blue Accent */}
      <section className="bg-gradient-to-b from-emerald-900 via-royal-950 to-slate-900 text-white py-20 relative overflow-hidden">
        {/* Calligraphy Watermark */}
        <div className="absolute right-0 bottom-0 opacity-10 font-arabic text-9xl text-emerald-300 pointer-events-none select-none">
          المدرسة الإسلامية
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center relative z-10">
          {/* RTL Arabic Calligraphy Title */}
          <div dir="rtl" className="font-arabic text-3xl sm:text-4xl text-emerald-300 font-bold tracking-wide">
            مدرسة التحفيظ والدراسات الإسلامية — مدرسة بلان ايد
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Madrasah Tahfiz & Islamic Studies Arm
          </h1>

          <p className="text-slate-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Illuminating young hearts with authentic Qur’anic memorization (Hifz), mastery of Tajweed science, classical Arabic grammar, and noble Islamic manners (Akhlaq).
          </p>
        </div>
      </section>

      {/* Four Core Pillars of Madrasah */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Curriculum Foundations</span>
          <h2 className="text-3xl font-extrabold text-royal-950">The Four Pillars of Our Madrasah Track</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <div className="bg-white p-6 rounded-2xl border border-emerald-200 shadow-sm space-y-3 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-arabic font-bold text-2xl">
              حفظ
            </div>
            <h3 className="text-lg font-bold text-royal-950">Hifzul Qur'an</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Structured daily memorization and Muraja'ah (revision) schedules tailored to each student's pace under certified Huffaz.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-6 rounded-2xl border border-emerald-200 shadow-sm space-y-3 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-arabic font-bold text-2xl">
              تجويد
            </div>
            <h3 className="text-lg font-bold text-royal-950">Science of Tajweed</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Phonetic accuracy, Makharij al-Huroof (articulation points), rules of Noon Sakinah, and vocal clarity.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-6 rounded-2xl border border-emerald-200 shadow-sm space-y-3 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-arabic font-bold text-2xl">
              عربية
            </div>
            <h3 className="text-lg font-bold text-royal-950">Arabic Language</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fluent spoken Arabic, vocabulary building, Nahw (syntax), and Sarf (morphology) for direct Quran comprehension.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white p-6 rounded-2xl border border-emerald-200 shadow-sm space-y-3 hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-arabic font-bold text-2xl">
              فقه
            </div>
            <h3 className="text-lg font-bold text-royal-950">Fiqh & Akhlaq</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Practical worship rules (Taharah, Salah), Hadith study, Seerah of the Prophet (SAW), and exemplary character.
            </p>
          </div>
        </div>
      </section>

      {/* RTL Arabic Quote & Highlight Block */}
      <section className="bg-emerald-900 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
          <div dir="rtl" className="font-arabic text-2xl sm:text-3xl text-emerald-200 font-bold leading-loose">
            «خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ»
          </div>
          <p className="text-xs sm:text-sm text-slate-200 italic max-w-xl mx-auto">
            "The best among you are those who learn the Qur’an and teach it." — Prophet Muhammad (PBUH) [Sahih Al-Bukhari]
          </p>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-4">
        <h3 className="text-2xl font-bold text-royal-950">Enroll in Madrasah Tahfiz Track</h3>
        <p className="text-sm text-slate-600">Both day-school integrated and full boarding Tahfiz options available.</p>
        <Link
          href="/admissions"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl shadow transition"
        >
          <span>Register for Madrasah</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
