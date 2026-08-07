'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/lib/authContext';
import { 
  GraduationCap, 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Calculator, 
  Kanban, 
  CreditCard, 
  LogOut, 
  Sparkles,
  Calendar,
  Award,
  ChevronRight,
  ShieldCheck,
  Building2,
  FileText,
  Megaphone,
  Settings
} from 'lucide-react';

export const PortalSidebar: React.FC = () => {
  const pathname = usePathname();
  const { currentUser, role, logout } = useAuth();

  const getRoleNavLinks = () => {
    switch (role) {
      case 'super_admin':
        return [
          { group: 'GOVERNANCE', items: [
            { href: '/portal/super-admin', label: 'System Overview & Controls', icon: LayoutDashboard },
            { href: '/portal/super-admin/results', label: 'Results & Gradebook Grid', icon: Calculator },
            { href: '/portal/super-admin/crm', label: 'Admissions CRM Funnel', icon: Kanban },
          ]},
          { group: 'SCHOOL MANAGEMENT', items: [
            { href: '/portal/admin', label: 'Student Directory & Staff', icon: Users },
            { href: '/portal/admin#fees', label: 'Tuition Fees Ledger', icon: CreditCard },
            { href: '/portal/admin#announcements', label: 'Announcements & News', icon: Megaphone },
          ]}
        ];

      case 'admin':
        return [
          { group: 'MAIN NAVIGATION', items: [
            { href: '/portal/admin', label: 'Dashboard', icon: LayoutDashboard },
            { href: '/portal/admin#students', label: 'Students Directory', icon: Users },
            { href: '/portal/admin#teachers', label: 'Staff & Teachers', icon: Award },
            { href: '/portal/admin/crm', label: 'Admissions / CRM', icon: Kanban },
            { href: '/portal/admin/results', label: 'Results / Gradebook', icon: Calculator },
            { href: '/portal/admin#fees', label: 'Fees & Accounting', icon: CreditCard },
            { href: '/portal/admin#announcements', label: 'Announcements', icon: Megaphone },
          ]}
        ];

      case 'teacher':
        return [
          { group: 'TEACHER WORKSPACE', items: [
            { href: '/portal/teacher', label: 'Teacher Dashboard', icon: LayoutDashboard },
            { href: '/portal/admin/results', label: 'Enter Subject Scores', icon: Calculator },
            { href: '/portal/teacher#roster', label: 'Class Rosters', icon: Users },
            { href: '/portal/teacher#schedule', label: 'Timetable', icon: Calendar },
          ]}
        ];

      case 'student_parent':
      default:
        return [
          { group: 'STUDENT & PARENT', items: [
            { href: '/portal/student', label: 'Dashboard', icon: LayoutDashboard },
            { href: '/portal/student#report-card', label: 'Latest Results', icon: Award },
            { href: '/portal/student#hifz', label: 'Madrasah Hifz Progress', icon: BookOpen },
            { href: '/portal/student#fees', label: 'Fee Status', icon: CreditCard },
          ]}
        ];
    }
  };

  const navGroups = getRoleNavLinks();

  return (
    <aside className="w-64 bg-[#1B2A4A] text-white flex flex-col justify-between min-h-screen border-r border-[#2a3e68] shadow-xl shrink-0">
      {/* Top Brand Identity */}
      <div className="p-5 space-y-6">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#0F8B9E] text-white flex items-center justify-center shadow-md">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-extrabold text-sm tracking-tight text-white leading-tight">PLAN AID ACADEMY</h1>
            <p className="text-[10px] text-teal-300 font-bold uppercase tracking-wider">Primary • Secondary • Madrasah</p>
          </div>
        </Link>

        {/* Current User Card */}
        <div className="bg-[#121c32] rounded-2xl p-3.5 border border-[#23355a] flex items-center space-x-3">
          <img
            src={currentUser?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
            alt={currentUser?.name || 'User'}
            className="w-9 h-9 rounded-full object-cover border-2 border-[#0F8B9E] shrink-0"
          />
          <div className="truncate">
            <div className="text-xs font-bold text-white truncate">{currentUser?.name}</div>
            <span className="inline-block text-[10px] font-extrabold text-teal-300 uppercase tracking-wider">
              {role.replace('_', ' ')}
            </span>
          </div>
        </div>

        {/* Navigation Links Grouped */}
        <nav className="space-y-5">
          {navGroups.map((group, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider px-3 mb-1.5">
                {group.group}
              </div>
              {group.items.map((link) => {
                const Icon = link.icon;
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-[#0F8B9E] text-white shadow-md font-bold'
                        : 'text-slate-300 hover:bg-[#23355a] hover:text-white'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className="w-4 h-4 text-teal-300" />
                      <span>{link.label}</span>
                    </div>
                    {isActive && <ChevronRight className="w-3.5 h-3.5 text-white" />}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>
      </div>

      {/* Footer Exit Button */}
      <div className="p-4 border-t border-[#2a3e68] space-y-2">
        <Link
          href="/"
          className="flex items-center space-x-2 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-[#23355a] rounded-xl transition"
        >
          <Sparkles className="w-4 h-4 text-teal-300" />
          <span>Public School Website</span>
        </Link>
        <button
          onClick={logout}
          className="w-full flex items-center space-x-2 px-3 py-2 text-xs font-semibold text-rose-400 hover:bg-rose-500/10 rounded-xl transition"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};
