'use client';

import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

export const CRMAnalyticsCharts: React.FC = () => {
  const funnelData = [
    { stage: 'New Inquiry', leads: 42, fill: '#0284c7' },
    { stage: 'Contacted', leads: 28, fill: '#2563eb' },
    { stage: 'Tour Scheduled', leads: 19, fill: '#d97706' },
    { stage: 'App Submitted', leads: 14, fill: '#4f46e5' },
    { stage: 'Enrolled', leads: 11, fill: '#059669' },
  ];

  const sourceData = [
    { name: 'Website Form', value: 45, color: '#20a7db' },
    { name: 'Referral', value: 30, color: '#305cde' },
    { name: 'Walk-In', value: 15, color: '#10b981' },
    { name: 'Social Media', value: 10, color: '#f59e0b' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Chart 1: Admissions Funnel */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <div>
          <h4 className="font-bold text-sm text-royal-950">Inquiries to Enrollment Funnel</h4>
          <p className="text-xs text-slate-500">Lead conversion progression across recruitment stages</p>
        </div>
        <div className="h-64 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={funnelData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="stage" tick={{ fontSize: 10 }} />
              <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0c1d4e', color: '#fff', borderRadius: '8px', fontSize: '12px' }} 
              />
              <Bar dataKey="leads" radius={[6, 6, 0, 0]}>
                {funnelData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Chart 2: Lead Sources Breakdown */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <div>
          <h4 className="font-bold text-sm text-royal-950">Lead Source Attribution</h4>
          <p className="text-xs text-slate-500">Percentage distribution of prospective family channels</p>
        </div>
        <div className="h-64 w-full pt-2 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={sourceData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={4}
                dataKey="value"
              >
                {sourceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#0c1d4e', color: '#fff', borderRadius: '8px', fontSize: '12px' }} 
              />
              <Legend verticalAlign="bottom" height={36} iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
