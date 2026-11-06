import React from 'react';
import { X, ArrowRight, Sparkles, Check, Clock, BookOpen } from 'lucide-react';
import { PortfolioProject, ServiceItem, ArticleItem } from '../types';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onInquire: (title: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  React.useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080808]/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FFFFFF] border border-[#080808] w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-[#F8F7F3] hover:bg-[#EAEAEA] text-[#080808] transition-colors border border-[#080808]/15 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Visual Header */}
        <div className="relative aspect-[16/9] w-full bg-[#EAEAEA] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-4 left-4 bg-[#080808]/90 text-[#F8F7F3] text-[10px] tracking-[0.2em] uppercase px-3 py-1 font-semibold">
            Concept Blueprint Showcase
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 space-y-8">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-[#252525]/60 mb-1 font-semibold">
              {project.category} · {project.genre}
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl font-medium text-[#080808] uppercase mb-2">
              {project.title}
            </h3>
            <p className="font-serif italic text-lg text-[#252525]/75">
              {project.subtitle}
            </p>
          </div>

          {/* Project Overview */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#080808]">
              Project Overview
            </h4>
            <p className="text-sm text-[#252525]/85 leading-relaxed font-light">
              {project.overview}
            </p>
          </div>

          {/* Services Provided */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#080808]">
              Services Provided
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.servicesProvided.map((service) => (
                <span
                  key={service}
                  className="text-xs text-[#080808] bg-[#F8F7F3] border border-[#EAEAEA] px-3 py-1.5 font-medium"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Creative Strategy */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#080808]">
              Creative & Literary Strategy
            </h4>
            <p className="text-sm text-[#252525]/85 leading-relaxed font-light">
              {project.creativeStrategy}
            </p>
          </div>

          {/* Framework Value */}
          <div className="p-4 bg-[#F8F7F3] border border-[#EAEAEA] flex items-start gap-3 text-xs text-[#252525]/85">
            <Sparkles className="w-4 h-4 text-[#080808] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold uppercase tracking-wider block text-[#080808] mb-0.5">
                Strategic Application:
              </span>
              <p className="font-light">{project.outcomesHighlight}</p>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-[#EAEAEA] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <button
              onClick={() => {
                onInquire(project.title);
                onClose();
              }}
              className="px-6 py-3.5 bg-[#080808] text-[#F8F7F3] text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#252525] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>INQUIRE ABOUT A SIMILAR CAMPAIGN</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onClose}
              className="px-6 py-3.5 bg-transparent text-[#080808] text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#F8F7F3] transition-colors border border-[#EAEAEA] text-center cursor-pointer"
            >
              Close Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onInquire: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onInquire }) => {
  React.useEffect(() => {
    if (!service) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080808]/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FFFFFF] border border-[#080808] w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-[#F8F7F3] hover:bg-[#EAEAEA] text-[#080808] transition-colors border border-[#080808]/15 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-10 space-y-8">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#252525]/60 mb-2 font-semibold">
              SERVICE {service.number} — DETAILED SPECIFICATION
            </div>
            <h3 className="font-serif text-3xl font-medium text-[#080808] uppercase mb-4">
              {service.title}
            </h3>
            <p className="text-sm text-[#252525]/85 leading-relaxed font-light">
              {service.fullDescription}
            </p>
          </div>

          {/* Deliverables */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#080808]">
              Key Scope & Deliverables
            </h4>
            <div className="space-y-2.5">
              {service.deliverables.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#080808] text-[#F8F7F3] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="text-xs text-[#252525] font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal For */}
          <div className="p-4 bg-[#F8F7F3] border border-[#EAEAEA] space-y-1">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#080808] block">
              Ideal Candidate:
            </span>
            <p className="text-xs text-[#252525]/80 font-light leading-relaxed">
              {service.idealFor}
            </p>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-[#EAEAEA] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <button
              onClick={() => {
                onInquire(service.title);
                onClose();
              }}
              className="px-6 py-3.5 bg-[#080808] text-[#F8F7F3] text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#252525] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <span>INQUIRE ABOUT THIS SERVICE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onClose}
              className="px-6 py-3.5 bg-transparent text-[#080808] text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#F8F7F3] transition-colors border border-[#EAEAEA] text-center cursor-pointer"
            >
              Back to Overview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
  onInquire: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, onInquire }) => {
  React.useEffect(() => {
    if (!article) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080808]/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FFFFFF] border border-[#080808] w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-[#F8F7F3] hover:bg-[#EAEAEA] text-[#080808] transition-colors border border-[#080808]/15 cursor-pointer"
          aria-label="Close article"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Visual */}
        <div className="relative aspect-[16/8] w-full bg-[#EAEAEA] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-12 space-y-8">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#252525]/60 mb-2 font-medium">
              <span className="uppercase tracking-widest">{article.category}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 font-sans">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#080808] uppercase leading-tight mb-4">
              {article.title}
            </h2>
            <p className="font-serif italic text-lg text-[#252525]/80 pb-6 border-b border-[#EAEAEA]">
              {article.shortDescription}
            </p>
          </div>

          {/* Essay Paragraphs */}
          <div className="space-y-6 text-[#252525] text-sm sm:text-base leading-relaxed font-light">
            {article.contentParagraphs.map((para, idx) => (
              <div key={idx} className="space-y-2">
                {para.heading && (
                  <h3 className="font-serif text-xl font-medium text-[#080808] uppercase pt-2">
                    {para.heading}
                  </h3>
                )}
                <p className="text-[#252525]/85">{para.text}</p>
              </div>
            ))}
          </div>

          {/* Article Footer & Consultation Invitation */}
          <div className="mt-10 p-8 bg-[#F8F7F3] border border-[#EAEAEA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="max-w-md">
              <h4 className="font-serif text-xl font-medium text-[#080808] mb-1">
                Have Questions About Your Book's Positioning?
              </h4>
              <p className="text-xs text-[#252525]/75 font-light">
                Discuss strategic angles and visibility planning directly with Arthur Wells.
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onInquire();
              }}
              className="px-6 py-3.5 bg-[#080808] text-[#F8F7F3] text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#252525] transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
            >
              CONSULT WITH ARTHUR WELLS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
