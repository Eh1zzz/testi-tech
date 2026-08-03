'use client';
import { useState } from 'react';
import Image from 'next/image';
import { PRODUCTS, FILTERS, wa } from '@/lib/data';

export default function Shop() {
  const [filter, setFilter] = useState('all');
  const items = filter === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <section id="shop" className="shop section-pad">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-eyebrow">Marketplace</p>
          <h2 className="section-title">Latest Deals</h2>
          <p className="section-sub">Carefully inspected devices at unbeatable prices. All with warranty.</p>
        </div>

        <div className="shop-filters reveal">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              className={`filter-btn ${filter === f.key ? 'active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="products-grid" id="products-grid">
          {items.map((p) => (
            <article key={p.id} className="product-card reveal" data-category={p.category} aria-label={p.name}>
              <div className="product-img">
                {p.image ? (
                  <Image src={p.image} alt={p.name} fill sizes="(max-width:600px) 50vw, 300px" style={{ objectFit: 'cover' }} />
                ) : (
                  <span aria-hidden="true" style={{ fontSize: '4rem' }}>{p.emoji}</span>
                )}
                <div className={`product-badge ${p.condition === 'Used' ? 'used' : ''}`}>{p.badge}</div>
              </div>
              <div className="product-body">
                <div className="product-brand">{p.brand}</div>
                <div className="product-name">{p.name}</div>
                <div className="product-specs">{p.storage} &nbsp;·&nbsp; {p.condition}</div>
                <div className="product-footer">
                  <div className="product-price">{p.price}</div>
                  <a href={wa(`Hi, I'm interested in the ${p.name}`)} target="_blank" rel="noopener" className="product-cta">
                    Enquire
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="shop-cta reveal">
          <p>Don&apos;t see what you&apos;re looking for?</p>
          <a href="#contact" className="btn btn-outline">Request a Device →</a>
        </div>
      </div>
    </section>
  );
}
