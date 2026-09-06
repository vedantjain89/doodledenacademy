import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-2">
      {/* Tooltip callout */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white px-3.5 py-2 rounded-2xl shadow-xl border border-emerald-100 text-xs font-bold text-slate-800 animate-in fade-in slide-in-from-right-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>Inquire on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href="https://wa.me/919876543210?text=Hello%20Doodle%20Den%20Academy%20Ranchi%2C%20I%20am%20looking%20for%20activities%20for%20my%20child!"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
