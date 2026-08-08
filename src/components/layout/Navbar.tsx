'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/lib/authContext';
import { 
  BookOpen, 
  Cpu, 
  GraduationCap, 
  Menu, 
  X, 
  ChevronDown, 
  UserCheck, 
  LayoutDashboard, 
  PhoneCall, 
  Calendar,
  Sparkles,
  ShieldAlert
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { currentUser, role, setRole } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [academicsDropdownOpen, setAcademicsDropdownOpen] = useState(false);

  // If in portal, Navbar is handled inside PortalLayout
  const isPortal = pathname?.startsWith('/portal');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isPortal) return null;

  return (
    <>
      {/* Top Demo Bar for easy Role Testing */}
      <div className="bg-royal-950 text-white text-xs py-1.5 px-3 sm:px-4 flex flex-col sm:flex-row items-center justify-between border-b border-royal-800/50 gap-1.5 sm:gap-0">
        <div className="flex items-center space-x-2 shrink-0">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-primary-500 text-white">
            <Sparkles className="w-3 h-3 mr-1 animate-pulse" /> Live Portal Preview
          </span>
          <span className="hidden md:inline text-slate-300">Switch role to test portal dashboards:</span>
        </div>
        
        <div className="flex items-center space-x-1.5 overflow-x-auto max-w-full pb-0.5 sm:pb-0 scrollbar-none">
          <button
            onClick={() => setRole('super_admin')}
            className={`px-2 py-0.5 rounded transition text-[10px] sm:text-[11px] font-medium whitespace-nowrap ${
              role === 'super_admin' ? 'bg-royal-500 text-white shadow-xs' : 'bg-royal-900/60 text-slate-300 hover:text-white'
            }`}
          >
            Super Admin
          </button>
          <button
            onClick={() => setRole('admin')}
            className={`px-2 py-0.5 rounded transition text-[10px] sm:text-[11px] font-medium whitespace-nowrap ${
              role === 'admin' ? 'bg-royal-500 text-white shadow-xs' : 'bg-royal-900/60 text-slate-300 hover:text-white'
            }`}
          >
            Admin
          </button>
          <button
            onClick={() => setRole('teacher')}
            className={`px-2 py-0.5 rounded transition text-[10px] sm:text-[11px] font-medium whitespace-nowrap ${
              role === 'teacher' ? 'bg-royal-500 text-white shadow-xs' : 'bg-royal-900/60 text-slate-300 hover:text-white'
            }`}
          >
            Teacher
          </button>
          <button
            onClick={() => setRole('student_parent')}
            className={`px-2 py-0.5 rounded transition text-[10px] sm:text-[11px] font-medium whitespace-nowrap ${
              role === 'student_parent' ? 'bg-royal-500 text-white shadow-xs' : 'bg-royal-900/60 text-slate-300 hover:text-white'
            }`}
          >
            Student / Parent
          </button>
          <Link
            href={role === 'super_admin' ? '/portal/super-admin' : role === 'student_parent' ? '/portal/student' : `/portal/${role}`}
            className="ml-1 sm:ml-2 px-2 py-0.5 sm:px-2.5 bg-primary-400 hover:bg-primary-500 text-royal-950 rounded font-semibold text-[10px] sm:text-[11px] flex items-center transition shadow-xs whitespace-nowrap shrink-0"
          >
            <LayoutDashboard className="w-3 h-3 mr-1" /> Portal
          </Link>
        </div>
      </div>

      {/* Main Responsive Floating Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass-nav shadow-soft py-2.5' : 'bg-white/90 backdrop-blur-md py-4 border-b border-primary-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Brand */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-royal-700 via-primary-500 to-primary-300 p-0.5 shadow-md group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-royal-950 rounded-[10px] flex items-center justify-center text-primary-300">
                  <GraduationCap className="w-6 h-6 text-primary-300" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight tracking-tight text-royal-950 group-hover:text-primary-500 transition-colors">
                  PLAN AID ACADEMY
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-royal-600 uppercase">
                  Academics • STEM • Faith
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors ${
                  pathname === '/' ? 'text-primary-500 font-semibold' : 'text-slate-700 hover:text-primary-500'
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-sm font-medium transition-colors ${
                  pathname === '/about' ? 'text-primary-500 font-semibold' : 'text-slate-700 hover:text-primary-500'
                }`}
              >
                About Us
              </Link>

              {/* Academics Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setAcademicsDropdownOpen(true)}
                onMouseLeave={() => setAcademicsDropdownOpen(false)}
              >
                <button
                  className={`text-sm font-medium flex items-center space-x-1 py-2 transition-colors ${
                    pathname.startsWith('/academics') ? 'text-primary-500 font-semibold' : 'text-slate-700 hover:text-primary-500'
                  }`}
                >
                  <span>Academic Arms</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${academicsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {academicsDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-primary-100 p-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
                    <Link
                      href="/academics/primary"
                      className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-primary-50 transition"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600 mt-0.5">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-royal-950">Primary Education</div>
                        <div className="text-xs text-slate-500">Ages 5–11 • Foundational STEM</div>
                      </div>
                    </Link>

                    <Link
                      href="/academics/secondary"
                      className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-royal-50 transition"
                    >
                      <div className="w-8 h-8 rounded-lg bg-royal-100 flex items-center justify-center text-royal-600 mt-0.5">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-royal-950">Secondary College</div>
                        <div className="text-xs text-slate-500">Ages 11–17 • WAEC/NECO Prep</div>
                      </div>
                    </Link>

                    <Link
                      href="/academics/madrasah"
                      className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-emerald-50 transition"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 mt-0.5">
                        <span className="font-arabic font-bold text-sm">قرآن</span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-royal-950">Madrasah Tahfiz</div>
                        <div className="text-xs text-slate-500">Hifz, Tajweed & Arabic</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/admissions"
                className={`text-sm font-medium transition-colors ${
                  pathname === '/admissions' ? 'text-primary-500 font-semibold' : 'text-slate-700 hover:text-primary-500'
                }`}
              >
                Admissions
              </Link>
              <Link
                href="/gallery"
                className={`text-sm font-medium transition-colors ${
                  pathname === '/gallery' ? 'text-primary-500 font-semibold' : 'text-slate-700 hover:text-primary-500'
                }`}
              >
                Gallery
              </Link>
              <Link
                href="/news"
                className={`text-sm font-medium transition-colors ${
                  pathname === '/news' ? 'text-primary-500 font-semibold' : 'text-slate-700 hover:text-primary-500'
                }`}
              >
                News & Events
              </Link>
              <Link
                href="/contact"
                className={`text-sm font-medium transition-colors ${
                  pathname === '/contact' ? 'text-primary-500 font-semibold' : 'text-slate-700 hover:text-primary-500'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Call To Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                href="/admissions"
                className="px-4 py-2 text-xs sm:text-sm font-extrabold text-white bg-[#0F8B9E] hover:bg-[#0d7788] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center space-x-1 cursor-pointer active:scale-95"
              >
                <span>Apply Now</span>
              </Link>
              <Link
                href={role === 'super_admin' ? '/portal/super-admin' : role === 'student_parent' ? '/portal/student' : `/portal/${role}`}
                className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-royal-600 via-royal-700 to-royal-900 rounded-xl hover:shadow-lg hover:shadow-royal-500/20 transition duration-300 flex items-center space-x-1.5"
              >
                <UserCheck className="w-4 h-4" />
                <span>Portal Login</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <Link
                href={role === 'super_admin' ? '/portal/super-admin' : role === 'student_parent' ? '/portal/student' : `/portal/${role}`}
                className="px-3 py-1.5 text-xs font-semibold text-white bg-royal-700 rounded-lg"
              >
                Portal
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-primary-500 rounded-lg hover:bg-slate-100 transition"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-300">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-800 border-b border-slate-100"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-800 border-b border-slate-100"
            >
              About Us
            </Link>

            <div className="py-2 space-y-2 border-b border-slate-100">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Academic Arms</div>
              <Link
                href="/academics/primary"
                onClick={() => setMobileMenuOpen(false)}
                className="block pl-3 py-1.5 text-sm text-slate-700 hover:text-primary-500"
              >
                • Primary (Basic Education)
              </Link>
              <Link
                href="/academics/secondary"
                onClick={() => setMobileMenuOpen(false)}
                className="block pl-3 py-1.5 text-sm text-slate-700 hover:text-primary-500"
              >
                • Secondary (High School)
              </Link>
              <Link
                href="/academics/madrasah"
                onClick={() => setMobileMenuOpen(false)}
                className="block pl-3 py-1.5 text-sm text-slate-700 hover:text-emerald-700 font-semibold"
              >
                • Madrasah Tahfiz (الابتدائية)
              </Link>
            </div>

            <Link
              href="/admissions"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-800 border-b border-slate-100"
            >
              Admissions
            </Link>
            <Link
              href="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-800 border-b border-slate-100"
            >
              Gallery
            </Link>
            <Link
              href="/news"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-800 border-b border-slate-100"
            >
              News & Events
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-800"
            >
              Contact Us
            </Link>

            <div className="pt-3 flex flex-col space-y-2">
              <Link
                href="/admissions"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-sm font-extrabold text-white bg-[#0F8B9E] hover:bg-[#0d7788] rounded-xl shadow-md"
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
