import React, { useState } from 'react';
import { TESTIMONIALS_SAMPLE } from '../data/content';
import { Quote, Info } from 'lucide-react';
import { TestimonialItem } from '../types';

export const Testimonials: React.FC = () => {
  const [testimonials] = useState<TestimonialItem[]>(TESTIMONIALS_SAMPLE);

  return (
    <section className="py-24 lg:py-36 bg-[#FFFFFF] border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#080808]" aria-hidden="true"></span>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#252525]">
                REPUTATION & ENDORSEMENT
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#080808] leading-tight text-balance">
              Words from the Creative Community.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#252525]/75 font-light">
              Reflections on collaborative strategy, author platform growth, and reader engagement.
            </p>
          </div>

          {/* Transparent Placeholder Notice per specifications */}
          <div className="flex items-start gap-2.5 p-3.5 bg-[#F8F7F3] border border-[#EAEAEA] text-xs text-[#252525]/75 max-w-sm">
            <Info className="w-4 h-4 text-[#080808] shrink-0 mt-0.5" />
            <p className="font-light text-[11px] leading-relaxed">
              <strong className="font-medium text-[#080808] uppercase tracking-wider block mb-0.5">Note:</strong>
              These cards are formatted sample placeholders ready to be updated with your actual client quotes.
            </p>
          </div>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-8 lg:p-10 bg-[#F8F7F3] border border-[#EAEAEA] flex flex-col justify-between relative group hover:border-[#080808]/40 transition-colors"
            >
              <div>
                <Quote className="w-7 h-7 text-[#080808]/20 group-hover:text-[#080808] transition-colors mb-6 stroke-[1.25]" />
                <p className="font-serif italic text-base lg:text-lg text-[#080808] leading-relaxed mb-8">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#EAEAEA]">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-serif text-base font-medium text-[#080808]">
                    {item.authorName}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#252525]/50 px-2 py-0.5 bg-[#FFFFFF] border border-[#EAEAEA]">
                    Sample
                  </span>
                </div>
                <div className="text-xs text-[#252525]/70 font-light">
                  {item.authorRole}
                </div>
                <div className="text-[11px] font-serif italic text-[#252525]/60 mt-1">
                  Book: {item.bookTitle} · {item.genre}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
