import React from 'react';
import { ArrowDownRight, BookOpen, Compass, Award } from 'lucide-react';
import { BRAND_CONFIG } from '../data/content';

interface HeroProps {
  onExploreWork: () => void;
  onDiscussBook: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onDiscussBook }) => {
  return (
    <section id="home" className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Brand Kicker / Manifesto Tag */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-[1px] bg-[#080808]" aria-hidden="true"></span>
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#252525]">
            {BRAND_CONFIG.brandStatement}
          </p>
        </div>

        {/* 2-Column Balanced Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typographic Focus */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-medium tracking-tight text-[#080808] leading-[1.08] mb-8 text-balance">
              {BRAND_CONFIG.heroHeadline}
            </h1>

            <div className="space-y-4 mb-10 text-[#252525] text-base lg:text-lg leading-relaxed max-w-xl font-light">
              <p className="font-serif italic text-xl text-[#080808]">
                Strategic book promotion. Thoughtful marketing. Meaningful visibility.
              </p>
              <p className="text-sm lg:text-base text-[#252525]/85">
                At Arthur Wells, we help authors transform their creative work into recognizable brands through intentional book promotion, strategic positioning, and reader-focused marketing.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onExploreWork}
                className="px-8 py-4 bg-[#080808] text-[#F8F7F3] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#252525] transition-all duration-200 border border-[#080808] text-center cursor-pointer shadow-xs active:translate-y-px"
              >
                EXPLORE OUR WORK
              </button>
              <button
                onClick={onDiscussBook}
                className="px-8 py-4 bg-transparent text-[#080808] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#080808] hover:text-[#F8F7F3] transition-all duration-200 border border-[#080808] text-center cursor-pointer active:translate-y-px flex items-center justify-center gap-2"
              >
                <span>LET'S DISCUSS YOUR BOOK</span>
                <ArrowDownRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Visual Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] lg:aspect-[3/4] w-full bg-[#EAEAEA] overflow-hidden shadow-xl border border-[#080808]/15">
              <img
                src={BRAND_CONFIG.heroImage}
                alt="Editorial arrangement of hardcover books, literary typography, and book jacket design"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/50 via-transparent to-transparent pointer-events-none" />
              
              {/* Minimalist Editorial Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#F8F7F3]/95 backdrop-blur-md border border-[#080808]/10 text-[#080808]">
                <div className="flex items-center justify-between text-xs tracking-[0.16em] uppercase font-semibold pb-1.5 border-b border-[#080808]/10">
                  <span>Arthur Wells Practice</span>
                  <span className="font-serif italic text-xs">Est. 2026</span>
                </div>
                <p className="text-[11px] text-[#252525]/80 pt-2 tracking-wide font-light">
                  Elevating literary fiction, narrative non-fiction, and author platforms.
                </p>
              </div>
            </div>

            {/* Background architectural hairline accents */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-[#080808]/20 -z-10 pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-[#080808]/20 -z-10 pointer-events-none" />
          </div>
        </div>

        {/* Full-Width Editorial Credo Row */}
        <div className="mt-20 pt-10 border-t border-[#EAEAEA] grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <BookOpen className="w-5 h-5 text-[#080808] shrink-0 mt-0.5 stroke-[1.5]" />
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#080808] mb-1">
                Literary Appreciation
              </h2>
              <p className="text-xs text-[#252525]/75 leading-relaxed font-light">
                Grounding marketing campaigns in profound respect for prose, pacing, and storytelling craft.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Compass className="w-5 h-5 text-[#080808] shrink-0 mt-0.5 stroke-[1.5]" />
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#080808] mb-1">
                Intentional Positioning
              </h2>
              <p className="text-xs text-[#252525]/75 leading-relaxed font-light">
                Distilling narrative hooks into market relevance that captures discerning readers and reviewers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Award className="w-5 h-5 text-[#080808] shrink-0 mt-0.5 stroke-[1.5]" />
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#080808] mb-1">
                Enduring Platform Equity
              </h2>
              <p className="text-xs text-[#252525]/75 leading-relaxed font-light">
                Building an author platform with staying power beyond single promotional release blips.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
