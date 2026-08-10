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
  Calendar,
  Award,
  ChevronRight,
  ShieldCheck,
  Megaphone,
  ArrowLeft
} from 'lucide-react';

interface PortalSidebarProps {
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export const PortalSidebar: React.FC<PortalSidebarProps> = ({ mobileOpen, onCloseMobile }) => {
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
          { group: 'MANAGEMENT', items: [
            { href: '/portal/admin', label: 'Student Directory & Staff', icon: Users },
            { href: '/portal/admin#fees', label: 'Tuition Fees Ledger', icon: CreditCard },
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

  const sidebarContent = (
    <div className="flex flex-col h-full justify-between p-4 bg-[#1B2A4A] text-white">
      <div className="space-y-6">
        {/* Identity Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-700">
          <Link href="/" onClick={onCloseMobile} className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#0F8B9E] text-white flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-bold text-xs tracking-tight text-white leading-tight">PLAN AID ACADEMY</h1>
              <p className="text-[10px] text-slate-300 font-medium uppercase">PORTAL DASHBOARD</p>
            </div>
          </Link>
          {onCloseMobile && (
            <button
              onClick={onCloseMobile}
              className="lg:hidden p-1 rounded text-slate-400 hover:text-white"
              aria-label="Close Mobile Sidebar"
            >
              <LogOut className="w-4 h-4 rotate-180" />
            </button>
          )}
        </div>

        {/* User Card */}
        <div className="bg-slate-800/80 rounded-lg p-3 border border-slate-700 flex items-center space-x-3">
          <img
            src={currentUser?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
            alt={currentUser?.name || 'User'}
            className="w-8 h-8 rounded-full object-cover border border-[#0F8B9E] shrink-0"
          />
          <div className="overflow-hidden">
            <div className="text-xs font-bold text-white truncate">{currentUser?.name || 'Authorized User'}</div>
            <div className="text-[10px] text-[#0F8B9E] font-semibold truncate capitalize">{role.replace('_', ' ')}</div>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-5">
          {navGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-1.5">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2">
                {group.group}
              </div>
              <div className="space-y-1">
                {group.items.map((item, itemIdx) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href || (item.href.includes('#') && pathname === item.href.split('#')[0]);

                  return (
                    <Link
                      key={itemIdx}
                      href={item.href}
                      onClick={onCloseMobile}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition ${
                        isActive
                          ? 'bg-[#0F8B9E] text-white shadow-xs'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center space-x-2.5 truncate">
                        <Icon className="w-4 h-4 shrink-0" />
                        <span className="truncate">{item.label}</span>
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 opacity-60 ${isActive ? 'inline' : 'hidden'}`} />
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Footer Navigation Back to Main Website */}
      <div className="pt-4 border-t border-slate-700 space-y-2">
        <Link
          href="/"
          onClick={onCloseMobile}
          className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition"
        >
          <div className="flex items-center space-x-2">
            <ArrowLeft className="w-4 h-4 text-[#0F8B9E]" />
            <span>Return to School Website</span>
          </div>
        </Link>

        <button
          onClick={logout}
          className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-rose-300 hover:bg-rose-950/40 hover:text-rose-200 transition"
        >
          <div className="flex items-center space-x-2">
            <LogOut className="w-4 h-4" />
            <span>Sign Out of Portal</span>
          </div>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Permanent Sidebar */}
      <aside className="hidden lg:block w-64 bg-[#1B2A4A] h-screen sticky top-0 shrink-0 z-30">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" onClick={onCloseMobile} />
          <aside className="relative w-72 bg-[#1B2A4A] h-full shadow-2xl z-50">
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
};
