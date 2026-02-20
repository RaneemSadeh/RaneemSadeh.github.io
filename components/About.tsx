import React from 'react';
import { EXPERIENCE, SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#1C1D20] text-white px-4 md:px-20">
        
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Intro / Bio */}
        <div className="lg:col-span-8">
            <h3 className="text-2xl md:text-4xl leading-relaxed font-light text-gray-200 mb-12">
                I help companies integrate <span className="text-white font-normal">Artificial Intelligence</span> into their workflows. 
                With a deep focus on <span className="text-white font-normal">GenAI, RAG Architectures</span>, and Data Engineering, 
                I build scalable solutions that solve real business problems.
            </h3>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-8">
             <div className="border-b border-gray-700 pb-2">
                <span className="uppercase text-xs tracking-widest text-gray-500">Education</span>
                <p className="mt-2 text-lg">BSc in AI & Data Science</p>
                <p className="text-gray-400">Al-Hussein Technical University</p>
                <p className="text-gray-500 text-sm">2022 - 2026 | GPA 3.8</p>
             </div>
             <div className="border-b border-gray-700 pb-2">
                <span className="uppercase text-xs tracking-widest text-gray-500">Publications</span>
                <p className="mt-2 text-lg">IEEE (2024)</p>
                <p className="text-gray-400">BiaEye Waste Monitoring</p>
             </div>
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-8 border-b border-gray-800 pb-4">Experience</h4>
            <div className="flex flex-col gap-12">
                {EXPERIENCE.map((job, i) => (
                    <div key={i} className="group">
                        <h5 className="text-2xl font-normal mb-1">{job.role}</h5>
                        <div className="flex justify-between items-center text-gray-400 mb-4">
                            <span>{job.company}</span>
                            <span className="text-sm border border-gray-700 px-2 py-1 rounded-full">{job.period}</span>
                        </div>
                        <ul className="list-disc list-inside text-gray-500 text-sm space-y-1 opacity-70 group-hover:opacity-100 transition-opacity">
                            {job.description.map((desc, idx) => (
                                <li key={idx}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
          </div>

          {/* Skills */}
          <div>
             <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-8 border-b border-gray-800 pb-4">Technical Stack</h4>
             <div className="flex flex-col gap-8">
                {SKILLS.map((skillGroup, i) => (
                    <div key={i}>
                        <span className="block text-gray-400 mb-2 font-mono text-sm">{skillGroup.category}</span>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((skill, idx) => (
                                <span key={idx} className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition-colors duration-300 cursor-default">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
             </div>
          </div>
      </div>

    </section>
  );
};

export default About;
