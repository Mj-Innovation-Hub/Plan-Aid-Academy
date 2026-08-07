'use client';

import React, { useState } from 'react';
import { LightboxModal } from '@/components/ui/LightboxModal';
import { mockGalleryItems } from '@/lib/mockData';
import { Image as ImageIcon, Sparkles, Filter } from 'lucide-react';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = ['All', 'STEM Lab', 'Madrasah', 'Classrooms', 'Events'];

  const filteredItems = selectedCategory === 'All'
    ? mockGalleryItems
    : mockGalleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (itemIndex: number) => {
    setLightboxIndex(itemIndex);
    setLightboxOpen(true);
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-sky-100 via-white to-slate-50 py-16 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <span className="px-3.5 py-1 bg-primary-100 text-royal-800 font-bold text-xs rounded-full uppercase tracking-wider">
            Visual Highlights
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-royal-950 tracking-tight">
            Plan Aid Academy Photo Gallery
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-base leading-relaxed">
            Take a visual tour through our robotics sessions, Qur'an recitation halls, science practicals, and vibrant student activities.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Category Filters */}
        <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                selectedCategory === cat
                  ? 'bg-royal-950 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer border border-slate-200 bg-white"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-950/85 via-royal-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
                <span className="text-xs font-bold text-primary-300 uppercase tracking-wider">{item.category}</span>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-200 line-clamp-2">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Viewer */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={filteredItems}
        currentIndex={lightboxIndex}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
}
