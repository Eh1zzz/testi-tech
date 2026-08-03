'use client';
import { useEffect, useState } from 'react';
import { wa } from '@/lib/data';
import { WhatsAppIcon, CallIcon } from './Icons';

export default function Contact() {
  const [subject, setSubject] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [errors, setErrors] = useState({});

  // "Schedule Now" in the Services section prefills the subject.
  useEffect(() => {
    const onPrefill = () => {
      setSubject('Repair / Service');
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };
    window.addEventListener('prefill-service', onPrefill);
    return () => window.removeEventListener('prefill-service', onPrefill);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = (fd.get('name') || '').toString().trim();
    const email = (fd.get('email') || '').toString().trim();
    const phone = (fd.get('phone') || '').toString().trim();
    const message = (fd.get('message') || '').toString().trim();

    const errs = {};
    if (!name) errs.name = 'Name is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Enter a valid email.';
    if (message.length < 5) errs.message = 'Please enter a message.';
    setErrors(errs);
    setFeedback(null);
    if (Object.keys(errs).length) return;

    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, subject, message }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setFeedback({ type: 'success', msg: "✓ Message sent! We'll be in touch within the hour." });
        form.reset();
        setSubject('');
      } else {
        throw new Error(data.message || 'Server error');
      }
    } catch {
      setFeedback({ type: 'error', msg: 'Could not send right now — opening WhatsApp instead…' });
      const waMsg =
        `Hi Testi-Tech!\n\nName: ${name}\nEmail: ${email}\n` +
        `${phone ? 'Phone: ' + phone + '\n' : ''}Subject: ${subject || 'General'}\n\n${message}`;
      setTimeout(() => window.open(wa(waMsg), '_blank'), 1200);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact section-pad">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-eyebrow">Get In Touch</p>
          <h2 className="section-title">Let&apos;s Talk Tech</h2>
          <p className="section-sub">Have a question, want to buy, sell, or just need advice? We&apos;re here.</p>
        </div>

        <div className="contact-layout">
          <div className="contact-info reveal">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div>
                <strong>Visit Us</strong>
                <p>Shop 39, Favour Line, Bobizua<br />G.S.M Village, Opp. Oba Market Building<br />Beside Oba Market Police Station<br />Benin City, Edo State</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">📞</div>
              <div>
                <strong>Call / WhatsApp</strong>
                <p><a href="tel:08149683390">08149683390</a></p>
                <p><a href="tel:07034553778">07034553778</a></p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">🕐</div>
              <div>
                <strong>Opening Hours</strong>
                <p>Mon – Sat: 9:00am – 7:00pm</p>
                <p>Sunday: 12:00pm – 5:00pm</p>
              </div>
            </div>

            <div className="contact-social">
              <a href={wa()} target="_blank" rel="noopener" className="social-btn whatsapp" aria-label="WhatsApp">
                <WhatsAppIcon width="20" /> WhatsApp
              </a>
              <a href="tel:08149683390" className="social-btn call" aria-label="Call us">
                <CallIcon width="20" /> Call Now
              </a>
            </div>
          </div>

          <div className="contact-form-wrap reveal reveal-d2">
            <form onSubmit={onSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="c-name">Full Name</label>
                <input type="text" id="c-name" name="name" className={errors.name ? 'error' : ''} placeholder="Your name" required />
                <span className="field-err">{errors.name || ''}</span>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="c-email">Email</label>
                  <input type="email" id="c-email" name="email" className={errors.email ? 'error' : ''} placeholder="you@email.com" required />
                  <span className="field-err">{errors.email || ''}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="c-phone">Phone</label>
                  <input type="tel" id="c-phone" name="phone" placeholder="+234 000 000 0000" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="c-subject">Subject</label>
                <select id="c-subject" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)}>
                  <option value="">What&apos;s this about?</option>
                  <option>Buy a Device</option>
                  <option>Sell My Device</option>
                  <option>Swap / Trade-In</option>
                  <option>Repair / Service</option>
                  <option>iCloud / Unlock</option>
                  <option>General Enquiry</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="c-message">Message</label>
                <textarea id="c-message" name="message" className={errors.message ? 'error' : ''} rows="4" placeholder="Tell us more…" required />
                <span className="field-err">{errors.message || ''}</span>
              </div>
              <button type="submit" className={`btn btn-primary btn-full ${loading ? 'loading' : ''}`} disabled={loading}>
                <span className="btn-text">Send Message</span>
                <span className="btn-loading"><span className="dot" /><span className="dot" /><span className="dot" /></span>
              </button>
              {feedback && <div className={feedback.type} role="alert" aria-live="polite">{feedback.msg}</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
