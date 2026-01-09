import { LucideIcon } from 'lucide-react';

export interface Pillar {
  id: string;
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
}

export interface Solution {
  id: string;
  model: string;
  capacity: string;
  description: string;
  features: string[];
  environment: string;
}

export interface UseCase {
  id: string;
  title: string;
  statement: string;
  metric: string;
  image: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export interface Partner {
  name: string;
  logo: string; // Placeholder text for logo
}