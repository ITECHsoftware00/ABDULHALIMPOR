
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sec text-main pt-32 pb-12 px-4 relative overflow-hidden">
      {/* Massive background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] text-[35vw] font-black font-space whitespace-nowrap z-0">
        MUHAMMAD
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20 mb-40">
          <div className="max-w-md">
            <h2 className="text-5xl md:text-7xl font-space font-black tracking-tighter mb-10 leading-none">
              READY TO <br /> <span className="text-thr">ELEVATE?</span>
            </h2>
            <p className="text-xl opacity-60 mb-12">
              Transforming complex visions into simple, elegant digital realities.
            </p>
            <Link to="/contact" className="interactive group flex items-center gap-4 text-2xl font-bold hover:text-thr transition-colors">
              Start a project
              <div className="w-12 h-12 bg-thr text-black rounded-full flex items-center justify-center transition-transform group-hover:rotate-45 shadow-lg shadow-thr/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-24 w-full lg:w-auto">
            <FooterLinks title="Navigation" items={[{label:'Home', to:'/'}, {label:'Works', to:'/works'}, {label:'About', to:'/about'}, {label:'Contact', to:'/contact'}]} />
            <FooterLinks title="Connect" items={[
              {label:'LinkedIn', to:'https://www.linkedin.com'}, 
              {label:'GitHub', to:'https://github.com'}, 
              {label:'Email', to:'mailto:tsolution418@gmail.com'}
            ]} />
            <div className="flex flex-col gap-8 col-span-2 md:col-span-1">
              <div className="flex flex-col gap-2">
                <span className="opacity-30 uppercase text-[10px] tracking-[0.4em] font-bold">Location</span>
                <p className="text-lg font-medium">Available for Remote</p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="opacity-30 uppercase text-[10px] tracking-[0.4em] font-bold">Local Time</span>
                <p className="text-lg font-medium font-space">
                  {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })} UTC
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-main/10 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 text-xs tracking-widest font-bold">
          <p>© {new Date().getFullYear()} ABDULHALIM MUHAMMAD. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-thr transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-thr transition-colors">TERMS OF USE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLinks: React.FC<{ title: string; items: {label:string; to:string}[] }> = ({ title, items }) => (
  <div className="flex flex-col gap-8">
    <span className="opacity-30 uppercase text-[10px] tracking-[0.4em] font-bold">{title}</span>
    <ul className="flex flex-col gap-4">
      {items.map(item => (
        <li key={item.label}>
          {item.to.startsWith('/') ? (
            <Link to={item.to} className="interactive text-lg hover:text-thr transition-colors">{item.label}</Link>
          ) : (
            <a href={item.to} target="_blank" rel="noopener noreferrer" className="interactive text-lg hover:text-thr transition-colors">{item.label}</a>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
