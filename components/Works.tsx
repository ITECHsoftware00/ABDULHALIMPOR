
import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const Works: React.FC = () => {
  return (
    <section className="min-h-screen py-32 px-6 md:px-20 bg-main text-sec relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-40 gap-16 border-b-4 border-muted/10 pb-20">
          <div className="max-w-4xl">
            <span className="text-thr font-space font-black tracking-[0.5em] uppercase text-sm block mb-6">Recent Deployments</span>
            <h1 className="text-6xl md:text-[10rem] font-space font-black tracking-tighter leading-[0.8]">
              SELECTED <br /> <span className="text-thr italic">SOLUTIONS.</span>
            </h1>
          </div>
          <div className="max-w-md bg-muted text-main p-10 rounded-[3rem] shadow-2xl">
            <p className="text-lg font-bold opacity-80 leading-relaxed italic">
              "Crafting digital interfaces for high-growth enterprises requires a balance of speed and structural integrity."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-40">
          {PROJECTS.map((project, idx) => (
            <Link 
              to={`/works/${project.id}`}
              key={project.id} 
              className={`interactive group flex flex-col ${idx % 2 !== 0 ? 'lg:mt-48' : ''}`}
            >
              <div className="relative overflow-hidden aspect-[16/10] bg-card-bg rounded-[4rem] mb-12 shadow-[0_40px_100px_rgba(0,0,0,0.3)] border-4 border-muted/10 group-hover:border-thr/50 transition-all duration-700">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-thr/0 group-hover:bg-thr/5 transition-all duration-500 pointer-events-none"></div>
                
                {/* Overlay Badge */}
                <div className="absolute top-12 left-12 bg-main/90 backdrop-blur-md px-6 py-2 rounded-full border border-muted/20">
                   <span className="text-[10px] font-black tracking-widest text-sec uppercase">{project.category}</span>
                </div>

                {/* View Tag */}
                <div className="absolute top-12 right-12 bg-thr text-black px-8 py-3 rounded-full font-black text-xs opacity-0 -translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-2xl shadow-thr/40">
                  VIEW CASE
                </div>
                
                {/* Center Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
                  <div className="w-28 h-28 bg-thr text-black rounded-full flex items-center justify-center font-black tracking-[0.2em] text-sm border-8 border-main shadow-2xl uppercase">
                    DETAIL
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center px-8">
                <div className="flex flex-col gap-2">
                  <h3 className="text-4xl md:text-6xl font-black tracking-tighter group-hover:text-thr transition-colors uppercase">{project.title}</h3>
                </div>
                <div className="w-16 h-16 bg-muted text-main rounded-2xl flex items-center justify-center group-hover:bg-thr group-hover:scale-110 transition-all shadow-xl">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Global CTA */}
        <div className="mt-80 py-48 text-center bg-muted text-main rounded-[5rem] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] text-[20vw] font-black font-space select-none uppercase">
            SYNC.
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-space font-black mb-16 px-4 uppercase">START YOUR NEXT PROJECT?</h2>
            <Link to="/contact" className="interactive text-6xl md:text-[11rem] font-space font-black text-transparent hover:text-thr transition-all tracking-tighter uppercase" style={{ WebkitTextStroke: '2px var(--bg-color)' }}>
              LET'S BUILD.
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
