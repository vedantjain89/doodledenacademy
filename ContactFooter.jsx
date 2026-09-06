import React from 'react';
import { MapPin, Phone, Mail, Instagram, MessageCircle, Clock, Heart, Sparkles, ExternalLink } from 'lucide-react';

export default function ContactFooter({ onOpenTrialModal }) {
  return (
    <footer id="contact" className="bg-doodle-dark text-white pt-16 pb-12 relative overflow-hidden scroll-mt-20">
      {/* Decorative top curved border */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-slate-800">
          
          {/* Brand Info & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-doodle-yellow to-doodle-coral flex items-center justify-center shadow-md">
                <span className="text-2xl font-black text-white font-display">DD</span>
              </div>
              <div>
                <span className="text-2xl font-bold font-display text-white tracking-tight">
                  Doodle Den Academy
                </span>
                <p className="text-xs text-amber-400 font-bold tracking-wide">
                  Holistic Learning &amp; Activity Center • Ranchi
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Designed as an all-in-one magical haven in Ranchi to help children aged 2–11 learn, explore, create, and grow under one roof — reducing the need for separate specialized classes.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/doodleden_academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                title="Follow on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi%20Doodle%20Den%20Academy%20Ranchi!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="tel:+919876543210"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-amber-500 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                title="Call Directly"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Core Programs Column */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm uppercase tracking-wider font-bold text-amber-400">
              Core Pillars
            </h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#programs" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span>🎨</span> Creativity (Art, Craft &amp; Pottery)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span>🏃</span> Movement (Gymnastics &amp; Sports)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span>🤖</span> Future Skills (AI &amp; Robotics)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span>🎭</span> Performing Arts (Theater &amp; Dance)
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span>☀️</span> Weekend Bootcamps &amp; Summer Camps
                </a>
              </li>
            </ul>
          </div>

          {/* Ranchi Campus Location & Timings */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm uppercase tracking-wider font-bold text-amber-400">
              Visit Our Ranchi Den
            </h3>
            
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-doodle-coral flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Doodle Den Academy Campus:</strong>
                  <p className="text-slate-300 text-xs mt-0.5 font-medium leading-relaxed">
                    Dwarka Path, near Jain Dharamshala, Opp. Gaushala, Harmu Road, Ranchi, Jharkhand
                  </p>
                  <a
                    href="https://maps.google.com/?q=Dwarka+PATH,+near+Jain+Dharamshala,+OPP.+Gaushala,+Harmu+Road,+Ranchi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-semibold mt-1.5 underline"
                  >
                    <span>Open in Google Maps →</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-slate-700/60">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <div>
                  <span className="text-slate-200 font-semibold">Tue – Sun:</span> 9:30 AM – 7:00 PM (Mondays Sanitization &amp; Planning)
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210 / +91 98765 43211
                </a>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => onOpenTrialModal()}
                className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-doodle-coral to-rose-500 hover:from-rose-500 hover:to-doodle-coral text-white font-bold text-xs shadow-md transition-all text-center flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Book Campus Tour / Free Trial</span>
              </button>
              <a
                href="https://www.instagram.com/doodleden_academy/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <span>Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Doodle Den Academy, Ranchi. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>for Ranchi's Young Innovators &amp; Dreamers.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
