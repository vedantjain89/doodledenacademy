import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import ProgramsSection from './components/ProgramsSection';
import ScheduleSection from './components/ScheduleSection';
import GallerySection from './components/GallerySection';
import SafetySection from './components/SafetySection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import ContactFooter from './components/ContactFooter';
import TrialModal from './components/TrialModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [selectedTrialProgram, setSelectedTrialProgram] = useState('');
  const [selectedPillar, setSelectedPillar] = useState('all');

  const handleOpenTrialModal = (programTitle = '') => {
    setSelectedTrialProgram(programTitle);
    setIsTrialModalOpen(true);
  };

  const handleSelectPillarFromOutside = (pillarId) => {
    setSelectedPillar(pillarId);
    const element = document.getElementById('programs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-doodle-cream font-sans text-doodle-dark">
      {/* Sticky Navigation */}
      <Navbar onOpenTrialModal={handleOpenTrialModal} />

      {/* Main Page Flow */}
      <main className="flex-grow">
        <Hero
          onOpenTrialModal={handleOpenTrialModal}
          onSelectPillar={handleSelectPillarFromOutside}
        />
        
        <WhyUs
          onSelectPillar={handleSelectPillarFromOutside}
        />
        
        <ProgramsSection
          selectedPillar={selectedPillar}
          setSelectedPillar={setSelectedPillar}
          onOpenTrialModal={handleOpenTrialModal}
        />

        <ScheduleSection
          onOpenTrialModal={handleOpenTrialModal}
        />

        <GallerySection />

        <SafetySection />

        <TestimonialsSection />

        <FaqSection
          onOpenTrialModal={handleOpenTrialModal}
        />
      </main>

      {/* Footer & Campus Location */}
      <ContactFooter onOpenTrialModal={handleOpenTrialModal} />

      {/* Interactive Booking Modal */}
      <TrialModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
        initialProgram={selectedTrialProgram}
      />

      {/* Persistent WhatsApp Floater */}
      <FloatingWhatsApp />
    </div>
  );
}
