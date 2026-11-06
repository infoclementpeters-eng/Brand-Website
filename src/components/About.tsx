import React from 'react';
import { BRAND_CONFIG, BRAND_VALUES } from '../data/content';
import { ArrowRight } from 'lucide-react';

interface AboutProps {
  onLearnMoreProcess: () => void;
}

export const About: React.FC<AboutProps> = ({ onLearnMoreProcess }) => {
  return (
    <section id="about" className="py-24 lg:py-36 bg-[#FFFFFF] border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#080808]" aria-hidden="true"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#252525]">
              BEHIND THE STRATEGY.
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#080808] leading-tight text-balance">
            Helping Authors Give Their Stories the Visibility They Deserve.
          </h2>
        </div>

        {/* Story & Visual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20 lg:mb-28">
          {/* Left Text Narrative */}
          <div className="lg:col-span-7 space-y-6 text-[#252525] text-base lg:text-lg leading-relaxed font-light">
            <p className="font-serif text-2xl lg:text-3xl text-[#080808] leading-snug italic font-normal">
              "A compelling book deserves more than simply being published. It deserves a thoughtful strategy, meaningful promotion, and an opportunity to connect with its intended readers."
            </p>
            <p className="text-[#252525]/85">
              Arthur Wells was built around this conviction. We focus on the creative and strategic elements of book marketing, helping authors establish a stronger presence, communicate their value, and approach promotion with greater clarity.
            </p>
            <p className="text-[#252525]/85">
              Our approach combines literary appreciation, creative thinking, and practical marketing strategy to help authors move forward with confidence. Rather than imposing loud, unrefined sales tactics, we respect the author's voice and design campaigns that resonate with intelligent, dedicated readers.
            </p>

            <div className="pt-4">
              <button
                onClick={onLearnMoreProcess}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#080808] hover:text-[#252525] py-2 border-b border-[#080808] group cursor-pointer"
              >
                <span>HOW WE WORK WITH AUTHORS</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Image Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] bg-[#F8F7F3] border border-[#080808]/15 overflow-hidden shadow-md">
              <img
                src={BRAND_CONFIG.writingDeskImage}
                alt="Atmospheric author study with open manuscript, fountain pen, and library shelves"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-[#252525]/60 tracking-wider font-light">
              <span>THE LITERARY SANCTUARY</span>
              <span>DEVOTION TO THE WRITTEN WORD</span>
            </div>
          </div>
        </div>

        {/* Three Brand Values */}
        <div className="pt-12 border-t border-[#EAEAEA]">
          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#252525]">
              OUR GUIDING PILLARS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {BRAND_VALUES.map((val) => (
              <div
                key={val.number}
                className="p-8 bg-[#F8F7F3] border border-[#EAEAEA] hover:border-[#080808]/40 transition-colors group"
              >
                <div className="font-serif text-3xl text-[#080808]/30 group-hover:text-[#080808] transition-colors mb-4 font-light">
                  {val.number}
                </div>
                <h4 className="font-serif text-xl font-medium tracking-tight text-[#080808] mb-3 uppercase">
                  {val.title}
                </h4>
                <p className="text-sm text-[#252525]/80 leading-relaxed font-light">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
