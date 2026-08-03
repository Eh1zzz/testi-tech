'use client';
import { useState } from 'react';
import { wa } from '@/lib/data';

export default function Swap() {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    if (!data.deviceType || !data.brand?.trim() || !data.name?.trim() || !data.phone?.trim()) {
      setFeedback({ type: 'error', msg: '⚠️ Please fill in all required fields.' });
      return;
    }

    setLoading(true);
    const msg =
      `Hi Testi-Tech! I'd like a trade-in quote.\n\n` +
      `Device: ${data.brand}\nType: ${data.deviceType}\nStorage: ${data.storage || 'N/A'}\n` +
      `Condition: ${data.condition}\nUpgrade to: ${data.upgradeTo || 'TBD'}\n\n` +
      `Name: ${data.name}\nPhone: ${data.phone}`;

    setTimeout(() => {
      setLoading(false);
      setFeedback({ type: 'success', msg: "✓ Great! We're redirecting you to WhatsApp to complete your request." });
      form.reset();
      setTimeout(() => window.open(wa(msg), '_blank'), 1000);
    }, 1200);
  };

  return (
    <section id="swap" className="swap section-pad">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-eyebrow">Trade-In</p>
          <h2 className="section-title">Upgrade Your Device</h2>
          <p className="section-sub">Get an instant estimate for your old device and put it toward something new.</p>
        </div>

        <div className="swap-layout">
          <div className="swap-form-wrap reveal">
            <form className="swap-form" onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="device-type">Device Type</label>
                  <select id="device-type" name="deviceType" required defaultValue="">
                    <option value="">Select type…</option>
                    <option value="iphone">iPhone</option>
                    <option value="android">Android Phone</option>
                    <option value="laptop">Laptop</option>
                    <option value="tablet">Tablet</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="device-brand">Brand / Model</label>
                  <input type="text" id="device-brand" name="brand" placeholder="e.g. iPhone 13 Pro" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="device-storage">Storage</label>
                  <select id="device-storage" name="storage" defaultValue="">
                    <option value="">Select…</option>
                    <option>64GB</option><option>128GB</option>
                    <option>256GB</option><option>512GB</option><option>1TB</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="device-condition">Condition</label>
                  <select id="device-condition" name="condition" required defaultValue="">
                    <option value="">Select…</option>
                    <option value="mint">Mint (Like New)</option>
                    <option value="good">Good (Minor scratches)</option>
                    <option value="fair">Fair (Visible wear)</option>
                    <option value="poor">Poor (Cracked/Faulty)</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="swap-name">Your Name</label>
                <input type="text" id="swap-name" name="name" placeholder="Full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="swap-phone">Phone / WhatsApp</label>
                <input type="tel" id="swap-phone" name="phone" placeholder="+234 000 000 0000" required />
              </div>
              <div className="form-group">
                <label htmlFor="upgrade-to">Interested in Upgrading To <span className="opt">(optional)</span></label>
                <input type="text" id="upgrade-to" name="upgradeTo" placeholder="e.g. iPhone 15, Samsung S24…" />
              </div>
              <button type="submit" className={`btn btn-primary btn-full ${loading ? 'loading' : ''}`} disabled={loading}>
                <span className="btn-text">Get My Trade-In Value</span>
                <span className="btn-loading"><span className="dot" /><span className="dot" /><span className="dot" /></span>
              </button>
              {feedback && (
                <div className={feedback.type} role="alert" aria-live="polite">{feedback.msg}</div>
              )}
            </form>
          </div>

          <div className="swap-info reveal reveal-d2">
            <h3>How It Works</h3>
            <ol className="how-it-works">
              <li><span className="step-num">01</span><div><strong>Fill the form</strong><p>Enter your device details above.</p></div></li>
              <li><span className="step-num">02</span><div><strong>Get a Quote</strong><p>We call/WhatsApp you with an offer within the hour.</p></div></li>
              <li><span className="step-num">03</span><div><strong>Visit or Ship</strong><p>Drop in at our shop or arrange a pickup in Benin City.</p></div></li>
              <li><span className="step-num">04</span><div><strong>Walk Out Upgraded</strong><p>Pay the difference and leave with your new device.</p></div></li>
            </ol>
            <div className="swap-trust">
              <div className="trust-item">✅ No hidden fees</div>
              <div className="trust-item">✅ Best value guaranteed</div>
              <div className="trust-item">✅ Data wiped securely</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
