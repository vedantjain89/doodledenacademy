import React, { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2, MessageCircle, Calendar, User, Phone, Compass } from 'lucide-react';
import { PILLARS } from '../data/programsData';

export default function TrialModal({ isOpen, onClose, initialProgram = '' }) {
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '5',
    parentName: '',
    phone: '',
    program: initialProgram || 'All-in-One Multi-Pillar Exploration',
    preferredSlot: 'Weekend Morning (10:00 AM)',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialProgram) {
      setFormData((prev) => ({ ...prev, program: initialProgram }));
    }
  }, [initialProgram]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const message = `Hello Doodle Den Academy Ranchi! 🎨%0A%0AI would like to confirm a FREE Trial Session for my child:%0A• Child Name: ${encodeURIComponent(formData.childName)}%0A• Age: ${encodeURIComponent(formData.childAge)} years%0A• Parent: ${encodeURIComponent(formData.parentName)}%0A• Phone: ${encodeURIComponent(formData.phone)}%0A• Preferred Program: ${encodeURIComponent(formData.program)}%0A• Slot: ${encodeURIComponent(formData.preferredSlot)}%0A${formData.notes ? `• Note: ${encodeURIComponent(formData.notes)}` : ''}%0A%0APlease confirm our trial schedule!`;
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      childName: '',
      childAge: '5',
      parentName: '',
      phone: '',
      program: 'All-in-One Multi-Pillar Exploration',
      preferredSlot: 'Weekend Morning (10:00 AM)',
      notes: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border-2 border-amber-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-doodle-yellow via-doodle-coral to-doodle-purple p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
              ✨ 100% Free • No Obligation
            </span>
          </div>
          <h2 className="text-2xl font-bold font-display leading-tight">
            Book a Free Trial Session
          </h2>
          <p className="text-xs text-white/90 mt-1">
            Experience the magic of Doodle Den Academy Ranchi firsthand!
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            /* Success State */
            <div className="text-center py-4 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              
              <h3 className="text-2xl font-bold font-display text-slate-900">
                Trial Session Reserved! 🎉
              </h3>
              
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Thank you <strong>{formData.parentName}</strong>. We have received your request for <strong>{formData.childName}</strong> (Age {formData.childAge}).
              </p>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-left text-xs space-y-1.5 text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-semibold">Chosen Focus:</span>
                  <span className="font-bold text-doodle-dark">{formData.program}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-semibold">Preferred Slot:</span>
                  <span className="font-bold text-doodle-dark">{formData.preferredSlot}</span>
                </div>
                <div className="flex justify-between items-start gap-2">
                  <span className="text-slate-500 font-semibold flex-shrink-0">Location:</span>
                  <span className="font-bold text-doodle-dark text-right">Dwarka Path, Opp. Gaushala, Harmu Road, Ranchi</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Confirm on WhatsApp Instantly</span>
                </button>
                <button
                  onClick={resetForm}
                  className="text-xs text-slate-500 hover:text-slate-800 font-semibold underline pt-2"
                >
                  Done &amp; Close
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Child Details */}
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2 space-y-1">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <User className="w-3 h-3 text-doodle-coral" /> Child's Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aarav, Ananya"
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">
                    Age *
                  </label>
                  <select
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm bg-white font-semibold text-slate-800"
                  >
                    {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((a) => (
                      <option key={a} value={a}>
                        {a} yrs
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Parent Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">
                    Parent's Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <Phone className="w-3 h-3 text-emerald-500" /> WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                  />
                </div>
              </div>

              {/* Program Selection */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                  <Compass className="w-3 h-3 text-doodle-purple" /> Interested Program / Pillar *
                </label>
                <select
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm bg-white font-medium text-slate-800"
                >
                  <option value="All-in-One Multi-Pillar Exploration">🌟 All-in-One Multi-Pillar Exploration (Recommended)</option>
                  <option value="Master Crafters & DIY Studio (Creativity)">🎨 Creativity: Art, Craft & Pottery Studio</option>
                  <option value="Toddler Sensory & Messy Art">👶 Toddler Sensory & Messy Play (Ages 2-4)</option>
                  <option value="Junior Gymnastics & Obstacle Arena (Movement)">🏃 Movement: Gymnastics & Obstacle Arena</option>
                  <option value="Playful Yoga & Animal Movement">🧘 Movement: Kids Yoga & Mindfulness</option>
                  <option value="Young Coders & Robotics Lab (Future Skills)">🤖 Future Skills: AI & Robotics Lab</option>
                  <option value="Little Inventors & STEM Sparks">🔬 Future Skills: STEM Tinker Lab</option>
                  <option value="Drama, Puppetry & Public Speaking (Performing Arts)">🎭 Performing Arts: Theater & Storytelling</option>
                  <option value="Rhythm Beats & Creative Movement (Performing Arts)">🥁 Performing Arts: Music & Dance</option>
                </select>
              </div>

              {/* Slot Preference */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-amber-500" /> Preferred Day &amp; Slot *
                </label>
                <select
                  value={formData.preferredSlot}
                  onChange={(e) => setFormData({ ...formData, preferredSlot: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm bg-white font-medium text-slate-800"
                >
                  <option value="Weekend Morning (10:00 AM)">Weekend Morning (Sat/Sun 10:00 AM)</option>
                  <option value="Weekend Afternoon (04:00 PM)">Weekend Afternoon (Sat/Sun 04:00 PM)</option>
                  <option value="Weekday Toddler Morning (10:30 AM)">Weekday Morning (Mon–Fri 10:30 AM - Toddlers)</option>
                  <option value="Weekday After-School (04:30 PM)">Weekday After-School (Mon–Fri 04:30 PM)</option>
                  <option value="Weekday Evening (06:00 PM)">Weekday Evening (Mon–Fri 06:00 PM)</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-doodle-coral via-rose-500 to-pink-500 hover:from-pink-500 hover:to-doodle-coral text-white font-bold text-sm shadow-bubbly-coral transition-all btn-bubbly flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Confirm Free Trial Class</span>
                </button>
                <p className="text-center text-[11px] text-slate-400 mt-2">
                  🔒 We respect your privacy. No spam. Small batches (max 6 kids per trial).
                </p>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
