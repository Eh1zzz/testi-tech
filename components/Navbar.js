'use client';
import { useEffect, useState } from 'react';
import { wa } from '@/lib/data';
import { WhatsAppIcon, MoonIcon, SunIcon } from './Icons';

const NAV = [
  ['home', 'Home'], ['shop', 'Shop'], ['services', 'Services'],
  ['swap', 'Swap'], ['testimonials', 'Reviews'], ['contact', 'Contact'],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const toggleTheme = () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('tt-theme', next); } catch {}
  };

  return (
    <>
      <header id="navbar" className={scrolled ? 'scrolled' : ''}>
        <a href="#home" className="nav-logo">
          <div className="logo-mark">TG</div>
          <span>Testi-Tech<br /><em>Global</em></span>
        </a>

        <nav id="main-nav" className={open ? 'open' : ''} aria-label="Main navigation">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} data-nav={id} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <button id="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle theme" title="Toggle dark/light mode">
            <MoonIcon /><SunIcon />
          </button>
          <a href={wa()} target="_blank" rel="noopener" className="btn btn-whatsapp" aria-label="WhatsApp us">
            <WhatsAppIcon width="16" height="16" /> Chat
          </a>
          <button
            className={`hamburger ${open ? 'open' : ''}`}
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>
      <div className={`nav-overlay ${open ? 'visible' : ''}`} onClick={() => setOpen(false)} />
    </>
  );
}
