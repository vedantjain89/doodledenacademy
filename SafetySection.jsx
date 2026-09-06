import React from 'react';
import { ShieldCheck, Sparkles, HeartHandshake, Eye, CheckCircle2 } from 'lucide-react';
import { SAFETY_POINTS } from '../data/programsData';

export default function SafetySection() {
  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Reassurance */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Uncompromised Safety &amp; Care</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black font-display text-doodle-dark tracking-tight">
              A Safe, Loving Sanctuary for Every Young Explorer
            </h2>
            
            <p className="text-base text-slate-600 leading-relaxed">
              We know that peace of mind is the top priority for parents in Ranchi. From child-proofed corners and non-toxic materials to verified coaches, every inch of Doodle Den is engineered for safety and hygiene.
            </p>

            <div className="pt-2 space-y-3 text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Sanitized daily before and after every batch</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Strict pickup &amp; drop identification protocol</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Dedicated pediatric first-aid station on premise</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Safety Cards Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {SAFETY_POINTS.map((point, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/20 transition-all shadow-sm"
                >
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-4">
                    {idx === 0 && <HeartHandshake className="w-5 h-5" />}
                    {idx === 1 && <Sparkles className="w-5 h-5" />}
                    {idx === 2 && <Eye className="w-5 h-5" />}
                    {idx === 3 && <ShieldCheck className="w-5 h-5" />}
                  </div>
                  <h3 className="text-base font-bold font-display text-slate-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
