
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-6 flex items-center justify-between transition-all duration-500 ${scrolled ? 'bg-main/90 backdrop-blur-2xl py-4 border-b border-sec/15' : 'bg-transparent'}`}>
      <Link to="/" className="flex items-center gap-4 group">
        <div className="w-12 h-12 bg-thr rounded-2xl flex items-center justify-center transition-all group-hover:rotate-12 group-hover:scale-110 shadow-2xl shadow-thr/40">
          <span className="text-white font-black text-2xl font-space">A</span>
        </div>
        <div className="flex flex-col">
          <span className="font-space font-black text-xl tracking-tighter text-sec leading-none">MUHAMMAD</span>
          <span className="text-[10px] font-black tracking-[0.4em] text-thr uppercase mt-1">ENGINEER</span>
        </div>
      </Link>

      <div className="hidden lg:flex items-center gap-12 font-space font-black">
        <div className="flex items-center gap-10">
          <NavLink href="/" active={location.pathname === '/'}>HOME</NavLink>
          <NavLink href="/about" active={location.pathname === '/about'}>ABOUT</NavLink>
          <NavLink href="/works" active={location.pathname === '/works'}>WORKS</NavLink>
        </div>
        
        <div className="h-8 w-[2px] bg-sec/10 mx-2"></div>

        <button 
          onClick={toggleTheme}
          className="interactive group relative w-14 h-14 rounded-full border-2 border-sec/20 flex items-center justify-center bg-sec/5 hover:bg-thr transition-all text-sec hover:text-white shadow-lg"
          title="Toggle Mode"
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
             <div className={`absolute w-full h-full bg-sec/20 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500`}></div>
            {isDark ? (
              <svg className="w-6 h-6 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" /></svg>
            ) : (
              <svg className="w-6 h-6 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </div>
        </button>

        <Link to="/contact" className="bg-thr text-white px-8 py-3.5 rounded-full flex items-center gap-3 group transition-all font-black shadow-xl shadow-thr/30 hover:scale-105 active:scale-95 border-2 border-transparent">
          <span>CONTACT</span>
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center transition-transform group-hover:rotate-45">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </Link>
      </div>

      <button className="lg:hidden w-14 h-14 bg-thr rounded-2xl flex flex-col items-center justify-center gap-1.5 shadow-xl shadow-thr/20">
        <div className="w-6 h-[3px] bg-white rounded-full"></div>
        <div className="w-4 h-[3px] bg-white rounded-full self-end mr-4"></div>
      </button>
    </nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode; active?: boolean }> = ({ href, children, active }) => (
  <Link 
    to={href} 
    className={`relative overflow-hidden group py-1 text-sm tracking-widest transition-all ${active ? 'text-thr' : 'text-sec/60 hover:text-sec'}`}
  >
    <div className="transition-transform duration-500 group-hover:-translate-y-full">{children}</div>
    <div className="absolute top-0 left-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0 text-thr">{children}</div>
    {active && <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-thr"></div>}
  </Link>
);

export default Navbar;
