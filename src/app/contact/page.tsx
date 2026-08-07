'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Building2,
  Globe
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
    <div className="space-y-16 pb-16">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-sky-100 via-white to-slate-50 py-16 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <span className="px-3.5 py-1 bg-primary-100 text-royal-800 font-bold text-xs rounded-full uppercase tracking-wider">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-royal-950 tracking-tight">
            Contact Plan Aid Academy
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-base leading-relaxed">
            We are here to answer all your inquiries regarding admissions, campus tours, boarding facilities, and academic programs.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Info & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-extrabold text-royal-950">Academy Campuses & Contacts</h2>
              <p className="text-sm text-slate-600">
                Reach out to our administrative team via phone, email, or by visiting our campuses in Kano, Kaduna, and Abuja.
              </p>
            </div>

            {/* Campus Cards */}
            <div className="space-y-4">
              {/* Kano Campus */}
              <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-primary-500 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Kano Main Campus (Robotics & Boarding)</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300">
                    WhatsApp Active
                  </span>
                </div>
                <div className="text-xs text-slate-600 space-y-1.5">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>No. 14 Airport Road, GRA, Kano State, Nigeria</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="font-mono font-semibold">+234 803 123 4567</span>
                    </div>
                    <a
                      href="https://wa.me/2348031234567?text=Hello%20Kano%20Campus%20Admissions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] rounded-lg transition inline-flex items-center space-x-1 shadow-xs"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>WhatsApp Kano</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Kaduna Campus */}
              <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-royal-600 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Kaduna Campus</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300">
                    WhatsApp Active
                  </span>
                </div>
                <div className="text-xs text-slate-600 space-y-1.5">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>Plot 45 Victoria Crescent, Independence Way, Kaduna</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="font-mono font-semibold">+234 802 987 6543</span>
                    </div>
                    <a
                      href="https://wa.me/2348029876543?text=Hello%20Kaduna%20Campus%20Admissions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] rounded-lg transition inline-flex items-center space-x-1 shadow-xs"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>WhatsApp Kaduna</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Abuja Office */}
              <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-emerald-700 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Abuja Liaison Office</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300">
                    WhatsApp Active
                  </span>
                </div>
                <div className="text-xs text-slate-600 space-y-1.5">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>Suite 12 Sunshine Estate, Maitama, Abuja FCT</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="font-mono font-semibold">+234 805 444 3322</span>
                    </div>
                    <a
                      href="https://wa.me/2348054443322?text=Hello%20Abuja%20Liaison%20Office"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] rounded-lg transition inline-flex items-center space-x-1 shadow-xs"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>WhatsApp Abuja</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct Chat Banner */}
            <div className="p-6 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl shadow-lg space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 font-bold text-base">
                  <MessageSquare className="w-5 h-5 text-emerald-200 fill-emerald-200/20" />
                  <span>Instant WhatsApp Help Desk</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-extrabold uppercase">
                  Fast Reply
                </span>
              </div>
              <p className="text-xs text-emerald-50 leading-relaxed">
                Have a quick question about fees, robotics scholarships, or Madrasah boarding? Chat directly with our admissions officer on WhatsApp.
              </p>
              <div className="pt-1 flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-emerald-100">+234 803 123 4567</span>
                <a
                  href="https://wa.me/2348031234567?text=Hello%20Plan%20Aid%20Academy,%20I%20would%20like%20to%20inquire%20about%20admissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-emerald-800 hover:bg-emerald-50 font-extrabold text-xs rounded-xl shadow transition inline-flex items-center space-x-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Email & Hours */}
            <div className="p-5 bg-royal-950 text-white rounded-2xl space-y-2 text-xs">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary-400" />
                <span>admissions@planaid.edu.ng</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary-400" />
                <span>Office Hours: Monday – Friday: 7:30 AM – 4:00 PM</span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div id="tour" className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-royal-950">Send Us a Direct Message</h3>
              <p className="text-xs text-slate-500">Fill in the fields below to send an inquiry or book a campus tour.</p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold text-emerald-900">Message Received!</h4>
                <p className="text-xs text-emerald-800">
                  Thank you <strong>{name}</strong>. Our administrative desk has received your message regarding "{subject}". We will reply shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-emerald-700 text-white font-bold text-xs rounded-xl"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Subject *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Schedule Campus Tour / Robotics Inquiry"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Type your message or requested tour date here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-royal-700 hover:bg-royal-800 text-white font-bold text-base rounded-xl shadow transition flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Embedded Google Map Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-200 rounded-3xl overflow-hidden shadow-inner border border-slate-300 h-80 relative flex items-center justify-center">
          <div className="text-center space-y-2 p-6 bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-slate-200 max-w-md">
            <MapPin className="w-8 h-8 text-primary-500 mx-auto animate-bounce" />
            <h4 className="font-bold text-lg text-royal-950">Plan Aid Academy Main Campus Map</h4>
            <p className="text-xs text-slate-600">No. 14 Airport Road, GRA, Kano State, Nigeria</p>
            <span className="text-[10px] font-bold text-primary-600 uppercase">GPS: 11.9964° N, 8.5167° E</span>
          </div>
        </div>
      </section>
    </div>
  );
}
