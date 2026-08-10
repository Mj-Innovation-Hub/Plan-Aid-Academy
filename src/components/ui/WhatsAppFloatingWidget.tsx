'use client';

import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

export const WhatsAppFloatingWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {/* Expanded Quick Chat Popup */}
      {isOpen && (
        <div className="w-72 bg-white rounded-xl shadow-lg border border-slate-200 p-4 space-y-3">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-[#1B2A4A]">Admissions Support</h4>
                <span className="text-[10px] text-slate-500">Plan Aid Academy</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-slate-600 rounded transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body message preview */}
          <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-xs text-slate-700 space-y-1">
            <p className="leading-relaxed">
              Hello! Have questions about admissions, campus tours, or Madrasah enrollment? We're glad to assist.
            </p>
          </div>

          {/* Action Links */}
          <div className="space-y-1.5">
            <a
              href="https://wa.me/2348031234567?text=Hello%20Plan%20Aid%20Academy,%20I%20want%20to%20inquire%20about%20Admissions"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg transition flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Contact Admissions on WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3.5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-full shadow-md transition"
        aria-label="Contact via WhatsApp"
      >
        <MessageSquare className="w-4 h-4" />
        <span className="hidden sm:inline">WhatsApp Help</span>
      </button>
    </div>
  );
};
