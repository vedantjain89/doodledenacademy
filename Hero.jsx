import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Heart, Users, MapPin, Award, Smile } from 'lucide-react';
import { PILLARS } from '../data/programsData';

export default function Hero({ onOpenTrialModal, onSelectPillar }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-amber-50/70 via-rose-50/30 to-white">
      {/* Decorative whimsical background shapes */}
      <div className="absolute top-12 left-6 w-72 h-72 rounded-full bg-yellow-200/40 blur-3xl pointer-events-none -z-10 animate-pulse-gentle"></div>
      <div className="absolute top-28 right-8 w-80 h-80 rounded-full bg-rose-200/40 blur-3xl pointer-events-none -z-10 animate-float-slow"></div>
      <div className="absolute bottom-10 left-1/3 w-96 h-96 rounded-full bg-purple-200/30 blur-3xl pointer-events-none -z-10 animate-float-reverse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Location & Age Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-amber-200 shadow-sm text-xs sm:text-sm font-semibold text-slate-800">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="flex items-center gap-1 text-doodle-dark font-bold">
                <MapPin className="w-3.5 h-3.5 text-doodle-coral" /> Ranchi, Jharkhand
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-doodle-purpleDark font-bold">Ages 2 to 11 Years</span>
            </div>

            {/* Main Catchy Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black font-display text-doodle-dark tracking-tight leading-[1.15]">
              Ranchi's Premier <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-doodle-coral via-doodle-yellowDark to-doodle-purple">
                Holistic Activity &amp; Creative Den
              </span>{' '}
              for Kids!
            </h1>

            {/* Core Concept Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Designed as an <strong>all-in-one magical space</strong> where children learn, explore, create, and grow under one roof —{' '}
              <span className="text-doodle-coral font-semibold">ending the hassle of separate classes across the city!</span>
            </p>

            {/* 4 Pillars Interactive Badges */}
            <div className="pt-2 pb-2">
              <p className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-3">
                4 Core Holistic Pillars Under One Roof:
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
                {PILLARS.map((pillar) => (
                  <button
                    key={pillar.id}
                    onClick={() => onSelectPillar(pillar.id)}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-slate-400 hover:shadow-md transition-all text-xs sm:text-sm font-bold text-slate-800 group"
                  >
                    <span className={`w-2.5 h-2.5 rounded-full ${pillar.accent}`}></span>
                    <span>{pillar.name}</span>
                    <span className="text-slate-400 group-hover:text-slate-700 transition-colors">→</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => onOpenTrialModal()}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-doodle-coral via-rose-500 to-pink-500 hover:from-pink-500 hover:to-doodle-coral text-white font-extrabold text-base shadow-bubbly-coral hover:shadow-xl transition-all btn-bubbly flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                <span>Book a Free Trial Session</span>
              </button>

              <a
                href="#programs"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-800 font-bold text-base shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Explore All Classes</span>
                <ArrowRight className="w-4 h-4 text-doodle-coral" />
              </a>
            </div>

            {/* Trust Footprint */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-semibold">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Child-Safe Campus
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-sky-500" /> 1:6 Mentor Ratio
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-500" /> Certified Educators
              </span>
              <span className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-rose-500" /> Zero Screen Fatigue
              </span>
            </div>

          </div>

          {/* Right Column: Engaging Visual Collage & Interactive Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Central Visual Hub */}
              <div className="rounded-3xl p-6 sm:p-8 bg-white border-2 border-amber-200/80 shadow-bubbly-lg relative overflow-hidden">
                
                {/* Background warm gradient accent */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-100 rounded-full blur-2xl"></div>
                
                {/* Header inside card */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                  <div className="flex items-center gap-2.5">
                    <span className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-lg">
                      🎪
                    </span>
                    <div>
                      <h2 className="font-display font-bold text-slate-900 text-lg leading-tight">
                        Life at Doodle Den
                      </h2>
                      <p className="text-xs text-slate-500">Every day is a new adventure!</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold flex items-center gap-1">
                    <Smile className="w-3.5 h-3.5" /> 100% Fun
                  </span>
                </div>

                {/* 4 Interactive Pill Matrix */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-100 flex items-start gap-3 transform hover:-translate-y-0.5 transition-all">
                    <div className="w-8 h-8 rounded-xl bg-rose-500 text-white flex items-center justify-center text-base flex-shrink-0 shadow-sm">
                      🎨
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">Creativity Studio</h3>
                      <p className="text-xs text-slate-600">Clay modeling, pottery, acrylic canvas &amp; sensory DIY crafting.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-100 flex items-start gap-3 transform hover:-translate-y-0.5 transition-all">
                    <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center text-base flex-shrink-0 shadow-sm">
                      🏃
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">Movement Arena</h3>
                      <p className="text-xs text-slate-600">Junior gymnastics, agility obstacle runs, animal yoga &amp; sports games.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-100 flex items-start gap-3 transform hover:-translate-y-0.5 transition-all">
                    <div className="w-8 h-8 rounded-xl bg-teal-500 text-white flex items-center justify-center text-base flex-shrink-0 shadow-sm">
                      🤖
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">Future Skills Tinker Lab</h3>
                      <p className="text-xs text-slate-600">AI basics, Lego robotics, STEM experiments &amp; tactile logic puzzles.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-100 flex items-start gap-3 transform hover:-translate-y-0.5 transition-all">
                    <div className="w-8 h-8 rounded-xl bg-purple-500 text-white flex items-center justify-center text-base flex-shrink-0 shadow-sm">
                      🎭
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">Performing Arts Stage</h3>
                      <p className="text-xs text-slate-600">Children's theater, storytelling, speech confidence &amp; musical rhythm.</p>
                    </div>
                  </div>
                </div>

                {/* Instant trial quick teaser */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs text-slate-500">
                    <span className="font-bold text-doodle-dark">Trial Batch:</span> Limited to 6 kids
                  </div>
                  <button
                    onClick={() => onOpenTrialModal()}
                    className="text-xs font-bold text-doodle-coral hover:text-rose-700 underline flex items-center gap-1"
                  >
                    Reserve Today →
                  </button>
                </div>

              </div>

              {/* Floating Floating Notification Badges */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white py-2 px-3.5 rounded-2xl shadow-bubbly border border-amber-200 text-xs font-bold text-slate-800 flex items-center gap-2 animate-float-slow">
                <span className="text-lg">✨</span>
                <span>All-in-One Space</span>
              </div>

              <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-white py-2 px-4 rounded-2xl shadow-bubbly border border-purple-200 text-xs font-bold text-slate-800 flex items-center gap-2 animate-float-reverse">
                <span className="text-lg">🚀</span>
                <span>Future-Ready Kids</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
