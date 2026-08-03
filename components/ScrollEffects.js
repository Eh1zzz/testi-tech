'use client';
import { useEffect } from 'react';

// Global page behaviours ported from the original script.js:
// reveal-on-scroll (incl. dynamically-added cards), scroll-spy nav
// highlighting, and smooth-scroll for in-page anchor links.
export default function ScrollEffects() {
  useEffect(() => {
    // ── Reveal on scroll ──
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            revealObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    const observeReveals = (root = document) =>
      root.querySelectorAll('.reveal:not(.visible)').forEach((el) => revealObs.observe(el));
    observeReveals();

    // Catch reveals added later (e.g. filtered product cards)
    const mo = new MutationObserver((muts) => {
      muts.forEach((m) =>
        m.addedNodes.forEach((n) => {
          if (n.nodeType !== 1) return;
          if (n.classList?.contains('reveal')) revealObs.observe(n);
          n.querySelectorAll?.('.reveal:not(.visible)').forEach((el) => revealObs.observe(el));
        })
      );
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // ── Scroll spy ──
    const links = document.querySelectorAll('#main-nav a[data-nav]');
    const spyObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            links.forEach((l) => l.classList.toggle('active', l.dataset.nav === e.target.id));
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    document.querySelectorAll('section[id]').forEach((s) => spyObs.observe(s));

    // ── Smooth scroll for hash links ──
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };
    document.addEventListener('click', onClick);

    return () => {
      revealObs.disconnect();
      spyObs.disconnect();
      mo.disconnect();
      document.removeEventListener('click', onClick);
    };
  }, []);

  return null;
}
