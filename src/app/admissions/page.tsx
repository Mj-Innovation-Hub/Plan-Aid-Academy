'use client';

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Download, 
  FileText, 
  Send, 
  Calendar, 
  PhoneCall, 
  HelpCircle, 
  Printer, 
  Sparkles,
  UserCheck
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
    alert("Downloading Official Plan Aid Academy Admission Application Form (PDF)...");
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-sky-100 via-white to-slate-50 py-16 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <span className="px-3.5 py-1 bg-primary-100 text-royal-800 font-bold text-xs rounded-full uppercase tracking-wider">
            Admissions 2026/2027 Session
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-royal-950 tracking-tight">
            Join the Plan Aid Academy Family
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Follow our simple 4-step enrollment process or fill out the online application form below to connect with our admissions team.
          </p>
        </div>
      </section>

      {/* 4-Step Enrollment Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-primary-500 uppercase tracking-wider">Simple Steps</span>
          <h2 className="text-3xl font-extrabold text-royal-950">Enrollment Process</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-primary-500 text-white font-black flex items-center justify-center text-lg">
              1
            </div>
            <h3 className="font-bold text-base text-royal-950">Submit Inquiry</h3>
            <p className="text-xs text-slate-600">
              Fill out the online application form below or visit campus to pick up a physical form.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-royal-600 text-white font-black flex items-center justify-center text-lg">
              2
            </div>
            <h3 className="font-bold text-base text-royal-950">Campus Tour & Assessment</h3>
            <p className="text-xs text-slate-600">
              Attend a guided tour of the robotics lab and complete student placement assessment.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-amber-500 text-white font-black flex items-center justify-center text-lg">
              3
            </div>
            <h3 className="font-bold text-base text-royal-950">Offer of Admission</h3>
            <p className="text-xs text-slate-600">
              Successful applicants receive official admission letters and fee payment schedules.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 relative">
            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-lg">
              4
            </div>
            <h3 className="font-bold text-base text-royal-950">Orientation & Resumption</h3>
            <p className="text-xs text-slate-600">
              Receive book packs, uniforms, portal credentials, and join morning orientation assembly!
            </p>
          </div>
        </div>
      </section>

      {/* Printable Form & Requirements */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-royal-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full uppercase">
              Printable Option
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Prefer a Physical Application Form?
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Download and print our official PDF admission form. Fill it out manually and drop it off at any of our campus registry offices in Kano, Kaduna, or Abuja.
            </p>
          </div>
          <div className="lg:col-span-4 text-right flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
            <button
              onClick={handleDownloadForm}
              className="w-full sm:w-auto px-6 py-3.5 bg-white text-royal-950 font-extrabold text-sm rounded-xl shadow hover:bg-slate-100 transition inline-flex items-center justify-center space-x-2"
            >
              <Download className="w-5 h-5 text-primary-500" />
              <span>Download Form (PDF)</span>
            </button>
            <a
              href="https://wa.me/2348031234567?text=Hello%20Plan%20Aid%20Academy,%20I%20would%20like%20to%20inquire%20about%20admissions"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl shadow transition inline-flex items-center justify-center space-x-2"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Online Application Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6">
          <div className="text-center space-y-2 border-b border-slate-100 pb-4">
            <h3 className="text-2xl font-bold text-royal-950">Online Admission & Inquiry Form</h3>
            <p className="text-xs text-slate-500">Submitting this form captures your lead directly into our Admissions CRM for immediate follow-up.</p>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-xl font-bold text-emerald-900">Inquiry Submitted Successfully!</h4>
              <p className="text-xs text-emerald-800 max-w-md mx-auto">
                Thank you <strong>{parentName}</strong>! Your inquiry for <strong>{childName}</strong> has been logged in our Admissions pipeline. Our officer will contact you at <strong>{phone}</strong> within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 px-4 py-2 bg-emerald-700 text-white font-bold text-xs rounded-xl"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Parent / Guardian Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Kabiru Sani"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 803 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="parent@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Child's Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hamza Kabiru Sani"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Intended School Arm *</label>
                <select
                  value={intendedSection}
                  onChange={(e) => setIntendedSection(e.target.value as SchoolSection)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-royal-950 focus:ring-2 focus:ring-primary-500"
                >
                  <option value="primary">Primary (Basic Education) — Ages 5 to 11</option>
                  <option value="secondary">Secondary College — Ages 11 to 17</option>
                  <option value="madrasah">Madrasah Tahfiz (Qur'an & Islamic Studies)</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Questions or Special Requests</label>
                <textarea
                  rows={3}
                  placeholder="Inquire about boarding, bus services, or robotics scholarships..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-primary-500 via-royal-600 to-royal-800 text-white font-extrabold text-base rounded-xl shadow-lg hover:shadow-xl transition flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Submit Admission Application</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-primary-500 uppercase tracking-wider">Parents Info</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-royal-950">Admissions FAQ</h2>
        </div>

        <div className="space-y-3">
          {[
            {
              q: "What age range is eligible for admission into Primary and Secondary arms?",
              a: "Primary Basic Education arm admits children aged 5 to 11 years into Primary 1 through 6. Secondary College admits students aged 11 to 17 into JSS 1 through SSS 3 streams."
            },
            {
              q: "Is Qur'an memorization compulsory for all enrolled students?",
              a: "Students enrolled in the Madrasah Tahfiz arm undergo intensive daily Hifz tracks. Primary and Secondary college students also receive mandatory weekly Tajweed and Islamic ethical orientation modules."
            },
            {
              q: "What are the requirements for entrance examination?",
              a: "Candidates write computerized assessment tests covering Mathematics, English Language, and General Science. Past examination practice papers are provided upon application submission."
            },
            {
              q: "Do you offer school bus transportation and boarding facilities?",
              a: "Yes! Air-conditioned school buses cover major routes in Kano GRA, Airport Road, and environs. State-of-the-art separate boarding hostels are available for secondary boys and girls."
            }
          ].map((faq, idx) => (
            <details key={idx} className="group bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 transition [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer font-bold text-sm sm:text-base text-royal-950">
                <span>{faq.q}</span>
                <span className="ml-2 transition group-open:rotate-180 text-primary-500 font-extrabold">▼</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
