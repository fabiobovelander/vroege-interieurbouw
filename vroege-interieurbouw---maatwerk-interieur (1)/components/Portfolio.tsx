
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('Alle');
  const categories = ['Alle', ...new Set(PROJECTS.map(p => p.category))];

  const filteredProjects = filter === 'Alle' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6 md:gap-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 uppercase tracking-tighter">Portfolio</h2>
          <p className="text-[9px] md:text-[11px] text-gray-500 uppercase tracking-[0.3em]">Excellence in Craftsmanship</p>
        </div>
        
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[9px] md:text-[10px] uppercase font-bold tracking-widest transition-all pb-1 border-b-2 ${
                filter === cat 
                ? 'border-[#2D3E40] text-[#2D3E40]' 
                : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group relative bg-white overflow-hidden aspect-square sm:aspect-auto sm:h-80 lg:h-96">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              loading="lazy"
            />
            {/* Overlay - zichtbaar op hover (desktop) of tap (mobiel) via group-hover */}
            <div className="absolute inset-0 bg-[#2D3E40]/90 lg:bg-[#2D3E40]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6 md:p-8">
              <span className="text-[8px] md:text-[9px] text-[#A9AEB3] font-bold uppercase tracking-[0.2em] mb-3">{project.category}</span>
              <h3 className="text-white text-sm md:text-lg font-bold uppercase mb-2 leading-tight">{project.title}</h3>
              <div className="w-8 h-0.5 bg-white mb-4"></div>
              <div className="text-[9px] md:text-[10px] text-gray-300 space-y-1 uppercase tracking-wider font-light">
                <p>{project.material}</p>
                <p>{project.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
