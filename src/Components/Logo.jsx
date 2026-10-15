// Logo.jsx — Business Elevate Digital · Powering Digital Growth 24/7
// Pure code (SVG + text), no image file needed.
//   <Logo />                      -> white background
//   <Logo variant="dark" />       -> dark / teal background (footer)
//   <Logo size={56} tagline={false} />
//   <LogoMark size={44} />        -> symbol only (mobile, favicon-style)

const colors = {
  light: { teal: "#1b9bb0", dark: "#0a0a0a", halo: "#ffffff", arrow: "#0a0a0a", sub: "#0a0a0a" },
  dark:  { teal: "#3cc0d6", dark: "#ffffff", halo: "#0a4a4e", arrow: "#b8f03c", sub: "#e6f7f7" },
};

export function LogoMark({ size = 56, variant = "light" }) {
  const c = colors[variant];
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="Business Elevate Digital">
      {/* bold letter B */}
      <path fillRule="evenodd" fill={c.teal}
        d="M26 14 H56 C70 14 78 22 78 33 C78 41 74 46 68 49 C76 52 82 58 82 68 C82 80 73 88 58 88 H26 Z
           M42 27 V43 H54 C59 43 62 40 62 35 C62 30 59 27 54 27 Z
           M42 56 V75 H56 C62 75 66 72 66 65.5 C66 59 62 56 56 56 Z" />
      {/* growth bars */}
      <rect x="4"  y="76" width="5" height="12" rx="1.5" fill={c.teal} />
      <rect x="11" y="68" width="5" height="20" rx="1.5" fill={c.teal} />
      <rect x="18" y="60" width="5" height="28" rx="1.5" fill={c.teal} />
      {/* rising arrow (with a halo so it stays visible over the B) */}
      <path d="M3 62 C16 44 34 28 58 18" fill="none" stroke={c.halo} strokeWidth="9" strokeLinecap="round" />
      <path d="M3 62 C16 44 34 28 58 18" fill="none" stroke={c.arrow} strokeWidth="4" strokeLinecap="round" />
      <polygon points="70,12 59,26 52,13" fill={c.arrow} stroke={c.arrow} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export default function Logo({ size = 56, variant = "light", tagline = true }) {
  const c = colors[variant];
  const fs = size * 0.66; // "BUSINESS" font size
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: size * 0.14,
      fontFamily: "'Outfit', 'Helvetica Neue', Arial, sans-serif", lineHeight: 1 }}>
      <LogoMark size={size} variant={variant} />
      <span style={{ display: "flex", flexDirection: "column", gap: fs * 0.06 }}>
        <span style={{ fontSize: fs, fontWeight: 900, letterSpacing: -fs * 0.02, color: c.dark, textTransform: "uppercase" }}>
          Business
        </span>
        <span style={{ fontSize: fs * 0.58, whiteSpace: "nowrap", textTransform: "uppercase", letterSpacing: fs * 0.005 }}>
          <span style={{ fontWeight: 800, color: c.teal }}>Elevate </span>
          <span style={{ fontWeight: 300, color: c.dark }}>Digital</span>
        </span>
        {tagline && (
          <span style={{ fontSize: fs * 0.25, fontWeight: 500, letterSpacing: fs * 0.07,
            color: c.sub, whiteSpace: "nowrap", marginTop: fs * 0.05 }}>
            Powering Digital Growth <b style={{ color: c.teal, fontWeight: 800 }}>24/7</b>
          </span>
        )}
      </span>
    </span>
  );
}

/* Add the font once, in index.html <head>:
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;800;900&display=swap">
*/