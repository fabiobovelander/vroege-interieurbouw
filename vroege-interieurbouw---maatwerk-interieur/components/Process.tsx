
import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <div className="container mx-auto px-6 text-center">
      <div className="max-w-3xl mx-auto mb-20">
        <span className="text-[10px] font-bold text-[#A9AEB3] uppercase tracking-[0.3em] mb-4 block">Onze Aanpak</span>
        <h2 className="text-3xl font-bold uppercase tracking-tighter mb-6">Heldere Werkwijze</h2>
        <p className="text-sm text-gray-500 font-light leading-relaxed">
          Wij houden van korte lijnen en een transparant proces. Zo weet u precies waar u aan toe bent, van het eerste gesprek tot de laatste schroef.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-12 text-left">
        {PROCESS_STEPS.map((step) => (
          <div key={step.id} className="relative">
            <div className="text-5xl font-bold text-gray-50 mb-6 absolute -top-8 -left-2 z-0">0{step.id}</div>
            <div className="relative z-10">
              <h3 className="text-base font-bold uppercase tracking-tight mb-4 text-[#2D3E40]">{step.title}</h3>
              <p className="text-xs text-gray-500 leading-6 font-light">
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
