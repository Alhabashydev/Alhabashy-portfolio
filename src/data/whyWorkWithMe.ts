import { Brain, Clock, MessageCircle, Sparkles, Trophy, Zap } from 'lucide-react';
import type { WhyItem } from '../types';

export const whyWorkWithMe: WhyItem[] = [
  {
    title: 'Fast Delivery',
    description: 'I focus on building fast without making the project messy or low quality.',
    icon: Zap
  },
  {
    title: 'Clean UI',
    description: 'I care about spacing, contrast, layout, and details that make the design feel premium.',
    icon: Sparkles
  },
  {
    title: 'Smooth Animations',
    description: 'I use motion carefully to make the experience feel alive without hurting performance.',
    icon: Clock
  },
  {
    title: 'Full-Stack Thinking',
    description: 'I understand both frontend visuals and backend logic, so the project is easier to scale.',
    icon: Brain
  },
  {
    title: 'Young But Serious Developer',
    description: 'I am 16, but I treat every project seriously and keep improving with every build.',
    icon: Trophy
  },
  {
    title: 'Easy To Communicate With',
    description: 'I keep things clear, simple, and direct so the project moves smoothly.',
    icon: MessageCircle
  }
];
