'use client';

import React, { useState } from 'react';
import { ReportCardModal } from '@/components/ui/ReportCardModal';
import { mockStudents, mockSubjectScores, mockAnnouncements } from '@/lib/mockData';
import { 
  Award, 
  BookOpen, 
  CreditCard, 
  Calendar, 
  Printer, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp,
  Clock,
  ArrowRight,
  Check,
  Circle,
  Megaphone
} from 'lucide-react';

export default function StudentParentPortalPage() {
  const [selectedStudentId, setSelectedStudentId] = useState<string>('std-101');
  const [isReportCardOpen, setIsReportCardOpen] = useState(false);

  const currentStudent = mockStudents.find((s) => s.id === selectedStudentId) || mockStudents[0];

  return (
    <div className="space-y-6 pb-12 font-sans">
      {/* 1. Student Profile Hero Banner (Dark Navy-Teal Gradient Card) */}
      <div className="bg-gradient-to-r from-[#0c1427] via-[#101d36] to-[#0F8B9E] text-white rounded-3xl p-5 sm:p-8 shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-5 relative overflow-hidden">
        <div className="flex items-center space-x-4 sm:space-x-5 relative z-10">
          <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-[#0F8B9E] text-white font-black text-xl sm:text-3xl flex items-center justify-center border-2 border-white/20 shadow-md shrink-0">
            ZM
          </div>
          <div className="space-y-1">
            <h1 className="text-xl sm:text-3xl font-black text-white tracking-tight">Zainab Musa Dantsoho</h1>
            <div className="text-[11px] sm:text-xs text-teal-100 font-medium flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span>Level: <strong>Primary / Madrasah</strong></span>
              <span className="hidden sm:inline">•</span>
              <span>Reg: <strong className="font-mono">PAA-2024-001</strong></span>
              <span className="hidden sm:inline">•</span>
              <span>Class: <strong>Primary 5 A</strong></span>
            </div>
          </div>
        </div>

        {/* Right Badges in Hero Banner (Responsive Grid on Mobile) */}
        <div className="grid grid-cols-3 gap-2 bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/15 relative z-10 shrink-0 text-center">
          <div className="px-1 border-r border-white/20 last:border-r-0">
            <div className="text-xl sm:text-2xl font-black text-white">B+</div>
            <div className="text-[9px] sm:text-[10px] text-teal-200 uppercase font-bold tracking-wider">Avg. Grade</div>
          </div>
          <div className="px-1 border-r border-white/20 last:border-r-0">
            <div className="text-xl sm:text-2xl font-black text-emerald-300">92%</div>
            <div className="text-[9px] sm:text-[10px] text-teal-200 uppercase font-bold tracking-wider">Attendance</div>
          </div>
          <div className="px-1">
            <div className="text-xl sm:text-2xl font-black text-amber-300">14/30</div>
            <div className="text-[9px] sm:text-[10px] text-teal-200 uppercase font-bold tracking-wider">Juz Done</div>
          </div>
        </div>
      </div>

      {/* 2. Four Stat Indicator Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Stat Card 1: Term 1 Result */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Term 1 Result</span>
            <div className="w-8 h-8 rounded-xl bg-teal-50 text-[#0F8B9E] flex items-center justify-center font-bold">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-[#0c1427]">82.4%</div>
          <div className="text-xs font-bold text-emerald-600 flex items-center space-x-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+4.2% from last term</span>
          </div>
        </div>

        {/* Stat Card 2: Attendance Rate */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Attendance Rate</span>
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-[#0c1427]">92%</div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div className="bg-purple-600 h-full w-[92%]" />
          </div>
        </div>

        {/* Stat Card 3: Fee Status */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Fee Status</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CreditCard className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-black text-emerald-700">Paid</div>
          <div className="text-xs font-medium text-slate-500">₦65,000 — Term 1</div>
        </div>

        {/* Stat Card 4: Next Exam */}
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Next Exam</span>
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <div className="text-base font-black text-[#0c1427]">End of Term Exam</div>
          <div className="text-xs font-bold text-amber-700">18 August 2026</div>
        </div>
      </div>

      {/* 3. Main Content Grid (3 Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Column 1 (4 Cols): Term 1 Subject Results Card */}
        <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-extrabold text-base text-[#0c1427]">Term 1 Results</h3>
            <button
              onClick={() => setIsReportCardOpen(true)}
              className="text-xs font-extrabold text-[#0F8B9E] hover:underline flex items-center space-x-1"
            >
              <span>Full report</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-4">
            {/* Subject 1 */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                <span>Islamic Studies</span>
                <div className="flex items-center space-x-2">
                  <span className="font-mono">88/100</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-extrabold">A</span>
                </div>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#0F8B9E] h-full w-[88%]" />
              </div>
            </div>

            {/* Subject 2 */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                <span>Arabic Language</span>
                <div className="flex items-center space-x-2">
                  <span className="font-mono">76/100</span>
                  <span className="px-2 py-0.5 rounded bg-sky-100 text-sky-800 text-[10px] font-extrabold">B</span>
                </div>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-teal-600 h-full w-[76%]" />
              </div>
            </div>

            {/* Subject 3 */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                <span>Mathematics</span>
                <div className="flex items-center space-x-2">
                  <span className="font-mono">91/100</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-extrabold">A</span>
                </div>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#0F8B9E] h-full w-[91%]" />
              </div>
            </div>

            {/* Subject 4 */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                <span>English Language</span>
                <div className="flex items-center space-x-2">
                  <span className="font-mono">78/100</span>
                  <span className="px-2 py-0.5 rounded bg-sky-100 text-sky-800 text-[10px] font-extrabold">B</span>
                </div>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-teal-600 h-full w-[78%]" />
              </div>
            </div>

            {/* Subject 5 */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                <span>Social Studies</span>
                <div className="flex items-center space-x-2">
                  <span className="font-mono">82/100</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-extrabold">A</span>
                </div>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#0F8B9E] h-full w-[82%]" />
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsReportCardOpen(true)}
            className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-[#0c1427] font-extrabold text-xs rounded-xl transition flex items-center justify-center space-x-1.5"
          >
            <Printer className="w-4 h-4 text-[#0F8B9E]" />
            <span>Print Terminal Report Card</span>
          </button>
        </div>

        {/* Column 2 (4 Cols): Qur'an / Hifz Progress Card */}
        <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-extrabold text-base text-[#0c1427] flex items-center space-x-2">
              <span className="font-arabic text-lg text-emerald-700">قرآن</span>
              <span>Qur'an / Hifz Progress</span>
            </h3>
            <span className="text-xs font-bold text-emerald-700">60.7% Overall</span>
          </div>

          {/* Progress bar */}
          <div className="space-y-1">
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-emerald-600 h-full w-[60.7%]" />
            </div>
          </div>

          {/* Surah List Items */}
          <div className="space-y-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between">
              <div className="flex items-center space-x-2.5 font-bold text-slate-800">
                <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]">
                  <Check className="w-3 h-3" />
                </div>
                <span>Al-Fatiha</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">Done</span>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between">
              <div className="flex items-center space-x-2.5 font-bold text-slate-800">
                <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]">
                  <Check className="w-3 h-3" />
                </div>
                <span>Al-Baqarah (1-100)</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">Done</span>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between">
              <div className="flex items-center space-x-2.5 font-bold text-slate-800">
                <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px]">
                  <Check className="w-3 h-3" />
                </div>
                <span>Al-Baqarah (101-200)</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">Done</span>
            </div>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-center justify-between">
              <div className="flex items-center space-x-2.5 font-bold text-amber-950">
                <div className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px]">
                  <Clock className="w-3 h-3" />
                </div>
                <span>Al-Baqarah (201-286)</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-amber-200 text-amber-900 font-bold text-[10px]">In progress</span>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between opacity-60">
              <div className="flex items-center space-x-2.5 font-medium text-slate-600">
                <Circle className="w-4 h-4 text-slate-400" />
                <span>Al-Imran</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-600 font-bold text-[10px]">Upcoming</span>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between opacity-60">
              <div className="flex items-center space-x-2.5 font-medium text-slate-600">
                <Circle className="w-4 h-4 text-slate-400" />
                <span>An-Nisa</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-600 font-bold text-[10px]">Upcoming</span>
            </div>
          </div>
        </div>

        {/* Column 3 (4 Cols): Upcoming Events & Fee Summary Stack */}
        <div className="lg:col-span-4 space-y-6">
          {/* Upcoming Events Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="font-extrabold text-base text-[#0c1427]">Upcoming Events</h3>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-amber-50 rounded-2xl border border-amber-100 space-y-1">
                <span className="px-2 py-0.5 rounded bg-amber-200 text-amber-900 font-extrabold text-[9px] uppercase">EXAMS</span>
                <div className="font-bold text-slate-900">End of Term Examination</div>
                <div className="text-[11px] text-slate-500 font-medium">18 Aug 2026 • Main Campus</div>
              </div>

              <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100 space-y-1">
                <span className="px-2 py-0.5 rounded bg-emerald-200 text-emerald-900 font-extrabold text-[9px] uppercase">EVENT</span>
                <div className="font-bold text-slate-900">Annual Qur'an Recitation Contest</div>
                <div className="text-[11px] text-slate-500 font-medium">25 Aug 2026 • Madrasah Hall</div>
              </div>

              <div className="p-3 bg-purple-50 rounded-2xl border border-purple-100 space-y-1">
                <span className="px-2 py-0.5 rounded bg-purple-200 text-purple-900 font-extrabold text-[9px] uppercase">SPORTS</span>
                <div className="font-bold text-slate-900">Inter-House Sports Day</div>
                <div className="text-[11px] text-slate-500 font-medium">02 Sep 2026 • Academy Stadium</div>
              </div>
            </div>
          </div>

          {/* Fee Summary Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-extrabold text-xs text-slate-400 uppercase tracking-wider">FEE SUMMARY</h4>
              <CreditCard className="w-4 h-4 text-[#0F8B9E]" />
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
                <div>
                  <div className="font-bold text-slate-800">Term 1 Fee</div>
                  <div className="text-[10px] text-slate-500 font-mono">₦65,000</div>
                </div>
                <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-extrabold text-[10px]">Paid</span>
              </div>

              <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl">
                <div>
                  <div className="font-bold text-slate-800">Term 2 Fee</div>
                  <div className="text-[10px] text-slate-500 font-mono">₦65,000</div>
                </div>
                <span className="px-2.5 py-0.5 rounded bg-amber-100 text-amber-800 font-extrabold text-[10px]">Pending</span>
              </div>

              <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded-xl opacity-60">
                <div>
                  <div className="font-bold text-slate-800">Term 3 Fee</div>
                  <div className="text-[10px] text-slate-500 font-mono">₦65,000</div>
                </div>
                <span className="px-2.5 py-0.5 rounded bg-slate-200 text-slate-600 font-extrabold text-[10px]">Due</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Student & Parent Announcements & School Calendar Bulletin Board */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
              <Megaphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-xl text-[#0c1427]">School Announcements & Calendar Notices</h3>
              <p className="text-xs text-slate-500">Official updates on resumption, vacation, fee adjustments & CBT entrance exams</p>
            </div>
          </div>

          <span className="px-3 py-1 bg-teal-50 text-[#0F8B9E] font-bold text-xs rounded-full">
            Official Bulletin
          </span>
        </div>

        {/* List of Student-Facing Announcements (Staff Only excluded) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockAnnouncements
            .filter((ann) => ann.targetAudience !== 'Staff Only')
            .map((ann) => (
              <div key={ann.id} className="p-5 bg-slate-50/80 rounded-2xl border border-slate-200/80 space-y-3 flex flex-col justify-between hover:bg-white transition-all shadow-2xs">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold bg-[#0F8B9E] text-white uppercase">
                      {ann.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 font-bold">{ann.date}</span>
                  </div>
                  <h4 className="font-extrabold text-base text-[#0c1427]">{ann.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{ann.content || ann.summary}</p>
                </div>
                <div className="pt-2 border-t border-slate-200/60 text-[11px] font-bold text-slate-400">
                  Issued by: {ann.author}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Printable Report Card Modal */}
      <ReportCardModal
        isOpen={isReportCardOpen}
        onClose={() => setIsReportCardOpen(false)}
        student={currentStudent}
        scores={mockSubjectScores}
      />
    </div>
  );
}
