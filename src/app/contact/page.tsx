'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Building2,
  ChevronRight
} from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Breadcrumb & Header Banner */}
      <section className="bg-[#F8FAFC] py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center space-x-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-[#0F8B9E]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-700 font-medium">Contact Us</span>
          </div>

          <div className="text-center space-y-2 pt-2">
            <span className="px-3 py-1 bg-white text-[#1B2A4A] border border-slate-200 text-xs font-semibold rounded uppercase tracking-wider">
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B2A4A] tracking-tight">
              Contact Plan Aid Academy
            </h1>
            <p className="text-slate-600 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
              Our administrative desk is available to assist with admissions inquiries, campus tours, and academic program details.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Info & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[#1B2A4A]">Campus Locations & Desk Info</h2>
              <p className="text-xs text-slate-600 mt-0.5">
                Reach our team via phone, email, or visit our campuses in Kano, Kaduna, and Abuja.
              </p>
            </div>

            {/* Campus Cards */}
            <div className="space-y-3">
              {/* Kano Campus */}
              <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-[#1B2A4A] font-bold text-xs sm:text-sm">
                    <Building2 className="w-4 h-4 text-[#0F8B9E]" />
                    <span>Kano Main Campus</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Main Campus
                  </span>
                </div>
                <div className="text-xs text-slate-600 space-y-1">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>No. 14 Airport Road, GRA, Kano State, Nigeria</span>
                  </div>
                  <div className="flex items-center space-x-2 pt-0.5">
                    <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="font-mono text-xs font-semibold">+234 800 PLAN AID (7526 243)</span>
                  </div>
                </div>
              </div>

              {/* Kaduna Campus */}
              <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-[#1B2A4A] font-bold text-xs sm:text-sm">
                    <Building2 className="w-4 h-4 text-[#0F8B9E]" />
                    <span>Kaduna Campus</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-sky-50 text-[#0F8B9E] border border-sky-200">
                    Branch
                  </span>
                </div>
                <div className="text-xs text-slate-600 space-y-1">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>Plot 45 Victoria Crescent, Independence Way, Kaduna</span>
                  </div>
                  <div className="flex items-center space-x-2 pt-0.5">
                    <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="font-mono text-xs font-semibold">+234 802 987 6543</span>
                  </div>
                </div>
              </div>

              {/* Abuja Liaison */}
              <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-[#1B2A4A] font-bold text-xs sm:text-sm">
                    <Building2 className="w-4 h-4 text-[#0F8B9E]" />
                    <span>Abuja Liaison Office</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                    Liaison
                  </span>
                </div>
                <div className="text-xs text-slate-600 space-y-1">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>Suite 12 Sunshine Estate, Maitama, Abuja FCT</span>
                  </div>
                  <div className="flex items-center space-x-2 pt-0.5">
                    <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="font-mono text-xs font-semibold">+234 805 444 3322</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Email & Hours */}
            <div className="p-4 bg-[#1B2A4A] text-white rounded-xl space-y-2 text-xs">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#0F8B9E]" />
                <span>admissions@planaidacademy.edu.ng</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-[#0F8B9E]" />
                <span>Office Hours: Mon – Fri: 7:30 AM – 4:00 PM</span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div id="tour" className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 space-y-5">
            <div>
              <h3 className="text-xl font-bold text-[#1B2A4A]">Send Us a Direct Inquiry</h3>
              <p className="text-xs text-slate-600 mt-0.5">Complete the form below to inquire about admissions or schedule a campus visit.</p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-950">Message Sent Successfully</h4>
                <p className="text-xs text-emerald-800">
                  Thank you <strong>{name}</strong>. Our administrative desk has received your message regarding "{subject}". We will reply shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-emerald-700 text-white font-bold text-xs rounded-lg"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ibrahim Usman"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F8B9E]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-semibold text-slate-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F8B9E]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Subject *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Schedule Campus Tour / Secondary Admissions"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F8B9E]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Please specify your question or requested campus tour date..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F8B9E]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#0F8B9E] hover:bg-[#0d7788] text-white font-bold text-xs rounded-lg transition flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Embedded Location Map Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 rounded-xl border border-slate-200 p-8 text-center space-y-2 max-w-2xl mx-auto">
          <MapPin className="w-6 h-6 text-[#0F8B9E] mx-auto" />
          <h4 className="font-bold text-base text-[#1B2A4A]">Plan Aid Academy Main Campus</h4>
          <p className="text-xs text-slate-600">No. 14 Airport Road, GRA, Kano State, Nigeria</p>
          <span className="text-[10px] font-mono text-slate-500">GPS Coordinates: 11.9964° N, 8.5167° E</span>
        </div>
      </section>
    </div>
  );
}
