'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Users, 
  ShieldCheck, 
  Settings, 
  ToggleLeft,
  ToggleRight,
  Calculator,
  Kanban,
  HelpCircle
} from 'lucide-react';
import { mockAuditLogs, mockUsers } from '@/lib/mockData';

export default function SuperAdminDashboard() {
  const [admissionOpen, setAdmissionOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<'analytics' | 'users' | 'settings' | 'audit'>('analytics');

  return (
    <div className="space-y-6 pb-12 font-sans">
      {/* Top Banner */}
      <div className="bg-[#1B2A4A] text-white rounded-xl p-6 shadow-xs border border-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-[#0F8B9E] text-white uppercase tracking-wider">
            Super Admin Governance
          </span>
          <h1 className="text-xl sm:text-2xl font-bold text-white">System Governance & Master Control</h1>
          <p className="text-xs text-slate-300">Master configuration, user accounts, system settings, and audit log</p>
        </div>

        <div className="flex items-center space-x-2">
          <Link
            href="/portal/super-admin/results"
            className="px-3.5 py-2 bg-[#0F8B9E] hover:bg-[#0d7788] text-white font-bold text-xs rounded-lg transition flex items-center space-x-1.5 shadow-xs"
          >
            <Calculator className="w-4 h-4" />
            <span>Score Sheet & Analytics</span>
          </Link>
          <Link
            href="/portal/super-admin/crm"
            className="px-3.5 py-2 bg-white text-[#1B2A4A] hover:bg-slate-100 font-bold text-xs rounded-lg transition flex items-center space-x-1.5"
          >
            <Kanban className="w-4 h-4 text-[#0F8B9E]" />
            <span>Admissions CRM</span>
          </Link>
        </div>
      </div>

      {/* Guided Helper Box */}
      <div className="bg-sky-50 p-4 rounded-xl border border-sky-200 text-xs text-[#1B2A4A] space-y-1">
        <div className="flex items-center space-x-1.5 font-bold text-[#0F8B9E]">
          <HelpCircle className="w-4 h-4" />
          <span>Super Admin Quick Instructions:</span>
        </div>
        <p className="text-slate-700 leading-relaxed">
          From this governance console, you can manage <strong>System User Accounts</strong> (Admins, Teachers, Parents), toggle website <strong>Admission Cycle Status</strong>, and audit security actions.
        </p>
      </div>

      {/* Overview Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-1">
          <div className="text-[10px] font-bold text-slate-400 uppercase">Total Enrolled Students</div>
          <div className="text-2xl font-extrabold text-[#1B2A4A]">1,248</div>
          <div className="text-emerald-700 font-medium">Across Primary, Secondary & Madrasah</div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-1">
          <div className="text-[10px] font-bold text-slate-400 uppercase">Total Academic Staff</div>
          <div className="text-2xl font-extrabold text-[#0F8B9E]">84</div>
          <div className="text-slate-500 font-medium">68 Full-time Teachers, 16 Ustadhs</div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-1">
          <div className="text-[10px] font-bold text-slate-400 uppercase">Revenue / Fee Ledger</div>
          <div className="text-2xl font-extrabold text-emerald-800">₦142.5M</div>
          <div className="text-emerald-700 font-semibold">91.2% Collection Rate Term 3</div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-1">
          <div className="text-[10px] font-bold text-slate-400 uppercase">Website Admission Form Status</div>
          <div className="flex items-center space-x-2 pt-1">
            <span className={`text-xs font-bold ${admissionOpen ? 'text-emerald-700' : 'text-rose-600'}`}>
              {admissionOpen ? 'OPEN FOR 2026/2027' : 'CLOSED'}
            </span>
            <button onClick={() => setAdmissionOpen(!admissionOpen)} className="text-[#1B2A4A]">
              {admissionOpen ? <ToggleRight className="w-6 h-6 text-emerald-600" /> : <ToggleLeft className="w-6 h-6 text-slate-400" />}
            </button>
          </div>
          <div className="text-[10px] text-slate-500">Toggle website online application form</div>
        </div>
      </div>

      {/* Tabs Control */}
      <div className="flex items-center space-x-2 border-b border-slate-200 pb-2 text-xs">
        <button
          onClick={() => setActiveTab('analytics')}
          className={`px-3 py-1.5 rounded-lg font-bold transition ${activeTab === 'analytics' ? 'bg-[#1B2A4A] text-white' : 'bg-white text-slate-700 border border-slate-200'}`}
        >
          Analytics & System Status
        </button>
        <button
          onClick={() => setActiveTab('users')}
          className={`px-3 py-1.5 rounded-lg font-bold transition ${activeTab === 'users' ? 'bg-[#1B2A4A] text-white' : 'bg-white text-slate-700 border border-slate-200'}`}
        >
          Manage User Accounts
        </button>
        <button
          onClick={() => setActiveTab('audit')}
          className={`px-3 py-1.5 rounded-lg font-bold transition ${activeTab === 'audit' ? 'bg-[#1B2A4A] text-white' : 'bg-white text-slate-700 border border-slate-200'}`}
        >
          Security Audit Trail
        </button>
      </div>

      {/* Active Tab Content */}
      {activeTab === 'analytics' && (
        <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3 text-xs">
          <h3 className="font-bold text-base text-[#1B2A4A]">System Performance Summary</h3>
          <p className="text-slate-600">Database synchronization, active portal sessions, and school server status are healthy.</p>
        </div>
      )}

      {activeTab === 'users' && (
        <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-4 text-xs">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-base text-[#1B2A4A]">System User Accounts</h3>
              <p className="text-slate-500">Super Admins, School Administrators, Teachers, and Parents</p>
            </div>
            <button
              onClick={() => alert("Opening Add New Portal Account Modal...")}
              className="px-3 py-1.5 bg-[#0F8B9E] text-white font-bold rounded-lg"
            >
              Add User Account
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#1B2A4A] text-white font-semibold uppercase text-[11px]">
                  <th className="p-3">User Name</th>
                  <th className="p-3">Email Address</th>
                  <th className="p-3">Assigned Role</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mockUsers.map((usr) => (
                  <tr key={usr.id} className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-[#1B2A4A]">{usr.name}</td>
                    <td className="p-3 font-mono text-slate-600">{usr.email}</td>
                    <td className="p-3 uppercase font-semibold text-[#0F8B9E]">{usr.role.replace('_', ' ')}</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">Active</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'audit' && (
        <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-4 text-xs">
          <h3 className="font-bold text-base text-[#1B2A4A] border-b border-slate-100 pb-3">Security Audit Trail Log</h3>
          <div className="space-y-2">
            {mockAuditLogs.map((log) => (
              <div key={log.id} className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-[#1B2A4A]">{log.user}</span>
                  <span className="text-slate-600 ml-2">{log.action}</span>
                </div>
                <span className="text-slate-400 font-mono text-[11px]">{log.timestamp}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
