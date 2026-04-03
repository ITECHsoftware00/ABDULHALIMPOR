
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
      <div className="fixed inset-0 bg-main flex flex-col items-center justify-center z-[9999] overflow-hidden">
        {/* Ambient glow orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)' }}
        />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)' }}
        />

        {/* Name with gradient */}
        <div className="overflow-hidden mb-8 relative z-10">
          <h1
            className="font-space font-black text-5xl md:text-9xl tracking-tighter animate-[slideUp_0.9s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            style={{
              background: 'linear-gradient(135deg, #e2e0f5 30%, #8b5cf6 60%, #22d3ee 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 40px rgba(139,92,246,0.4))',
            }}
          >
            ABDULHALIM
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-muted font-space text-xs tracking-[0.5em] uppercase mb-10 opacity-0 animate-[fadeIn_0.6s_ease_0.5s_forwards] relative z-10">
          Senior Software Architect
        </p>

        {/* Progress bar */}
        <div className="w-56 h-[2px] bg-sec/5 relative overflow-hidden rounded-full z-10">
          <div
            className="absolute top-0 left-0 h-full animate-[loading_1.5s_ease-in-out_forwards] rounded-full"
            style={{ background: 'linear-gradient(90deg, #8b5cf6, #22d3ee)' }}
          />
        </div>

        <style>{`
          @keyframes slideUp {
            from { transform: translateY(110%); opacity: 0; }
            to   { transform: translateY(0);    opacity: 1; }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to   { opacity: 0.5; transform: translateY(0); }
          }
          @keyframes loading {
            0%   { width: 0%; }
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
      </div>
    </Router>
  );
};

export default App;
