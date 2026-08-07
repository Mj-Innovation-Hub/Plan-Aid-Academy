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
    <footer className="bg-royal-950 text-white relative overflow-hidden border-t-4 border-primary-400">
      {/* Background Subtle Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-royal-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: School Identity & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-400 to-royal-600 p-0.5">
                <div className="w-full h-full bg-royal-900 rounded-[10px] flex items-center justify-center text-primary-300">
                  <GraduationCap className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl tracking-tight text-white">PLAN AID ACADEMY</h3>
                <p className="text-xs text-primary-300 font-medium">Kano • Kaduna • Abuja Campus</p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              Nurturing Excellence in Academics, STEM Robotics & Character with sound Islamic moral orientation. Preparing future leaders for global impact.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-royal-900/80 border border-royal-800 text-xs font-medium text-emerald-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>WAEC & NECO Accredited</span>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-royal-900/80 border border-royal-800 text-xs font-medium text-primary-300">
                <Globe className="w-4 h-4 text-primary-400" />
                <span>STEM & Hifz Certified</span>
              </div>
            </div>
          </div>

          {/* Col 2: Academic Arms */}
          <div className="space-y-3">
            <h4 className="font-bold text-base text-primary-300 uppercase tracking-wider text-xs">Academic Arms</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/academics/primary" className="hover:text-primary-300 transition flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1 text-primary-400" /> Primary (Basic Ed)
                </Link>
              </li>
              <li>
                <Link href="/academics/secondary" className="hover:text-primary-300 transition flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1 text-primary-400" /> Secondary College
                </Link>
              </li>
              <li>
                <Link href="/academics/madrasah" className="hover:text-primary-300 transition flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1 text-primary-400" /> Madrasah Tahfiz
                </Link>
              </li>
              <li>
                <Link href="/academics/secondary#stem" className="hover:text-primary-300 transition flex items-center">
                  <ArrowRight className="w-3 h-3 mr-1 text-primary-400" /> STEM & Robotics Lab
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-base text-primary-300 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/about" className="hover:text-primary-300 transition">About Our School</Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-primary-300 transition">Admission Process</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-primary-300 transition">School Gallery</Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-primary-300 transition">News & Announcements</Link>
              </li>
              <li>
                <Link href="/portal/login" className="hover:text-primary-300 text-primary-300 font-medium transition">
                  Staff & Parent Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-3">
            <h4 className="font-bold text-base text-primary-300 uppercase tracking-wider text-xs">Contact Us</h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                <span>No. 14 Airport Road, GRA, Kano State, Nigeria</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                <span>+234 803 123 4567 / +234 802 987 6543</span>
              </div>
              <a
                href="https://wa.me/2348031234567?text=Hello%20Plan%20Aid%20Academy,%20I%20would%20like%20to%20inquire%20about%20admissions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-emerald-400 font-bold hover:text-emerald-300 transition"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>WhatsApp: +234 803 123 4567</span>
              </a>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                <span>admissions@planaid.edu.ng</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary-400 shrink-0" />
                <span>Mon - Fri: 7:30 AM - 4:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-royal-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 space-y-4 md:space-y-0">
          <div>
            © {new Date().getFullYear()} Plan Aid Academy. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-slate-200 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-200 transition">Terms of Service</Link>
            <Link href="/portal/login" className="hover:text-slate-200 transition">Portal Sign-in</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
