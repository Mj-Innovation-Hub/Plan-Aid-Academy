'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Hero } from '@/components/ui/Hero';
import { SectionCard } from '@/components/ui/SectionCard';
import { LightboxModal } from '@/components/ui/LightboxModal';
import { mockSectionConfigs, mockGalleryItems } from '@/lib/mockData';
import { 
  Cpu, 
  BookOpen, 
  Award, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Star,
  Quote,
  FileText,
  CalendarCheck,
  GraduationCap
} from 'lucide-react';

export default function HomePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Banner */}
      <Hero />

      {/* 2. Three Academic Arms Intro Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 bg-slate-100 text-[#1B2A4A] text-xs font-semibold rounded border border-slate-200 uppercase tracking-wider">
            Academic Programs
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1B2A4A] tracking-tight">
            Our Three Specialized Learning Pathways
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Tailored educational pathways designed to foster scientific curiosity, academic rigor, and sound Islamic moral character.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockSectionConfigs.map((section) => (
            <SectionCard key={section.id} section={section} />
          ))}
        </div>
      </section>

      {/* 3. Step-by-Step Guided Admissions Process */}
      <section className="bg-white py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#0F8B9E] uppercase tracking-wider">Guided Admission Roadmap</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B2A4A]">How to Enroll Your Child</h2>
            <p className="text-slate-600 text-xs sm:text-sm">A straightforward four-step process for new student entry into Plan Aid Academy.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-3">
              <div className="w-9 h-9 rounded-lg bg-[#1B2A4A] text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-base text-[#1B2A4A]">Select Program</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Choose between Primary School, Secondary College, or Madrasah Tahfiz based on student age and goals.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-3">
              <div className="w-9 h-9 rounded-lg bg-[#0F8B9E] text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-base text-[#1B2A4A]">Submit Application</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Complete the online admission form with student academic records and birth credentials.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-3">
              <div className="w-9 h-9 rounded-lg bg-[#1B2A4A] text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-base text-[#1B2A4A]">CBT Assessment</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Student completes a friendly diagnostic placement test in Mathematics, English, and Qur'an reading.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-sm">
                04
              </div>
              <h3 className="font-bold text-base text-[#1B2A4A]">Enrollment & Portal</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Receive official acceptance letter, fee breakdown, and access your Student & Parent Portal credentials.
              </p>
            </div>
          </div>

          <div className="text-center pt-2">
            <Link
              href="/admissions"
              className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-white bg-[#0F8B9E] hover:bg-[#0d7788] px-6 py-2.5 rounded-lg transition"
            >
              <span>Begin Application Process</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Pillars of Educational Excellence */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-[#0F8B9E] uppercase tracking-wider">
            Institutional Pillars
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B2A4A]">
            The Plan Aid Standard
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">Why families choose our academy for balanced academic and spiritual development.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3 hover:border-slate-300 transition">
            <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center text-[#0F8B9E]">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1B2A4A]">STEM & Robotics Laboratory</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Dedicated micro-controller kits, 3D printing stations, and IoT sensor projects where students apply mathematics and science into practical engineering solutions.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3 hover:border-slate-300 transition">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center font-arabic font-bold text-lg text-emerald-700">
              قرآن
            </div>
            <h3 className="text-lg font-bold text-[#1B2A4A]">Madrasah Tahfiz & Character</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Structured Qur'an memorization with accredited Tajweed masters, cultivating humility, integrity, leadership, and sound Islamic ethics.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3 hover:border-slate-300 transition">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-700">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#1B2A4A]">WAEC & NECO Distinction Focus</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Certified subject specialists, systematic mock examinations, and comprehensive CBT computer practice ensuring top national examination distinction rates.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Photo Gallery Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-bold text-[#0F8B9E] uppercase tracking-wider">Campus Life</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B2A4A]">Photo & Activity Gallery</h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center space-x-1 text-xs font-bold text-[#1B2A4A] hover:text-[#0F8B9E] transition"
          >
            <span>View Full Photo Gallery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockGalleryItems.slice(0, 3).map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-xl overflow-hidden cursor-pointer border border-slate-200 bg-slate-900 text-white"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-56 object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-transparent to-transparent opacity-90 p-4 flex flex-col justify-end">
                <span className="text-[10px] text-[#0F8B9E] font-bold uppercase tracking-wide">{item.category}</span>
                <h4 className="text-sm font-bold text-white">{item.title}</h4>
                <p className="text-xs text-slate-300 line-clamp-1">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Parents & Community Feedback */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#0F8B9E] uppercase tracking-wider">Parent Testimonials</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B2A4A]">What Our Community Says</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
              <div className="flex items-center space-x-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                "Plan Aid Academy provides the ideal balance of academic excellence and spiritual grounding. My son is thriving in his STEM robotics class while making steady progress in his Hifz memorization."
              </p>
              <div className="flex items-center space-x-3 pt-2">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
                  alt="Engr. Ibrahim Danjuma"
                  className="w-9 h-9 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <div className="text-xs font-bold text-[#1B2A4A]">Engr. & Mrs. Ibrahim Danjuma</div>
                  <div className="text-[11px] text-slate-500">Parents of JSS 3 Student</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
              <div className="flex items-center space-x-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                "The dedication of the teachers and clear communication through the parent portal are outstanding. Our daughter entered senior secondary fully prepared and confident."
              </p>
              <div className="flex items-center space-x-3 pt-2">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
                  alt="Dr. Halima Bello"
                  className="w-9 h-9 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <div className="text-xs font-bold text-[#1B2A4A]">Dr. Halima Bello</div>
                  <div className="text-[11px] text-slate-500">Parent of SSS Graduate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Call To Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1B2A4A] text-white rounded-2xl p-8 sm:p-10 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="px-2.5 py-0.5 bg-[#0F8B9E] text-white text-xs font-semibold rounded">
              2026/2027 Admissions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Enroll Your Child at Plan Aid Academy
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Applications are currently open for Primary School, Secondary College, and Madrasah Tahfiz arms. Secure your child's spot today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/admissions"
              className="px-6 py-3 bg-[#0F8B9E] hover:bg-[#0d7788] text-white font-bold text-xs sm:text-sm rounded-lg transition text-center"
            >
              Apply Online Now
            </Link>
            <Link
              href="/contact#tour"
              className="px-6 py-3 bg-white text-[#1B2A4A] hover:bg-slate-100 font-semibold text-xs sm:text-sm rounded-lg transition text-center"
            >
              Schedule Campus Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={mockGalleryItems}
        currentIndex={lightboxIndex}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />
    </div>
  );
}
