import React, { useState } from 'react';
import { Sparkles, Phone, MessageCircle, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenTrialModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Pillars', href: '#pillars' },
    { name: 'Programs', href: '#programs' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Timetable', href: '#schedule' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-100/80 shadow-sm transition-all">
      {/* Top micro announcement bar */}
      <div className="bg-gradient-to-r from-amber-400 via-rose-400 to-purple-500 py-1.5 px-4 text-center text-xs md:text-sm font-semibold text-white tracking-wide flex items-center justify-center gap-2 shadow-inner">
        <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
        <span>✨ Admitting Now for Weekend & After-School Dens in Ranchi! Ages 2–11 Years.</span>
        <button
          onClick={() => onOpenTrialModal()}
          className="underline ml-1 font-bold hover:text-amber-100 transition-colors"
        >
          Claim 1 Free Trial Class →
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-doodle-yellow to-doodle-coral flex items-center justify-center shadow-md transform group-hover:rotate-6 transition-transform">
              <span className="text-2xl font-black text-white font-display">DD</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-display tracking-tight text-doodle-dark flex items-center gap-1.5">
                Doodle Den
                <span className="text-xs uppercase tracking-widest px-2 py-0.5 rounded-full bg-doodle-coral/10 text-doodle-coral font-bold font-sans">
                  Academy
                </span>
              </span>
              <span className="text-xs text-slate-500 font-medium -mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                Holistic Kids Center • Ranchi
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-doodle-coral transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-doodle-coral transition-all duration-300 group-hover:w-full rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/919876543210?text=Hi%20Doodle%20Den%20Academy%2C%20I%20would%20like%20to%20know%20more%20about%20your%20programs%20in%20Ranchi!"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:text-emerald-600 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all flex items-center gap-2 text-sm font-semibold"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-500" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenTrialModal()}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-doodle-coral to-rose-500 hover:from-rose-500 hover:to-doodle-coral text-white font-bold text-sm shadow-md hover:shadow-lg transition-all btn-bubbly flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Free Trial</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenTrialModal()}
              className="px-3 py-1.5 rounded-lg bg-doodle-coral text-white text-xs font-bold"
            >
              Trial
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white/98 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-700 hover:bg-amber-50 hover:text-doodle-coral transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrialModal();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-doodle-coral to-rose-500 text-white font-bold text-sm text-center shadow-md"
            >
              Book a Free Trial Session
            </button>
            <a
              href="https://wa.me/919876543210?text=Hi%20Doodle%20Den%20Academy%20Ranchi%2C%20I%20am%20interested%20in%20activities%20for%20my%20child."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl border border-emerald-500 text-emerald-700 font-bold text-sm text-center flex items-center justify-center gap-2 bg-emerald-50/50"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              Direct WhatsApp Inquiry
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
