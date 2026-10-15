import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import gcare from "../assets/gcare.png";
import technexus from "../assets/technexus.png";
import gp from "../assets/gp.png";
import sz from "../assets/sz.png";
import doctorsPharmacy from "../assets/doctorpharmacy.png";
import alkhan from "../assets/alkhan.png";
import quetta from "../assets/cafe.jpg";
import image24 from "../assets/clients.png";
import image25 from "../assets/MI.png";

const clients = [
  ["G Care", "Healthcare", gcare],
  ["TechNexus Virtual University", "Technology", technexus],
  ["SZ Dispatching LLC", "Dispatching", sz],
  ["G & P Logistics KSA", "Logistics", gp],
  ["Doctor Pharmacy", "Pharmacy", doctorsPharmacy],
  ["Alkhan Restaurant Lahore", "Restaurant", alkhan],
  ["Quetta Cafe ", "Cafe", quetta],
  ["MI One Logistics", "Logistics", image25],
];

const css = `
/* ---------- scroll reveal ---------- */
[data-rv]:not(.cl-in) { opacity: 0; }
.cl-in[data-rv] { animation: cl-up .8s cubic-bezier(.2, .7, .2, 1) var(--d, 0ms) backwards; }
@keyframes cl-up { from { opacity: 0; transform: translateY(44px) scale(.95); } to { opacity: 1; transform: none; } }
@keyframes cl-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-22px); } }
@keyframes cl-shift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
@keyframes cl-drop { from { opacity: 0; transform: translateY(-46px) rotate(-8deg); } to { opacity: 1; transform: none; } }
@keyframes cl-grow { to { width: 80px; } }
@keyframes cl-fade { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }

/* ---------- banner (clients.png shown in full) ---------- */
.cl-banner {
  position: relative; overflow: hidden; text-align: center; color: #fff;
  background: var(--teal2);
}
.cl-bg {
  display: block; width: 100%; min-height: 320px;
  aspect-ratio: 16 / 7;           /* lower the second number to cut more from the bottom, raise it to cut less */
  object-fit: cover; object-position: top center; /* top = keeps the top, cuts only the bottom */
}
.cl-banner::before { content: ""; position: absolute; inset: 0; background: rgba(0, 0, 0, .22); pointer-events: none; }
.cl-hero {
  position: absolute; inset: 0; z-index: 1; padding: 0 6%;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
}
.cl-banner h1 { font-size: clamp(2rem, 5.5vw, 3.4rem); text-transform: uppercase; text-shadow: 0 2px 16px rgba(0, 0, 0, .55); }
.cl-banner h1 em { font-style: normal; color: var(--lime); }
.cl-banner h1::after {
  content: ""; display: block; width: 0; height: 4px; margin: 14px auto 0;
  background: var(--lime); border-radius: 4px; animation: cl-grow .8s .5s ease forwards;
}
.cl-letter { display: inline-block; animation: cl-drop .75s cubic-bezier(.2, .9, .3, 1.3) backwards; animation-delay: calc(var(--i) * 55ms + 100ms); }
.cl-banner p { max-width: 640px; margin: 22px auto 0; line-height: 1.8; font-size: 1.05rem; color: #f0fbfb; text-shadow: 0 1px 10px rgba(0, 0, 0, .6); animation: cl-fade .8s .5s ease backwards; }

/* ---------- search ---------- */
.cl-section { padding: 70px 6% 80px; }
.cl-search {
  position: relative; max-width: 420px; margin: 0 auto 14px;
  animation: cl-fade .8s .6s ease backwards;
}
.cl-search svg { position: absolute; left: 18px; top: 50%; transform: translateY(-50%); color: var(--teal2); pointer-events: none; }
.cl-search input {
  width: 100%; padding: 14px 18px 14px 48px; border: 1px solid #d9e3e3; border-radius: 30px;
  background: #fff; font: inherit; font-size: 15px; outline: 0;
  transition: border-color .25s, box-shadow .25s;
}
.cl-search input:focus { border-color: var(--teal); box-shadow: 0 0 0 4px rgba(18, 163, 165, .18); }
.cl-count { text-align: center; font-size: 13px; color: #888; margin-bottom: 34px; animation: cl-fade .8s .7s ease backwards; }

/* ---------- client cards ---------- */
.cl-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px; max-width: 1200px; margin: 0 auto; }
.cl-card {
  position: relative; background: #fff; border: 1px solid #e5e7eb; border-radius: 18px; overflow: hidden;
  padding: 24px 22px 26px; text-align: center;
  transition: transform .35s, box-shadow .35s, border-color .35s;
}
.cl-card:hover { transform: translateY(-8px); box-shadow: 0 18px 40px rgba(10, 111, 115, .2); border-color: var(--teal); }
.cl-card::after {
  content: ""; position: absolute; left: 0; bottom: 0; width: 100%; height: 4px;
  background: linear-gradient(90deg, var(--teal), var(--lime));
  transform: scaleX(0); transform-origin: left; transition: transform .45s ease;
}
.cl-card:hover::after { transform: scaleX(1); }
.cl-logo {
  position: relative; height: 130px; margin-bottom: 18px; padding: 14px; border-radius: 14px;
  background: #f7f8f8; border: 1px solid #eef0f0; overflow: hidden;
  display: flex; align-items: center; justify-content: center;
}
.cl-logo img { max-width: 100%; max-height: 100%; object-fit: contain; transition: transform .5s ease; }
.cl-card:hover .cl-logo img { transform: scale(1.12); }
.cl-logo::after {
  content: ""; position: absolute; top: 0; left: -80%; width: 50%; height: 100%; pointer-events: none;
  background: linear-gradient(100deg, transparent, rgba(255, 255, 255, .7), transparent); transform: skewX(-20deg);
}
.cl-card:hover .cl-logo::after { left: 130%; transition: left .9s ease; }
.cl-initial {
  width: 84px; height: 84px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, var(--teal), var(--teal2)); color: var(--lime);
  font-size: 34px; font-weight: 700; transition: transform .45s;
}
.cl-card:hover .cl-initial { transform: scale(1.1) rotate(-8deg); }
.cl-card h4 { font-size: 18px; color: #222; margin-bottom: 10px; transition: color .3s; }
.cl-card:hover h4 { color: var(--teal2); }
.cl-tag {
  display: inline-block; background: rgba(18, 163, 165, .12); color: var(--teal2);
  font-size: 12px; font-weight: 700; padding: 5px 14px; border-radius: 20px;
  transition: background .3s, color .3s;
}
.cl-card:hover .cl-tag { background: var(--lime); color: #111; }

.cl-empty { text-align: center; padding: 40px 0; color: #777; animation: cl-fade .6s ease backwards; }
.cl-empty button { margin-top: 14px; }

/* ---------- call to action ---------- */
.cl-cta {
  position: relative; overflow: hidden; text-align: center; color: #fff;
  background: linear-gradient(120deg, var(--teal), var(--teal2), #0f8f92, var(--teal));
  background-size: 300% 300%; animation: cl-shift 14s ease infinite;
  padding: 76px 6%;
}
.cl-cta::before, .cl-cta::after { content: ""; position: absolute; border-radius: 50%; pointer-events: none; }
.cl-cta > * { position: relative; z-index: 1; }
.cl-cta::before { left: 5%; top: -70px; width: 260px; height: 260px; background: rgba(255, 255, 255, .08); animation: cl-float 8s ease-in-out infinite; }
.cl-cta::after { right: 8%; bottom: -60px; width: 180px; height: 180px; background: rgba(184, 240, 60, .18); animation: cl-float 6s -2s ease-in-out infinite; }
.cl-cta h2 { font-size: 30px; text-transform: uppercase; margin-bottom: 12px; color: #fff; }
.cl-cta p { max-width: 540px; margin: 0 auto 26px; line-height: 1.7; color: #e6f7f7; }
.cl-btn { transition: transform .25s; animation: cl-glow 2.4s ease-in-out infinite; }
.cl-btn:hover { transform: translateY(-3px); }
@keyframes cl-glow { 0%, 100% { box-shadow: 0 0 0 0 rgba(184, 240, 60, .55); } 50% { box-shadow: 0 0 0 14px rgba(184, 240, 60, 0); } }

@media (max-width: 600px) { .cl-section { padding: 52px 5% 60px; } }
@media (prefers-reduced-motion: reduce) {
  [data-rv]:not(.cl-in) { opacity: 1; }
  .cl-in[data-rv], .cl-cta, .cl-cta::before, .cl-cta::after,
  .cl-letter, .cl-banner p, .cl-search, .cl-count, .cl-empty, .cl-btn { animation: none; }
  .cl-banner h1::after { animation: none; width: 80px; }
  .cl-card, .cl-card * { transition: none !important; }
}
`;

