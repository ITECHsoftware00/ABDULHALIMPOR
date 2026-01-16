
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-4 bg-main">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-space font-bold mb-6">Transforming ideas into exceptional digital experiences</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-sec/10">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className={`p-10 md:p-16 flex flex-col justify-between aspect-square group hover:bg-sec transition-colors duration-500 cursor-pointer ${index !== 2 ? 'lg:border-r border-sec/10' : ''} ${index !== 0 ? 'border-t lg:border-t-0 border-sec/10' : ''}`}
            >
              <div className="flex justify-between items-start">
                <div className="w-20 h-20 bg-thr rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                   {service.icon === 'code' && <svg className="w-10 h-10 text-sec" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}
                   {service.icon === 'design' && <svg className="w-10 h-10 text-sec" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                   {service.icon === 'cloud' && <svg className="w-10 h-10 text-sec" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>}
                </div>
                <span className="text-2xl font-light opacity-30 group-hover:text-white/30 transition-colors">{service.number}</span>
              </div>
              
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-white transition-colors">{service.title}</h3>
                <div className="h-px w-full bg-sec/10 group-hover:bg-white/10 mb-6 transition-colors"></div>
                <p className="text-lg opacity-60 group-hover:text-white/60 group-hover:opacity-100 transition-all">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
