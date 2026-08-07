'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Users, 
  ShieldCheck, 
  Settings, 
  Layers, 
  FileText, 
  TrendingUp, 
  Calendar, 
  Plus, 
  CheckCircle2, 
  AlertCircle,
  ToggleLeft,
  ToggleRight,
  Database,
  Lock,
  Calculator,
  Kanban
} from 'lucide-react';
import { mockAuditLogs, mockSectionConfigs, mockUsers } from '@/lib/mockData';

export default function SuperAdminDashboard() {
  const [admissionOpen, setAdmissionOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<'analytics' | 'users' | 'sections' | 'settings' | 'audit'>('analytics');

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-royal-950 via-royal-900 to-royal-950 text-white rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold bg-primary-500 text-white uppercase tracking-wider">
            SYSTEM SUPER ADMIN CONTROL
          </span>
          <h1 className="text-2xl font-black text-white mt-1">Super Admin Governance Portal</h1>
          <p className="text-xs text-slate-300">Master configuration, system accounts, site content, and audit trail</p>
        </div>

        <div className="flex items-center space-x-3">
          <Link
            href="/portal/super-admin/results"
            className="px-3.5 py-2 bg-royal-700 hover:bg-royal-600 text-white font-bold text-xs rounded-xl shadow flex items-center space-x-1.5 transition"
          >
            <Calculator className="w-4 h-4" />
            <span>Score sheet and Analytics</span>
          </Link>
          <Link
            href="/portal/super-admin/crm"
            className="px-3.5 py-2 bg-primary-500 hover:bg-primary-600 text-white font-bold text-xs rounded-xl shadow flex items-center space-x-1.5 transition"
          >
            <Kanban className="w-4 h-4" />
            <span>Admissions CRM</span>
          </Link>
        </div>
      </div>

      {/* Overview Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <div className="text-xs font-bold text-slate-400 uppercase">Total Enrolled Students</div>
          <div className="text-3xl font-black text-royal-950">735</div>
          <div className="text-[11px] font-semibold text-emerald-600">Across Primary, Secondary & Madrasah</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <div className="text-xs font-bold text-slate-400 uppercase">Total Academic Staff</div>
          <div className="text-3xl font-black text-primary-500">48</div>
          <div className="text-[11px] font-semibold text-slate-500">32 Full-time Teachers, 16 Ustadhs</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <div className="text-xs font-bold text-slate-400 uppercase">Revenue / Fee Ledger</div>
          <div className="text-3xl font-black text-emerald-700">₦142.5M</div>
          <div className="text-[11px] font-semibold text-emerald-600">89% Collection Rate Term 3</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <div className="text-xs font-bold text-slate-400 uppercase">Admission Cycle Status</div>
          <div className="flex items-center space-x-2 pt-1">
            <span className={`text-sm font-bold ${admissionOpen ? 'text-emerald-600' : 'text-rose-600'}`}>
              {admissionOpen ? 'OPEN FOR 2026/2027' : 'CLOSED'}
            </span>
            <button
              onClick={() => setAdmissionOpen(!admissionOpen)}
              className="text-royal-700"
            >
              {admissionOpen ? <ToggleRight className="w-7 h-7 text-emerald-600" /> : <ToggleLeft className="w-7 h-7 text-slate-400" />}
            </button>
          </div>
          <div className="text-[11px] text-slate-400">Click toggle to open/close website forms</div>
        </div>
      </div>

      {/* Tabs Control */}
      <div className="flex items-center space-x-2 border-b border-slate-200 pb-2">
        <button
          onClick={() => setActiveTab('analytics')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition ${activeTab === 'analytics' ? 'bg-royal-950 text-white' : 'bg-white text-slate-700 hover:bg-slate-100 border'}`}
        >
          System Analytics
        </button>
        <button
          onClick={() => setActiveTab('users')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition ${activeTab === 'users' ? 'bg-royal-950 text-white' : 'bg-white text-slate-700 hover:bg-slate-100 border'}`}
        >
          Accounts & Role Permissions
        </button>
        <button
          onClick={() => setActiveTab('sections')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition ${activeTab === 'sections' ? 'bg-royal-950 text-white' : 'bg-white text-slate-700 hover:bg-slate-100 border'}`}
        >
          School Sections & Classes
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition ${activeTab === 'settings' ? 'bg-royal-950 text-white' : 'bg-white text-slate-700 hover:bg-slate-100 border'}`}
        >
          Site Settings & Brand Tokens
        </button>
        <button
          onClick={() => setActiveTab('audit')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition ${activeTab === 'audit' ? 'bg-royal-950 text-white' : 'bg-white text-slate-700 hover:bg-slate-100 border'}`}
        >
          System Audit Log
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'analytics' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-base text-royal-950">Site-Wide Overview Analytics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-4 bg-sky-50 rounded-xl border border-sky-200 space-y-2">
              <span className="font-bold text-royal-950 block">Primary Arm Distribution</span>
              <div className="text-xl font-bold text-primary-600">240 Students</div>
              <p className="text-slate-600">12 Active Classes • Early STEM Track</p>
            </div>
            <div className="p-4 bg-royal-50 rounded-xl border border-royal-200 space-y-2">
              <span className="font-bold text-royal-950 block">Secondary College Distribution</span>
              <div className="text-xl font-bold text-royal-700">310 Students</div>
              <p className="text-slate-600">14 Active Classes • Robotics & WAEC</p>
            </div>
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 space-y-2">
              <span className="font-bold text-emerald-950 block">Madrasah Tahfiz Distribution</span>
              <div className="text-xl font-bold text-emerald-700">185 Students</div>
              <p className="text-slate-600">9 Active Classes • Quran & Tajweed</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'users' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-base text-royal-950">Administrative Accounts & Role Permissions</h3>
            <button 
              onClick={() => alert("Creating new Administrator account modal...")}
              className="px-3 py-1.5 bg-royal-700 text-white font-bold text-xs rounded-xl"
            >
              + Create Account
            </button>
          </div>
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100 font-bold text-slate-700 border-b">
                <th className="p-3">User Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Assigned Role</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockUsers.map((usr) => (
                <tr key={usr.id} className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-royal-950">{usr.name}</td>
                  <td className="p-3 font-mono text-slate-600">{usr.email}</td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 rounded bg-sky-100 text-royal-800 font-bold uppercase text-[10px]">
                      {usr.role}
                    </span>
                  </td>
                  <td className="p-3 text-emerald-600 font-bold">Active</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'sections' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockSectionConfigs.map((sec) => (
            <div key={sec.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h4 className="font-bold text-lg text-royal-950">{sec.title}</h4>
              <p className="text-xs text-slate-500">{sec.description}</p>
              <div className="text-xs font-bold text-slate-700">Classes: {sec.classesCount} Active</div>
              <button 
                onClick={() => alert(`Configuring ${sec.title} classes and subjects...`)}
                className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-royal-950 font-bold text-xs rounded-xl"
              >
                Configure Arm
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'settings' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 max-w-xl text-xs">
          <h3 className="font-bold text-base text-royal-950">System Settings & Brand Tokens</h3>
          <div>
            <label className="font-bold text-slate-700 block mb-1">School Name</label>
            <input type="text" defaultValue="Plan Aid Academy" className="w-full p-2 border rounded-xl" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Primary Hex (#20a7db)</label>
              <input type="text" defaultValue="#20a7db" className="w-full p-2 border rounded-xl" />
            </div>
            <div>
              <label className="font-bold text-slate-700 block mb-1">Accent Hex (#305cde)</label>
              <input type="text" defaultValue="#305cde" className="w-full p-2 border rounded-xl" />
            </div>
          </div>
          <button 
            onClick={() => alert("System settings updated successfully.")}
            className="px-4 py-2 bg-royal-700 text-white font-bold rounded-xl"
          >
            Save Settings
          </button>
        </div>
      )}

      {activeTab === 'audit' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-base text-royal-950">System Audit Trail</h3>
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100 font-bold text-slate-700 border-b">
                <th className="p-3">Timestamp</th>
                <th className="p-3">User</th>
                <th className="p-3">Role</th>
                <th className="p-3">Action Executed</th>
                <th className="p-3">Target Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockAuditLogs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50">
                  <td className="p-3 font-mono text-slate-500">{log.timestamp}</td>
                  <td className="p-3 font-bold text-royal-950">{log.user}</td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 rounded bg-slate-100 font-bold uppercase text-[10px]">{log.role}</span>
                  </td>
                  <td className="p-3 font-semibold text-royal-700">{log.action}</td>
                  <td className="p-3 text-slate-600">{log.target}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