const Letters = ({ text, start = 0 }) =>
  [...text].map((c, i) => (
    <span className="cl-letter" style={{ "--i": start + i }} key={i}>{c === " " ? "\u00A0" : c}</span>
  ));

function Logo({ name, src }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="cl-logo">
      {!src || failed ? (
        <div className="cl-initial">{name[0]}</div>
      ) : (
        <img src={src} alt={name} onError={() => setFailed(true)} />
      )}
    </div>
  );
}

export default function Clients() {
  const [params, setParams] = useSearchParams();
  const q = params.get("q") || "";
  const list = clients.filter(([n, c]) => (n + c).toLowerCase().includes(q.toLowerCase()));

  // Scroll reveal: cards animate in the first time they appear (also after searching)
  useEffect(() => {
    const els = document.querySelectorAll("[data-rv]:not(.cl-in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("cl-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("cl-in"); io.unobserve(e.target); }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [q]);

  return (
    <main>
      <style>{css}</style>

      {/* ---------- BANNER (image24 / clients.png as full background) ---------- */}
      <section className="cl-banner">
        <img className="cl-bg" src={image24} alt="" />
        <div className="cl-hero">
          <h1 aria-label="Our Trusted Clients">
            <Letters text="Our Trusted " /><em><Letters text="Clients" start={12} /></em>
          </h1>
          <p>Businesses in healthcare, logistics, food and technology trust us with their growth.</p>
        </div>
      </section>

      <section className="cl-section">
        <div className="cl-search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
               strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            value={q}
            onChange={(e) => setParams(e.target.value ? { q: e.target.value } : {})}
            placeholder="Search clients..."
            aria-label="Search clients"
          />
        </div>
        <p className="cl-count">
          {q ? `Showing ${list.length} of ${clients.length} clients` : `${clients.length} trusted clients`}
        </p>

        <div className="cl-grid">
          {list.map(([n, c, logo], i) => (
            <div className="cl-card" data-rv style={{ "--d": `${(i % 4) * 100}ms` }} key={n}>
              <Logo name={n} src={logo} />
              <h4>{n}</h4>
              <span className="cl-tag">{c}</span>
            </div>
          ))}
        </div>

        {!list.length && (
          <div className="cl-empty">
            <p>No clients found.</p>
            <button type="button" className="btn lime" onClick={() => setParams({})}>Clear search</button>
          </div>
        )}
      </section>

      <section className="cl-cta">
        <h2 data-rv>Want your business here?</h2>
        <p data-rv style={{ "--d": "100ms" }}>Join the businesses growing with us. Tell us about your goals and we will take it from there.</p>
        <Link to="/contact" className="btn lime cl-btn">Become a Client</Link>
      </section>
    </main>
  );
}