'use client';

import React, { useState } from 'react';
import { useAuth } from '@/lib/authContext';
import { UserRole } from '@/lib/types';
import { 
  Bell, 
  Search, 
  ShieldCheck, 
  UserCheck, 
  Sparkles, 
  ChevronDown,
  LogOut,
  User,
  GraduationCap,
  Users,
  BookOpen,
  Calculator,
  Menu
} from 'lucide-react';
import Link from 'next/link';

interface PortalHeaderProps {
  onToggleMobileSidebar?: () => void;
}

export const PortalHeader: React.FC<PortalHeaderProps> = ({ onToggleMobileSidebar }) => {
  const { currentUser, role, setRole, logout } = useAuth();
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const roleLabels: Record<UserRole, { title: string; badge: string; color: string }> = {
    super_admin: { title: 'Super Admin', badge: 'Full Control', color: 'bg-rose-500' },
    admin: { title: 'Administrator', badge: 'Operations', color: 'bg-royal-600' },
    teacher: { title: 'Teacher Workspace', badge: 'Academics', color: 'bg-primary-500' },
    student_parent: { title: 'Student & Parent', badge: 'Family View', color: 'bg-emerald-600' },
  };

  const handleRoleSelect = (newRole: UserRole) => {
    setRole(newRole);
    setRoleDropdownOpen(false);
  };

  return (
    <header className="bg-white border-b border-slate-200 py-3 px-3 sm:px-6 flex items-center justify-between sticky top-0 z-40 shadow-xs">
      {/* Left Title / Mobile Toggle / Quick Search */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        {onToggleMobileSidebar && (
          <button
            onClick={onToggleMobileSidebar}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition"
            aria-label="Open Mobile Menu"
          >
            <Menu className="w-5 h-5 text-royal-950" />
          </button>
        )}

        <div className="flex items-center space-x-2">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider hidden sm:inline">Session:</span>
          <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-royal-50 border border-royal-100 rounded-lg text-[11px] sm:text-xs font-extrabold text-royal-900">
            2025/2026 • Term 3
          </span>
        </div>

        {/* Global Search */}
        <div className="relative hidden md:block w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search students, staff, classes, or fees..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-primary-500 transition"
          />
        </div>
      </div>

      {/* Right User Actions & Role Switcher */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        {/* Role Switcher Dropdown */}
        <div className="relative">
          <button
            onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
            className="flex items-center space-x-1.5 sm:space-x-2 px-2.5 sm:px-3 py-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition text-[11px] sm:text-xs font-bold text-royal-950"
          >
            <div className={`w-2 h-2 rounded-full ${roleLabels[role].color} animate-pulse shrink-0`} />
            <span className="hidden sm:inline text-slate-500 font-normal">Switch View:</span>
            <span className="font-extrabold max-w-[85px] sm:max-w-none truncate">{roleLabels[role].title}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          </button>

          {roleDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 space-y-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                Switch Portal Dashboard View
              </div>

              <button
                onClick={() => handleRoleSelect('super_admin')}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-bold transition ${
                  role === 'super_admin' ? 'bg-rose-50 text-rose-900 border border-rose-200' : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-rose-600" />
                  <span>Super Admin</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-rose-100 text-rose-800">Full Access</span>
              </button>

              <button
                onClick={() => handleRoleSelect('admin')}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-bold transition ${
                  role === 'admin' ? 'bg-royal-50 text-royal-900 border border-royal-200' : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-royal-600" />
                  <span>Administrator</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-royal-100 text-royal-800">Records & Fees</span>
              </button>

              <button
                onClick={() => handleRoleSelect('teacher')}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-bold transition ${
                  role === 'teacher' ? 'bg-sky-50 text-sky-900 border border-sky-200' : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Calculator className="w-4 h-4 text-primary-600" />
                  <span>Teacher</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-sky-100 text-sky-800">Score Entry</span>
              </button>

              <button
                onClick={() => handleRoleSelect('student_parent')}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-bold transition ${
                  role === 'student_parent' ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  <span>Student & Parent</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">Family View</span>
              </button>
            </div>
          )}
        </div>

        {/* Notification Bell with Red Badge (1) */}
        <button 
          onClick={() => alert("1 New Notification: Term 1 Gradebook score entry finalized for Primary 5 A.")}
          className="relative p-2 text-slate-600 hover:text-[#0c1427] hover:bg-slate-100 rounded-xl transition"
          title="1 New Notification"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white rounded-full text-[9px] font-black flex items-center justify-center border border-white">
            1
          </span>
        </button>

        {/* User Profile */}
        <div className="relative">
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="flex items-center space-x-2.5 pl-2 border-l border-slate-200"
          >
            <img
              src={currentUser?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
              alt={currentUser?.name || 'User'}
              className="w-9 h-9 rounded-full object-cover border-2 border-primary-400 shadow-xs"
            />
            <div className="hidden lg:block text-left">
              <div className="text-xs font-bold text-royal-950 leading-tight">{currentUser?.name}</div>
              <div className="text-[10px] text-slate-500 font-medium capitalize">{role.replace('_', ' ')}</div>
            </div>
          </button>

          {userMenuOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 space-y-1 z-50 animate-in fade-in duration-150">
              <div className="p-3 border-b border-slate-100">
                <div className="text-xs font-bold text-royal-950">{currentUser?.name}</div>
                <div className="text-[10px] text-slate-500 font-mono">{currentUser?.email}</div>
              </div>
              <Link
                href="/"
                className="flex items-center space-x-2 p-2 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-50 transition"
              >
                <Sparkles className="w-4 h-4 text-primary-500" />
                <span>Public Website</span>
              </Link>
              <button
                onClick={logout}
                className="w-full flex items-center space-x-2 p-2 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 transition"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
