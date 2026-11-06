import React, { useState } from 'react';
import { PROCESS_STAGES } from '../data/content';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProcessProps {
  onStartProcess: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onStartProcess }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 lg:py-36 bg-[#F8F7F3] border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#080808]" aria-hidden="true"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#252525]">
              OUR METHODOLOGY
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#080808] leading-tight text-balance">
            A Clearer Path from Story to Visibility.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#252525]/75 font-light">
            We de-mystify the publishing landscape with a sequenced, intentional four-phase framework designed to respect both author time and narrative integrity.
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Stepper */}
        <div className="hidden lg:block mb-12">
          <div className="grid grid-cols-4 gap-4 relative">
            {/* Connecting Track Line */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#EAEAEA] -z-0 -translate-y-8" />

            {PROCESS_STAGES.map((stage, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={stage.step}
                  onClick={() => setActiveStep(idx)}
                  className={`relative z-10 text-left p-6 transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? 'bg-[#080808] text-[#F8F7F3] border-[#080808] shadow-md scale-[1.02]'
                      : 'bg-[#FFFFFF] text-[#080808] border-[#EAEAEA] hover:border-[#080808]/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-serif text-2xl font-light ${
                        isActive ? 'text-[#F8F7F3]' : 'text-[#080808]/40'
                      }`}
                    >
                      {stage.step}
                    </span>
                    <span
                      className={`text-[10px] tracking-[0.2em] uppercase font-semibold px-2 py-0.5 border ${
                        isActive
                          ? 'border-[#F8F7F3]/30 text-[#F8F7F3]'
                          : 'border-[#080808]/20 text-[#080808]'
                      }`}
                    >
                      Phase {idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-medium tracking-tight mb-2 uppercase">
                    {stage.title}
                  </h3>
                  <p
                    className={`text-xs tracking-wider uppercase mb-3 ${
                      isActive ? 'text-[#F8F7F3]/80' : 'text-[#252525]/60'
                    }`}
                  >
                    {stage.subtitle}
                  </p>
                  <p
                    className={`text-xs leading-relaxed font-light line-clamp-3 ${
                      isActive ? 'text-[#F8F7F3]/80' : 'text-[#252525]/75'
                    }`}
                  >
                    {stage.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Showcase on Desktop */}
        <div className="hidden lg:grid grid-cols-12 gap-8 p-8 bg-[#FFFFFF] border border-[#080808]/15 items-center mb-16">
          <div className="col-span-8 space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#080808]">
              <CheckCircle2 className="w-4 h-4 text-[#080808]" />
              <span>KEY PHASE DELIVERABLE & FOCUS</span>
            </div>
            <h4 className="font-serif text-2xl font-medium text-[#080808]">
              {PROCESS_STAGES[activeStep].title} — {PROCESS_STAGES[activeStep].subtitle}
            </h4>
            <p className="text-sm text-[#252525]/85 leading-relaxed font-light">
              {PROCESS_STAGES[activeStep].keyAction}
            </p>
          </div>

          <div className="col-span-4 flex justify-end">
            <button
              onClick={onStartProcess}
              className="px-6 py-3.5 bg-[#080808] text-[#F8F7F3] text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#252525] transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <span>DISCUSS YOUR TIMELINE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-6">
          {PROCESS_STAGES.map((stage, idx) => (
            <div
              key={stage.step}
              className="p-6 bg-[#FFFFFF] border border-[#EAEAEA] relative pl-12"
            >
              {/* Vertical connector line */}
              {idx < PROCESS_STAGES.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-[1px] bg-[#EAEAEA]" />
              )}
              {/* Dot number */}
              <div className="absolute left-4 top-6 w-6 h-6 rounded-full bg-[#080808] text-[#F8F7F3] flex items-center justify-center text-[10px] font-bold">
                {idx + 1}
              </div>

              <div className="text-[11px] text-[#252525]/60 tracking-[0.2em] uppercase font-semibold mb-1">
                {stage.step} — {stage.subtitle}
              </div>
              <h3 className="font-serif text-xl font-medium text-[#080808] uppercase mb-2">
                {stage.title}
              </h3>
              <p className="text-xs text-[#252525]/80 leading-relaxed font-light mb-3">
                {stage.description}
              </p>
              <div className="text-[11px] font-medium text-[#080808] bg-[#F8F7F3] p-2.5 border border-[#EAEAEA]">
                <span className="font-semibold uppercase tracking-wider block text-[10px] text-[#252525]/70 mb-0.5">Focus:</span>
                {stage.keyAction}
              </div>
            </div>
          ))}

          <div className="pt-4">
            <button
              onClick={onStartProcess}
              className="w-full py-4 bg-[#080808] text-[#F8F7F3] text-xs uppercase tracking-[0.2em] font-semibold text-center cursor-pointer"
            >
              DISCUSS YOUR BOOK'S TIMELINE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
