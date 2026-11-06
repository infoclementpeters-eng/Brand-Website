import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/content';
import { PortfolioProject } from '../types';
import { ArrowUpRight, Sparkles, Filter } from 'lucide-react';

interface PortfolioProps {
  onOpenProject: (project: PortfolioProject) => void;
  onInquireProject: (projectTitle: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenProject, onInquireProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Book Promotion',
    'Book Launch Campaigns',
    'Author Branding',
    'Social Media Campaigns',
    'Marketing Strategy',
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 lg:py-36 bg-[#FFFFFF] border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-[#080808]" aria-hidden="true"></span>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#252525]">
                OUR CREATIVE PORTFOLIO
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#080808] leading-tight text-balance">
              Strategy Meets Storytelling.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#252525]/75 font-light">
              Explore how we translate nuanced manuscripts into enduring author visibility and reader resonance through tailored campaigns.
            </p>
          </div>

          {/* Illustrative Concept Note Badge (Mandatory anti-fabrication disclosure) */}
          <div className="p-4 bg-[#F8F7F3] border border-[#EAEAEA] max-w-md text-xs text-[#252525]/80">
            <div className="flex items-center gap-2 font-semibold uppercase tracking-[0.16em] text-[#080808] mb-1">
              <Sparkles className="w-3.5 h-3.5 text-[#080808]" />
              <span>CONCEPT SHOWCASE ARCHIVE</span>
            </div>
            <p className="font-light leading-relaxed text-[11px]">
              These projects are illustrative strategic concepts demonstrating our methodology. Easily interchangeable with your verified author campaigns.
            </p>
          </div>
        </div>

        {/* Category Filters (interactive segmented filter controls) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-[#EAEAEA]/80">
          <div className="flex items-center gap-1.5 text-xs text-[#252525]/50 uppercase tracking-widest mr-2 shrink-0">
            <Filter className="w-3 h-3" />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.16em] whitespace-nowrap shrink-0 transition-all cursor-pointer font-medium ${
                activeCategory === cat
                  ? 'bg-[#080808] text-[#F8F7F3] shadow-xs'
                  : 'bg-[#F8F7F3] text-[#252525] hover:bg-[#EAEAEA]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-[#F8F7F3] border border-[#EAEAEA] hover:border-[#080808] transition-all duration-300 overflow-hidden"
            >
              {/* Project Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EAEAEA]">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.subtitle}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Concept Label in top right */}
                <div className="absolute top-3 right-3 bg-[#080808]/90 text-[#F8F7F3] text-[10px] tracking-[0.18em] uppercase px-2.5 py-1 font-semibold">
                  Concept Study
                </div>

                {/* Category tag */}
                <div className="absolute bottom-3 left-3 bg-[#F8F7F3]/95 backdrop-blur-xs text-[#080808] text-[10px] tracking-[0.16em] uppercase px-2.5 py-1 font-semibold border border-[#080808]/10">
                  {project.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] text-[#252525]/60 uppercase tracking-[0.18em] mb-1">
                    {project.genre}
                  </div>
                  <h3 className="font-serif text-2xl font-medium tracking-tight text-[#080808] mb-2 uppercase">
                    {project.title}
                  </h3>
                  <p className="text-xs font-serif italic text-[#252525]/75 mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-[#252525]/80 leading-relaxed font-light line-clamp-3 mb-6">
                    {project.overview}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAEAEA] flex items-center justify-between">
                  <button
                    onClick={() => onOpenProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#080808] hover:text-[#252525] group-hover:underline underline-offset-4 cursor-pointer"
                  >
                    <span>VIEW PROJECT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onInquireProject(project.title)}
                    className="text-[10px] uppercase tracking-[0.16em] text-[#252525]/60 hover:text-[#080808] cursor-pointer"
                  >
                    Discuss Similar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
