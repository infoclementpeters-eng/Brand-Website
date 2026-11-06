import React from 'react';
import { WHY_US_PILLARS } from '../data/content';
import { Check } from 'lucide-react';

export const WhyUs: React.FC = () => {
  return (
    <section className="py-24 lg:py-36 bg-[#080808] text-[#F8F7F3] border-b border-[#252525]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#F8F7F3]" aria-hidden="true"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#EAEAEA]/70">
              WHY ARTHUR WELLS
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#F8F7F3] leading-tight text-balance">
            More Than Promotion. A Thoughtful Approach to Growth.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#EAEAEA]/80 font-light max-w-2xl">
            We reject the loud, transactional noise of generic agencies. Our practice is built on intellectual rigor, artistic empathy, and measured execution.
          </p>
        </div>

        {/* 6 Advantages Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {WHY_US_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-8 bg-[#252525]/30 border border-[#252525] hover:border-[#F8F7F3]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#252525]">
                  <span className="text-xs font-serif italic text-[#EAEAEA]/50">
                    Advantage 0{idx + 1}
                  </span>
                  <div className="w-6 h-6 rounded-full border border-[#F8F7F3]/20 flex items-center justify-center text-[#F8F7F3]">
                    <Check className="w-3.5 h-3.5 stroke-[2]" />
                  </div>
                </div>

                <h3 className="font-serif text-xl font-medium tracking-tight text-[#F8F7F3] mb-3 leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#EAEAEA]/75 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Quote Box */}
        <div className="mt-16 p-8 lg:p-12 border border-[#252525] bg-[#080808] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-serif italic text-lg lg:text-xl text-[#F8F7F3] leading-relaxed">
              "We believe the right reader is looking for your book just as earnestly as you are looking for them. Our role is simply to build the bridge."
            </p>
            <span className="block mt-3 text-xs tracking-[0.2em] uppercase text-[#EAEAEA]/60">
              Arthur Wells — Principal Strategic Mandate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
