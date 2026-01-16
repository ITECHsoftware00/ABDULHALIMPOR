
import React from 'react';
import { EXPERIENCES } from '../constants';

const ExperienceTimeline: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-4 bg-sec text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-space font-bold mb-20 text-center">
          Explore my journey and the technologies that define my craft.
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block"></div>

          <div className="flex flex-col gap-24 md:gap-40">
            {EXPERIENCES.map((exp, idx) => (
              <div key={exp.id} className={`flex flex-col md:flex-row items-center w-full ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content Side */}
                <div className={`w-full md:w-[45%] ${idx % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                  <h3 className="text-4xl md:text-6xl font-bold text-white/20 mb-4 group-hover:text-white transition-colors cursor-default">
                    {exp.company}
                  </h3>
                  <h4 className="text-xl md:text-3xl font-medium mb-4 text-thr">
                    {exp.role}
                  </h4>
                  <p className="text-lg opacity-60 mb-4">{exp.description}</p>
                  <span className="text-sm font-space uppercase tracking-widest opacity-40">{exp.period}</span>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-thr rounded-full shadow-[0_0_15px_#d4f534] z-10"></div>

                {/* Empty Side for Spacer */}
                <div className="hidden md:block w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
