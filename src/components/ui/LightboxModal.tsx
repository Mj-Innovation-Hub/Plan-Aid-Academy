'use client';

import React from 'react';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: { id: string; title: string; imageUrl: string; caption?: string; category?: string }[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNavigate,
}) => {
  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNavigate((currentIndex + 1) % items.length);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Close Bar */}
      <div className="absolute top-4 right-4 z-50 flex items-center space-x-4">
        <span className="text-white text-xs font-semibold bg-white/10 px-3 py-1 rounded-full">
          {currentIndex + 1} of {items.length}
        </span>
        <button
          onClick={onClose}
          className="p-2 text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Prev Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white bg-white/10 hover:bg-white/20 rounded-full backdrop-blur transition z-50"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      {/* Main Image Container */}
      <div 
        className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center relative"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentItem.imageUrl}
          alt={currentItem.title}
          className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl border border-white/10"
        />

        {/* Title & Caption */}
        <div className="mt-4 text-center space-y-1 max-w-xl">
          {currentItem.category && (
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary-400">
              {currentItem.category}
            </span>
          )}
          <h4 className="text-lg font-bold text-white">{currentItem.title}</h4>
          {currentItem.caption && (
            <p className="text-xs text-slate-300 leading-normal">{currentItem.caption}</p>
          )}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white bg-white/10 hover:bg-white/20 rounded-full backdrop-blur transition z-50"
      >
        <ChevronRight className="w-7 h-7" />
      </button>
    </div>
  );
};
