
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
             <span className="text-white font-bold text-xl">W</span>
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-xl leading-none ${isScrolled ? 'text-slate-900' : 'text-white'}`}>وسام البناء</span>
            <span className={`text-[10px] tracking-widest uppercase opacity-80 ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}>Engineering Consulting</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className={`hover:text-amber-600 transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}>الرئيسية</a>
          <a href="#services" className={`hover:text-amber-600 transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}>خدماتنا</a>
          <a href="#projects" className={`hover:text-amber-600 transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}>مشاريعنا</a>
          <a href="#reviews" className={`hover:text-amber-600 transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}>آراء العملاء</a>
          <a href="#contact" className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-all shadow-lg hover:shadow-amber-600/20">تواصل معنا</a>
        </div>
        
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
