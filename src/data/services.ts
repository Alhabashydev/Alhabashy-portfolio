import { Bot, Brush, Code2, Globe, LayoutDashboard, ShoppingBag, Workflow } from 'lucide-react';
import type { Service } from '../types';

export const services: Service[] = [
  {
    title: 'Portfolio Websites',
    description: 'Modern personal websites with clean branding, smooth scroll, animation, and responsive layout.',
    features: ['Personal branding', 'Animated sections', 'Responsive design'],
    icon: Globe
  },
  {
    title: 'FiveM Websites',
    description: 'Server websites with status, teams, jobs, changelogs, guides, rules, and support links.',
    features: ['Server status UI', 'Jobs and team pages', 'Discord CTA'],
    icon: Workflow
  },
  {
    title: 'Admin Dashboards',
    description: 'Clean control panels for staff tools, logs, actions, filters, stats, and management workflows.',
    features: ['Tables and filters', 'Action modals', 'Log panels'],
    icon: LayoutDashboard
  },
  {
    title: 'Discord Bots',
    description: 'Discord systems for moderation, tickets, suggestions, logs, permissions, and server utilities.',
    features: ['Slash commands', 'Embeds and logs', 'Role permissions'],
    icon: Bot
  },
  {
    title: 'Script Store Websites',
    description: 'Product showcase stores with categories, requirements, docs links, features, and cart-ready layout.',
    features: ['Product cards', 'Categories', 'Docs links'],
    icon: ShoppingBag
  },
  {
    title: 'Full-Stack Web Apps',
    description: 'Frontend and backend systems connected through APIs, databases, auth-ready structure, and clean UX.',
    features: ['React frontend', 'Node APIs', 'Database flow'],
    icon: Code2
  },
  {
    title: 'UI/UX Redesigns',
    description: 'Visual upgrades for old interfaces, dashboards, stores, FiveM NUI menus, and landing pages.',
    features: ['Cleaner layout', 'Better contrast', 'Smooth animations'],
    icon: Brush
  }
];
