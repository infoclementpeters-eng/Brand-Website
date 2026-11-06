import React from 'react';
import { Sparkles, Compass, PenTool, Rocket, Share2, Globe, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onQuickInquire: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService, onQuickInquire }) => {
  const getIcon = (name: ServiceItem['iconName']) => {
    const props = { className: 'w-6 h-6 stroke-[1.25] text-[#080808]' };
    switch (name) {
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      case 'PenTool':
        return <PenTool {...props} />;
      case 'Rocket':
        return <Rocket {...props} />;
      case 'Share2':
        return <Share2 {...props} />;
      case 'Globe':
        return <Globe {...props} />;
    }
  };

  return (
    <section id="services" className="py-24 lg:py-36 bg-[#F8F7F3] border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#080808]" aria-hidden="true"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#252525]">
              WHAT WE DO
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#080808] leading-tight text-balance">
            Strategic Support for Every Stage of Your Book Journey.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#252525]/75 font-light max-w-2xl">
            Whether your manuscript is heading to production or you are reviving backlist titles, our services are calibrated to build genuine resonance with readers and industry tastemakers.
          </p>
        </div>

        {/* 6 Elegant Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-[#FFFFFF] border border-[#EAEAEA] p-8 lg:p-10 flex flex-col justify-between hover:border-[#080808] transition-all duration-300 hover:shadow-lg group"
            >
              <div>
                {/* Header row: Number & Icon */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#EAEAEA]/80">
                  <span className="text-xs tracking-[0.25em] font-semibold text-[#252525]/60 uppercase">
                    SERVICE {service.number}
                  </span>
                  <div className="p-2.5 bg-[#F8F7F3] border border-[#EAEAEA] group-hover:border-[#080808]/30 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="font-serif text-2xl font-medium tracking-tight text-[#080808] mb-4 uppercase leading-snug">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-[#252525]/80 leading-relaxed font-light mb-8">
                  {service.shortDescription}
                </p>
              </div>

              {/* Action buttons */}
              <div className="pt-6 border-t border-[#EAEAEA]/80 flex items-center justify-between">
                <button
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#080808] group-hover:text-[#252525] cursor-pointer"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onQuickInquire(service.title)}
                  className="text-[11px] uppercase tracking-[0.14em] text-[#252525]/60 hover:text-[#080808] underline underline-offset-4 cursor-pointer"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
