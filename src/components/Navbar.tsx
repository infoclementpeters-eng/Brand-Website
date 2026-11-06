import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG } from '../data/content';

interface NavbarProps {
  onWorkTogetherClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onWorkTogetherClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Our Process', href: '#process' },
    { label: 'Insights', href: '#insights' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F7F3]/95 backdrop-blur-md border-b border-[#EAEAEA] py-3 shadow-xs'
            : 'bg-[#F8F7F3] border-b border-[#EAEAEA]/60 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-8">
          {/* Brand Logo Zone */}
          <a
            href="#home"
            className="flex items-center gap-3 shrink-0 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#080808]"
            aria-label="Arthur Wells - Return to top"
          >
            <div className="w-10 h-10 lg:w-11 lg:h-11 overflow-hidden rounded-xs bg-[#F8F7F3] flex items-center justify-center border border-[#080808]/10 group-hover:border-[#080808]/30 transition-colors">
              <img
                src={BRAND_CONFIG.logoUrl}
                alt="Arthur Wells Monogram Logo"
                className="w-full h-full object-contain p-0.5 mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg lg:text-xl font-medium tracking-[0.2em] text-[#080808] uppercase leading-tight">
                {BRAND_CONFIG.name}
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#252525]/70 uppercase font-sans">
                Literary Strategy
              </span>
            </div>
          </a>

          {/* Clean Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-[0.12em] uppercase font-medium text-[#252525]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-[#080808] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#080808] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary CTA */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <button
              onClick={onWorkTogetherClick}
              className="px-5 py-2.5 text-xs font-semibold tracking-[0.16em] uppercase text-[#F8F7F3] bg-[#080808] hover:bg-[#252525] transition-all duration-200 border border-[#080808] flex items-center gap-2 group whitespace-nowrap shrink-0 cursor-pointer shadow-xs active:translate-y-px"
            >
              <span>LET'S WORK TOGETHER</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#080808] hover:text-[#252525] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#080808]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#080808] text-[#F8F7F3] px-8 py-8 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-8 border-b border-[#252525]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xs bg-[#F8F7F3] p-1 flex items-center justify-center">
                <img
                  src={BRAND_CONFIG.logoUrl}
                  alt="Arthur Wells Logo"
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>
              <span className="font-serif text-lg tracking-[0.2em] font-medium text-[#F8F7F3] uppercase">
                {BRAND_CONFIG.name}
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#F8F7F3] hover:text-[#EAEAEA]"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center space-y-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-serif text-2xl tracking-[0.05em] text-[#F8F7F3] hover:text-[#EAEAEA] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-[#252525] flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onWorkTogetherClick();
              }}
              className="w-full py-3.5 text-center text-xs tracking-[0.2em] uppercase font-semibold text-[#080808] bg-[#F8F7F3] hover:bg-white transition-colors"
            >
              LET'S WORK TOGETHER
            </button>
            <p className="text-xs text-[#EAEAEA]/60 tracking-wider text-center">
              {BRAND_CONFIG.email}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
