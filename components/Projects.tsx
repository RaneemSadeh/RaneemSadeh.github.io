import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="work" className="py-24 bg-[#1C1D20] text-white px-4 md:px-20">
      <div className="mb-16 border-b border-gray-700 pb-8 flex justify-between items-end">
        <h2 className="text-6xl md:text-8xl font-display uppercase">Recent Work</h2>
        <span className="text-gray-400 hidden md:inline-block">Selected Projects 2023-2025</span>
      </div>

      <div className="flex flex-col">
        {PROJECTS.map((project, index) => (
          <div 
            key={index}
            className="group relative border-t border-gray-800 py-12 md:py-20 transition-all duration-300 hover:opacity-100 opacity-80 hover:px-4 cursor-pointer"
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="flex flex-col md:flex-row justify-between items-baseline md:items-center relative z-10">
                <h3 className="text-4xl md:text-6xl font-light transition-transform duration-500 group-hover:-translate-x-2">
                    {project.title}
                </h3>
                <div className="mt-4 md:mt-0 flex flex-col md:items-end transition-transform duration-500 group-hover:translate-x-2">
                    <span className="text-lg md:text-xl text-gray-400 mb-1">{project.category}</span>
                    <span className="text-sm text-gray-500">{project.description}</span>
                </div>
            </div>

            {/* Hover Image Effect - visible only on large screens usually */}
            <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                    opacity: hoveredProject === index ? 1 : 0,
                    scale: hoveredProject === index ? 1 : 0.8,
                    x: hoveredProject === index ? 0 : -50,
                    rotate: hoveredProject === index ? -5 : 0
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="hidden md:block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[400px] h-[250px] z-0 overflow-hidden rounded-lg pointer-events-auto"
            >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </motion.a>
          </div>
        ))}
      </div>
      
      <div className="mt-16 flex justify-center">
         <button className="border border-white/30 rounded-full px-8 py-4 uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
            More work on GitHub
         </button>
      </div>
    </section>
  );
};

export default Projects;
