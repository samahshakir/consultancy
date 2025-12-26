
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2048" 
          className="w-full h-full object-cover"
          alt="Architectural background"
        />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center md:text-right flex flex-col items-center md:items-start">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-4xl">
          نصمم المستقبل برؤية <span className="text-amber-500">هندسية</span> رائدة
        </h1>
        <p className="text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed">
          مكتب وسام البناء للإستشارات الهندسية، شريككم الموثوق في رحلة البناء والتصميم بتقديم حلول مبتكرة تجمع بين الإبداع المعماري والمتانة الإنشائية.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#services" className="bg-amber-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-700 transition-all flex items-center justify-center gap-2 group">
            استكشف خدماتنا
            <svg className="w-5 h-5 group-hover:translate-x-[-4px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </a>
          <a href="#projects" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all">
            شاهد أعمالنا
          </a>
        </div>
      </div>

      {/* Floating stats box */}
      <div className="absolute bottom-10 right-6 left-6 md:right-auto md:left-24 bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-2xl flex gap-12 border border-white/40 hidden lg:flex">
        <div className="text-center">
          <div className="text-3xl font-bold text-slate-900">150+</div>
          <div className="text-sm text-slate-500">مشروع منفذ</div>
        </div>
        <div className="w-px h-12 bg-slate-200"></div>
        <div className="text-center">
          <div className="text-3xl font-bold text-slate-900">12</div>
          <div className="text-sm text-slate-500">سنة خبرة</div>
        </div>
        <div className="w-px h-12 bg-slate-200"></div>
        <div className="text-center">
          <div className="text-3xl font-bold text-slate-900">98%</div>
          <div className="text-sm text-slate-500">رضا العملاء</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
