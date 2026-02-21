import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

const ExperienceTimeline: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-4 bg-sec text-main overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-space font-bold mb-20 text-center"
        >
          Explore my journey and the technologies that define my craft.
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-main/10 hidden md:block"></div>

          <div className="flex flex-col gap-24 md:gap-40">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                key={exp.id}
                className={`flex flex-col md:flex-row items-center w-full group ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content Side */}
                <div className={`w-full md:w-[45%] ${idx % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                  <h3 className="text-4xl md:text-6xl font-black text-main/20 mb-4 group-hover:text-main transition-colors duration-500 cursor-default uppercase">
                    {exp.company}
                  </h3>
                  <h4 className="text-xl md:text-3xl font-black mb-4 text-thr uppercase tracking-widest">
                    {exp.role}
                  </h4>
                  <p className="text-lg opacity-80 mb-4 font-bold">{exp.description}</p>
                  <span className="text-sm font-black uppercase tracking-[0.4em] opacity-40">{exp.period}</span>
                </div>

                {/* Center Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (idx * 0.2), type: "spring" }}
                  className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-thr rounded-full border-4 border-sec shadow-[0_0_30px_#d4f534] z-10"
                ></motion.div>

                {/* Empty Side for Spacer */}
                <div className="hidden md:block w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
