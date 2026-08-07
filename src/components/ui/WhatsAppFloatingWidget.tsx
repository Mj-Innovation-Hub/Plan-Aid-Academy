'use client';

import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

export const WhatsAppFloatingWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* Expanded Quick Chat Popup */}
      {isOpen && (
        <div className="w-80 bg-white rounded-3xl shadow-2xl border border-emerald-200 p-5 space-y-4 animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-emerald-600 to-teal-700 -m-5 mb-0 p-4 rounded-t-3xl text-white">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-white">
                <MessageSquare className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Plan Aid Admissions Desk</h4>
                <span className="text-[10px] text-emerald-200 flex items-center space-x-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                  <span>Online • Typically replies instantly</span>
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-emerald-100 hover:text-white rounded-full hover:bg-white/10 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body message preview */}
          <div className="bg-emerald-50 p-3 rounded-2xl border border-emerald-100 text-xs text-emerald-950 space-y-1">
            <span className="font-bold text-emerald-800 block text-[11px]">Assalamu Alaikum & Welcome! 👋</span>
            <p className="leading-relaxed">
              How can we assist you with admissions, robotics lab tours, or Madrasah Tahfiz enrollment today?
            </p>
          </div>

          {/* Action Links */}
          <div className="space-y-2">
            <a
              href="https://wa.me/2348031234567?text=Hello%20Plan%20Aid%20Academy,%20I%20want%20to%20inquire%20about%20Admissions"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow transition flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat with Kano Main Campus</span>
            </a>
            <a
              href="https://wa.me/2348029876543?text=Hello%20Plan%20Aid%20Academy,%20I%20want%20to%20inquire%20about%20Kaduna%20Campus"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-royal-950 font-bold text-xs rounded-xl transition flex items-center justify-center space-x-1.5"
            >
              <span>Chat with Kaduna Campus</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-extrabold text-xs rounded-full shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white"
        aria-label="Contact via WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline font-bold">WhatsApp Us</span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-primary-400 rounded-full border-2 border-white animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-primary-400 rounded-full border-2 border-white" />
      </button>
    </div>
  );
};
