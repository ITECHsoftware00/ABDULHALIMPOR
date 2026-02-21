import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import myProfile from '../assets/profile.jpg';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-6 flex items-center justify-between transition-all duration-500 ${scrolled ? 'bg-main/90 backdrop-blur-2xl py-4 border-b border-sec/15' : 'bg-transparent'}`}>
        <Link to="/" className="flex items-center gap-4 group">
          <div className="w-12 h-12 bg-thr rounded-2xl flex items-center justify-center transition-all group-hover:rotate-12 group-hover:scale-110 shadow-2xl shadow-thr/40">
            <span className="text-black font-black text-2xl font-space">A</span>
          </div>
          <div className="flex flex-col">
            <span className="font-space font-black text-xl tracking-tighter text-sec leading-none">ABDULHALIM</span>
            <span className="text-[10px] font-black tracking-[0.4em] text-thr uppercase mt-1">SENIOR ARCHITECT</span>
          </div>
        </Link>

        <div className="flex items-center gap-6">
          <button
            onClick={toggleTheme}
            className="interactive hidden md:flex relative w-14 h-14 rounded-full border-2 border-sec/20 items-center justify-center bg-sec/5 hover:bg-thr transition-all text-sec hover:text-black shadow-lg"
            title="Toggle Mode"
          >
            {isDark ? (
              <svg className="w-6 h-6 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" /></svg>
            ) : (
              <svg className="w-6 h-6 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>

          <button
            onClick={() => setMenuOpen(true)}
            className="interactive bg-thr text-black px-8 py-3.5 rounded-full flex items-center gap-3 group transition-all font-black shadow-xl shadow-thr/30 hover:scale-105 active:scale-95 border-2 border-transparent"
          >
            <span>MENU</span>
            <div className="flex flex-col gap-1 items-end">
              <div className="w-5 h-[2px] bg-black"></div>
              <div className="w-3 h-[2px] bg-black group-hover:w-5 transition-all"></div>
            </div>
          </button>
        </div>
      </nav>

      {/* Full Screen Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[200] bg-card-bg flex items-center justify-center p-6 md:p-12 overflow-hidden"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-8 right-8 md:top-12 md:right-12 w-14 h-14 bg-main text-sec rounded-full flex items-center justify-center hover:bg-thr hover:text-black transition-all interactive border border-muted/20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Left Side Links */}
              <div className="flex flex-col gap-8 justify-center">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About', path: '/about' },
                  { name: 'Works', path: '/works' },
                  { name: 'Contact', path: '/contact' }
                ].map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                  >
                    <Link
                      to={link.path}
                      className="group flex items-center justify-between text-5xl md:text-8xl font-space font-black tracking-tighter hover:text-thr transition-colors interactive border-b border-muted/10 pb-4"
                    >
                      <span>{link.name}</span>
                      <span className="text-2xl font-light opacity-50 font-sans">+</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Right Side Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="hidden lg:flex flex-col justify-center items-end text-right"
              >
                <div className="mb-12 flex flex-col items-end">
                  <h3 className="text-3xl font-black mb-2 flex items-center gap-4">
                    <span role="img" aria-label="wave">👋</span> Nice to see you!
                  </h3>
                  <p className="opacity-60 text-lg">
                    I'm Abdulhalim, a Senior Full-Stack Developer &<br />
                    AI Specialist.
                  </p>
                </div>

                <div className="relative w-[400px] h-[400px] rounded-[3rem] overflow-hidden bg-main border-8 border-main shadow-2xl">
                  <img src={myProfile} alt="Abdulhalim" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
                  <div className="absolute inset-0 border border-thr/20 rounded-[inherit] pointer-events-none"></div>
                </div>

                <div className="mt-12 flex w-full justify-between items-end border-t border-muted/20 pt-8 opacity-40 text-sm font-bold tracking-widest uppercase">
                  <span>Made with ❤️ by Abdulhalim</span>
                  <span>© 2026</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
