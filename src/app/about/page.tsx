'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Target, 
  Eye, 
  Award, 
  ChevronRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-12 pb-16">
      {/* Breadcrumb & Header Banner */}
      <section className="bg-[#F8FAFC] py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center space-x-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-[#0F8B9E]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-700 font-medium">About Us</span>
          </div>

          <div className="text-center space-y-2 pt-2">
            <span className="px-3 py-1 bg-white text-[#1B2A4A] border border-slate-200 text-xs font-semibold rounded uppercase tracking-wider">
              Our Institutional Purpose
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B2A4A] tracking-tight">
              About Plan Aid Academy
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
              Founded to integrate academic distinction, STEM innovation, and timeless Islamic character values into a single transformational learning ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* History & Founder Message */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-[#0F8B9E] uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              <span>School History & Legacy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1B2A4A]">
              Building Leaders of Character, Knowledge & Faith
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Established in 2014, Plan Aid Academy began as a visionary initiative to address the critical need for holistic education — where students excel in international STEM robotics standards while cultivating fluent Qur'anic memorization and moral integrity.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Today, our institution spans Primary Basic Education, Secondary College, and Madrasah Tahfiz, serving over 750 students across modern campuses equipped with high-speed computer labs, science facilities, and serene recitation halls.
            </p>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                  alt="Dr. Abubakar Al-Mansoor"
                  className="w-10 h-10 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <div className="font-bold text-[#1B2A4A] text-xs sm:text-sm">Dr. Abubakar Al-Mansoor</div>
                  <div className="text-[11px] text-slate-500 font-medium">Founder & Chairman, Governing Board</div>
                </div>
              </div>
              <p className="text-xs text-slate-700 italic leading-relaxed">
                "Our sacred commitment to parents is simple: We maintain uncompromising standards in academic distinction while fostering deep moral character and spiritual grounding."
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
                alt="Plan Aid Campus Assembly"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#1B2A4A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="bg-slate-800/60 p-6 rounded-xl border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#0F8B9E] text-white flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Our Mission</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                To nurture balanced, highly competent, and morally grounded global citizens by delivering premier STEM technology education, WAEC distinction academics, and authentic Islamic character formation.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-slate-800/60 p-6 rounded-xl border border-slate-700 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                To be West Africa's foremost model school for integrated scientific innovation and Islamic educational excellence — producing leaders who engineer solutions for humanity with faith and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Facilities Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-1 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-[#0F8B9E] uppercase tracking-wider">Learning Environment</span>
          <h2 className="text-2xl font-bold text-[#1B2A4A]">Campus Facilities Overview</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-3">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
              alt="Robotics Lab"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-base font-bold text-[#1B2A4A]">STEM & Robotics Lab</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Arduino micro-controller kits, Lego robotics, 3D printers, high-speed fiber internet, and electronic soldering stations.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-3">
            <img
              src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=600&q=80"
              alt="Madrasah Recitation Hall"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-base font-bold text-[#1B2A4A]">Madrasah Recitation Complex</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Quiet, air-conditioned audio-visual Qur'an lab with acoustic Tajweed stations for individual memorization recording and review.
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200 space-y-3">
            <img
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80"
              alt="Science Labs"
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-base font-bold text-[#1B2A4A]">Science Laboratories</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dedicated Physics, Chemistry, and Biology laboratories compliant with WAEC & NECO practical examination specifications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
