'use client';

import { usePathname } from 'next/navigation';

/* ── Preloader ──────────────────────────────────────────────────────────────
   Letters-fall animation shown only on the homepage.
   On all other pages the component renders nothing, so the preloader CSS
   never fires and users land directly on the page content.
*/
export default function Preloader() {
  const pathname = usePathname();
  if (pathname !== '/') return null;

  return (
    <>
      <div id="preloader" aria-hidden="true">
        <div id="preloader-text">
          {'Primara'.split('').map((char, i) => (
            <span
              key={i}
              className="preloader-letter"
              style={{ animationDelay: `${0.08 * i}s` }}
            >
              {char}
            </span>
          ))}
        </div>
        <div id="preloader-bar">
          <div id="preloader-fill" />
        </div>
      </div>
      {/* Safety-net: forcibly remove preloader at 2.6s in case CSS animation stalls */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){setTimeout(function(){var p=document.getElementById('preloader');if(p&&p.parentNode)p.parentNode.removeChild(p);},2600);})();`,
        }}
      />
    </>
  );
}
