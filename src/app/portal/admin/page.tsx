'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Users, 
  CreditCard, 
  FileText, 
  Plus, 
  Search, 
  Calculator, 
  Megaphone,
  TrendingUp,
  Award,
  HelpCircle
} from 'lucide-react';
import { mockStudents, mockTeachers, mockFeeRecords, mockCRMLeads, mockAnnouncements } from '@/lib/mockData';
import { Announcement } from '@/lib/types';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'students' | 'fees' | 'announcements'>('overview');
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
    <div className="space-y-6 pb-12 font-sans">
      {/* Top Banner Header */}
      <div className="bg-[#1B2A4A] text-white rounded-xl p-6 shadow-xs border border-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#0F8B9E] text-white uppercase tracking-wider">
            Administrative Control Desk
          </span>
          <h1 className="text-xl sm:text-2xl font-bold text-white">Plan Aid Academy Overview</h1>
          <p className="text-xs text-slate-300">Logged in as Mrs. Amina Bello (Head of Admissions & School Operations)</p>
        </div>

        {/* Quick-action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => alert("Opening Add New Student Registration Form...")}
            className="px-3.5 py-2 bg-[#0F8B9E] hover:bg-[#0d7788] text-white font-bold text-xs rounded-lg transition flex items-center space-x-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Add Student</span>
          </button>
          <Link
            href="/portal/admin/results"
            className="px-3.5 py-2 bg-white text-[#1B2A4A] hover:bg-slate-100 font-bold text-xs rounded-lg transition flex items-center space-x-1.5"
          >
            <Calculator className="w-4 h-4 text-[#0F8B9E]" />
            <span>Enter C.A. / Exam Scores</span>
          </Link>
        </div>
      </div>

      {/* Guided Admin Help Bar */}
      <div className="bg-sky-50 p-4 rounded-xl border border-sky-200 text-xs text-[#1B2A4A] space-y-1.5">
        <div className="flex items-center space-x-2 font-bold text-[#0F8B9E]">
          <HelpCircle className="w-4 h-4 shrink-0" />
          <span>School Administrator Quick Instructions:</span>
        </div>
        <p className="text-slate-700 leading-relaxed">
          Use the control tabs below to manage <strong>Student Records</strong>, track <strong>Tuition Fee Payments</strong>, inspect <strong>Admission Inquiries</strong>, or publish <strong>Notice Board Announcements</strong>.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center space-x-2 border-b border-slate-200 pb-2 overflow-x-auto text-xs">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-3.5 py-2 rounded-lg font-bold transition ${
            activeTab === 'overview' ? 'bg-[#1B2A4A] text-white shadow-xs' : 'bg-white text-slate-700 border border-slate-200'
          }`}
        >
          General Overview
        </button>
        <button
          onClick={() => setActiveTab('students')}
          className={`px-3.5 py-2 rounded-lg font-bold transition ${
            activeTab === 'students' ? 'bg-[#1B2A4A] text-white shadow-xs' : 'bg-white text-slate-700 border border-slate-200'
          }`}
        >
          Student Register ({mockStudents.length})
        </button>
        <button
          onClick={() => setActiveTab('fees')}
          className={`px-3.5 py-2 rounded-lg font-bold transition ${
            activeTab === 'fees' ? 'bg-[#1B2A4A] text-white shadow-xs' : 'bg-white text-slate-700 border border-slate-200'
          }`}
        >
          Tuition Fee Ledger
        </button>
        <button
          onClick={() => setActiveTab('announcements')}
          className={`px-3.5 py-2 rounded-lg font-bold transition ${
            activeTab === 'announcements' ? 'bg-[#1B2A4A] text-white shadow-xs' : 'bg-white text-slate-700 border border-slate-200'
          }`}
        >
          Notice Board ({announcementsList.length})
        </button>
      </div>

      {/* Tab 1: Overview */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Row of Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Total Students */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total Enrolled Students</span>
                <div className="w-8 h-8 rounded-lg bg-sky-50 text-[#0F8B9E] flex items-center justify-center font-bold">
                  <Users className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-extrabold text-[#1B2A4A]">1,248</div>
              <div className="text-xs text-emerald-700 font-semibold flex items-center space-x-1">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+8.4% growth this session</span>
              </div>
            </div>

            {/* Total Staff */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Teaching Staff</span>
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                  <Award className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-extrabold text-[#1B2A4A]">84</div>
              <div className="text-xs text-slate-500 font-medium">Primary, STEM & Hifz Teachers</div>
            </div>

            {/* Pending Admissions */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">New Inquiries</span>
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                  <FileText className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-extrabold text-amber-600">14 Leads</div>
              <div className="text-xs text-amber-700 font-semibold">Awaiting CBT & Placement</div>
            </div>

            {/* Fees Collected */}
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Fees Collected (Naira)</span>
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                  <CreditCard className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl font-extrabold text-[#1B2A4A]">₦42,850,000</div>
              <div className="text-xs text-emerald-700 font-semibold">91.2% Term 3 Collection Rate</div>
            </div>
          </div>

          {/* Table: Recent Admission Inquiries */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-[#1B2A4A]">Recent Admission Inquiries</h3>
                <p className="text-xs text-slate-500">Prospective student applications received from website</p>
              </div>
              <Link href="/portal/admin/crm" className="text-xs font-bold text-[#0F8B9E] hover:underline">
                View All Inquiries
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#1B2A4A] text-white font-semibold uppercase text-[11px]">
                    <th className="p-2.5">Parent Name</th>
                    <th className="p-2.5">Child Name</th>
                    <th className="p-2.5">Phone Contact</th>
                    <th className="p-2.5">Target Arm</th>
                    <th className="p-2.5">Stage</th>
                    <th className="p-2.5">Date Received</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {mockCRMLeads.slice(0, 4).map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50">
                      <td className="p-2.5 font-bold text-[#1B2A4A]">{lead.parentName}</td>
                      <td className="p-2.5 text-slate-700">{lead.childName}</td>
                      <td className="p-2.5 font-mono text-slate-600">{lead.phone}</td>
                      <td className="p-2.5 uppercase font-semibold text-[#0F8B9E]">{lead.intendedSection}</td>
                      <td className="p-2.5">
                        <span className="px-2 py-0.5 rounded bg-sky-50 text-[#0F8B9E] font-semibold text-[10px] uppercase">
                          {lead.stage.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="p-2.5 text-slate-500">{lead.createdAt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Students */}
      {activeTab === 'students' && (
        <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-[#1B2A4A]">Student Register Directory</h3>
              <p className="text-xs text-slate-500">Official student list across Primary, Secondary, and Madrasah arms</p>
            </div>

            <div className="flex items-center space-x-2 text-xs">
              <select
                value={filterSection}
                onChange={(e) => setFilterSection(e.target.value)}
                className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#0F8B9E]"
              >
                <option value="all">All School Arms</option>
                <option value="primary">Primary School</option>
                <option value="secondary">Secondary College</option>
                <option value="madrasah">Madrasah Tahfiz</option>
              </select>

              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search student..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#0F8B9E]"
                />
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#1B2A4A] text-white font-semibold uppercase text-[11px]">
                  <th className="p-3">Admission No</th>
                  <th className="p-3">Full Name</th>
                  <th className="p-3">Class</th>
                  <th className="p-3">School Arm</th>
                  <th className="p-3">Attendance</th>
                  <th className="p-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-slate-50">
                    <td className="p-3 font-mono font-medium text-slate-600">{student.admissionNo}</td>
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <img src={student.photoUrl} alt={student.fullName} className="w-6 h-6 rounded-full object-cover border border-slate-200" />
                        <span className="font-bold text-[#1B2A4A]">{student.fullName}</span>
                      </div>
                    </td>
                    <td className="p-3 text-slate-700">{student.class}</td>
                    <td className="p-3 font-semibold uppercase text-[#0F8B9E]">{student.section}</td>
                    <td className="p-3 font-bold text-emerald-700">{student.attendancePercentage}%</td>
                    <td className="p-3 text-right">
                      <Link
                        href="/portal/admin/results"
                        className="px-2.5 py-1 bg-sky-50 text-[#0F8B9E] font-bold rounded text-xs hover:bg-sky-100 transition"
                      >
                        Result Sheet
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 3: Tuition Fees */}
      {activeTab === 'fees' && (
        <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-base font-bold text-[#1B2A4A]">Tuition Fees Ledger</h3>
              <p className="text-xs text-slate-500">Termly bank payment confirmation and outstanding balance records</p>
            </div>
            <button
              onClick={() => alert("Opening Bank Teller Entry Modal...")}
              className="px-3 py-1.5 bg-[#0F8B9E] text-white font-bold text-xs rounded-lg transition"
            >
              Record Payment
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#1B2A4A] text-white font-semibold uppercase text-[11px]">
                  <th className="p-3">Receipt No</th>
                  <th className="p-3">Student Name</th>
                  <th className="p-3">Term Fee (Naira)</th>
                  <th className="p-3">Amount Paid</th>
                  <th className="p-3">Balance Due</th>
                  <th className="p-3">Payment Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mockFeeRecords.map((fee) => (
                  <tr key={fee.id} className="hover:bg-slate-50">
                    <td className="p-3 font-mono font-semibold text-slate-600">{fee.id}</td>
                    <td className="p-3 font-bold text-[#1B2A4A]">{fee.studentName}</td>
                    <td className="p-3 font-bold text-slate-700">₦{fee.totalFee.toLocaleString()}</td>
                    <td className="p-3 font-bold text-emerald-700">₦{fee.amountPaid.toLocaleString()}</td>
                    <td className="p-3 font-bold text-rose-600">₦{fee.balance.toLocaleString()}</td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                        fee.status === 'Paid' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {fee.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 4: Notice Board Announcements */}
      {activeTab === 'announcements' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Create Announcement Form */}
          <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-slate-200 space-y-4">
            <div>
              <h3 className="text-base font-bold text-[#1B2A4A]">Publish School Notice</h3>
              <p className="text-xs text-slate-500">Post announcements to parent and teacher portal feeds</p>
            </div>

            <form onSubmit={handlePublishAnnouncement} className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-slate-700">Notice Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. End of Term Examination Schedule"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F8B9E]"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700">Category</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as any)}
                  className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F8B9E]"
                >
                  <option value="Academic">Academic Notice</option>
                  <option value="Islamic Event">Islamic Event / Hifz</option>
                  <option value="STEM & Tech">STEM & Robotics</option>
                  <option value="General">General Announcement</option>
                  <option value="Administrative">Administrative</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-700">Target Audience</label>
                <select
                  value={newAudience}
                  onChange={(e) => setNewAudience(e.target.value as any)}
                  className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F8B9E]"
                >
                  <option value="Parents">Parents Only</option>
                  <option value="Teachers">Teachers Only</option>
                  <option value="Students">Students Only</option>
                  <option value="All Portal">Entire School Community</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-700">Notice Content</label>
                <textarea
                  rows={3}
                  placeholder="Write notice details here..."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F8B9E]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#0F8B9E] hover:bg-[#0d7788] text-white font-bold rounded-lg transition"
              >
                Publish Notice Now
              </button>
            </form>
          </div>

          {/* Published Announcements Feed */}
          <div className="lg:col-span-7 bg-white p-5 rounded-xl border border-slate-200 space-y-3">
            <h3 className="text-base font-bold text-[#1B2A4A] border-b border-slate-100 pb-3">Active Notice Board</h3>

            <div className="space-y-3 max-h-[500px] overflow-y-auto">
              {announcementsList.map((ann) => (
                <div key={ann.id} className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 bg-sky-100 text-[#0F8B9E] font-bold rounded text-[10px]">
                      {ann.category}
                    </span>
                    <span className="text-[11px] text-slate-500">{ann.date}</span>
                  </div>
                  <h4 className="font-bold text-[#1B2A4A] text-sm">{ann.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{ann.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
