
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import Projects from './components/Projects.tsx';
import Reviews from './components/Reviews.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import AIChat from './components/AIChat.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default App;
