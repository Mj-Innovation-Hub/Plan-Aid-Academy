'use client';

import React from 'react';
import { CRMBoard } from '@/components/ui/CRMBoard';
import { CRMAnalyticsCharts } from '@/components/analytics/CRMAnalyticsCharts';
import { mockCRMLeads } from '@/lib/mockData';
import { Kanban, TrendingUp, Users, CheckCircle2 } from 'lucide-react';

export default function AdmissionsCRMPage() {
  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-royal-950 via-royal-900 to-royal-950 text-white rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold bg-primary-500 text-white uppercase tracking-wider">
            ADMISSIONS CRM & PROSPECTIVE FAMILY PIPELINE
          </span>
          <h1 className="text-2xl font-black text-white mt-1">Kanban Lead Board & Funnel Analytics</h1>
          <p className="text-xs text-slate-300">Track inquiries from website forms, tour bookings, and application submissions</p>
        </div>
      </div>

      {/* CRM Funnel Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <div className="text-xs font-bold text-slate-400 uppercase">Total Active Inquiries</div>
          <div className="text-3xl font-black text-royal-950">42</div>
          <div className="text-[11px] font-semibold text-emerald-600">+12 this week</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <div className="text-xs font-bold text-slate-400 uppercase">Tours Scheduled</div>
          <div className="text-3xl font-black text-amber-500">19</div>
          <div className="text-[11px] font-semibold text-slate-600">5 campus visits today</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <div className="text-xs font-bold text-slate-400 uppercase">Applications Submitted</div>
          <div className="text-3xl font-black text-primary-500">14</div>
          <div className="text-[11px] font-semibold text-primary-600">Pending entrance exam</div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-1">
          <div className="text-xs font-bold text-slate-400 uppercase">Conversion Funnel Rate</div>
          <div className="text-3xl font-black text-emerald-700">26.2%</div>
          <div className="text-[11px] font-semibold text-emerald-600">Inquiry to Enrolled ratio</div>
        </div>
      </div>

      {/* Kanban Board Component */}
      <CRMBoard initialLeads={mockCRMLeads} />

      {/* Conversion Funnel Recharts */}
      <div className="space-y-4 pt-4">
        <h3 className="font-bold text-lg text-royal-950 flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-primary-500" />
          <span>Conversion Funnel & Source Attribution Analytics</span>
        </h3>
        <CRMAnalyticsCharts />
      </div>
    </div>
  );
}
