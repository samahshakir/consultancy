
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-3">ماذا نقدم</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">خدماتنا الهندسية المتكاملة</h3>
          <div className="w-20 h-1.5 bg-amber-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group p-8 bg-gray-50 rounded-3xl hover:bg-slate-900 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                <svg className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={service.icon}></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors">{service.title}</h4>
              <p className="text-slate-600 group-hover:text-slate-300 transition-colors leading-relaxed">
                {service.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-amber-600 font-bold opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                <span>اكتشف المزيد</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
