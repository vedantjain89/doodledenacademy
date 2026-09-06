import React from 'react';
import { Palette, Activity, Cpu, Sparkles, CheckCircle2, Clock, MapPin, HeartHandshake } from 'lucide-react';
import { STATS, PILLARS } from '../data/programsData';

const iconMap = {
  Palette: Palette,
  Activity: Activity,
  Cpu: Cpu,
  Sparkles: Sparkles,
};

export default function WhyUs({ onSelectPillar }) {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider mb-3">
            <span>The Doodle Den Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-doodle-dark tracking-tight">
            Why Ranchi Parents Choose the <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-doodle-coral to-doodle-purple">
              All-In-One Academy
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Children are naturally multidimensional. We replace the stress of shuttling between single-hobby centers with a vibrant, connected sanctuary for the whole child.
          </p>
        </div>

        {/* Comparison: The Old Way vs The Doodle Den Way */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {/* Old Way Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-lg">
                ✕
              </span>
              <h3 className="text-lg font-bold text-slate-700">The Traditional Route</h3>
            </div>
            <p className="text-sm text-slate-500 mb-6">
              Enrolling in fragmented single-discipline classes scattered across Ranchi:
            </p>
            <ul className="space-y-3.5 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold mt-0.5">•</span>
                <span>Hours lost in Ranchi traffic driving from art tuition in Lalpur to sports on Kanke Road.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold mt-0.5">•</span>
                <span>Kid burnout and schedule exhaustion from rigid, test-oriented weekend schedules.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold mt-0.5">•</span>
                <span>Lacking modern 21st-century tech skills like AI intuition and robotics exploration.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-500 font-bold mt-0.5">•</span>
                <span>Disconnected instructors who never see your child's complete developmental personality.</span>
              </li>
            </ul>
          </div>

          {/* Doodle Den Advantage Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-50 via-rose-50 to-purple-50 border-2 border-amber-300 shadow-bubbly-yellow relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full bg-doodle-yellowDark text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                Smart Choice
              </span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">
                ✓
              </span>
              <h3 className="text-lg font-bold text-doodle-dark font-display">The Doodle Den Academy Advantage</h3>
            </div>
            <p className="text-sm text-slate-700 font-medium mb-6">
              A single joyful destination for physical, artistic, scientific, and emotional growth:
            </p>
            <ul className="space-y-3.5 text-sm text-slate-800 font-medium">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Zero Travel Hassle:</strong> Arts, Gymnastics, Robotics &amp; Theater under one cozy roof.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Holistic Balance:</strong> Healthy alternation between physical activity and creative calm.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Future Skills Ready:</strong> Hands-on robotics &amp; AI logic designed for curious young minds.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span><strong>Nurturing Mentors:</strong> Low student-to-mentor ratio ensuring every child's voice is heard.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 4 Pillars Interactive Grid */}
        <div id="pillars" className="scroll-mt-24 mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-doodle-dark">
              Our 4 Developmental Pillars
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Each carefully designed to foster whole-brain development and lifelong confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((pillar) => {
              const IconComp = iconMap[pillar.icon] || Sparkles;
              return (
                <div
                  key={pillar.id}
                  onClick={() => onSelectPillar(pillar.id)}
                  className={`p-6 rounded-3xl ${pillar.bgLight} border-2 ${pillar.border} hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between`}
                >
                  <div>
                    <div className={`w-14 h-14 rounded-2xl ${pillar.accent} text-white flex items-center justify-center mb-5 shadow-sm transform group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Pillar Focus
                    </span>
                    <h4 className="text-xl font-bold font-display text-slate-900 mt-1">
                      {pillar.name}
                    </h4>
                    <p className={`text-xs font-bold ${pillar.text} mt-0.5`}>
                      {pillar.tagline}
                    </p>
                    <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-doodle-dark">
                    <span>Explore Classes</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Stats Counter Strip */}
        <div className="rounded-3xl bg-doodle-dark text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
            {STATS.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-doodle-yellow">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-bold text-white">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
