
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-right">
            <h2 className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-3">سجل الإنجازات</h2>
            <h3 className="text-4xl font-bold text-slate-900">مشاريع نفخر بها</h3>
          </div>
          <div className="flex gap-4">
             <button className="px-6 py-2 rounded-full border border-slate-200 text-slate-600 hover:border-amber-600 hover:text-amber-600 transition-all font-medium">الكل</button>
             <button className="px-6 py-2 rounded-full border border-slate-200 text-slate-600 hover:border-amber-600 hover:text-amber-600 transition-all font-medium">سكني</button>
             <button className="px-6 py-2 rounded-full border border-slate-200 text-slate-600 hover:border-amber-600 hover:text-amber-600 transition-all font-medium">تجاري</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-3xl bg-white shadow-xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-amber-400 text-sm font-bold mb-2 uppercase tracking-wide">{project.category}</span>
                <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                <p className="text-slate-300 text-sm mb-6 line-clamp-2">{project.description}</p>
                <button className="w-fit bg-white text-slate-900 px-6 py-2 rounded-lg font-bold hover:bg-amber-500 hover:text-white transition-all">تفاصيل المشروع</button>
              </div>
              <div className="p-6 block group-hover:hidden transition-all duration-300">
                 <span className="text-amber-600 text-xs font-bold uppercase mb-1 block">{project.category}</span>
                 <h4 className="text-lg font-bold text-slate-900">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="border-2 border-slate-900 text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-slate-900 hover:text-white transition-all">
            مشاهدة جميع المشاريع
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
