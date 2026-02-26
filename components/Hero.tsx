import myProfile from '../assets/profile.jpg';
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

      {/* Top Scrolling Marquee or Huge Text inspired by Image 2 */}
      <div className="absolute top-28 left-0 w-full overflow-hidden z-10 pointer-events-none opacity-90 select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="text-5xl md:text-8xl font-black font-space tracking-tighter uppercase text-sec pr-12 flex items-center gap-4">
            SENIOR FULL-STACK DEVELOPER <span className="text-thr text-4xl">🍀</span> UI/UX DESIGNER <span className="text-thr text-4xl">🍀</span> AI SPECIALIST <span className="text-thr text-4xl">🍀</span> AI ARCHITECT <span className="text-thr text-4xl">🍀</span> PROJECT MANAGER
          </span>
          <span className="text-5xl md:text-8xl font-black font-space tracking-tighter uppercase text-sec pr-12 flex items-center gap-4">
            SENIOR FULL-STACK DEVELOPER <span className="text-thr text-4xl">🍀</span> UI/UX DESIGNER <span className="text-thr text-4xl">🍀</span> AI SPECIALIST <span className="text-thr text-4xl">🍀</span> AI ARCHITECT <span className="text-thr text-4xl">🍀</span> PROJECT MANAGER
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 max-w-7xl w-full z-10 pt-24 md:pt-40">

        {/* Left Side: Image container inspired by Image 2 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full aspect-square md:aspect-[4/5] bg-main rounded-[3rem] overflow-hidden flex items-end justify-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] border-4 border-thr/10 group animate-pulse-slow hover:border-thr/50 transition-all duration-700"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-thr/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          <img
            src={myProfile}
            alt="Abdulhalim Muhammad"
            className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-105 transition-all duration-700"
          />
          {/* Glowing accent curve from top */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-thr rounded-full blur-[120px] z-0 opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
        </motion.div>

        {/* Right Side: Text & Talk a little about me */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-start lg:pl-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="inline-flex items-center gap-3 bg-thr text-black px-6 py-2 rounded-full mb-8 text-[10px] font-space font-black tracking-[0.3em] uppercase shadow-lg shadow-thr/20"
          >
            <span className="w-2 h-2 bg-black rounded-full animate-ping"></span>
            AVAILABLE FOR HIRE
          </motion.div>

          <h1 className="font-space font-black text-6xl md:text-7xl lg:text-8xl leading-[0.9] mb-8 tracking-tighter text-sec uppercase">
            Hi, I'm <br />
            <span className="text-thr italic">Abdulhalim.</span>
          </h1>

          <div className="flex flex-col gap-6 text-xl md:text-2xl font-medium leading-relaxed text-sec/70 mb-12 border-l-4 border-thr pl-6">
            <p className="font-black text-sec uppercase tracking-tight">
              I don’t just build applications. <span className="text-thr italic">I architect intelligent digital systems.</span>
            </p>
            <p className="text-lg">
              As a Senior Full-Stack Developer, UI/UX Designer, AI Specialist, AI Architect, and Professional Project Manager, I design and develop complete, production-ready solutions from concept to deployment. My focus is not just writing code. It’s engineering scalable systems that are structured correctly, perform under pressure, and evolve with your business.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-6"
          >
            <Link to="/works" className="interactive bg-sec text-main px-10 py-4 rounded-2xl font-black text-lg hover:bg-thr hover:text-black transition-all shadow-xl group flex items-center gap-4 uppercase tracking-widest">
              Explore Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </motion.div>
        </motion.div>
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
            <span className="text-sec font-black text-2xl tracking-tighter uppercase">React • Next.js • Python • AI</span>
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
