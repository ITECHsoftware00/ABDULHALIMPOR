import myProfile from './assets/profile.jpg';
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-28 pb-12">
      {/* Nature-Tech Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-thr/10 rounded-full blur-[180px] animate-pulse-slow"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-muted/15 rounded-full blur-[150px] animate-float"></div>
        
        {/* Subtle Noise */}
        <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none">
           <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <filter id="noiseFilter">
                <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20 max-w-7xl w-full z-10">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center gap-3 bg-thr text-black px-8 py-3 rounded-full mb-10 text-sm font-space font-black tracking-[0.3em] shadow-2xl shadow-thr/30 uppercase animate-bounce border-2 border-black/5">
            <span className="w-2.5 h-2.5 bg-black rounded-full animate-ping"></span>
            AVAILABLE FOR HIRE
          </div>
          
          <h1 className="font-space font-black text-6xl md:text-8xl lg:text-[9rem] leading-[0.8] mb-12 tracking-tighter text-sec uppercase group">
            <span className="block overflow-hidden">
              <span className="inline-block transition-transform duration-700 group-hover:translate-x-6">FULL-STACK</span>
            </span>
            <span className="block overflow-hidden text-transparent transition-all duration-700 hover:text-sec" style={{ WebkitTextStroke: '3px var(--text-color)' }}>
              DEVELOPER.
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-bold leading-relaxed text-sec/80 tracking-tight mb-14 max-w-2xl">
            Hi, I'm <span className="text-thr">Abdulhalim</span>. I engineer high-impact digital architecture and high-quality mobile apps.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-8">
            <Link to="/works" className="interactive bg-thr text-black px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl shadow-thr/20 flex items-center gap-4">
              VIEW PROJECTS
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
            <Link to="/contact" className="interactive border-4 border-muted/30 px-12 py-5 rounded-2xl font-black text-xl hover:border-thr transition-all text-sec">
              CONTACT ME
            </Link>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          {/* User Image Frame */}
          <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[600px] overflow-hidden rounded-[4rem] border-8 border-card-bg shadow-2xl transition-transform duration-700 hover:rotate-2 hover:scale-105">
            <img 
              src={myProfile}
              alt="Abdulhalim Muhammad" 
              className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
            />
          </div>
          {/* Accent decoration */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-thr rounded-full z-[-1] animate-pulse"></div>
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-muted/20 rounded-full z-[-1] animate-float"></div>
        </div>
      </div>

      {/* Background Decorative Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <span className="text-[38vw] font-black text-sec opacity-[0.03] select-none leading-none tracking-tighter uppercase font-space">
          MUHAMMAD
        </span>
      </div>

      <div className="absolute bottom-12 w-full px-12 flex justify-between items-end border-t-2 border-muted/10 pt-12">
        <div className="flex flex-col gap-4">
           <div className="flex flex-col">
              <span className="text-thr font-black text-[10px] tracking-[0.5em] uppercase">Core Tech Stack</span>
              <span className="text-sec font-black text-2xl tracking-tighter">Flutter • React • Solidity</span>
           </div>
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <div className="w-[4px] h-28 bg-muted/20 relative overflow-hidden rounded-full">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-thr animate-[scrollAnim_3s_infinite] rounded-full"></div>
          </div>
          <span className="text-[9px] font-black tracking-[0.6em] opacity-50 uppercase">Explore Works</span>
        </div>
      </div>

      <style>{`
        @keyframes scrollAnim {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
