import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';

function App() {
  
  // Smooth scroll implementation (basic) or initialization of heavy libraries could go here.
  // Since we are keeping it simple with native scroll behavior:
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-[#1C1D20] min-h-screen w-full relative">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <ChatBot />
    </div>
  );
}

export default App;
