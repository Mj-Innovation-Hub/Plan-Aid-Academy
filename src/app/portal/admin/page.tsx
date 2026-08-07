'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Users, 
  UserCheck, 
  CreditCard, 
  FileText, 
  Calendar, 
  CheckCircle2, 
  XCircle, 
  Plus, 
  Search, 
  Calculator, 
  Kanban,
  Megaphone,
  Printer,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Award,
  BookOpen,
  PieChart,
  DollarSign
} from 'lucide-react';
import { mockStudents, mockTeachers, mockFeeRecords, mockCRMLeads } from '@/lib/mockData';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'students' | 'inbox' | 'fees' | 'announcements'>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSection, setFilterSection] = useState('all');

  // Announcements composer state
  const [newTitle, setNewTitle] = useState('');
  const [newSummary, setNewSummary] = useState('');
  const [newCategory, setNewCategory] = useState<'Academic' | 'Islamic Event' | 'STEM & Tech' | 'General'>('Academic');

  const filteredStudents = mockStudents.filter((std) => {
    const matchesSearch = std.fullName.toLowerCase().includes(searchQuery.toLowerCase()) || std.admissionNo.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSec = filterSection === 'all' || std.section === filterSection;
    return matchesSearch && matchesSec;
  });

  const handlePublishAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Announcement "${newTitle}" published successfully to Plan Aid Academy website!`);
    setNewTitle('');
    setNewSummary('');
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-[#1B2A4A] via-[#15223c] to-[#0F8B9E] text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="space-y-2 relative z-10">
          <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#0F8B9E] text-white uppercase tracking-wider">
            ADMINISTRATIVE CONTROL CENTER
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white">Plan Aid Academy Overview</h1>
          <p className="text-xs sm:text-sm text-teal-100 max-w-xl">
            Welcome back, Mrs. Amina Bello (Head of Admissions & Operations).
          </p>
        </div>

        {/* Quick-action Buttons */}
        <div className="flex flex-wrap items-center gap-3 relative z-10">
          <button
            onClick={() => alert("Opening Add New Student Registration Modal...")}
            className="px-4 py-2.5 bg-[#0F8B9E] hover:bg-[#0d7788] text-white font-extrabold text-xs rounded-xl shadow-md transition flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Student</span>
          </button>
          <Link
            href="/portal/admin/results"
            className="px-4 py-2.5 bg-white text-[#1B2A4A] hover:bg-slate-100 font-extrabold text-xs rounded-xl shadow-md transition flex items-center space-x-2"
          >
            <Calculator className="w-4 h-4 text-[#0F8B9E]" />
            <span>Publish Result</span>
          </Link>
          <button
            onClick={() => setActiveTab('announcements')}
            className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs rounded-xl border border-white/20 backdrop-blur-md transition flex items-center space-x-2"
          >
            <Megaphone className="w-4 h-4 text-teal-300" />
            <span>New Announcement</span>
          </button>
        </div>
      </div>

      {/* Row of Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Total Students */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Total Students</span>
            <div className="w-10 h-10 rounded-2xl bg-teal-50 text-[#0F8B9E] flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-black text-[#1B2A4A]">1,248</div>
            <div className="text-xs text-emerald-600 font-bold flex items-center space-x-1 mt-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+8.4% from last term</span>
            </div>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#0F8B9E] h-full w-[84%]" />
          </div>
        </div>

        {/* Total Staff */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Total Teaching Staff</span>
            <div className="w-10 h-10 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-black text-[#1B2A4A]">84</div>
            <div className="text-xs text-slate-500 font-medium flex items-center space-x-1 mt-1">
              <span>Primary, STEM & Hifz Instructors</span>
            </div>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div className="bg-sky-600 h-full w-[92%]" />
          </div>
        </div>

        {/* Pending Admissions */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Pending Admissions</span>
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-black text-amber-600">14 Leads</div>
            <div className="text-xs text-amber-700 font-bold flex items-center space-x-1 mt-1">
              <span>Awaiting interview & placement</span>
            </div>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div className="bg-amber-500 h-full w-[65%]" />
          </div>
        </div>

        {/* Fees Collected */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">Fees Collected (Naira)</span>
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <CreditCard className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-black text-[#1B2A4A]">₦42,850,000</div>
            <div className="text-xs text-emerald-600 font-bold flex items-center space-x-1 mt-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>91.2% Term 3 Collection Rate</span>
            </div>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div className="bg-emerald-600 h-full w-[91%]" />
          </div>
        </div>
      </div>

      {/* Main Section: Chart & Recent Admissions Table */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (8 Cols): Recent Activity & Inquiries Table */}
        <div className="lg:col-span-8 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-lg font-extrabold text-[#1B2A4A]">Recent Admissions Inquiries</h3>
              <p className="text-xs text-slate-500">Live prospective family leads captured via website form</p>
            </div>
            <Link
              href="/portal/admin/crm"
              className="text-xs font-bold text-[#0F8B9E] hover:underline flex items-center space-x-1"
            >
              <span>View Full CRM Board</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                <th className="p-3">Applicant / Parent</th>
                <th className="p-3">Child Name</th>
                <th className="p-3">School Arm</th>
                <th className="p-3">Submission Date</th>
                <th className="p-3">Status Tag</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockCRMLeads.slice(0, 5).map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50 transition">
                  <td className="p-3 font-bold text-[#1B2A4A]">{lead.parentName}</td>
                  <td className="p-3 font-medium text-slate-700">{lead.childName}</td>
                  <td className="p-3">
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-black uppercase ${
                      lead.intendedSection === 'madrasah' ? 'bg-amber-100 text-amber-800' : lead.intendedSection === 'secondary' ? 'bg-sky-100 text-sky-800' : 'bg-teal-100 text-teal-800'
                    }`}>
                      {lead.intendedSection}
                    </span>
                  </td>
                  <td className="p-3 font-mono text-slate-500">{lead.createdDate}</td>
                  <td className="p-3">
                    <span className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] ${
                      lead.stage === 'Enrolled' ? 'bg-emerald-100 text-emerald-800' : lead.stage === 'Application Submitted' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      ● {lead.stage}
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => alert(`Viewing details for lead ${lead.childName}...`)}
                      className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-[#1B2A4A] font-bold text-[11px] rounded-lg transition"
                    >
                      Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Column (4 Cols): Enrollment Breakdown Chart Visual */}
        <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
          <div className="space-y-1">
            <h3 className="text-lg font-extrabold text-[#1B2A4A] flex items-center space-x-2">
              <PieChart className="w-5 h-5 text-[#0F8B9E]" />
              <span>Enrollment by Arm</span>
            </h3>
            <p className="text-xs text-slate-500">Student distribution across 3 school arms</p>
          </div>

          {/* Donut Bar Chart Mock Visual */}
          <div className="space-y-4">
            {/* Primary Arm */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-700">Primary Education (Basic STEM)</span>
                <span className="font-extrabold text-[#1B2A4A]">450 Students (36%)</span>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                <div className="bg-[#0F8B9E] h-full rounded-full w-[36%]" />
              </div>
            </div>

            {/* Secondary Arm */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-700">Secondary College (WAEC/Robotics)</span>
                <span className="font-extrabold text-[#1B2A4A]">520 Students (42%)</span>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                <div className="bg-[#1B2A4A] h-full rounded-full w-[42%]" />
              </div>
            </div>

            {/* Madrasah Arm */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-700">Madrasah Tahfiz (Arabic/Hifz)</span>
                <span className="font-extrabold text-[#1B2A4A]">278 Students (22%)</span>
              </div>
              <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full w-[22%]" />
              </div>
            </div>
          </div>

          {/* Summary Box */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-1">
            <div className="font-bold text-[#1B2A4A]">Total Enrolled: 1,248 Capacity</div>
            <div>All 3 campus branches (Kano, Kaduna, Abuja) synchronized.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
