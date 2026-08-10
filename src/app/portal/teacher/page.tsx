'use client';

import React from 'react';
import Link from 'next/link';
import { mockStudents } from '@/lib/mockData';
import { 
  Users, 
  Calculator, 
  Calendar, 
  Edit3,
  Award,
  Printer,
  HelpCircle,
  CheckCircle2
} from 'lucide-react';

export default function TeacherDashboard() {
  const teacherClasses = ['JSS 3 Gold', 'SSS 2 Tech Stream'];
  const assignedSubjects = ['Robotics & Automation', 'Computer Studies', 'Basic Science'];

  return (
    <div className="space-y-6 pb-12 font-sans">
      {/* Top Banner Header */}
      <div className="bg-[#1B2A4A] text-white rounded-xl p-6 shadow-xs border border-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#0F8B9E] text-white uppercase tracking-wider">
            Teacher Workspace
          </span>
          <h1 className="text-xl sm:text-2xl font-bold text-white">Welcome, Engr. Tariq Hassan</h1>
          <p className="text-xs text-slate-300">Form Teacher for JSS 3 Gold • Head of STEM & Computer Studies</p>
        </div>

        <Link
          href="/portal/admin/results"
          className="px-4 py-2.5 bg-[#0F8B9E] hover:bg-[#0d7788] text-white font-bold text-xs rounded-lg transition flex items-center space-x-2 self-start md:self-auto shadow-xs"
        >
          <Edit3 className="w-4 h-4" />
          <span>Enter / Edit C.A. & Exam Marks</span>
        </Link>
      </div>

      {/* Guided Teacher Instructions */}
      <div className="bg-sky-50 p-4 rounded-xl border border-sky-200 text-xs text-[#1B2A4A] space-y-2">
        <div className="flex items-center space-x-2 font-bold text-[#0F8B9E]">
          <HelpCircle className="w-4 h-4 shrink-0" />
          <span>Quick Teacher Guide for Entering Terminal Scores:</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-slate-700">
          <div className="flex items-start space-x-2">
            <span className="w-5 h-5 rounded-full bg-[#1B2A4A] text-white flex items-center justify-center font-bold text-[10px] shrink-0">1</span>
            <span>Click <strong>Enter / Edit C.A. & Exam Marks</strong> above to open the score sheet.</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="w-5 h-5 rounded-full bg-[#0F8B9E] text-white flex items-center justify-center font-bold text-[10px] shrink-0">2</span>
            <span>Type 1st C.A. (15), 2nd C.A. (15), and Exam (70). Total & Grade calculate automatically.</span>
          </div>
          <div className="flex items-start space-x-2">
            <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-[10px] shrink-0">3</span>
            <span>Click <strong>Report Card</strong> button next to any student to preview and print.</span>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-1">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Assigned Classes</div>
          <div className="text-lg font-bold text-[#1B2A4A]">{teacherClasses.join(', ')}</div>
          <div className="text-xs text-slate-500 font-medium">Form Teacher for JSS 3 Gold</div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-1">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Teaching Subjects</div>
          <div className="text-lg font-bold text-[#0F8B9E]">{assignedSubjects.join(', ')}</div>
          <div className="text-xs text-slate-500 font-medium">STEM Robotics Lab Lead</div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-1">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Next Timetable Period</div>
          <div className="text-lg font-bold text-emerald-700">11:15 AM (Lab 2)</div>
          <div className="text-xs text-slate-500 font-medium">JSS 3 Gold - Computer Practical</div>
        </div>
      </div>

      {/* Class Roster View */}
      <div id="roster" className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 className="font-bold text-base text-[#1B2A4A]">JSS 3 Gold Class Roster</h3>
            <p className="text-xs text-slate-500">28 Enrolled Students • Term 3 Attendance Record</p>
          </div>
          <Link
            href="/portal/admin/results"
            className="px-3 py-1.5 bg-[#0F8B9E] text-white text-xs font-bold rounded-lg transition"
          >
            Enter Scores for JSS 3 Gold
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse min-w-[640px]">
            <thead>
              <tr className="bg-[#1B2A4A] text-white font-semibold uppercase text-[11px]">
                <th className="p-3">Admission No</th>
                <th className="p-3">Student Name</th>
                <th className="p-3">Gender</th>
                <th className="p-3">Term Attendance</th>
                <th className="p-3 text-right">Score Sheet Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockStudents.filter(s => s.class === 'JSS 3 Gold').map((std) => (
                <tr key={std.id} className="hover:bg-slate-50">
                  <td className="p-3 font-mono font-medium text-slate-600">{std.admissionNo}</td>
                  <td className="p-3">
                    <div className="flex items-center space-x-2">
                      <img src={std.photoUrl} alt={std.fullName} className="w-7 h-7 rounded-full object-cover border border-slate-200" />
                      <span className="font-bold text-[#1B2A4A]">{std.fullName}</span>
                    </div>
                  </td>
                  <td className="p-3 text-slate-700">{std.gender}</td>
                  <td className="p-3 font-bold text-emerald-700">{std.attendancePercentage}%</td>
                  <td className="p-3 text-right">
                    <Link
                      href="/portal/admin/results"
                      className="px-3 py-1 bg-sky-50 text-[#0F8B9E] font-bold rounded-lg text-xs hover:bg-sky-100 transition inline-flex items-center space-x-1"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Enter Marks</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
