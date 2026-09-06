import React from 'react';
import { Star, MessageSquareQuote, MapPin, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data/programsData';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-gradient-to-b from-white via-rose-50/20 to-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 font-bold text-xs uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
            <span>Parent Love in Ranchi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-doodle-dark tracking-tight">
            Loved by Parents, Adored by Kids
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Hear how Doodle Den Academy has made after-school hours stress-free for parents and profoundly enriching for little ones.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-100 hover:border-amber-200 shadow-bubbly hover:shadow-bubbly-lg transition-all flex flex-col justify-between relative"
            >
              <div>
                {/* Header with stars and tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
                    {t.tag}
                  </span>
                </div>

                {/* Quote Icon */}
                <MessageSquareQuote className="w-8 h-8 text-rose-300 mb-3" />

                {/* Testimonial Body */}
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm font-display">{t.name}</h4>
                  <p className="text-xs text-doodle-coral font-semibold">{t.child}</p>
                </div>
                <div className="text-right text-xs text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  <span>{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
