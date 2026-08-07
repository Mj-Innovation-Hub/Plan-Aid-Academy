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
  Cell
} from 'recharts';

export const GradeAnalyticsCharts: React.FC = () => {
  const gradeDistributionData = [
    { grade: 'Grade A (75-100)', count: 18, fill: '#10b981' },
    { grade: 'Grade B (65-74)', count: 8, fill: '#0284c7' },
    { grade: 'Grade C (50-64)', count: 2, fill: '#f59e0b' },
    { grade: 'Grade D (45-49)', count: 0, fill: '#64748b' },
    { grade: 'Grade F (0-39)', count: 0, fill: '#ef4444' },
  ];

  const subjectAverageData = [
    { subject: 'Robotics & STEM', avg: 91.5 },
    { subject: 'Quran & Tajweed', avg: 88.0 },
    { subject: 'English Lang', avg: 86.0 },
    { subject: 'Mathematics', avg: 81.0 },
    { subject: 'Basic Science', avg: 74.5 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Chart 1: Grade Distribution */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <div>
          <h4 className="font-bold text-sm text-royal-950">Grade Distribution Breakdown (Term 3)</h4>
          <p className="text-xs text-slate-500">Number of students per grade band across subjects</p>
        </div>
        <div className="h-64 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={gradeDistributionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="grade" tick={{ fontSize: 11 }} />
              <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0c1d4e', color: '#fff', borderRadius: '8px', fontSize: '12px' }} 
              />
              <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                {gradeDistributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Chart 2: Subject Performance Averages */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
        <div>
          <h4 className="font-bold text-sm text-royal-950">Class Subject Performance Averages</h4>
          <p className="text-xs text-slate-500">Average score (%) per subject in JSS 3 Gold</p>
        </div>
        <div className="h-64 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={subjectAverageData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 11 }} />
              <YAxis dataKey="subject" type="category" width={110} tick={{ fontSize: 11 }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0c1d4e', color: '#fff', borderRadius: '8px', fontSize: '12px' }} 
              />
              <Bar dataKey="avg" fill="#20a7db" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
