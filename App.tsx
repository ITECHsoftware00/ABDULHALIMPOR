
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Services from './components/Services';
import Works from './components/Works';
import ProjectDetail from './components/ProjectDetail';
import ExperienceTimeline from './components/ExperienceTimeline';
import Testimonials from './components/Testimonials';
import SlidingMarquee from './components/SlidingMarquee';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVPage from './components/CVPage';
import AIChatWidget from './components/AIChatWidget';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Services />
      <ExperienceTimeline />
      <Testimonials />
      <SlidingMarquee />
      <Contact />
    </div>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-main flex flex-col items-center justify-center z-[9999]">
        <div className="overflow-hidden mb-4">
          <h1 className="text-sec font-space font-black text-5xl md:text-8xl animate-[slideUp_0.8s_ease-out_forwards]">
            ABDULHALIM
          </h1>
        </div>
        <div className="w-48 h-[2px] bg-sec/10 relative overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 h-full bg-thr animate-[loading_1.5s_ease-in-out_forwards]"></div>
        </div>
        <style>{`
          @keyframes slideUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
          }
          @keyframes loading {
            0% { width: 0; }
            100% { width: 100%; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-main text-sec font-sans transition-colors duration-500">
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<CVPage />} />
        </Routes>
        <Footer />
        <AIChatWidget />
      </div>
    </Router>
  );
};

export default App;
