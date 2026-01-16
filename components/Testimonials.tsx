
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-20 bg-main relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="max-w-3xl">
            <span className="text-thr font-space font-black tracking-[0.5em] uppercase text-sm block mb-6">Social Proof</span>
            <h2 className="text-5xl md:text-8xl font-space font-black tracking-tighter leading-[0.9] uppercase">
              CLIENT <br /> <span className="text-thr italic">VOICES.</span>
            </h2>
          </div>
          <div className="bg-card-bg px-8 py-4 rounded-full border border-muted/20">
            <span className="text-sec font-black tracking-widest text-xs uppercase">100% Client Satisfaction</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div 
              key={testimonial.id} 
              className={`bg-card-bg p-12 rounded-[4rem] border-2 border-muted/10 relative group transition-all duration-700 hover:border-thr/40 shadow-xl ${idx === 1 ? 'lg:-translate-y-12' : ''}`}
            >
              {/* Quote Icon Background */}
              <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg className="w-24 h-24 text-thr" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3602 6 13.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 17.2091 20.2261 19 18.017 19H14.017V21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12C3.017 12.5523 2.56928 13 2.017 13H0.017C-0.535282 13 -1.017 12.5523 -1.017 12V9C-1.017 7.34315 0.326142 6 2.017 6H8.017C9.67386 6 11.017 7.34315 11.017 9V15C11.017 17.2091 9.22614 19 7.017 19H3.017V21H3.017Z" />
                </svg>
              </div>

              <div className="flex flex-col h-full justify-between gap-12 relative z-10">
                <p className="text-xl font-medium leading-relaxed italic opacity-80 group-hover:opacity-100 transition-opacity">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-thr/20 grayscale group-hover:grayscale-0 transition-all">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-sec tracking-tight uppercase">{testimonial.name}</h4>
                    <p className="text-xs font-bold text-thr tracking-widest uppercase opacity-60">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
