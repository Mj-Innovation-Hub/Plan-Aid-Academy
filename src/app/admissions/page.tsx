'use client';

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Download, 
  FileText, 
  Send, 
  PhoneCall, 
  HelpCircle, 
  Printer, 
  UserCheck,
  CreditCard,
  Building
} from 'lucide-react';
import { SchoolSection } from '@/lib/types';

export default function AdmissionsPage() {
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [childName, setChildName] = useState('');
  const [intendedSection, setIntendedSection] = useState<SchoolSection>('secondary');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDownloadForm = () => {
    alert("Downloading Official Plan Aid Academy Admission Form (PDF)...");
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-[#F8FAFC] py-12 sm:py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="px-3 py-1 bg-white text-[#1B2A4A] border border-slate-200 text-xs font-semibold rounded uppercase tracking-wider">
            2026 / 2027 Academic Session
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#1B2A4A] tracking-tight">
            Admissions & Enrollment Guide
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Welcome to the Plan Aid Academy admissions portal. Below is our guided step-by-step application process, fee structure overview, and online inquiry form.
          </p>
        </div>
      </section>

      {/* 4-Step Guided Enrollment Roadmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-[#0F8B9E] uppercase tracking-wider">Step-by-Step Roadmap</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B2A4A]">Guided Admission Process</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-[#1B2A4A] text-white font-bold flex items-center justify-center text-sm">
              1
            </div>
            <h3 className="font-bold text-base text-[#1B2A4A]">Submit Inquiry / Form</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fill out the online form below or visit any campus administrative desk to pick up a physical application pack.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-[#0F8B9E] text-white font-bold flex items-center justify-center text-sm">
              2
            </div>
            <h3 className="font-bold text-base text-[#1B2A4A]">CBT & Oral Assessment</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Student sits for a diagnostic evaluation in Mathematics, English Language, and Qur'anic recitation level.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-[#1B2A4A] text-white font-bold flex items-center justify-center text-sm">
              3
            </div>
            <h3 className="font-bold text-base text-[#1B2A4A]">Offer & Fee Confirmation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Successful applicants receive an official admission offer letter, payment invoice, and document checklist.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-700 text-white font-bold flex items-center justify-center text-sm">
              4
            </div>
            <h3 className="font-bold text-base text-[#1B2A4A]">Portal Onboarding</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Receive student portal logins, uniform kits, book lists, and attend orientation day before resumption.
            </p>
          </div>
        </div>
      </section>

      {/* Fee Structure Summary Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-[#0F8B9E] uppercase tracking-wider">Financial Transparency</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B2A4A]">Termly Fee Structure Overview</h2>
          <p className="text-xs sm:text-sm text-slate-600">Fees include tuition, STEM lab access, ICT CBT subscriptions, and Madrasah materials.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Primary */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-base text-[#1B2A4A]">Primary School</h3>
              <span className="text-xs font-semibold text-[#0F8B9E] bg-sky-50 px-2 py-0.5 rounded">Basic Ed</span>
            </div>
            <div className="text-2xl font-extrabold text-[#1B2A4A]">₦120,000 <span className="text-xs font-normal text-slate-500">/ term</span></div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0F8B9E]" />
                <span>Foundational STEM & Coding</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0F8B9E]" />
                <span>Basic Hifz & Tajweed Instruction</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0F8B9E]" />
                <span>Literacy & Computational Math</span>
              </li>
            </ul>
          </div>

          {/* Secondary */}
          <div className="bg-white p-6 rounded-xl border border-2 border-[#0F8B9E] p-6 rounded-xl space-y-4 shadow-sm relative">
            <span className="absolute -top-3 right-4 px-2.5 py-0.5 bg-[#0F8B9E] text-white text-[10px] font-bold rounded uppercase">Most Popular</span>
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-base text-[#1B2A4A]">Secondary College</h3>
              <span className="text-xs font-semibold text-[#0F8B9E] bg-sky-50 px-2 py-0.5 rounded">High School</span>
            </div>
            <div className="text-2xl font-extrabold text-[#1B2A4A]">₦165,000 <span className="text-xs font-normal text-slate-500">/ term</span></div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0F8B9E]" />
                <span>WAEC / NECO / JAMB Intensive Prep</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0F8B9E]" />
                <span>Advanced Robotics & Micro-controllers</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0F8B9E]" />
                <span>CBT Exam Simulation License</span>
              </li>
            </ul>
          </div>

          {/* Madrasah */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-base text-[#1B2A4A]">Madrasah Tahfiz</h3>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Hifz Focus</span>
            </div>
            <div className="text-2xl font-extrabold text-[#1B2A4A]">₦95,000 <span className="text-xs font-normal text-slate-500">/ term</span></div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Intensive Daily Hifz Circle</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Certified Tajweed Masters</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Arabic Grammar & Adab Literature</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Downloadable Option & Online Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Printable Form Info Box */}
          <div className="lg:col-span-5 bg-[#1B2A4A] text-white p-8 rounded-xl border border-slate-700 space-y-5">
            <span className="px-2.5 py-0.5 bg-[#0F8B9E] text-white text-xs font-semibold rounded">
              Physical Application
            </span>
            <h3 className="text-xl font-bold text-white">
              Download PDF Form
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              If you prefer filling out a hardcopy application form, you can download the official PDF form, print it out, and submit it to any of our campuses in Kano, Kaduna, or Abuja.
            </p>
            
            <div className="space-y-2 border-t border-slate-700 pt-4 text-xs text-slate-300">
              <div className="font-semibold text-white">Required Attachments with Hardcopy:</div>
              <ul className="space-y-1 pl-4 list-disc">
                <li>2 Passport photographs of the applicant</li>
                <li>Copy of official Birth Certificate</li>
                <li>Most recent Academic Progress Report</li>
              </ul>
            </div>

            <button
              onClick={handleDownloadForm}
              className="w-full py-3 bg-white hover:bg-slate-100 text-[#1B2A4A] font-bold text-xs rounded-lg transition flex items-center justify-center space-x-2"
            >
              <Download className="w-4 h-4 text-[#0F8B9E]" />
              <span>Download Official Form (PDF)</span>
            </button>
          </div>

          {/* Online Application Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-xl border border-slate-200 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#1B2A4A]">Online Admission Inquiry Form</h3>
              <p className="text-xs text-slate-600 mt-1">
                Fill in your contact details below to initiate your application. Our admissions team will reach out within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl space-y-3 text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-base text-emerald-950">Application Inquiry Received!</h4>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  Thank you, <strong>{parentName}</strong>. Your inquiry for <strong>{childName}</strong> has been logged. Our admissions desk will call you shortly at <strong>{phone}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-emerald-700 text-white text-xs font-bold rounded-lg"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Parent / Guardian Name *</label>
                    <input
                      type="text"
                      required
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder="e.g. Engr. Kabir Usman"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F8B9E]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +234 803 123 4567"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F8B9E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="parent@example.com"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F8B9E]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">Child's Full Name *</label>
                    <input
                      type="text"
                      required
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
                      placeholder="e.g. Fatima Kabir Usman"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F8B9E]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Intended Academic Arm *</label>
                  <select
                    value={intendedSection}
                    onChange={(e) => setIntendedSection(e.target.value as SchoolSection)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F8B9E]"
                  >
                    <option value="primary">Primary Education (Basic 1 - 6)</option>
                    <option value="secondary">Secondary College (JSS 1 - SSS 3)</option>
                    <option value="madrasah">Madrasah Tahfiz & Islamic Studies</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">Additional Notes / Preferred Campus</label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Mention preferred campus (Kano, Kaduna, or Abuja) or previous school details..."
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F8B9E]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#0F8B9E] hover:bg-[#0d7788] text-white font-bold text-xs rounded-lg transition flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Admission Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
