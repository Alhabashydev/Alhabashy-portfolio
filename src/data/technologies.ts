import {
  Box,
  Braces,
  Code2,
  Database,
  FileCode2,
  FileJson,
  Gamepad2,
  GitBranch,
  Globe2,
  LayoutDashboard,
  LockKeyhole,
  Monitor,
  MousePointer2,
  Paintbrush,
  PanelsTopLeft,
  Server,
  ShieldCheck,
  TerminalSquare,
  Workflow,
  Zap
} from 'lucide-react';
import type { TechnologyCategory } from '../types';

export const technologies: TechnologyCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    description: 'Core languages I use to build interfaces, logic, scripts, and backend systems.',
    items: [
      { name: 'JavaScript', iconPath: '/assets/icons/javascript.svg' },
      { name: 'TypeScript', iconPath: '/assets/icons/typescript.svg' },
      { name: 'HTML', icon: FileCode2 },
      { name: 'CSS', icon: PanelsTopLeft },
      { name: 'Lua', icon: Code2 },
      { name: 'Python', icon: TerminalSquare },
      { name: 'SQL', icon: Database }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend Frameworks & Libraries',
    description: 'Tools for smooth interfaces, animation-heavy pages, and modern component systems.',
    items: [
      { name: 'React', iconPath: '/assets/icons/react.svg' },
      { name: 'Next.js', iconPath: '/assets/icons/next.svg' },
      { name: 'Vite', icon: Zap },
      { name: 'Tailwind CSS', iconPath: '/assets/icons/tailwindcss.svg' },
      { name: 'Framer Motion', icon: MousePointer2 },
      { name: 'Three.js', icon: Box },
      { name: 'React Three Fiber', icon: Box }
    ]
  },
  {
    id: 'backend',
    title: 'Backend & Runtime',
    description: 'Backend foundations for APIs, dashboards, bots, auth, and scalable app logic.',
    items: [
      { name: 'Node.js', iconPath: '/assets/icons/nodejs.svg' },
      { name: 'Express.js', iconPath: '/assets/icons/express.svg' },
      { name: 'REST APIs', icon: Server },
      { name: 'API Integration', icon: Zap },
      { name: 'Authentication-ready systems', icon: LockKeyhole }
    ]
  },
  {
    id: 'databases',
    title: 'Databases',
    description: 'Data systems for dashboards, stores, bots, server tools, and persistent app features.',
    items: [
      { name: 'MySQL', iconPath: '/assets/icons/mysql.svg' },
      { name: 'MongoDB', iconPath: '/assets/icons/mongodb.svg' },
      { name: 'SQL Databases', icon: Database },
      { name: 'JSON Database / Local Data Storage', icon: FileJson }
    ]
  },
  {
    id: 'design',
    title: 'UI / UX & Design',
    description: 'Design direction for premium responsive products, dashboards, and FiveM interfaces.',
    items: [
      { name: 'Responsive Design', icon: Monitor },
      { name: 'UI/UX Redesign', icon: Paintbrush },
      { name: 'Glassmorphism', icon: ShieldCheck },
      { name: 'Dashboard UI', icon: LayoutDashboard },
      { name: 'FiveM NUI Design', icon: Gamepad2 },
      { name: 'Figma', icon: Paintbrush }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    description: 'Daily workflow tools for building, testing, version control, deployment, and integrations.',
    items: [
      { name: 'Git', iconPath: '/assets/icons/git.svg' },
      { name: 'GitHub', iconPath: '/assets/icons/github.svg' },
      { name: 'VS Code', icon: Code2 },
      { name: 'Postman', icon: Globe2 },
      { name: 'Vercel', iconPath: '/assets/icons/vercel.svg' },
      { name: 'npm', iconPath: '/assets/icons/npm.svg' },
      { name: 'Discord Developer Portal', icon: Workflow }
    ]
  },
  {
    id: 'bots-game',
    title: 'Bots / Game Development',
    description: 'Systems and frameworks I use for Discord automation, FiveM tools, and RP server features.',
    items: [
      { name: 'Discord.js', icon: Workflow },
      { name: 'FiveM', icon: Gamepad2 },
      { name: 'QBCore', icon: Braces },
      { name: 'ESX', icon: Code2 },
      { name: 'QBox', icon: Box },
      { name: 'ox_lib', icon: GitBranch },
      { name: 'Lua Scripts', icon: Code2 }
    ]
  }
];
