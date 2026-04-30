import { ArrowUp, Github, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="section-shell py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white text-sm font-black text-black">MA</div>
            <div>
              <p className="font-bold text-white">Moustafa Alhabashy</p>
              <p className="text-sm text-white/45">Full-Stack Developer • Egypt</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a href="mailto:your-email@example.com" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.035] text-white/65 transition hover:bg-white hover:text-black" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
            <a href="#" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.035] text-white/65 transition hover:bg-white hover:text-black" aria-label="Discord">
              <MessageCircle className="h-4 w-4" />
            </a>
            <a href="#" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.035] text-white/65 transition hover:bg-white hover:text-black" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
            <a href="#home" className="ml-2 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white text-black transition hover:scale-105" aria-label="Back to top">
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/38 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Moustafa Alhabashy. All rights reserved.</p>
          <p>Built for premium black/white developer branding.</p>
        </div>
      </div>
    </footer>
  );
}
