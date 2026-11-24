'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/siteConfig';

/* Booking calendar high on the homepage (Gio 2026-11-24). Click-to-load: the Calendly frame is not
   requested until the visitor taps "See open times", so first paint, Lighthouse and tracking are
   untouched. Never loads /thank-you. The page also keeps the tel: link and the short form. */
export default function BookCalendar() {
  const [open, setOpen] = useState(false);
  const url = `${siteConfig.calendly}?hide_gdpr_banner=1&background_color=0a0a0a&text_color=e8e4dc&primary_color=c5a572`;
  const go = () => {
    setOpen(true);
    try {
      const w = window as unknown as { gtag?: (...a: unknown[]) => void };
      w.gtag?.('event', 'cta_click', { cta_label: 'home-calendar-open', page_path: '/' });
    } catch {}
  };
  return (
    <section id="book" className="rh-book" aria-label="Book a call">
      <div className="rh-wrap rh-book-grid">
        <div>
          <p className="rh-eyebrow">Book a call</p>
          <h2 className="rh-h2">Pick a time. 30 minutes.</h2>
          <p className="rh-body">We look at your Google profile and website first, then walk you through what we would fix first. A yes or a no is fine.</p>
          {!open && (
            <div className="rh-cta-row">
              <button type="button" className="rh-btn" onClick={go} data-cta="home-calendar-open">See open times <span aria-hidden="true">↗</span></button>
              <a className="rh-link" href={siteConfig.calendly} target="_blank" rel="noopener noreferrer" data-cta="home-calendar-newtab">Open in a new tab <span aria-hidden="true">↗</span></a>
            </div>
          )}
        </div>
        <div className="rh-book-frame">
          {open ? (
            <iframe title="Book a 30 minute call with Primara" src={url} loading="lazy" />
          ) : (
            <button type="button" className="rh-book-ph" onClick={go} aria-label="Show the booking calendar">
              <span>Open times appear here</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
