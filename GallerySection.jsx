import React, { useState } from 'react';
import { Camera, Instagram, ExternalLink, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/programsData';

export default function GallerySection() {
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  const emojiIcons = {
    'creativity': '🎨',
    'movement': '🤸',
    'future-skills': '🤖',
    'performing-arts': '🎭'
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-amber-50/20 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 font-bold text-xs uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Den Moments &amp; Activities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-doodle-dark tracking-tight">
            A Glimpse into the Joy of Creation
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Real smiles, messy hands, curious minds, and proud stage moments at Doodle Den Ranchi.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Activities' },
            { id: 'creativity', label: '🎨 Art & Craft' },
            { id: 'movement', label: '🏃 Movement & Gym' },
            { id: 'future-skills', label: '🤖 AI & Robotics' },
            { id: 'performing-arts', label: '🎭 Theater & Music' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filter === tab.id
                  ? 'bg-doodle-dark text-white shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border-2 border-slate-200/80 hover:border-amber-300 shadow-sm hover:shadow-bubbly transition-all p-6 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Visual Icon Header Box */}
                <div className="w-full h-40 rounded-2xl bg-gradient-to-br from-amber-100/60 via-rose-100/50 to-purple-100/60 border border-slate-100 flex flex-col items-center justify-center p-4 relative overflow-hidden group-hover:scale-[1.02] transition-transform">
                  <div className="text-5xl mb-2 transform group-hover:rotate-6 transition-transform">
                    {emojiIcons[item.category] || '✨'}
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${item.color} shadow-xs`}>
                    {item.pillar}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-slate-900 mt-5 group-hover:text-doodle-coral transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-semibold">
                <span>Doodle Den Ranchi</span>
                <span className="text-doodle-coral font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Hands-On
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Follow Callout Banner */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center flex-shrink-0">
              <Instagram className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display">
                Follow Us on Instagram @doodleden_academy
              </h3>
              <p className="text-sm text-pink-100">
                Catch our latest reels, behind-the-scenes craft sessions, and student achievements in Ranchi!
              </p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/doodleden_academy/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl bg-white text-purple-700 font-bold text-sm shadow-md hover:bg-purple-50 transition-all flex items-center gap-2 flex-shrink-0"
          >
            <span>View Instagram Profile</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
