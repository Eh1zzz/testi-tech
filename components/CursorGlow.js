'use client';
import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    const glow = ref.current;
    if (!glow) return;
    const onMove = (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    };
    document.addEventListener('mousemove', onMove, { passive: true });
    return () => document.removeEventListener('mousemove', onMove);
  }, []);
  return <div id="cursor-glow" ref={ref} aria-hidden="true" />;
}
