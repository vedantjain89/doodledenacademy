import React, { useState, useMemo } from 'react';
import { Sparkles, Clock, Users, ArrowRight, CheckCircle2, MessageCircle, Filter } from 'lucide-react';
import { PROGRAMS, PILLARS } from '../data/programsData';

export default function ProgramsSection({ selectedPillar, setSelectedPillar, onOpenTrialModal }) {
  const [selectedAge, setSelectedAge] = useState('all');

  const ageFilters = [
    { id: 'all', label: 'All Ages (2–11 yrs)' },
    { id: 'toddlers', label: 'Toddlers (2–4 yrs)' },
    { id: 'explorers', label: 'Explorers (4–7 yrs)' },
    { id: 'creators', label: 'Creators (6–11 yrs)' },
  ];

  const filteredPrograms = useMemo(() => {
    return PROGRAMS.filter((prog) => {
      const matchPillar = selectedPillar === 'all' || prog.pillarId === selectedPillar;
      const matchAge =
        selectedAge === 'all' ||
        prog.ageGroup === 'all' ||
        prog.ageGroup === selectedAge;
      return matchPillar && matchAge;
    });
  }, [selectedPillar, selectedAge]);

  return (
    <section id="programs" className="py-16 sm:py-24 bg-amber-50/40 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 font-bold text-xs uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Program Explorer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-doodle-dark tracking-tight">
            Explore Our World of Activities
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Select a developmental pillar or filter by your child's age to discover the perfect after-school or weekend sessions.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-amber-200/80 mb-12 space-y-4">
          {/* Pillar Tabs */}
          <div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5" />
              <span>Step 1: Choose Pillar</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedPillar('all')}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                  selectedPillar === 'all'
                    ? 'bg-doodle-dark text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                🌈 All Pillars ({PROGRAMS.length})
              </button>

              {PILLARS.map((p) => {
                const isActive = selectedPillar === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPillar(p.id)}
                    className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                      isActive
                        ? `${p.accent} text-white shadow-md`
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <span>{p.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Age Filters */}
          <div className="pt-3 border-t border-slate-100">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Step 2: Filter by Child's Age Group
            </div>
            <div className="flex flex-wrap gap-2">
              {ageFilters.map((age) => (
                <button
                  key={age.id}
                  onClick={() => setSelectedAge(age.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    selectedAge === age.id
                      ? 'bg-amber-400 text-slate-900 font-bold shadow-sm'
                      : 'bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {age.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Program Cards Grid */}
        {filteredPrograms.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
            <p className="text-lg font-bold text-slate-700 font-display">No classes match this combination!</p>
            <p className="text-sm text-slate-500 mt-1">Try resetting the age filter or select "All Pillars".</p>
            <button
              onClick={() => {
                setSelectedPillar('all');
                setSelectedAge('all');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-doodle-yellow text-slate-900 font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredPrograms.map((prog) => {
              const pillarInfo = PILLARS.find((p) => p.id === prog.pillarId);
              return (
                <div
                  key={prog.id}
                  className="bg-white rounded-3xl border-2 border-slate-200/90 hover:border-amber-300 shadow-bubbly hover:shadow-bubbly-lg transition-all flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-6 sm:p-8">
                    {/* Card Top Pill */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${pillarInfo?.bgLight} ${pillarInfo?.text}`}>
                          {pillarInfo?.name}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
                          {prog.ageRange}
                        </span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                        {prog.badge}
                      </span>
                    </div>

                    {/* Program Title */}
                    <h3 className="text-2xl font-bold font-display text-slate-900 group-hover:text-doodle-coral transition-colors">
                      {prog.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {prog.summary}
                    </p>

                    {/* Highlights */}
                    <div className="mt-5 space-y-2">
                      <p className="text-xs uppercase tracking-wider font-bold text-slate-500">
                        What Kids Experience:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {prog.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills Tag Pills */}
                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <div className="flex flex-wrap gap-1.5 items-center">
                        <span className="text-xs text-slate-400 font-semibold mr-1">Skills:</span>
                        {prog.skillsLearned.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 text-xs font-semibold"
                          >
                            ✓ {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Meta & Actions */}
                  <div className="bg-slate-50/90 px-6 sm:px-8 py-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="space-y-1 text-xs text-slate-600 w-full sm:w-auto">
                      <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                        <Clock className="w-3.5 h-3.5 text-doodle-coral" />
                        <span>{prog.timing}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <Users className="w-3.5 h-3.5 text-slate-400" />
                        <span>{prog.mentorRatio}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <a
                        href={`https://wa.me/919876543210?text=Hello%20Doodle%20Den%20Academy%2C%20I%20am%20interested%20in%20${encodeURIComponent(prog.title)}%20in%20Ranchi.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl border border-emerald-300 text-emerald-700 bg-white hover:bg-emerald-50 transition-colors"
                        title="Inquire via WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4 text-emerald-600" />
                      </a>

                      <button
                        onClick={() => onOpenTrialModal(prog.title)}
                        className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-doodle-coral hover:bg-rose-600 text-white font-bold text-xs shadow-sm transition-all btn-bubbly flex items-center justify-center gap-1.5"
                      >
                        <span>Book Trial</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
