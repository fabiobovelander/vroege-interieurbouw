
import React from 'react';

const Logo: React.FC = () => {
  // We gebruiken een direct pad omdat browsers PNG-bestanden niet als JS-modules kunnen importeren zonder build-tool.
  const logoPath = './assets/logo-vroege.png';

  return (
    <div className="flex items-center gap-3">
      <img 
        src={logoPath} 
        alt="Vroege interieurbouw" 
        className="h-8 md:h-10 w-auto object-contain"
        onError={(e) => {
          // Fallback voor als het logo-bestand (nog) niet op de server staat
          (e.currentTarget as HTMLImageElement).style.display = 'none';
          (e.currentTarget.parentElement as HTMLElement).innerHTML = '<span class="text-logo-dark font-bold text-lg tracking-tighter uppercase">VROEGE</span>';
        }}
      />
    </div>
  );
};

export default Logo;
