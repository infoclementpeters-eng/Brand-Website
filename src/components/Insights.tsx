import React from 'react';
import { BLOG_ARTICLES } from '../data/content';
import { ArticleItem } from '../types';
import { ArrowUpRight, Clock } from 'lucide-react';

interface InsightsProps {
  onOpenArticle: (article: ArticleItem) => void;
}

export const Insights: React.FC<InsightsProps> = ({ onOpenArticle }) => {
  return (
    <section id="insights" className="py-24 lg:py-36 bg-[#F8F7F3] border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#080808]" aria-hidden="true"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#252525]">
              LITERARY ESSAYS & PERSPECTIVES
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#080808] leading-tight text-balance">
            Thoughts on Books, Branding & Visibility.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#252525]/75 font-light">
            Strategic essays on modern publishing, audience resonance, author platforms, and dignified book promotion.
          </p>
        </div>

        {/* 3 Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {BLOG_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-[#FFFFFF] border border-[#EAEAEA] hover:border-[#080808] transition-all duration-300 flex flex-col justify-between group cursor-pointer overflow-hidden"
              onClick={() => onOpenArticle(article)}
            >
              <div>
                {/* Article Image Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EAEAEA]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#F8F7F3]/95 backdrop-blur-xs text-[#080808] text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 font-semibold border border-[#080808]/10">
                    {article.category}
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6 lg:p-8">
                  {/* Clean unboxed metadata with typographic separator */}
                  <div className="flex items-center gap-2 text-xs text-[#252525]/60 mb-3">
                    <span className="flex items-center gap-1 font-sans">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{article.publishedDate}</span>
                  </div>

                  <h3 className="font-serif text-xl lg:text-2xl font-medium tracking-tight text-[#080808] group-hover:text-[#252525] transition-colors mb-3 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#252525]/80 leading-relaxed font-light line-clamp-3">
                    {article.shortDescription}
                  </p>
                </div>
              </div>

              {/* Read Action */}
              <div className="p-6 lg:p-8 pt-0 flex items-center justify-between border-t border-[#EAEAEA]/80 mt-4">
                <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#080808] group-hover:translate-x-1 transition-transform">
                  <span>READ ARTICLE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-[11px] font-serif italic text-[#252525]/50">
                  Arthur Wells Editorial
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
