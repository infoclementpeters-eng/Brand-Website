/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { WhyUs } from './components/WhyUs';
import { Testimonials } from './components/Testimonials';
import { Insights } from './components/Insights';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal, ServiceModal, ArticleModal } from './components/Modals';
import { PortfolioProject, ServiceItem, ArticleItem } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [servicePreset, setServicePreset] = useState<string>('Book Promotion');

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireWithService = (serviceTitle: string) => {
    setServicePreset(serviceTitle);
    scrollToSection('#contact');
  };

  const handleInquireFromProject = (projectTitle: string) => {
    setServicePreset(`Inquiry related to ${projectTitle}`);
    scrollToSection('#contact');
  };

  return (
    <div className="min-h-screen bg-[#F8F7F3] text-[#080808] flex flex-col font-sans selection:bg-[#080808] selection:text-[#F8F7F3]">
      {/* Sticky Top Navigation */}
      <Navbar onWorkTogetherClick={() => scrollToSection('#contact')} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreWork={() => scrollToSection('#portfolio')}
          onDiscussBook={() => scrollToSection('#contact')}
        />

        {/* About Section */}
        <About onLearnMoreProcess={() => scrollToSection('#process')} />

        {/* Services Section */}
        <Services
          onSelectService={(service) => setSelectedService(service)}
          onQuickInquire={(serviceTitle) => handleInquireWithService(serviceTitle)}
        />

        {/* Portfolio / Selected Work */}
        <Portfolio
          onOpenProject={(project) => setSelectedProject(project)}
          onInquireProject={(projectTitle) => handleInquireFromProject(projectTitle)}
        />

        {/* Our Process Section */}
        <Process onStartProcess={() => scrollToSection('#contact')} />

        {/* Why Arthur Wells Section */}
        <WhyUs />

        {/* Author Testimonials */}
        <Testimonials />

        {/* Insights / Blog Section */}
        <Insights onOpenArticle={(article) => setSelectedArticle(article)} />

        {/* Contact Section */}
        <Contact selectedServicePreset={servicePreset} />
      </main>

      {/* Footer Section */}
      <Footer
        onNavigate={(href) => scrollToSection(href)}
        onSelectServiceTitle={(title) => handleInquireWithService(title)}
      />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(title) => handleInquireFromProject(title)}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onInquire={(title) => handleInquireWithService(title)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onInquire={() => scrollToSection('#contact')}
      />
    </div>
  );
}
