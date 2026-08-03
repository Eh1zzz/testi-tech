'use client';
import { useEffect, useState } from 'react';
import { REVIEWS } from '@/lib/data';

export default function Testimonials() {
  const [perPage, setPerPage] = useState(3);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const calc = () => setPerPage(window.innerWidth < 900 ? 1 : 3);
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  const pages = Math.ceil(REVIEWS.length / perPage);

  useEffect(() => {
    setPage((p) => p % pages);
  }, [pages]);

  useEffect(() => {
    const t = setInterval(() => setPage((p) => (p + 1) % pages), 6000);
    return () => clearInterval(t);
  }, [pages]);

  const start = page * perPage;
  const slice = REVIEWS.slice(start, start + perPage);

  return (
    <section id="testimonials" className="testimonials section-pad">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-eyebrow">Customer Stories</p>
          <h2 className="section-title">What People Say</h2>
        </div>
        <div className="reviews-track-wrap">
          <div className="reviews-track" id="reviews-track" aria-live="polite">
            {slice.map((r, i) => (
              <article className="review-card" key={start + i}>
                <div className="review-stars">{'★'.repeat(r.stars)}</div>
                <p className="review-text">{r.text}</p>
                <div className="review-author">
                  <div className="review-avatar">{r.avatar}</div>
                  <div>
                    <div className="review-name">{r.name}</div>
                    <div className="review-service">{r.service}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="reviews-nav">
            <button className="rev-btn" type="button" onClick={() => setPage((p) => (p - 1 + pages) % pages)} aria-label="Previous review">‹</button>
            <div className="rev-dots">
              {Array.from({ length: pages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`rev-dot ${i === page ? 'active' : ''}`}
                  aria-label={`Page ${i + 1}`}
                  onClick={() => setPage(i)}
                />
              ))}
            </div>
            <button className="rev-btn" type="button" onClick={() => setPage((p) => (p + 1) % pages)} aria-label="Next review">›</button>
          </div>
        </div>
      </div>
    </section>
  );
}
