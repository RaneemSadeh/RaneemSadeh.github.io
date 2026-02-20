import React from 'react';
import Magnetic from './Magnetic';
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-[#1C1D20] text-white min-h-[80vh] flex flex-col justify-between px-4 md:px-20 py-20 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="z-10">
        <div className="border-b border-gray-700 pb-8 mb-12">
            <h2 className="text-6xl md:text-8xl font-display uppercase leading-none">
                Let's work <br /> together
            </h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-32">
            <div>
                <h4 className="uppercase text-sm text-gray-500 tracking-widest mb-6">Contact Details</h4>
                <div className="flex flex-col gap-4 text-xl font-light">
                    <a href="mailto:raneem.sadeh@gmail.com" className="hover:text-gray-400 transition-colors flex items-center gap-2">
                        <Mail size={20} /> raneem.sadeh@gmail.com
                    </a>
                    <a href="tel:+962780473652" className="hover:text-gray-400 transition-colors flex items-center gap-2">
                        <Phone size={20} /> +962 780 473 652
                    </a>
                </div>
            </div>

            <div>
                <h4 className="uppercase text-sm text-gray-500 tracking-widest mb-6">Socials</h4>
                <div className="flex flex-col gap-4 text-xl font-light">
                    <a href="https://linkedin.com/in/raneem-sadeh" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                        <Linkedin size={20} /> LinkedIn <ArrowUpRight size={16} />
                    </a>
                    <a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                        <Github size={20} /> GitHub <ArrowUpRight size={16} />
                    </a>
                </div>
            </div>
        </div>
      </div>

      <div className="flex justify-between items-end mt-20 text-gray-500 text-sm">
        <div>
            <p>2025 © Raneem Sa’deh</p>
            <p>Amman, Jordan</p>
        </div>
        <div>
            <p>Time (Local): {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Amman' })}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
