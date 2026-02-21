
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CoreSkillsTimeline } from './ui/CoreSkillsTimeline';

const AboutSection: React.FC = () => {
  return (
    <section className="min-h-screen py-32 md:py-64 px-6 md:px-20 bg-main text-sec relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <span className="text-thr font-space font-black tracking-[0.5em] uppercase text-sm block mb-6">Expert Background</span>
            <h2 className="text-7xl md:text-[11rem] font-space font-black tracking-tighter leading-[0.8] mb-12 uppercase">
              THE <span className="text-thr italic">ENGINEER.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-muted/10 border-2 border-muted/30 p-12 rounded-[4rem] max-w-sm hidden xl:block shadow-2xl"
          >
            <p className="text-lg font-black text-thr leading-relaxed">
              "Every pixel is a decision. Every line of code is an investment in your success."
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-14"
          >
            <p className="text-4xl md:text-6xl font-black leading-[1] tracking-tight text-sec">
              I am Abdulhalim — architect of <span className="text-thr">intelligent</span>, scalable digital infrastructure.
            </p>
            <p className="text-2xl opacity-70 leading-relaxed max-w-xl font-medium border-l-8 border-muted/20 pl-10">
              I approach development with discipline and strategic thinking. I study the business first, then I design the architecture, and then I execute with precision. I don’t build temporary solutions. I build systems meant to last.
            </p>

            <div className="flex flex-wrap gap-8 mt-8">
              <Link to="/contact" className="interactive bg-thr text-black px-14 py-6 rounded-3xl font-black text-2xl hover:scale-105 transition-all shadow-2xl shadow-thr/40">
                HIRE ME
              </Link>
              <Link to="/cv" className="interactive border-4 border-muted px-14 py-6 rounded-3xl font-black text-2xl hover:bg-sec hover:text-main transition-all flex items-center justify-center">
                VIEW CV
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <FeatureCard delay={0.1} number="01" title="Security First" desc="Architecting for absolute data integrity and compliance." />
            <FeatureCard delay={0.2} number="02" title="Speed & Scale" desc="Zero-latency infrastructures that never slow down." />
            <FeatureCard delay={0.3} number="03" title="Design Legacy" desc="Building interfaces that stay modern for years." />
            <FeatureCard delay={0.4} number="04" title="Strategic Code" desc="Technical debt prevention through clean patterns." />
          </div>
        </div>

        <div className="mt-64 pt-32 border-t-4 border-sec/5 grid grid-cols-2 lg:grid-cols-4 gap-20">
          <Stat value="04+" label="Years Performance" />
          <Stat value="30+" label="Global Brands" />
          <Stat value="50+" label="Live Deployments" />
          <Stat value="24/7" label="System Uptime" />
        </div>
      </div>

      <div className="mt-32 w-full border-t border-muted/10">
        <CoreSkillsTimeline />
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ number: string; title: string; desc: string; delay?: number }> = ({ number, title, desc, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-card-bg p-14 rounded-[4.5rem] border-2 border-muted/10 hover:border-thr/50 transition-all duration-700 group shadow-[0_30px_70px_rgba(0,0,0,0.1)]"
  >
    <span className="text-thr font-space font-black text-2xl mb-8 block opacity-20 group-hover:opacity-100 transition-all">{number}</span>
    <h3 className="text-3xl font-black mb-6 group-hover:text-thr transition-colors">{title}</h3>
    <p className="opacity-60 text-lg font-bold leading-relaxed">{desc}</p>
  </motion.div>
);

const Stat: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center lg:items-start group"
  >
    <span className="text-7xl md:text-9xl font-space font-black text-thr mb-6 tracking-tighter group-hover:scale-110 transition-transform origin-left">{value}</span>
    <span className="text-xs uppercase tracking-[0.6em] opacity-30 font-black group-hover:opacity-100 transition-opacity">{label}</span>
  </motion.div>
);

export default AboutSection;
