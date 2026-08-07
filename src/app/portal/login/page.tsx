'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/authContext';
import { UserRole } from '@/lib/types';
import { 
  GraduationCap, 
  Eye, 
  EyeOff, 
  Lock, 
  Mail, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  UserCheck
} from 'lucide-react';

export default function PortalLoginPage() {
  const router = useRouter();
  const { loginAs } = useAuth();
  
  const [selectedRole, setSelectedRole] = useState<UserRole>('admin');
  const [email, setEmail] = useState('admin@planaid.edu.ng');
  const [password, setPassword] = useState('••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleRoleSelect = (targetRole: UserRole) => {
    setSelectedRole(targetRole);
    loginAs(targetRole);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginAs(selectedRole);

    if (selectedRole === 'super_admin') {
      router.push('/portal/super-admin');
    } else if (selectedRole === 'admin') {
      router.push('/portal/admin');
    } else if (selectedRole === 'teacher') {
      router.push('/portal/teacher');
    } else {
      router.push('/portal/student');
    }
  };

  const handleQuickDemo = (demoRole: UserRole) => {
    handleRoleSelect(demoRole);
    if (demoRole === 'admin') router.push('/portal/admin');
    if (demoRole === 'student_parent') router.push('/portal/student');
  };

  return (
    <div className="min-h-screen w-full flex bg-[#0c1427] p-0 font-sans">
      {/* Left Panel: Dark Navy with Concentric Circles Pattern & Stats */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#0c1427] via-[#0f1d38] to-[#0c7385] text-white p-12 lg:p-16 flex-col justify-between relative overflow-hidden">
        {/* Concentric Circles Pattern */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-teal-500/10 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] border border-teal-500/15 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] border border-teal-500/20 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] border border-teal-500/25 rounded-full pointer-events-none" />

        {/* Brand Header */}
        <div className="relative z-10 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-[#0F8B9E] text-white flex items-center justify-center shadow-lg">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-extrabold text-base tracking-tight text-white leading-tight">Plan Aid Academy</h1>
            <p className="text-[10px] text-teal-300 font-bold uppercase tracking-wider">SCHOOL MANAGEMENT</p>
          </div>
        </div>

        {/* Middle Hero Content */}
        <div className="relative z-10 space-y-6 max-w-lg my-auto">
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            Empowering <br />
            <span className="text-[#32b8cb]">Excellence</span> in <br />
            Education
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            Managing Primary, Secondary, and Madrasah arms in one unified platform — built for Nigerian schools.
          </p>

          {/* Quick Counter Row */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
            <div>
              <div className="text-3xl font-black text-white">3</div>
              <div className="text-xs text-teal-200 font-medium">School Arms</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#32b8cb]">1,240+</div>
              <div className="text-xs text-teal-200 font-medium">Students</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">98</div>
              <div className="text-xs text-teal-200 font-medium">Staff Members</div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="relative z-10 text-xs text-slate-400 font-medium italic">
          "Nurturing minds, building futures — one day of learning."
        </div>
      </div>

      {/* Right Panel: Clean White Login Card */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-6 sm:p-12 lg:p-16">
        <div className="w-full max-w-md space-y-6">
          {/* Header */}
          <div className="space-y-1">
            <h2 className="text-3xl font-extrabold text-[#0c1427] tracking-tight">Welcome back</h2>
            <p className="text-xs text-slate-500 font-medium">Sign in to your account to continue</p>
          </div>

          {/* Role Selector Pills */}
          <div className="bg-slate-100 p-1.5 rounded-2xl flex items-center justify-between text-xs font-bold text-slate-600 gap-1 border border-slate-200">
            <button
              type="button"
              onClick={() => handleRoleSelect('super_admin')}
              className={`flex-1 py-2 px-1 text-center rounded-xl transition text-[11px] ${
                selectedRole === 'super_admin' ? 'bg-white text-[#0c1427] shadow-xs font-extrabold' : 'hover:text-[#0c1427]'
              }`}
            >
              Super Admin
            </button>
            <button
              type="button"
              onClick={() => handleRoleSelect('admin')}
              className={`flex-1 py-2 px-1 text-center rounded-xl transition text-[11px] ${
                selectedRole === 'admin' ? 'bg-white text-[#0c1427] shadow-xs font-extrabold' : 'hover:text-[#0c1427]'
              }`}
            >
              Admin
            </button>
            <button
              type="button"
              onClick={() => handleRoleSelect('teacher')}
              className={`flex-1 py-2 px-1 text-center rounded-xl transition text-[11px] ${
                selectedRole === 'teacher' ? 'bg-white text-[#0c1427] shadow-xs font-extrabold' : 'hover:text-[#0c1427]'
              }`}
            >
              Teacher
            </button>
            <button
              type="button"
              onClick={() => handleRoleSelect('student_parent')}
              className={`flex-1 py-2 px-1 text-center rounded-xl transition text-[11px] ${
                selectedRole === 'student_parent' ? 'bg-white text-[#0c1427] shadow-xs font-extrabold' : 'hover:text-[#0c1427]'
              }`}
            >
              Student / Parent
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
            {/* Email Field */}
            <div>
              <label className="font-bold text-slate-700 block mb-1">Email / Username</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="admin@planaid.edu.ng"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0F8B9E] transition font-medium text-slate-900"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="font-bold text-slate-700">Password</label>
                <button
                  type="button"
                  onClick={() => alert("Password reset link has been dispatched to your email.")}
                  className="font-bold text-[#0F8B9E] text-[11px] hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-4 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0F8B9E] transition font-medium text-slate-900"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center space-x-2 pt-1">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-slate-300 text-[#0F8B9E] focus:ring-[#0F8B9E]"
              />
              <label htmlFor="remember" className="text-xs font-medium text-slate-600 cursor-pointer">
                Remember me on this device
              </label>
            </div>

            {/* Teal Sign In Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-[#0F8B9E] hover:bg-[#0d7788] text-white font-extrabold text-sm rounded-xl shadow-md transition-all duration-200 active:scale-[0.99] cursor-pointer"
            >
              Sign in
            </button>
          </form>

          {/* Quick Demo Access Bar */}
          <div className="pt-4 border-t border-slate-100 text-center space-y-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Quick Demo Access
            </span>
            <div className="flex items-center justify-center space-x-3 text-xs">
              <button
                type="button"
                onClick={() => handleQuickDemo('admin')}
                className="px-4 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 transition"
              >
                Admin view
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemo('student_parent')}
                className="px-4 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 font-bold text-slate-700 transition"
              >
                Student view
              </button>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center text-[10px] text-slate-400 pt-2 space-y-1">
            <div>© 2026 Plan Aid Academy. All rights reserved.</div>
            <div>Primary • Secondary • Madrasah</div>
          </div>
        </div>
      </div>
    </div>
  );
}
