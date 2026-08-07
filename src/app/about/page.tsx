'use client';

import React from 'react';
import { 
  Building2, 
  Target, 
  Eye, 
  Award, 
  CheckCircle2, 
  GraduationCap, 
  Cpu, 
  BookOpen, 
  UserCheck,
  ShieldCheck
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-sky-100/80 via-white to-slate-50 py-16 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="px-3.5 py-1 bg-royal-100 text-royal-800 font-bold text-xs rounded-full uppercase tracking-wider">
            Our Heritage & Purpose
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-royal-950 tracking-tight">
            About Plan Aid Academy
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Founded with a vision to bridge academic rigor, technology innovation, and timeless Islamic character values into a single transformational learning ecosystem.
          </p>
        </div>
      </section>

      {/* History & Founder Message */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-primary-500 uppercase tracking-wider">
              <Building2 className="w-4 h-4" />
              <span>School History & Legacy</span>
            </div>
            <h2 className="text-3xl font-extrabold text-royal-950">
              Building Leaders for Tomorrow's Digital & Moral Frontier
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Established in 2014, Plan Aid Academy began as a visionary initiative to address the critical gap in holistic education — where children could excel at international STEM robotics standards while cultivating fluent Qur'anic memorization and moral integrity.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Today, our institution spans Primary Basic Education, Secondary College, and Madrasah Tahfiz, educating over 750 students across modern campuses equipped with high-speed robotics labs, science facilities, and serene recitation halls.
            </p>

            <div className="pt-4 p-5 bg-sky-50 rounded-2xl border border-sky-200 space-y-3">
              <div className="flex items-center space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                  alt="Dr. Abubakar Al-Mansoor"
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary-500"
                />
                <div>
                  <div className="font-bold text-royal-950 text-sm">Dr. Abubakar Al-Mansoor</div>
                  <div className="text-xs text-slate-500 font-medium">Founder & Chairman, Governing Board</div>
                </div>
              </div>
              <p className="text-xs text-slate-700 italic leading-relaxed">
                "Our promise to parents is simple yet sacred: We do not compromise on academic excellence, nor do we compromise on moral character and faith."
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
                alt="Plan Aid Campus Assembly"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Core Values */}
      <section className="bg-royal-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary-500/20 text-primary-300 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                To nurture balanced, highly competent, and morally grounded global citizens by delivering premier STEM technology education, WAEC distinction academics, and authentic Islamic character formation.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                To be West Africa’s foremost model school for integrated scientific innovation and Islamic educational excellence — producing leaders who engineer solutions for humanity with faith and integrity.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="space-y-6 pt-4">
            <h3 className="text-xl font-bold text-center text-primary-300 uppercase tracking-widest text-xs">
              Our Core Pillars & Values
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="text-lg font-bold text-white">Excellence</div>
                <div className="text-xs text-slate-400">Uncompromising academic standard</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="text-lg font-bold text-emerald-400">Integrity</div>
                <div className="text-xs text-slate-400">Moral truthfulness & Akhlaq</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="text-lg font-bold text-primary-400">Innovation</div>
                <div className="text-xs text-slate-400">STEM robotics & creative thinking</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="text-lg font-bold text-amber-400">Faith</div>
                <div className="text-xs text-slate-400">Spiritual grounding & Quran</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Facilities Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-primary-500 uppercase tracking-wider">World-Class Environment</span>
          <h2 className="text-3xl font-extrabold text-royal-950">Campus Facilities Overview</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
              alt="Robotics Lab"
              className="w-full h-48 object-cover rounded-xl"
            />
            <h3 className="text-lg font-bold text-royal-950">STEM & Robotics Innovation Hub</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Equipped with Arduino micro-controllers, Lego Mindstorms, 3D printers, high-speed fiber internet, and electronics soldering stations.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <img
              src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=600&q=80"
              alt="Madrasah Recitation Hall"
              className="w-full h-48 object-cover rounded-xl"
            />
            <h3 className="text-lg font-bold text-royal-950">Madrasah Tahfiz & Recitation Complex</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Air-conditioned audio-visual Quran lab with Tajweed acoustic isolation for individual memorization recording and review.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
            <img
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80"
              alt="Science Labs"
              className="w-full h-48 object-cover rounded-xl"
            />
            <h3 className="text-lg font-bold text-royal-950">Science & Multi-purpose Assembly Hall</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dedicated Physics, Chemistry, and Biology laboratories compliant with WAEC & NECO practical examination standards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
