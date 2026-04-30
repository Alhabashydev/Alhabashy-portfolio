import type { ComponentType } from 'react';

export type IconComponent = ComponentType<{ className?: string }>;

export interface Skill {
  title: string;
  description: string;
  icon: IconComponent;
}

export interface TechnologyItem {
  name: string;
  icon?: IconComponent;
  iconPath?: string;
}

export interface TechnologyCategory {
  id: string;
  title: string;
  description: string;
  items: TechnologyItem[];
}

export interface Service {
  title: string;
  description: string;
  features: string[];
  icon: IconComponent;
}

export type ProjectCategory = 'React' | 'FiveM' | 'Backend' | 'Discord Bots' | 'Dashboards' | 'UI/UX';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  categories: ProjectCategory[];
  demoUrl: string;
  sourceUrl: string;
}

export interface TimelineItem {
  title: string;
  description: string;
}

export interface WhyItem {
  title: string;
  description: string;
  icon: IconComponent;
}
