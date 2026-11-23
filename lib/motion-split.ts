/* Word-split a heading for a staggered reveal. Each word becomes an inline-block
   span (opacity + transform only), the spaces between stay real text nodes, so
   line breaks and heading height are identical to the unsplit heading (no layout
   shift). Only called on headings that start below the fold. */
export function splitWords(el: HTMLElement): number {
  let i = 0;
  const walk = (node: Node) => {
    Array.from(node.childNodes).forEach((n) => {
      if (n.nodeType === 3) {
        const txt = n.textContent || '';
        if (!txt.trim()) return;
        const frag = document.createDocumentFragment();
        txt.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
          const s = document.createElement('span');
          s.className = 'sw';
          s.style.setProperty('--i', String(Math.min(i++, 14)));
          s.textContent = part;
          frag.appendChild(s);
        });
        n.parentNode?.replaceChild(frag, n);
      } else if (n.nodeType === 1) {
        walk(n);
      }
    });
  };
  walk(el);
  el.classList.add('sw-pre');
  return i;
}

/* Reveal split headings as they scroll into view. Returns a cleanup. */
export function revealSplitHeadings(els: HTMLElement[]): () => void {
  const vh = window.innerHeight;
  const targets = els.filter((el) => el.getBoundingClientRect().top > vh * 0.95 && el.textContent && el.textContent.trim().length < 140);
  if (!targets.length || !('IntersectionObserver' in window)) return () => {};
  const io = new IntersectionObserver(
    (ents) => ents.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('sw-in'); io.unobserve(en.target); }
    }),
    { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
  );
  targets.forEach((el) => { splitWords(el); io.observe(el); });
  return () => io.disconnect();
}
