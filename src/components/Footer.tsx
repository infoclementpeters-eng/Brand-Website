import React from 'react';
import { ArrowUp, Mail, ExternalLink } from 'lucide-react';
import { BRAND_CONFIG, SERVICES_DATA } from '../data/content';

interface FooterProps {
  onNavigate: (href: string) => void;
  onSelectServiceTitle: (title: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectServiceTitle }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Our Process', href: '#process' },
    { label: 'Insights', href: '#insights' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#080808] text-[#F8F7F3] pt-20 pb-12 border-t border-[#252525]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Tier: Brand, Description, Navigation, Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#252525]">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xs bg-[#F8F7F3] p-1 flex items-center justify-center border border-[#FFFFFF]/20">
                <img
                  src={BRAND_CONFIG.logoUrl}
                  alt="Arthur Wells Logo"
                  className="w-full h-full object-contain mix-blend-multiply"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-serif text-xl tracking-[0.2em] font-medium text-[#F8F7F3] uppercase block leading-tight">
                  {BRAND_CONFIG.name}
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#EAEAEA]/60 uppercase font-sans">
                  Book Promotion & Author Strategy
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#EAEAEA]/75 font-light leading-relaxed max-w-sm">
              Arthur Wells is a dedicated book promotion and literary branding consultancy helping authors transform creative writing into enduring recognition.
            </p>

            <div className="pt-2">
              <p className="font-serif italic text-sm text-[#EAEAEA]/90">
                "{BRAND_CONFIG.footerStatement}"
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F8F7F3]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#EAEAEA]/70 font-light">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.href);
                    }}
                    className="hover:text-[#F8F7F3] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas / Services Links */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F8F7F3]">
              Services & Practice
            </h4>
            <ul className="space-y-2.5 text-xs text-[#EAEAEA]/70 font-light">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onSelectServiceTitle(srv.title)}
                    className="hover:text-[#F8F7F3] transition-colors text-left cursor-pointer"
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-[#252525]">
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#EAEAEA]/50 block mb-1">
                Direct Contact:
              </span>
              <a
                href={`mailto:${BRAND_CONFIG.email}`}
                className="font-serif text-sm text-[#F8F7F3] hover:underline flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#EAEAEA]/70" />
                <span>{BRAND_CONFIG.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright, Statement & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#EAEAEA]/60 font-light">
          <div>
            <p>{BRAND_CONFIG.copyright}</p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 hover:text-[#F8F7F3] transition-colors cursor-pointer group"
              aria-label="Back to top"
            >
              <span className="uppercase tracking-[0.16em] text-[11px]">Back to top</span>
              <div className="w-6 h-6 rounded-full border border-[#252525] group-hover:border-[#F8F7F3] flex items-center justify-center transition-colors">
                <ArrowUp className="w-3 h-3 text-[#F8F7F3]" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
