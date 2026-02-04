
import { Project, Service } from './types';

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'Kennismaking',
    description: 'We bespreken uw wensen, ideeën en de mogelijkheden op locatie or in onze werkplaats.'
  },
  {
    id: 2,
    title: 'Ontwerp & Offerte',
    description: 'U ontvangt een gedetailleerd voorstel inclusief materiaalgebruik en een heldere prijsopgave.'
  },
  {
    // Fix: Corrected property names 'title' and 'description' for step 3
    id: 3,
    title: 'Realisatie',
    description: 'Vakmanschap in actie. Wij vervaardigen uw interieur met precisie in eigen beheer.'
  },
  {
    id: 4,
    title: 'Oplevering',
    description: 'Nette montage ter plaatse en een gezamenlijke controle voor een perfect eindresultaat.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'keukens',
    title: 'Maatwerk Keukens',
    description: 'Het hart van de woning. Wij ontwerpen en bouwen keukens die perfect aansluiten bij uw kookwensen en de architectuur van uw huis.',
    icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'
  },
  {
    id: 'kasten',
    title: 'Kastenwanden & Interieur',
    description: 'Van inloopkasten tot minimalistische tv-meubels. Wij creëren rust en eenheid door middel van slimme opbergoplossingen.',
    icon: 'M19 11H5m14 0a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m14 0V9a2 2 0 0 0-2-2M5 11V9a2 2 0 0 1 2-2m0 0V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M7 7h10'
  },
  {
    id: 'projecten',
    title: 'Complete Projecten',
    description: 'Totaaloplossingen voor zowel particuliere als zakelijke klanten. Wij coördineren de gehele inrichting van A tot Z.',
    icon: 'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2 4-4'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Moderne Eiken Keuken',
    category: 'Particuliere Keuken',
    material: 'Massief Eiken & Marmer',
    location: 'Woerden',
    date: 'Januari 2024',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Minimalistische Walk-in Closet',
    category: 'Kastenwand',
    material: 'Lichtgrijs Melamine & Messing',
    location: 'Utrecht',
    date: 'November 2023',
    imageUrl: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Design Receptiebalie',
    category: 'Zakelijk Project',
    material: 'HPL & Led-verlichting',
    location: 'Amsterdam',
    date: 'September 2023',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Badkamermeubel Notenhout',
    category: 'Interieur Project',
    material: 'Amerikaans Notenhout',
    location: 'Gouda',
    date: 'Maart 2024',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '5',
    title: 'Scandinavisch Kantoorkeuken',
    category: 'Zakelijk Project',
    material: 'Berken Multiplex',
    location: 'Woerden',
    date: 'Februari 2024',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6191dae10c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '6',
    title: 'Zwevend TV-Meubel',
    category: 'Meubel op Maat',
    material: 'Matte Lak & Eiken Accent',
    location: 'Nieuwegein',
    date: 'Oktober 2023',
    imageUrl: 'https://images.unsplash.com/photo-1593060549925-50284489b4f7?q=80&w=1200&auto=format&fit=crop'
  }
];
