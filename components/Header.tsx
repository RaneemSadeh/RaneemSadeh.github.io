import React from 'react';
import Magnetic from './Magnetic';

const Header: React.FC = () => {
  return (
    <div className="fixed top-0 right-0 p-8 z-50 flex items-center justify-end text-white">
      <div className="flex gap-6 items-center">
        <Magnetic>
          <a href="#work" className="group flex flex-col relative overflow-hidden cursor-pointer text-white">
            <span className="group-hover:-translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]">Work</span>
            <span className="absolute top-full group-hover:-translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]">Work</span>
          </a>
        </Magnetic>
        <Magnetic>
          <a href="#about" className="group flex flex-col relative overflow-hidden cursor-pointer text-white">
             <span className="group-hover:-translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]">About</span>
            <span className="absolute top-full group-hover:-translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]">About</span>
          </a>
        </Magnetic>
        <Magnetic>
          <a href="#contact" className="group flex flex-col relative overflow-hidden cursor-pointer text-white">
             <span className="group-hover:-translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]">Contact</span>
            <span className="absolute top-full group-hover:-translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]">Contact</span>
          </a>
        </Magnetic>
      </div>
    </div>
  );
};

export default Header;
