
import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 text-center">
      <div className="max-w-3xl mx-auto mb-16 md:mb-20">
        <span className="text-[10px] font-bold text-[#A9AEB3] uppercase tracking-[0.3em] mb-3 block">Onze Aanpak</span>
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-4 md:mb-6">Heldere Werkwijze</h2>
        <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
          Wij houden van korte lijnen en een transparant proces. Zo weet u precies waar u aan toe bent, van het eerste gesprek tot de laatste schroef.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 text-left">
        {PROCESS_STEPS.map((step) => (
          <div key={step.id} className="relative">
            <div className="text-4xl md:text-5xl font-bold text-gray-50 mb-4 md:mb-6 absolute -top-6 -left-2 z-0">0{step.id}</div>
            <div className="relative z-10 pt-2">
              <h3 className="text-sm md:text-base font-bold uppercase tracking-tight mb-3 text-[#2D3E40]">{step.title}</h3>
              <p className="text-[11px] md:text-xs text-gray-500 leading-6 font-light">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
