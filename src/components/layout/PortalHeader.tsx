'use client';

import React, { useState } from 'react';
import { useAuth } from '@/lib/authContext';
import { UserRole } from '@/lib/types';
import { 
  Search, 
  ChevronDown,
  Menu,
  ShieldCheck,
  Users,
  Award,
  BookOpen
} from 'lucide-react';

interface PortalHeaderProps {
  onToggleMobileSidebar?: () => void;
}

export const PortalHeader: React.FC<PortalHeaderProps> = ({ onToggleMobileSidebar }) => {
  const { currentUser, role, setRole, logout } = useAuth();
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const roleLabels: Record<UserRole, { title: string; badge: string; icon: any }> = {
    super_admin: { title: 'Super Admin', badge: 'Full Control', icon: ShieldCheck },
    admin: { title: 'Administrator', badge: 'Operations', icon: Users },
    teacher: { title: 'Teacher Workspace', badge: 'Academics', icon: Award },
    student_parent: { title: 'Student & Parent', badge: 'Family View', icon: BookOpen },
  };

  const handleRoleSelect = (newRole: UserRole) => {
    setRole(newRole);
    setRoleDropdownOpen(false);
  };

  const CurrentIcon = roleLabels[role].icon;

  return (
    <header className="bg-white border-b border-slate-200 py-3 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-40 shadow-xs">
      {/* Left Title / Mobile Toggle / Session Badge */}
      <div className="flex items-center space-x-3">
        {onToggleMobileSidebar && (
          <button
            onClick={onToggleMobileSidebar}
            className="lg:hidden p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 transition"
            aria-label="Open Mobile Menu"
          >
            <Menu className="w-5 h-5 text-[#1B2A4A]" />
          </button>
        )}

        <div className="flex items-center space-x-2">
          <span className="text-xs font-semibold text-slate-500 hidden sm:inline">Active Session:</span>
          <span className="px-2.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-xs font-bold text-[#1B2A4A]">
            2025/2026 • Term 3
          </span>
        </div>

        {/* Quick Global Search */}
        <div className="relative hidden md:block w-64 lg:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search students, staff, classes, or fees..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#0F8B9E] transition"
          />
        </div>
      </div>

      {/* Right User Actions & Role Switcher */}
      <div className="flex items-center space-x-3">
        {/* Role Switcher Dropdown */}
        <div className="relative">
          <button
            onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
            className="flex items-center space-x-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition text-xs font-semibold text-[#1B2A4A]"
          >
            <CurrentIcon className="w-4 h-4 text-[#0F8B9E]" />
            <span className="hidden sm:inline text-slate-500 font-normal">Role:</span>
            <span className="font-bold">{roleLabels[role].title}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          {roleDropdownOpen && (
            <div className="absolute right-0 mt-2 w-60 bg-white rounded-xl shadow-lg border border-slate-200 p-2 space-y-1 z-50">
              <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                Switch Portal Dashboard View
              </div>

              <button
                onClick={() => handleRoleSelect('super_admin')}
                className={`w-full flex items-center justify-between p-2 rounded-lg text-xs font-semibold transition ${
                  role === 'super_admin' ? 'bg-sky-50 text-[#0F8B9E] font-bold' : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#0F8B9E]" />
                  <span>Super Admin</span>
                </div>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 text-slate-700">Full Access</span>
              </button>

              <button
                onClick={() => handleRoleSelect('admin')}
                className={`w-full flex items-center justify-between p-2 rounded-lg text-xs font-semibold transition ${
                  role === 'admin' ? 'bg-sky-50 text-[#0F8B9E] font-bold' : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-[#0F8B9E]" />
                  <span>Administrator</span>
                </div>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 text-slate-700">Operations</span>
              </button>

              <button
                onClick={() => handleRoleSelect('teacher')}
                className={`w-full flex items-center justify-between p-2 rounded-lg text-xs font-semibold transition ${
                  role === 'teacher' ? 'bg-sky-50 text-[#0F8B9E] font-bold' : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-[#0F8B9E]" />
                  <span>Teacher Workspace</span>
                </div>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 text-slate-700">Academics</span>
              </button>

              <button
                onClick={() => handleRoleSelect('student_parent')}
                className={`w-full flex items-center justify-between p-2 rounded-lg text-xs font-semibold transition ${
                  role === 'student_parent' ? 'bg-emerald-50 text-emerald-800 font-bold' : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  <span>Student & Parent</span>
                </div>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">Family</span>
              </button>
            </div>
          )}
        </div>

        {/* Current User Info */}
        <div className="flex items-center space-x-2 pl-2 border-l border-slate-200">
          <img
            src={currentUser?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
            alt={currentUser?.name || 'User'}
            className="w-8 h-8 rounded-full object-cover border border-slate-200"
          />
          <div className="hidden lg:block text-left">
            <div className="text-xs font-bold text-[#1B2A4A] leading-tight">{currentUser?.name || 'User'}</div>
            <div className="text-[10px] text-slate-500 font-medium capitalize">{role.replace('_', ' ')}</div>
          </div>
        </div>
      </div>
    </header>
  );
};
