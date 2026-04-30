import { Github, Mail, MessageCircle, Send, User } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const contactLinks = [
  { label: 'Email Me', href: 'mailto:your-email@example.com', icon: Mail },
  { label: 'Discord', href: '#', icon: MessageCircle },
  { label: 'GitHub', href: '#', icon: Github },
  { label: 'Portfolio Links', href: '#projects', icon: User }
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding section-shell">
      <SectionHeader
        eyebrow="Contact"
        title="Let’s Build Something"
        description="Send the idea, the goal, and the style you want. This form is frontend-only now, but it is structured to connect to an API later."
      />

      <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-[2rem] p-6 sm:p-8"
        >
          <h3 className="text-2xl font-bold text-white">Contact channels</h3>
          <p className="mt-3 text-sm leading-7 text-white/55">
            Replace the placeholder links with your real email, Discord, GitHub, and portfolio links before publishing.
          </p>

          <div className="mt-8 grid gap-3">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-white/25 hover:bg-white/[0.075]"
                >
                  <span className="flex items-center gap-3 font-semibold text-white/76 group-hover:text-white">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black/40 transition group-hover:bg-white group-hover:text-black">
                      <Icon className="h-5 w-5" />
                    </span>
                    {link.label}
                  </span>
                  <span className="text-white/30 transition group-hover:text-white">→</span>
                </a>
              );
            })}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.08 }}
          onSubmit={(event) => event.preventDefault()}
          className="glass-card-strong rounded-[2rem] p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-white/62">Name</span>
              <input className="w-full rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-white/35 focus:bg-black/65" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-white/62">Email</span>
              <input type="email" className="w-full rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-white/35 focus:bg-black/65" placeholder="you@example.com" />
            </label>
          </div>

          <label className="mt-4 block">
            <span className="mb-2 block text-sm font-semibold text-white/62">Message</span>
            <textarea className="min-h-40 w-full resize-none rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-white/35 focus:bg-black/65" placeholder="Tell me about your project..." />
          </label>

          <button type="submit" className="pill-btn pill-btn-primary mt-5">
            Send Message <Send className="h-4 w-4" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
