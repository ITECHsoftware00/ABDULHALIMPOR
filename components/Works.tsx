import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { PortfolioGallery } from './ui/portfolio-gallery';

const Works: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen py-32 bg-main text-sec relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-16 border-b-4 border-muted/10 pb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-thr font-space font-black tracking-[0.5em] uppercase text-sm block mb-6">Recent Deployments</span>
            <h1 className="text-6xl md:text-[10rem] font-space font-black tracking-tighter leading-[0.8]">
              SELECTED <br /> <span className="text-thr italic">SOLUTIONS.</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md bg-muted text-main p-10 rounded-[3rem] shadow-2xl"
          >
            <p className="text-lg font-bold opacity-80 leading-relaxed italic">
              "Crafting digital interfaces for high-growth enterprises requires a balance of speed and structural integrity."
            </p>
          </motion.div>
        </div>
      </div>

      {/* Integrated shadcn-like Portfolio Gallery Component */}
      <PortfolioGallery
        title="Browse my library"
        archiveButton={{ text: "Start a project", href: "/contact" }}
        images={PROJECTS.map(p => ({
          src: p.image,
          alt: p.category,
          title: p.title,
        }))}
        onImageClick={(index) => {
          navigate(`/works/${PROJECTS[index].id}`);
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-20">
        {/* Global CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-40 mb-20 py-48 text-center bg-muted text-main rounded-[5rem] relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] text-[20vw] font-black font-space select-none uppercase">
            SYNC.
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-space font-black mb-16 px-4 uppercase">START YOUR NEXT PROJECT?</h2>
            <Link to="/contact" className="interactive text-6xl md:text-[11rem] font-space font-black text-transparent hover:text-thr transition-all tracking-tighter uppercase" style={{ WebkitTextStroke: '2px var(--bg-color)' }}>
              LET'S BUILD.
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Works;
