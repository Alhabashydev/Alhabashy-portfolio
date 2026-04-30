export default function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.16),transparent_34%),radial-gradient(circle_at_10%_18%,rgba(255,255,255,0.07),transparent_24%),radial-gradient(circle_at_90%_45%,rgba(255,255,255,0.055),transparent_28%)]" />
      <div className="bg-grid absolute inset-0 opacity-50" />
      <div className="noise-texture absolute inset-0" />
      <div className="absolute left-[8%] top-[18%] h-48 w-48 rounded-full bg-white/8 blur-3xl animate-floatSoft" />
      <div className="absolute right-[8%] top-[42%] h-72 w-72 rounded-full bg-white/[0.055] blur-3xl animate-floatSoft [animation-delay:-3s]" />
      <div className="absolute bottom-[8%] left-[30%] h-56 w-56 rounded-full bg-white/[0.045] blur-3xl animate-floatSoft [animation-delay:-5s]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black via-black/70 to-transparent" />
    </div>
  );
}
