'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Users, 
  Calculator, 
  Calendar, 
  CheckCircle2, 
  BookOpen, 
  Cpu, 
  Clock, 
  Edit3,
  Award,
  Sparkles
} from 'lucide-react';
import { mockStudents } from '@/lib/mockData';

export default function TeacherDashboard() {
  const teacherClasses = ['JSS 3 Gold', 'SSS 2 Tech Stream'];
  const assignedSubjects = ['Robotics & Automation', 'Computer Studies', 'Basic Tech'];

  return (
    <div className="space-y-6 pb-12 font-sans">
      {/* Top Banner Header */}
      <div className="bg-gradient-to-r from-[#0c1427] via-[#101d36] to-[#0F8B9E] text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="space-y-1 relative z-10">
          <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#0F8B9E] text-white uppercase tracking-wider">
            TEACHER PORTAL WORKSPACE
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">Engr. Tariq Hassan</h1>
          <p className="text-xs sm:text-sm text-teal-100">Head of STEM Robotics & Secondary Senior Educator</p>
        </div>

        <Link
          href="/portal/admin/results"
          className="px-5 py-3 bg-[#0F8B9E] hover:bg-[#0d7788] text-white font-extrabold text-xs rounded-2xl shadow-md transition flex items-center space-x-2 self-start md:self-auto"
        >
          <Edit3 className="w-4 h-4" />
          <span>Enter / Edit Subject Scores</span>
        </Link>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-2">
          <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Assigned Classes</div>
          <div className="text-xl font-black text-[#0c1427]">{teacherClasses.join(', ')}</div>
          <div className="text-xs text-slate-500 font-medium">Form Teacher for JSS 3 Gold</div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-2">
          <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Teaching Subjects</div>
          <div className="text-xl font-black text-[#0F8B9E]">{assignedSubjects.join(', ')}</div>
          <div className="text-xs text-slate-500 font-medium">STEM Robotics Lab Lead</div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-2">
          <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Next Period</div>
          <div className="text-xl font-black text-emerald-700">11:15 AM (Lab 2)</div>
          <div className="text-xs text-slate-500 font-medium">JSS 3 Gold - Micro-controllers Practical</div>
        </div>
      </div>

      {/* Class Roster View */}
      <div id="roster" className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="font-extrabold text-lg text-[#0c1427]">JSS 3 Gold Class Roster</h3>
          <span className="text-xs font-bold text-slate-500">28 Students Enrolled</span>
        </div>

        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-[#0c1427] text-white font-bold">
              <th className="p-3">Admission No</th>
              <th className="p-3">Student Name</th>
              <th className="p-3">Gender</th>
              <th className="p-3">Term Attendance</th>
              <th className="p-3 text-right">Quick Score Entry</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {mockStudents.filter(s => s.class === 'JSS 3 Gold').map((std) => (
              <tr key={std.id} className="hover:bg-slate-50">
                <td className="p-3 font-mono font-bold text-slate-600">{std.admissionNo}</td>
                <td className="p-3">
                  <div className="flex items-center space-x-2">
                    <img src={std.photoUrl} alt={std.fullName} className="w-7 h-7 rounded-full object-cover border" />
                    <span className="font-bold text-[#0c1427]">{std.fullName}</span>
                  </div>
                </td>
                <td className="p-3 text-slate-700">{std.gender}</td>
                <td className="p-3 font-bold text-emerald-600">{std.attendancePercentage}%</td>
                <td className="p-3 text-right">
                  <Link
                    href="/portal/admin/results"
                    className="px-3 py-1 bg-teal-50 hover:bg-teal-100 text-[#0F8B9E] font-bold rounded-lg text-[11px] transition"
                  >
                    Edit Scores
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
