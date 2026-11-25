'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

/* Native booking calendar (card #947, replaces the old third-party embed). Slots come from Gio's real Google calendars via
   the Command Center; the booking lands on Pochey with a Meet link. Click-to-load: nothing is requested until the
   visitor taps "See open times", so first paint, Lighthouse and tracking are untouched. A booking ends on
   /thank-you, which fires the lead conversion; this component never fires it. */
type Slot = { start: string };

const dayKey = (iso: string) => new Date(iso).toLocaleDateString('en-CA'); // visitor-local YYYY-MM-DD
const dayLabel = (iso: string) => new Date(iso).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
const timeLabel = (iso: string) => new Date(iso).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
const tzName = () => { try { return new Intl.DateTimeFormat('en-US', { timeZoneName: 'short' }).formatToParts(new Date()).find((p) => p.type === 'timeZoneName')?.value ?? ''; } catch { return ''; } };

export default function BookCalendar() {
  const router = useRouter();
  const [state, setState] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');
  const [slots, setSlots] = useState<Slot[]>([]);
  const [day, setDay] = useState<string>('');
  const [pick, setPick] = useState<string>('');
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState('');

  const days = useMemo(() => {
    const m = new Map<string, Slot[]>();
    for (const s of slots) { const k = dayKey(s.start); (m.get(k) ?? m.set(k, []).get(k)!).push(s); }
    return Array.from(m.entries());
  }, [slots]);

  const load = async () => {
    setState('loading'); setErr('');
    try {
      const w = window as unknown as { gtag?: (...a: unknown[]) => void };
      w.gtag?.('event', 'cta_click', { cta_label: 'home-calendar-open', page_path: '/' });
    } catch {}
    try {
      const r = await fetch('/api/book/slots', { cache: 'no-store' });
      if (!r.ok) throw new Error('x');
      const j = (await r.json()) as { slots: Slot[] };
      setSlots(j.slots);
      setDay(j.slots[0] ? dayKey(j.slots[0].start) : '');
      setState('ready');
    } catch { setState('error'); }
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setBusy(true); setErr('');
    try {
      const r = await fetch('/api/book', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ start: pick, name: f.get('name'), email: f.get('email'), phone: f.get('phone'), company: f.get('company') }) });
      const j = (await r.json().catch(() => ({}))) as { ok?: boolean; error?: string; code?: string; start?: string };
      if (r.ok && j.ok) { router.push(`/thank-you?booked=1&t=${encodeURIComponent(j.start ?? pick)}`); return; }
      setErr(j.error || 'Something went wrong. Please call (561) 291-2681.');
      if (j.code === 'taken' || j.code === 'invalid') { setPick(''); load(); }
    } catch { setErr('Something went wrong. Please call (561) 291-2681.'); }
    setBusy(false);
  };

  const times = days.find(([k]) => k === day)?.[1] ?? [];

  return (
    <section id="book" className="rh-book" aria-label="Book a call">
      <div className="rh-wrap rh-book-grid">
        <div>
          <p className="rh-eyebrow">Book a call</p>
          <h2 className="rh-h2">Pick a time. 30 minutes.</h2>
          <p className="rh-body">We look at your Google profile and website first, then walk you through what we would fix first. A yes or a no is fine.</p>
          {state === 'idle' && (
            <div className="rh-cta-row">
              <button type="button" className="rh-btn" onClick={load} data-cta="home-calendar-open">See open times <span aria-hidden="true">↗</span></button>
              <a className="rh-link" href="tel:+15612912681" data-cta="home-calendar-call">Or call (561) 291-2681</a>
            </div>
          )}
        </div>
        <div className="rh-book-frame">
          {state === 'idle' && (
            <button type="button" className="rh-book-ph" onClick={load}><span>Open times appear here</span></button>
          )}
          {state === 'loading' && <div className="rh-book-ph" role="status"><span>Loading open times</span></div>}
          {state === 'error' && (
            <div className="rh-book-ph"><span>Times are not loading. Call <a href="tel:+15612912681" style={{ color: 'var(--gold)' }}>(561) 291-2681</a> or <a href="/contact#contact-form" style={{ color: 'var(--gold)' }}>send a message</a>.</span></div>
          )}
          {state === 'ready' && !pick && (
            <div className="rh-bk">
              <p className="rh-bk-tz">Times shown in your time zone{tzName() ? ` (${tzName()})` : ''}</p>
              {days.length === 0 ? (
                <p className="rh-bk-msg">No open times in the next two weeks. Call <a href="tel:+15612912681">(561) 291-2681</a>.</p>
              ) : (
                <>
                  <div className="rh-bk-days" role="tablist" aria-label="Day">
                    {days.map(([k, s]) => (
                      <button key={k} type="button" role="tab" aria-selected={k === day} className={k === day ? 'on' : ''} onClick={() => setDay(k)}>{dayLabel(s[0].start)}</button>
                    ))}
                  </div>
                  <div className="rh-bk-times">
                    {times.map((s) => (<button key={s.start} type="button" onClick={() => setPick(s.start)}>{timeLabel(s.start)}</button>))}
                  </div>
                </>
              )}
            </div>
          )}
          {state === 'ready' && pick && (
            <form className="rh-bk" onSubmit={submit}>
              <p className="rh-bk-pick">{dayLabel(pick)} at {timeLabel(pick)} <button type="button" onClick={() => { setPick(''); setErr(''); }}>Change</button></p>
              <label>Name<input name="name" required autoComplete="name" maxLength={100} /></label>
              <label>Email<input name="email" type="email" required autoComplete="email" maxLength={200} /></label>
              <label>Phone<input name="phone" type="tel" required autoComplete="tel" maxLength={30} /></label>
              <input name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }} />
              {err && <p className="rh-bk-err" role="alert">{err}</p>}
              <button type="submit" className="rh-btn" disabled={busy}>{busy ? 'Booking' : 'Book this time'}</button>
              <p className="rh-bk-fine">You will get a calendar invite with a Google Meet link.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
