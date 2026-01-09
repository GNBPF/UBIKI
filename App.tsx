import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import ProblemSolution from './components/ProblemSolution';
import Solutions from './components/Solutions';
import UseCases from './components/UseCases';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <main>
        <Hero />
        <Pillars />
        <ProblemSolution />
        <Solutions onOpenModal={() => setIsModalOpen(true)} />
        <UseCases />
        <Process />
        <Contact />
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;