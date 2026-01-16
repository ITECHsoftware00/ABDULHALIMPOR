
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS } from '../constants';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) return <Navigate to="/works" />;

  return (
    <div className="min-h-screen bg-main text-sec pt-32 pb-24 px-6 md:px-20 relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-thr/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <Link to="/works" className="inline-flex items-center gap-2 text-thr font-black mb-12 group hover:gap-4 transition-all">
          <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          BACK TO WORKS
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="flex flex-col gap-10">
            <div>
              <span className="text-thr font-space font-black tracking-[0.4em] uppercase text-sm block mb-4">{project.category}</span>
              <h1 className="text-6xl md:text-8xl font-space font-black tracking-tighter leading-[0.9] uppercase">{project.title}</h1>
            </div>

            <p className="text-2xl md:text-3xl font-medium leading-relaxed opacity-80 border-l-4 border-thr pl-8">
              {project.fullDescription}
            </p>

            {project.clientLink && (
              <a href={project.clientLink} target="_blank" rel="noopener noreferrer" className="interactive bg-thr text-black px-10 py-5 rounded-2xl font-black text-xl self-start hover:scale-105 transition-all shadow-xl shadow-thr/20">
                VISIT LIVE SITE
              </a>
            )}
          </div>

          <div className="relative group rounded-[3rem] overflow-hidden border-4 border-muted/10 shadow-2xl">
            <img src={project.image} alt={project.title} className="w-full aspect-[4/5] object-cover" />
          </div>
        </div>

        <div className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="bg-card-bg p-12 md:p-16 rounded-[4rem] border-2 border-muted/5 shadow-xl">
            <h3 className="text-3xl font-black mb-10 text-thr tracking-tighter uppercase">Development Process</h3>
            <ul className="flex flex-col gap-6">
              {project.features?.map((feature, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-thr rounded-full mt-2 shrink-0"></div>
                  <span className="text-xl font-bold opacity-70">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-12">
            <h3 className="text-3xl font-black text-thr tracking-tighter uppercase">Tech Stack</h3>
            <div className="flex flex-wrap gap-4">
              {project.techStack?.map((tech, i) => (
                <span key={i} className="px-8 py-4 bg-muted/10 border-2 border-muted/20 rounded-full text-lg font-black tracking-wider uppercase">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Next Project Link */}
        <div className="mt-40 pt-24 border-t-2 border-muted/10 text-center">
          <h4 className="text-sm font-black opacity-30 tracking-[0.5em] mb-12 uppercase">Discover More</h4>
          <Link to="/works" className="text-5xl md:text-9xl font-space font-black text-transparent hover:text-thr transition-all" style={{ WebkitTextStroke: '2px var(--text-color)' }}>
            NEXT PROJECT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
