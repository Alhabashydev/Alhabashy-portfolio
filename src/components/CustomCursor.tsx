import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const dot = dotRef.current;
    if (!dot) return;

    document.body.classList.add('custom-cursor-enabled');

    const move = (event: MouseEvent) => {
      dot.style.transform = `translate3d(${event.clientX - 3}px, ${event.clientY - 3}px, 0)`;
    };

    const updateHover = (event: Event) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest('a, button, input, textarea, select, .cursor-hover');
      dot.classList.toggle('is-hovering', Boolean(interactive));
    };

    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', updateHover);
    document.addEventListener('mouseout', updateHover);

    return () => {
      document.body.classList.remove('custom-cursor-enabled');
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', updateHover);
      document.removeEventListener('mouseout', updateHover);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" />;
}
