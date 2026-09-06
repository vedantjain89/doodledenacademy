import React, { useState } from 'react';
import { Calendar, Clock, Sparkles, ArrowRight } from 'lucide-react';
import { SCHEDULE_DAYS } from '../data/programsData';

export default function ScheduleSection({ onOpenTrialModal }) {
  const [activeDayTab, setActiveDayTab] = useState(0);

  return (
    <section id="schedule" className="py-16 sm:py-24 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 font-bold text-xs uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Weekly Batch Timings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-doodle-dark tracking-tight">
            Flexible Timetables for Every Routine
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Convenient morning playgroups for toddlers and energetic after-school or weekend camps for school-going kids.
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-100 p-1.5 rounded-2xl flex gap-2">
            {SCHEDULE_DAYS.map((sched, idx) => (
              <button
                key={idx}
                onClick={() => setActiveDayTab(idx)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeDayTab === idx
                    ? 'bg-white text-doodle-dark shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {sched.day}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule List */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-amber-50/50 via-white to-purple-50/40 rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="divide-y divide-slate-100">
            {SCHEDULE_DAYS[activeDayTab].slots.map((slot, sIdx) => {
              const getPillarBadgeColor = (p) => {
                switch (p) {
                  case 'Creativity': return 'bg-rose-100 text-rose-800';
                  case 'Movement': return 'bg-amber-100 text-amber-900';
                  case 'Future Skills': return 'bg-teal-100 text-teal-800';
                  case 'Performing Arts': return 'bg-purple-100 text-purple-800';
                  default: return 'bg-slate-100 text-slate-800';
                }
              };

              return (
                <div
                  key={sIdx}
                  className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-amber-50/40 px-3 rounded-2xl transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700 flex-shrink-0">
                      <Clock className="w-4 h-4 text-doodle-coral" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-500">{slot.time}</div>
                      <div className="text-base sm:text-lg font-bold font-display text-slate-900">
                        {slot.title}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-200 text-slate-700">
                      {slot.age}
                    </span>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${getPillarBadgeColor(slot.pillar)}`}>
                      {slot.pillar}
                    </span>
                    <button
                      onClick={() => onOpenTrialModal(slot.title)}
                      className="text-xs font-bold text-doodle-coral hover:text-rose-700 underline ml-2"
                    >
                      Book Slot
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Schedule Footer Note */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>
              💡 Need a custom combination or private group slot? We offer flexible customized multi-pillar passes.
            </p>
            <button
              onClick={() => onOpenTrialModal()}
              className="px-4 py-2 rounded-xl bg-doodle-coral text-white font-bold hover:bg-rose-600 transition-colors flex items-center gap-1.5 flex-shrink-0"
            >
              <span>Request Custom Slot</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
