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
  Phone, 
  Mail,
  MapPin
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { role, setRole } = useAuth();
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
      {/* Serene Utility Top Bar */}
      <div className="bg-[#1B2A4A] text-slate-200 text-xs py-2 px-4 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Institutional Contact Quick Links */}
          <div className="flex items-center space-x-6 text-[11px] sm:text-xs">
            <span className="flex items-center text-slate-300">
              <Phone className="w-3.5 h-3.5 mr-1.5 text-[#0F8B9E]" />
              +234 800 PLAN AID (7526 243)
            </span>
            <span className="hidden md:flex items-center text-slate-300">
              <Mail className="w-3.5 h-3.5 mr-1.5 text-[#0F8B9E]" />
              admissions@planaidacademy.edu.ng
            </span>
            <span className="hidden lg:flex items-center text-slate-300">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-[#0F8B9E]" />
              Kano • Kaduna • Abuja Campuses
            </span>
          </div>
          
          {/* Subtle Demo Role Selector */}
          <div className="flex items-center space-x-2 text-[11px]">
            <span className="text-slate-400 hidden md:inline">Demo Role:</span>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as any)}
              className="bg-[#15223c] text-slate-200 text-[11px] border border-slate-700 rounded px-2 py-0.5 focus:outline-none focus:border-[#0F8B9E]"
            >
              <option value="student_parent">Student / Parent</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
              <option value="super_admin">Super Admin</option>
            </select>
            <Link
              href={role === 'super_admin' ? '/portal/super-admin' : role === 'student_parent' ? '/portal/student' : `/portal/${role}`}
              className="px-2.5 py-0.5 bg-[#0F8B9E] hover:bg-[#0d7788] text-white rounded text-[11px] font-semibold flex items-center transition shrink-0"
            >
              <LayoutDashboard className="w-3 h-3 mr-1" /> Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Clean Institutional Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-200' : 'bg-white py-4 border-b border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* School Identity */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-[#1B2A4A] flex items-center justify-center text-white shadow-sm">
                <GraduationCap className="w-6 h-6 text-[#0F8B9E]" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight tracking-tight text-[#1B2A4A]">
                  PLAN AID ACADEMY
                </span>
                <span className="text-[10px] font-medium tracking-wider text-slate-500 uppercase">
                  Academics • STEM • Character
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors ${
                  pathname === '/' ? 'text-[#0F8B9E] font-semibold border-b-2 border-[#0F8B9E] pb-1' : 'text-slate-700 hover:text-[#0F8B9E]'
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-sm font-medium transition-colors ${
                  pathname === '/about' ? 'text-[#0F8B9E] font-semibold border-b-2 border-[#0F8B9E] pb-1' : 'text-slate-700 hover:text-[#0F8B9E]'
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
                  className={`text-sm font-medium flex items-center space-x-1 py-1 transition-colors ${
                    pathname.startsWith('/academics') ? 'text-[#0F8B9E] font-semibold border-b-2 border-[#0F8B9E] pb-1' : 'text-slate-700 hover:text-[#0F8B9E]'
                  }`}
                >
                  <span>Academic Arms</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${academicsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {academicsDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-lg border border-slate-200 p-2 space-y-1 mt-1 z-50">
                    <Link
                      href="/academics/primary"
                      className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-slate-50 transition"
                    >
                      <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-[#0F8B9E] mt-0.5">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#1B2A4A]">Primary School</div>
                        <div className="text-xs text-slate-500">Foundational STEM & Literacy</div>
                      </div>
                    </Link>

                    <Link
                      href="/academics/secondary"
                      className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-slate-50 transition"
                    >
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-700 mt-0.5">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#1B2A4A]">Secondary College</div>
                        <div className="text-xs text-slate-500">WAEC/NECO & Robotics Lab</div>
                      </div>
                    </Link>

                    <Link
                      href="/academics/madrasah"
                      className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-slate-50 transition"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 mt-0.5">
                        <span className="font-arabic font-bold text-sm">قرآن</span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#1B2A4A]">Madrasah Tahfiz</div>
                        <div className="text-xs text-slate-500">Hifz, Tajweed & Arabic</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/admissions"
                className={`text-sm font-medium transition-colors ${
                  pathname === '/admissions' ? 'text-[#0F8B9E] font-semibold border-b-2 border-[#0F8B9E] pb-1' : 'text-slate-700 hover:text-[#0F8B9E]'
                }`}
              >
                Admissions
              </Link>
              <Link
                href="/gallery"
                className={`text-sm font-medium transition-colors ${
                  pathname === '/gallery' ? 'text-[#0F8B9E] font-semibold border-b-2 border-[#0F8B9E] pb-1' : 'text-slate-700 hover:text-[#0F8B9E]'
                }`}
              >
                Gallery
              </Link>
              <Link
                href="/news"
                className={`text-sm font-medium transition-colors ${
                  pathname === '/news' ? 'text-[#0F8B9E] font-semibold border-b-2 border-[#0F8B9E] pb-1' : 'text-slate-700 hover:text-[#0F8B9E]'
                }`}
              >
                News
              </Link>
              <Link
                href="/contact"
                className={`text-sm font-medium transition-colors ${
                  pathname === '/contact' ? 'text-[#0F8B9E] font-semibold border-b-2 border-[#0F8B9E] pb-1' : 'text-slate-700 hover:text-[#0F8B9E]'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Action CTAs */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                href="/admissions"
                className="px-4 py-2 text-sm font-bold text-white bg-[#0F8B9E] hover:bg-[#0d7788] rounded-lg transition shadow-xs"
              >
                Apply Now
              </Link>
              <Link
                href={role === 'super_admin' ? '/portal/super-admin' : role === 'student_parent' ? '/portal/student' : `/portal/${role}`}
                className="px-4 py-2 text-sm font-semibold text-white bg-[#1B2A4A] hover:bg-[#15223c] rounded-lg transition flex items-center space-x-1.5"
              >
                <UserCheck className="w-4 h-4 text-[#0F8B9E]" />
                <span>Portal Login</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <Link
                href={role === 'super_admin' ? '/portal/super-admin' : role === 'student_parent' ? '/portal/student' : `/portal/${role}`}
                className="px-3 py-1.5 text-xs font-semibold text-white bg-[#1B2A4A] rounded-lg"
              >
                Portal
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-[#0F8B9E] rounded-lg hover:bg-slate-100 transition"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 border-b border-slate-100"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 border-b border-slate-100"
            >
              About Us
            </Link>

            <div className="py-2 space-y-2 border-b border-slate-100">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Academic Arms</div>
              <Link
                href="/academics/primary"
                onClick={() => setMobileMenuOpen(false)}
                className="block pl-3 py-1 text-sm text-slate-700 hover:text-[#0F8B9E]"
              >
                • Primary Education
              </Link>
              <Link
                href="/academics/secondary"
                onClick={() => setMobileMenuOpen(false)}
                className="block pl-3 py-1 text-sm text-slate-700 hover:text-[#0F8B9E]"
              >
                • Secondary College (WAEC/NECO)
              </Link>
              <Link
                href="/academics/madrasah"
                onClick={() => setMobileMenuOpen(false)}
                className="block pl-3 py-1 text-sm text-slate-700 hover:text-emerald-700 font-medium"
              >
                • Madrasah Tahfiz (Hifz)
              </Link>
            </div>

            <Link
              href="/admissions"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 border-b border-slate-100"
            >
              Admissions
            </Link>
            <Link
              href="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 border-b border-slate-100"
            >
              Gallery
            </Link>
            <Link
              href="/news"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 border-b border-slate-100"
            >
              News & Events
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800"
            >
              Contact Us
            </Link>

            <div className="pt-3 flex flex-col space-y-2">
              <Link
                href="/admissions"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-sm font-bold text-white bg-[#0F8B9E] rounded-lg shadow-xs"
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
