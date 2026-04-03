
import React from 'react';
import { motion } from 'framer-motion';

const SlidingMarquee: React.FC = () => {
  return (
    <div className="py-24 bg-sec overflow-hidden relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="rotate-2 scale-110"
      >
        <MarqueeRow text="SENIOR FULL-STACK SOLUTIONS • AI INTEGRATION • INTELLIGENT ARCHITECTURE • " />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="-rotate-2 scale-110 mt-8"
      >
        <MarqueeRow text="NEXT.JS • REACT • TYPESCRIPT • PYTHON • AI • NODE.JS • AWS • " />
      </motion.div>
    </div>
  );
};

const MarqueeRow: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex whitespace-nowrap overflow-hidden py-4 border-y border-main/10">
      <div className="flex shrink-0 animate-marquee items-center">
        <span className="text-6xl md:text-8xl font-black text-transparent opacity-20 hover:opacity-100 transition-opacity cursor-default pr-8" style={{ WebkitTextStroke: '2px var(--bg-color)' }}>
          {text}{text}
        </span>
      </div>
      <div className="flex shrink-0 animate-marquee items-center">
        <span className="text-6xl md:text-8xl font-black text-transparent opacity-20 hover:opacity-100 transition-opacity cursor-default pr-8" style={{ WebkitTextStroke: '2px var(--bg-color)' }}>
          {text}{text}
        </span>
      </div>
    </div>
  );
};

export default SlidingMarquee;
