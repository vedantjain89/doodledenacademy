import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import WhyUs from './WhyUs';
import ProgramsSection from './ProgramsSection';
import ScheduleSection from './ScheduleSection';
import GallerySection from './GallerySection';
import SafetySection from './SafetySection';
import TestimonialsSection from './TestimonialsSection';
import FaqSection from './FaqSection';
import ContactFooter from './ContactFooter';
import TrialModal from './TrialModal';
import FloatingWhatsApp from './FloatingWhatsApp';

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
