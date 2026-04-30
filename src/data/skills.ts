import { Code2, Server, Palette, Database, Gamepad2, Link, LayoutDashboard, Gauge } from 'lucide-react';
import type { Skill } from '../types';

export const skills: Skill[] = [
  {
    title: 'Frontend Development',
    description: 'Building clean interfaces with React, TypeScript, Tailwind, responsive layouts, and smooth motion.',
    icon: Code2
  },
  {
    title: 'Backend Development',
    description: 'Creating API-ready server logic with Node.js, Express, authentication-ready structure, and clean data flow.',
    icon: Server
  },
  {
    title: 'UI/UX Design',
    description: 'Designing premium pages, dashboards, and NUI interfaces with strong spacing, contrast, and usability.',
    icon: Palette
  },
  {
    title: 'Database Systems',
    description: 'Working with SQL, MySQL, MongoDB, JSON storage, and clean schemas for practical systems.',
    icon: Database
  },
  {
    title: 'FiveM / Lua Development',
    description: 'Building server tools, scripts, NUI menus, UI redesigns, and roleplay-ready systems.',
    icon: Gamepad2
  },
  {
    title: 'API Integration',
    description: 'Connecting frontends to real services, bot systems, dashboards, and backend endpoints.',
    icon: Link
  },
  {
    title: 'Dashboard Development',
    description: 'Creating admin panels, control centers, logs, filters, tables, stats, and clean management flows.',
    icon: LayoutDashboard
  },
  {
    title: 'Performance Optimization',
    description: 'Keeping animations smooth, bundles reasonable, assets lightweight, and layouts stable.',
    icon: Gauge
  }
];
