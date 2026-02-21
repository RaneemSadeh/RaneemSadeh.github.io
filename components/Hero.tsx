import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div ref={container} className="h-screen overflow-hidden bg-[#1C1D20] relative flex flex-col justify-end pb-12 text-white">
      <motion.div style={{ y }} className="absolute top-0 left-0 w-full h-full z-0">
        {/* Background Image */}
        <img
          src="/background.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
      </motion.div>

      <div className="relative z-10 w-full">
        <div className="flex justify-between items-end mb-10 px-8 md:px-20">
          <h2 className="text-2xl md:text-3xl font-light tracking-wide">
            AI Engineer &<br />GenAI Specialist
          </h2>
          <div className="hidden md:flex items-center gap-2 animate-bounce">
            <ArrowDownRight size={32} />
            <span className="uppercase text-sm tracking-widest">Scroll Down</span>
          </div>
        </div>

        <div className="border-t border-white/30 pt-4 overflow-hidden w-full">
          <motion.h1
            animate={{ x: ['0%', '-100.33%'] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
            className="text-[14vw] leading-[0.85] uppercase text-white whitespace-nowrap tracking-tight"
          >
            <span style={{ fontFamily: 'Karina, serif', fontWeight: 400 }}>
              - Raneem Sa'deh - Raneem Sa'deh - Raneem Sa'deh - Raneem Sa'deh -
            </span>
          </motion.h1>
          <div className="flex justify-start mt-4 px-8 md:px-20 text-lg md:text-xl font-light">
            <div className="inline-flex items-center gap-3 bg-black/40 backdrop-blur-sm rounded-full pl-6 pr-8 py-3 border border-white/20">
              <span className="text-white font-normal">Located in Amman, Jordan</span>
              <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center">
                <Globe size={24} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
