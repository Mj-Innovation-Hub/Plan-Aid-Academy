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
import { mockStudents, mockTeachers, mockFeeRecords, mockCRMLeads, mockAnnouncements } from '@/lib/mockData';
import { Announcement } from '@/lib/types';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'students' | 'inbox' | 'fees' | 'announcements'>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSection, setFilterSection] = useState('all');

  // Announcements state & publisher
  const [announcementsList, setAnnouncementsList] = useState<Announcement[]>(mockAnnouncements);
  const [newTitle, setNewTitle] = useState('');
  const [newSummary, setNewSummary] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newCategory, setNewCategory] = useState<'Academic' | 'Islamic Event' | 'STEM & Tech' | 'General' | 'Administrative' | 'Financial'>('Academic');
  const [newAudience, setNewAudience] = useState<'Public' | 'All Portal' | 'Parents' | 'Teachers' | 'Students' | 'Staff Only'>('Students');

  const filteredStudents = mockStudents.filter((std) => {
    const matchesSearch = std.fullName.toLowerCase().includes(searchQuery.toLowerCase()) || std.admissionNo.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSec = filterSection === 'all' || std.section === filterSection;
    return matchesSearch && matchesSec;
  });

  const handlePublishAnnouncement = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const publishedItem: Announcement = {
      id: `ann-${Date.now()}`,
      title: newTitle,
      summary: newSummary || newTitle,
      content: newContent || newSummary || newTitle,
      author: 'Administrative Directorate',
      category: newCategory,
      targetAudience: newAudience,
      date: new Date().toISOString().split('T')[0],
      isImportant: newAudience === 'Staff Only'
    };

    setAnnouncementsList([publishedItem, ...announcementsList]);
    alert(`Announcement "${newTitle}" published successfully for target audience: [${newAudience.toUpperCase()}]!`);
    setNewTitle('');
    setNewSummary('');
    setNewContent('');
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

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse min-w-[650px]">
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
                    <td className="p-3 font-mono text-slate-500">{lead.createdAt}</td>
                    <td className="p-3">
                      <span className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] ${
                        lead.stage === 'enrolled' ? 'bg-emerald-100 text-emerald-800' : lead.stage === 'application_submitted' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        ● {lead.stage.replace('_', ' ')}
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

      {/* Staff & Teaching Faculty Directory Section */}
      <div id="teachers" className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-[#1B2A4A]">Staff & Teaching Faculty Directory</h3>
              <p className="text-xs text-slate-500">12 Active instructors across STEM Robotics, WAEC Prep, and Madrasah Tahfiz</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search staff by name, subject..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-[#0F8B9E]"
              />
            </div>

            <select
              value={filterSection}
              onChange={(e) => setFilterSection(e.target.value)}
              className="px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-700 focus:ring-2 focus:ring-[#0F8B9E]"
            >
              <option value="all">All School Arms</option>
              <option value="primary">Primary Arm</option>
              <option value="secondary">Secondary Arm</option>
              <option value="madrasah">Madrasah Arm</option>
            </select>
          </div>
        </div>

        {/* Teachers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {mockTeachers
            .filter((tch) => {
              const matchesQuery = tch.fullName.toLowerCase().includes(searchQuery.toLowerCase()) || tch.assignedSubjects.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
              const matchesSection = filterSection === 'all' || tch.section === filterSection;
              return matchesQuery && matchesSection;
            })
            .map((teacher) => (
              <div
                key={teacher.id}
                className="bg-slate-50/70 hover:bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={teacher.photoUrl}
                        alt={teacher.fullName}
                        className="w-12 h-12 rounded-2xl object-cover border-2 border-white shadow-sm shrink-0"
                      />
                      <div>
                        <h4 className="font-extrabold text-sm text-[#1B2A4A] group-hover:text-[#0F8B9E] transition-colors">
                          {teacher.fullName}
                        </h4>
                        <div className="text-[11px] font-mono font-bold text-slate-400">{teacher.staffId}</div>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                        teacher.status === 'Active'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          : 'bg-amber-100 text-amber-800 border border-amber-200'
                      }`}
                    >
                      ● {teacher.status}
                    </span>
                  </div>

                  <div className="text-xs text-slate-600 space-y-1">
                    <div className="font-semibold text-slate-700">{teacher.qualification}</div>
                    <div className="text-slate-500 font-mono text-[11px]">{teacher.email}</div>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-slate-200/60">
                    <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Assigned Subjects</div>
                    <div className="flex flex-wrap gap-1">
                      {teacher.assignedSubjects.map((subj, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-white border border-slate-200 text-slate-700 shadow-2xs"
                        >
                          {subj}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1 pt-1">
                    <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Assigned Classes</div>
                    <div className="flex flex-wrap gap-1 text-[11px] font-bold text-[#0F8B9E]">
                      {teacher.assignedClasses.join(' • ')}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between">
                  <span
                    className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${
                      teacher.section === 'primary'
                        ? 'bg-sky-100 text-sky-800'
                        : teacher.section === 'secondary'
                        ? 'bg-royal-100 text-royal-800'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {teacher.section} Arm
                  </span>

                  <button
                    onClick={() => alert(`Contacting ${teacher.fullName} (${teacher.email})...`)}
                    className="px-3 py-1 bg-white hover:bg-slate-100 border border-slate-200 text-[#1B2A4A] font-bold text-[11px] rounded-lg transition"
                  >
                    Contact Staff
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Tuition Fees & Financial Ledger Section */}
      <div id="fees" className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-[#1B2A4A]">Tuition Fees & Student Financial Ledger</h3>
              <p className="text-xs text-slate-500">Term 3 Fee Collections, Partial Balances & Overdue Ledgers (10 Records)</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => alert("Opening Record Payment Modal...")}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow transition flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Record New Payment</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                <th className="p-3">Student Name</th>
                <th className="p-3">Class & Arm</th>
                <th className="p-3">Term / Session</th>
                <th className="p-3">Total Amount</th>
                <th className="p-3">Paid Amount</th>
                <th className="p-3">Balance</th>
                <th className="p-3">Payment Status</th>
                <th className="p-3">Last Payment Method</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockFeeRecords.map((record) => (
                <tr key={record.id} className="hover:bg-slate-50 transition">
                  <td className="p-3 font-bold text-[#1B2A4A]">
                    {record.studentName}
                    <div className="text-[10px] text-slate-400 font-mono">{record.studentId}</div>
                  </td>
                  <td className="p-3 font-medium text-slate-700">{record.class}</td>
                  <td className="p-3 font-mono text-slate-500">{record.term} ({record.session})</td>
                  <td className="p-3 font-mono font-extrabold text-[#1B2A4A]">₦{record.totalAmount.toLocaleString()}</td>
                  <td className="p-3 font-mono font-bold text-emerald-700">₦{record.paidAmount.toLocaleString()}</td>
                  <td className="p-3 font-mono font-bold text-rose-600">
                    {record.balance > 0 ? `₦${record.balance.toLocaleString()}` : '₦0'}
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-2.5 py-0.5 rounded-full font-black text-[10px] uppercase ${
                        record.status === 'Paid'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : record.status === 'Partial'
                          ? 'bg-amber-100 text-amber-800 border border-amber-300'
                          : 'bg-rose-100 text-rose-800 border border-rose-300 animate-pulse'
                      }`}
                    >
                      ● {record.status}
                    </span>
                  </td>
                  <td className="p-3 text-slate-600 font-medium">
                    {record.paymentHistory.length > 0 ? (
                      <div>
                        <div>{record.paymentHistory[record.paymentHistory.length - 1].method}</div>
                        <div className="text-[10px] text-slate-400 font-mono">
                          {record.paymentHistory[record.paymentHistory.length - 1].receiptNo}
                        </div>
                      </div>
                    ) : (
                      <span className="text-slate-400 italic">No payment record</span>
                    )}
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => alert(`Receipt ledger for ${record.studentName}: Balance ₦${record.balance}`)}
                      className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-[#1B2A4A] font-bold text-[11px] rounded-lg transition"
                    >
                      Print Receipt
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Targeted Announcements & News Manager Section */}
      <div id="announcements" className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              <Megaphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-[#1B2A4A]">Targeted Announcements & News Manager</h3>
              <p className="text-xs text-slate-500">Publish notices to Students/Parents, Public Site, or Confidential Staff Only</p>
            </div>
          </div>
        </div>

        {/* Publisher Form */}
        <form onSubmit={handlePublishAnnouncement} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
          <h4 className="font-extrabold text-sm text-[#1B2A4A] flex items-center space-x-2">
            <Plus className="w-4 h-4 text-[#0F8B9E]" />
            <span>Publish New Announcement / Internal Memo</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 text-xs">
            {/* Title Input */}
            <div className="sm:col-span-6 space-y-1">
              <label className="font-bold text-slate-700">Announcement Title *</label>
              <input
                type="text"
                required
                placeholder="e.g. 2026/2027 School Resumption & Vacation Dates"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl font-medium"
              />
            </div>

            {/* Target Audience Dropdown */}
            <div className="sm:col-span-3 space-y-1">
              <label className="font-bold text-slate-700">Target Audience *</label>
              <select
                value={newAudience}
                onChange={(e) => setNewAudience(e.target.value as any)}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl font-extrabold text-[#1B2A4A]"
              >
                <option value="Students">Students & Parents (Resumption, Fees, CBT)</option>
                <option value="Public">Public (All Website Visitors)</option>
                <option value="All Portal">All Portal Users (Entire Academy)</option>
                <option value="Staff Only">Staff Only [Confidential Memos]</option>
              </select>
            </div>

            {/* Category Dropdown */}
            <div className="sm:col-span-3 space-y-1">
              <label className="font-bold text-slate-700">Category *</label>
              <select
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value as any)}
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl font-bold text-slate-700"
              >
                <option value="Academic">Academic (Calendar & Exams)</option>
                <option value="Financial">Financial (Tuition & Increment)</option>
                <option value="Administrative">Administrative (Admissions & HR)</option>
                <option value="STEM & Tech">STEM & Tech</option>
                <option value="Islamic Event">Islamic Event</option>
              </select>
            </div>

            {/* Summary Input */}
            <div className="sm:col-span-12 space-y-1">
              <label className="font-bold text-slate-700">Summary / Highlight *</label>
              <input
                type="text"
                required
                placeholder="Brief sentence highlight for dashboard banner preview..."
                value={newSummary}
                onChange={(e) => setNewSummary(e.target.value)}
                className="w-full px-3.5 py-2 bg-white border border-slate-200 rounded-xl font-medium"
              />
            </div>

            {/* Full Content */}
            <div className="sm:col-span-12 space-y-1">
              <label className="font-bold text-slate-700">Full Announcement Content</label>
              <textarea
                rows={3}
                placeholder="Detailed instructions, dates, requirements..."
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                className="w-full px-3.5 py-2 bg-white border border-slate-200 rounded-xl font-medium"
              />
            </div>
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-[#0F8B9E] hover:bg-[#0d7788] text-white font-extrabold text-xs rounded-xl shadow transition flex items-center space-x-2"
          >
            <Megaphone className="w-4 h-4" />
            <span>Publish Announcement Now</span>
          </button>
        </form>

        {/* Live Published Feed */}
        <div className="space-y-4">
          <h4 className="font-extrabold text-sm text-[#1B2A4A] border-b border-slate-100 pb-2">
            Live Announcements Bulletin Feed ({announcementsList.length} Published Notices)
          </h4>

          <div className="space-y-3">
            {announcementsList.map((ann) => (
              <div
                key={ann.id}
                className={`p-5 rounded-2xl border transition-all ${
                  ann.targetAudience === 'Staff Only'
                    ? 'bg-amber-50/80 border-amber-200'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`px-2.5 py-0.5 rounded text-[10px] font-black uppercase ${
                        ann.targetAudience === 'Staff Only'
                          ? 'bg-amber-800 text-amber-100 border border-amber-900'
                          : ann.targetAudience === 'Students'
                          ? 'bg-sky-100 text-sky-800'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {ann.targetAudience === 'Staff Only' ? '🔒 Staff Only [Confidential]' : `📢 Target: ${ann.targetAudience}`}
                    </span>

                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">
                      {ann.category}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono font-bold text-slate-400">{ann.date}</span>
                </div>

                <h5 className="font-extrabold text-base text-[#1B2A4A] mb-1">{ann.title}</h5>
                <p className="text-xs text-slate-600 leading-relaxed">{ann.content || ann.summary}</p>
                <div className="mt-3 text-[11px] font-bold text-slate-400">Published by: {ann.author}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
