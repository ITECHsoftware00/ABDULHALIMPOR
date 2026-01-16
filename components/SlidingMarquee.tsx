
import React from 'react';

const SlidingMarquee: React.FC = () => {
  return (
    <div className="py-24 bg-sec overflow-hidden relative">
      <div className="rotate-2 scale-110">
        <MarqueeRow text="AVAILABLE FOR NEW PROJECTS • FULL STACK SOLUTIONS • UI/UX EXCELLENCE • " />
      </div>
      <div className="-rotate-2 scale-110 mt-8">
        <MarqueeRow text="NEXT.JS • REACT • TYPESCRIPT • TAILWIND • NODE.JS • THREE.JS • DOCKER • " />
      </div>
    </div>
  );
};

const MarqueeRow: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex whitespace-nowrap overflow-hidden py-4 border-y border-white/5">
      <div className="flex shrink-0 animate-marquee items-center">
        <span className="text-6xl md:text-8xl font-black text-transparent stroke-white stroke-1 opacity-20 hover:opacity-100 transition-opacity cursor-default pr-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
          {text}{text}
        </span>
      </div>
      <div className="flex shrink-0 animate-marquee items-center">
        <span className="text-6xl md:text-8xl font-black text-transparent stroke-white stroke-1 opacity-20 hover:opacity-100 transition-opacity cursor-default pr-8" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
          {text}{text}
        </span>
      </div>
    </div>
  );
};

export default SlidingMarquee;
