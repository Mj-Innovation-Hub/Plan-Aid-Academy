'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  Globe
} from 'lucide-react';

export const Footer: React.FC = () => {
  const pathname = usePathname();
  if (pathname?.startsWith('/portal')) return null;

  return (
    <footer className="bg-[#1B2A4A] text-white border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: School Identity & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-[#0F8B9E] flex items-center justify-center text-white">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-xl tracking-tight text-white">PLAN AID ACADEMY</h3>
                <p className="text-xs text-slate-300 font-medium">Kano • Kaduna • Abuja Campuses</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              Nurturing Academic Excellence, STEM Robotics Innovation, and Islamic Moral Character. Preparing future leaders for lifelong success and societal impact.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <div className="flex items-center space-x-1.5 px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-xs text-emerald-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>WAEC & NECO Accredited</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-xs text-[#0F8B9E]">
                <Globe className="w-4 h-4 text-[#0F8B9E]" />
                <span>STEM & Hifz Certified</span>
              </div>
            </div>
          </div>

          {/* Col 2: Academic Arms */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs text-[#0F8B9E] uppercase tracking-wider">Academic Arms</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/academics/primary" className="hover:text-white transition flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-1 text-[#0F8B9E]" /> Primary School
                </Link>
              </li>
              <li>
                <Link href="/academics/secondary" className="hover:text-white transition flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-1 text-[#0F8B9E]" /> Secondary College
                </Link>
              </li>
              <li>
                <Link href="/academics/madrasah" className="hover:text-white transition flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-1 text-[#0F8B9E]" /> Madrasah Tahfiz
                </Link>
              </li>
              <li>
                <Link href="/academics/secondary#stem" className="hover:text-white transition flex items-center">
                  <ArrowRight className="w-3.5 h-3.5 mr-1 text-[#0F8B9E]" /> STEM Robotics Lab
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs text-[#0F8B9E] uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/about" className="hover:text-white transition">About Our School</Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-white transition">Admissions & Fees</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition">Campus Life Gallery</Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition">Announcements</Link>
              </li>
              <li>
                <Link href="/portal/login" className="text-[#0F8B9E] font-medium hover:underline transition">
                  Staff & Parent Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs text-[#0F8B9E] uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#0F8B9E] shrink-0 mt-0.5" />
                <span>No. 14 Airport Road, GRA, Kano State, Nigeria</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#0F8B9E] shrink-0" />
                <span>+234 800 PLAN AID (7526 243)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#0F8B9E] shrink-0" />
                <span>admissions@planaidacademy.edu.ng</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#0F8B9E] shrink-0" />
                <span>Mon - Fri: 7:30 AM - 4:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-700/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 space-y-4 md:space-y-0">
          <div>
            © {new Date().getFullYear()} Plan Aid Academy. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/contact" className="hover:text-slate-200 transition">Contact Us</Link>
            <Link href="/admissions" className="hover:text-slate-200 transition">Apply Now</Link>
            <Link href="/portal/login" className="hover:text-slate-200 transition">Portal Sign-in</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
