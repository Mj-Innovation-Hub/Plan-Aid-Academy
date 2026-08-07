'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Hero } from '@/components/ui/Hero';
import { SectionCard } from '@/components/ui/SectionCard';
import { LightboxModal } from '@/components/ui/LightboxModal';
import { mockSectionConfigs, mockGalleryItems, mockAnnouncements } from '@/lib/mockData';
import { 
  Cpu, 
  BookOpen, 
  Award, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Star,
  Quote,
  Building2
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
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 bg-primary-100 text-royal-800 text-xs font-bold rounded-full uppercase tracking-wider">
            Comprehensive Education Spectrum
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-royal-950 tracking-tight">
            Our Three Academic & Character Arms
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Tailored learning pathways designed to inspire scientific curiosity, academic rigor, and deep spiritual grounding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockSectionConfigs.map((section) => (
            <SectionCard key={section.id} section={section} />
          ))}
        </div>
      </section>

      {/* 3. Highlights Strip */}
      <section className="bg-gradient-to-r from-royal-950 via-royal-900 to-royal-950 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-primary-300 uppercase tracking-widest">
              Why Families Choose Plan Aid Academy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              The Plan Aid Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Highlight 1 */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4 hover:bg-white/10 transition">
              <div className="w-12 h-12 rounded-xl bg-primary-500/20 border border-primary-400/30 flex items-center justify-center text-primary-300">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">STEM & Robotics Lab</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Dedicated micro-controller kits, 3D printing, and IoT sensor stations where students turn theoretical math and science into physical inventions.
              </p>
            </div>

            {/* Highlight 2 */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4 hover:bg-white/10 transition">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center font-arabic font-bold text-xl text-emerald-300">
                قرآن
              </div>
              <h3 className="text-xl font-bold text-white">Holistic Hifz & Character</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Structured Qur'an memorization with accredited Tajweed masters, teaching humility, leadership, integrity, and sound Islamic ethics.
              </p>
            </div>

            {/* Highlight 3 */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4 hover:bg-white/10 transition">
              <div className="w-12 h-12 rounded-xl bg-royal-500/20 border border-royal-400/30 flex items-center justify-center text-royal-300">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Qualified & Dedicated Staff</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                M.Ed and Ph.D educators, certified STEM coaches, and Al-Azhar trained Ustadhs committed to individual student growth and mentoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Photo Gallery Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-primary-500 uppercase tracking-wider">Life at Academy</span>
            <h2 className="text-3xl font-extrabold text-royal-950">Campus Life Gallery</h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center space-x-1.5 text-sm font-bold text-royal-700 hover:text-primary-500 transition"
          >
            <span>View Full Photo Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockGalleryItems.slice(0, 3).map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer border border-slate-200"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                <span className="text-xs text-primary-300 font-bold uppercase">{item.category}</span>
                <h4 className="text-base font-bold text-white">{item.title}</h4>
                <p className="text-xs text-slate-200 line-clamp-1">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section className="bg-sky-50/60 py-16 border-y border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-royal-700 uppercase tracking-wider">Parents & Student Words</span>
            <h2 className="text-3xl font-extrabold text-royal-950">What Our Community Says</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4 relative">
              <Quote className="w-10 h-10 text-primary-200 absolute top-4 right-4" />
              <div className="flex items-center space-x-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed italic">
                "Plan Aid Academy has been a blessing for our son Zayd. Seeing him program an autonomous robot while simultaneously memorizing Juz 24 with Tajweed is more than we ever hoped for in an educational institution!"
              </p>
              <div className="flex items-center space-x-3 pt-2">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
                  alt="Mr. Ibrahim Danjuma"
                  className="w-10 h-10 rounded-full object-cover border"
                />
                <div>
                  <div className="text-sm font-bold text-royal-950">Engr. & Mrs. Ibrahim Danjuma</div>
                  <div className="text-xs text-slate-500">Parents of JSS 3 Student</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4 relative">
              <Quote className="w-10 h-10 text-primary-200 absolute top-4 right-4" />
              <div className="flex items-center space-x-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed italic">
                "The discipline, qualified staff, and academic rigor in WAEC prep are top tier. Our daughter transitioned seamlessly into senior secondary with straight distinction."
              </p>
              <div className="flex items-center space-x-3 pt-2">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
                  alt="Dr. Halima Bello"
                  className="w-10 h-10 rounded-full object-cover border"
                />
                <div>
                  <div className="text-sm font-bold text-royal-950">Dr. Halima Bello</div>
                  <div className="text-xs text-slate-500">Parent of SSS 2 Graduate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Admissions Banner CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary-500 via-royal-600 to-royal-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="space-y-4 relative z-10 max-w-2xl">
            <span className="px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full uppercase tracking-wider">
              Enrolling for 2026/2027 Session
            </span>
            <h2 className="text-3xl sm:text-4xl font-black">
              Give Your Child the Plan Aid Advantage Today
            </h2>
            <p className="text-slate-100 text-sm sm:text-base leading-relaxed">
              Limited slots available for Primary, Secondary College, and Madrasah Tahfiz arms. Secure your child's spot or schedule a guided campus tour.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/admissions"
              className="px-8 py-4 bg-white text-royal-950 font-extrabold text-base rounded-2xl shadow-lg hover:bg-slate-100 transition text-center"
            >
              Apply Online Now
            </Link>
            <Link
              href="/contact#tour"
              className="px-8 py-4 bg-royal-950/60 text-white font-extrabold text-base rounded-2xl border border-white/30 hover:bg-royal-950 transition text-center"
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
