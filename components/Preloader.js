'use client';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const finish = () => setDone(true);
    const onLoad = () => setTimeout(finish, 400);
    if (document.readyState === 'complete') onLoad();
    else window.addEventListener('load', onLoad);
    const fallback = setTimeout(finish, 2500);
    return () => {
      window.removeEventListener('load', onLoad);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div id="preloader" className={done ? 'done' : ''} aria-hidden="true">
      <div className="preloader-logo">TG</div>
      <div className="preloader-bar"><div className="preloader-fill" /></div>
    </div>
  );
}
