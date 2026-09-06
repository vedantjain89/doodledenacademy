import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/programsData';

export default function FaqSection({ onOpenTrialModal }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-doodle-dark tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Everything you need to know about joining our creative and activity family.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border-2 border-slate-100 hover:border-amber-200 transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 text-base sm:text-lg font-display pr-2">
                    {faq.question}
                  </span>
                  <div className="p-1 rounded-full bg-slate-100 text-slate-600 flex-shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed bg-amber-50/20 border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 text-center p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="font-bold text-slate-900 font-display text-base">
              Have a specific question about your child's age or needs?
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Our learning counselors in Ranchi are happy to assist you personally!
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919876543210?text=Hi%20Doodle%20Den%20Academy%2C%20I%20have%20a%20question%20regarding%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl border border-emerald-500 text-emerald-700 bg-white hover:bg-emerald-50 text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Ask on WhatsApp</span>
            </a>
            <button
              onClick={() => onOpenTrialModal()}
              className="px-4 py-2.5 rounded-xl bg-doodle-coral hover:bg-rose-600 text-white text-xs font-bold shadow-sm transition-all"
            >
              Book Trial
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
