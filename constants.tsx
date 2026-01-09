import { Brain, Handshake, Wrench } from 'lucide-react';
import { Pillar, UseCase, ProcessStep, Solution } from './types';

export const NAV_LINKS = [
  { label: 'Approach', href: '#approach' },
  { label: 'Technology', href: '#technology' },
  { label: 'Impact', href: '#impact' },
  { label: 'Contact', href: '#contact' },
];

export const PILLARS: Pillar[] = [
  {
    id: 'consultant',
    title: 'Strategic Consultant',
    description: 'We analyze your waste streams to design compliant, efficient infrastructure.',
    items: ['Comprehensive Waste Audits', 'Capacity Planning', 'Compliance Strategy'],
    icon: Brain
  },
  {
    id: 'partner',
    title: 'Solwaste Affiliate',
    description: 'Official partner for Solwaste, bringing world-class OWC technology to your facility.',
    items: ['Official Affiliate Partner', 'Solwaste Technology', 'Direct Manufacturer Access'],
    icon: Handshake
  },
  {
    id: 'implementation',
    title: 'Implementation Partner',
    description: 'End-to-end deployment, civil work integration, and lifecycle support.',
    items: ['Installation & Engineering', 'Operational Training', 'Long-term Support'],
    icon: Wrench
  }
];

// Simplified solutions to just be high-level categories
export const SOLUTIONS: Solution[] = [
  {
    id: 'decentralized',
    model: 'Decentralized Systems',
    capacity: 'Compact & Silent',
    description: 'For corporate cafeterias and boutique hotels requiring discreet operation.',
    features: ['Odorless', 'Compact Footprint'],
    environment: 'Corporate & Hospitality'
  },
  {
    id: 'centralized',
    model: 'Centralized Infrastructure',
    capacity: 'High-Volume Processing',
    description: 'Large-scale systems for residential townships and municipal integration.',
    features: ['Continuous Flow', 'Heavy Duty'],
    environment: 'Townships & Municipalities'
  },
  {
    id: 'custom',
    model: 'Bespoke Engineering',
    capacity: 'Custom Design',
    description: 'Tailored waste management workflows for complex industrial requirements.',
    features: ['Automated Conveyors', 'Integrated Shredding'],
    environment: 'Industrial & Manufacturing'
  }
];

export const USE_CASES: UseCase[] = [
  {
    id: 'corporate',
    title: 'Corporate Campuses',
    statement: 'Transforming cafeteria waste into landscape assets.',
    metric: 'Zero Waste to Landfill',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop'
  },
  {
    id: 'residential',
    title: 'Residential Communities',
    statement: 'Hygiene-first waste processing for premium townships.',
    metric: '60% Cost Reduction',
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2674&auto=format&fit=crop'
  },
  {
    id: 'institution',
    title: 'Institutions',
    statement: 'Educational sustainability infrastructure.',
    metric: '100% Regulatory Compliance',
    image: 'https://images.unsplash.com/photo-1651890053473-b25f7e1672dd?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: 'industrial',
    title: 'Industrial Facilities',
    statement: 'High-volume processing for manufacturing canteens.',
    metric: 'ESG Reporting Ready',
    image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2670&auto=format&fit=crop'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  { id: 1, title: 'Assessment', description: 'Detailed audit of waste volume and composition.' },
  { id: 2, title: 'Solution Design', description: 'Engineering the optimal machine and workflow.' },
  { id: 3, title: 'Deployment', description: 'Seamless installation and civil work integration.' },
  { id: 4, title: 'Optimization', description: 'Calibration for maximum output efficiency.' },
  { id: 5, title: 'Support', description: 'Lifecycle maintenance and reporting.' },
];