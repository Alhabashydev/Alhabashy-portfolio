import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'FiveM Server Website',
    description: 'A modern roleplay server website with server status, team, jobs, changelog, support, and public information.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    categories: ['React', 'FiveM', 'UI/UX'],
    demoUrl: '#',
    sourceUrl: '#'
  },
  {
    title: 'Admin Dashboard',
    description: 'A clean dashboard for managing players, server actions, logs, and staff tools.',
    tech: ['React', 'Node.js', 'Express', 'SQL'],
    categories: ['React', 'Backend', 'Dashboards'],
    demoUrl: '#',
    sourceUrl: '#'
  },
  {
    title: 'Script Store Website',
    description: 'A product showcase website for scripts with categories, requirements, features, documentation links, and cart-ready layout.',
    tech: ['React', 'Vite', 'Tailwind'],
    categories: ['React', 'UI/UX'],
    demoUrl: '#',
    sourceUrl: '#'
  },
  {
    title: 'Discord Control Bot',
    description: 'A Discord bot concept for server management, moderation tools, logs, and role-based permissions.',
    tech: ['Node.js', 'Discord.js', 'MySQL'],
    categories: ['Backend', 'Discord Bots'],
    demoUrl: '#',
    sourceUrl: '#'
  },
  {
    title: 'Animated Portfolio',
    description: 'A smooth 3D animated portfolio focused on performance, clean UI, and personal branding.',
    tech: ['React', 'Three.js', 'Framer Motion'],
    categories: ['React', 'UI/UX'],
    demoUrl: '#',
    sourceUrl: '#'
  }
];

export const projectFilters = ['All', 'React', 'FiveM', 'Backend', 'Discord Bots', 'Dashboards', 'UI/UX'] as const;
