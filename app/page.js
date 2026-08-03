import { wa } from '@/lib/data';
import { WhatsAppIcon } from '@/components/Icons';
import Preloader from '@/components/Preloader';
import CursorGlow from '@/components/CursorGlow';
import Navbar from '@/components/Navbar';
import Shop from '@/components/Shop';
import Swap from '@/components/Swap';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import ScrollEffects from '@/components/ScrollEffects';
import ScheduleButton from '@/components/ScheduleButton';

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <>
      <Preloader />
      <CursorGlow />
      <Navbar />

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="orb orb-1" aria-hidden="true" />
        <div className="orb orb-2" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge reveal">🔥 Nigeria&apos;s Premier Tech Marketplace</div>
            <h1 className="hero-heading reveal reveal-d1">
              We <span className="text-glow">Buy</span><br />
              We <span className="text-glow">Sell</span><br />
              We <span className="text-glow">Swap</span>
            </h1>
            <p className="hero-sub reveal reveal-d2">Premium gadgets. Expert repairs. Unbeatable prices.<br />Benin City&apos;s most trusted tech hub.</p>
            <div className="hero-btns reveal reveal-d3">
              <a href="#shop" className="btn btn-primary">Browse Deals</a>
              <a href="#swap" className="btn btn-outline">Trade In Device</a>
            </div>
            <div className="hero-stats reveal reveal-d4">
              <div className="stat"><strong>500+</strong><span>Devices Sold</span></div>
              <div className="stat-divider" />
              <div className="stat"><strong>300+</strong><span>Happy Clients</span></div>
              <div className="stat-divider" />
              <div className="stat"><strong>5★</strong><span>Avg. Rating</span></div>
            </div>
          </div>
          <div className="hero-visual reveal reveal-d2" aria-hidden="true">
            <div className="phone-wrap">
              <div className="phone-glow" />
              <div className="phone-frame">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <div className="phone-status-bar"><span>9:41</span><span>●●●</span></div>
                  <div className="phone-wallpaper">
                    <div className="phone-icon-grid">
                      <div className="p-icon" style={{ background: '#1e90ff' }}>📱</div>
                      <div className="p-icon" style={{ background: '#00c896' }}>💻</div>
                      <div className="p-icon" style={{ background: '#ff6b35' }}>🔧</div>
                      <div className="p-icon" style={{ background: '#a855f7' }}>☁️</div>
                      <div className="p-icon" style={{ background: '#f59e0b' }}>🔓</div>
                      <div className="p-icon" style={{ background: '#ec4899' }}>🎮</div>
                    </div>
                    <div className="phone-card">
                      <div className="phone-card-label">BEST DEAL TODAY</div>
                      <div className="phone-card-title">iPhone 15 Pro</div>
                      <div className="phone-card-price">₦ 850,000</div>
                    </div>
                  </div>
                </div>
                <div className="phone-home-bar" />
              </div>
              <div className="float-badge float-badge-1">✓ Verified</div>
              <div className="float-badge float-badge-2">⚡ Fast Swap</div>
              <div className="float-badge float-badge-3">🔒 Unlocked</div>
            </div>
          </div>
        </div>
        <div className="hero-scroll-hint" aria-hidden="true">
          <div className="scroll-mouse"><div className="scroll-wheel" /></div>
          <span>Scroll</span>
        </div>
      </section>

      <Shop />

      {/* SERVICES */}
      <section id="services" className="services section-pad">
        <div className="container">
          <div className="section-header reveal">
            <p className="section-eyebrow">Expert Services</p>
            <h2 className="section-title">We Fix It Right</h2>
            <p className="section-sub">Professional repairs and software services with quick turnaround.</p>
          </div>
          <div className="services-grid">
            <article className="service-card reveal" tabIndex={0}>
              <div className="service-icon">📱</div>
              <h3>Flashing &amp; Unlocking</h3>
              <p>Full OS flashing for iPhones and Android phones. Network unlock for all carriers and countries.</p>
              <div className="service-meta">⏱ Same Day</div>
            </article>
            <article className="service-card reveal reveal-d1" tabIndex={0}>
              <div className="service-icon">🍎</div>
              <h3>Apple ID Fixes</h3>
              <p>Apple ID activation lock removal. Account verification issues resolved quickly and professionally.</p>
              <div className="service-meta">⏱ 1–2 Hours</div>
            </article>
            <article className="service-card reveal reveal-d2 service-card--featured" tabIndex={0}>
              <div className="service-icon">☁️</div>
              <h3>iCloud Unlock</h3>
              <p>All-country iCloud unlocking and bypassing. Permanently removed — no re-lock after updates.</p>
              <div className="service-meta">⏱ 24–48 Hours</div>
            </article>
            <article className="service-card reveal reveal-d3" tabIndex={0}>
              <div className="service-icon">⚙️</div>
              <h3>Software Management</h3>
              <p>OS updates, malware removal, performance optimisation, data recovery, and general diagnostics.</p>
              <div className="service-meta">⏱ Same Day</div>
            </article>
          </div>
          <div className="service-booking reveal">
            <div className="booking-card">
              <div className="booking-text">
                <h3>Book a Service</h3>
                <p>Tell us your device issue and we&apos;ll get back to you within the hour.</p>
              </div>
              <ScheduleButton />
            </div>
          </div>
        </div>
      </section>

      <Swap />
      <Testimonials />

      {/* ABOUT */}
      <section id="about" className="about section-pad">
        <div className="container">
          <div className="about-layout">
            <div className="about-text reveal">
              <p className="section-eyebrow">About Us</p>
              <h2 className="section-title">Your Trusted Tech Partner</h2>
              <p>At <strong>Testi-Tech Global</strong>, we believe everyone deserves access to quality technology. Based in the heart of Benin City, we&apos;ve built a reputation for fair prices, honest service, and expert knowledge.</p>
              <p>From sourcing the best pre-owned iPhones to unlocking devices from any carrier worldwide — we&apos;re the team your friends recommend.</p>
              <div className="about-values">
                <div className="value-item"><span>⚡</span><strong>Speed</strong><p>Same-day service on most repairs</p></div>
                <div className="value-item"><span>🔒</span><strong>Trust</strong><p>Verified devices. Honest pricing.</p></div>
                <div className="value-item"><span>🌍</span><strong>Reach</strong><p>All-country unlocking &amp; iCloud</p></div>
              </div>
            </div>
            <div className="about-visual reveal reveal-d2" aria-hidden="true">
              <div className="about-card">
                <div className="about-card-stat"><span className="big-num">500<sup>+</sup></span><span>Devices Sold</span></div>
                <div className="about-card-stat"><span className="big-num">3<sup>yrs</sup></span><span>In Business</span></div>
                <div className="about-card-stat"><span className="big-num">★4.9</span><span>Customer Rating</span></div>
              </div>
              <div className="about-badge-ring" aria-hidden="true">
                <div className="ring-text">VERIFIED &nbsp;·&nbsp; TRUSTED &nbsp;·&nbsp; RELIABLE &nbsp;·&nbsp; EXPERT &nbsp;·&nbsp;</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-mark">TG</div>
                <span>Testi-Tech Global</span>
              </div>
              <p>Nigeria&apos;s most trusted gadget marketplace and repair hub. Buy, sell, swap — we&apos;ve got you.</p>
              <div className="footer-phones">
                <a href="tel:08149683390">08149683390</a>
                <a href="tel:07034553778">07034553778</a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Shop</h4>
              <a href="#shop">iPhones</a><a href="#shop">Android Phones</a><a href="#shop">Laptops</a><a href="#shop">Tablets</a>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <a href="#services">Flashing &amp; Unlocking</a><a href="#services">Apple ID Fixes</a><a href="#services">iCloud Bypass</a><a href="#services">Software Management</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#about">About Us</a><a href="#testimonials">Reviews</a><a href="#swap">Trade-In</a><a href="#contact">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {year} Testi-Tech Global. All rights reserved. &nbsp;·&nbsp; Benin City, Edo State, Nigeria.</p>
            <div className="footer-theme-note"><span>Built with ⚡ for the tech community</span></div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a href={wa("Hi Testi-Tech, I'm interested in...")} className="fab-whatsapp" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
        <WhatsAppIcon />
        <span className="fab-pulse" />
      </a>

      <ScrollEffects />
    </>
  );
}
