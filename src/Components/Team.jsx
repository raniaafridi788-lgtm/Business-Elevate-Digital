import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/rania.png";
import image2 from "../assets/hina.jpg";
import image3 from "../assets/tauseef.jpg";
import image4 from "../assets/Adnan.jpg";
import image5 from "../assets/bilal.jpg";
import image6 from "../assets/Samreen.jpg";
import image7 from "../assets/Ayaz.jpg";
import image8 from "../assets/Rehman.jpg";
import image23 from "../assets/team.png";
import image30 from "../assets/FKK.jpg"

const team = [
  {
    name: "Engr. Muhammad Fayaz",
    role: "Founder & CEO",
    info: "Full Stack Web Developer & AI Developer",
    edu: "MS AI ",
    exp: "5+ Years Experience",
    photo: image30,
  },
  {
    name: "Rania",
    role: "Graphic Designer",
    info: "Branding, social media graphics and ad creatives",
    exp: "3 Years Experience",
    photo: image1,
  },
    {
    name: "Rehman Ahmed",
    role: "AI Developer",
    info: "AI chatbots, automation tools and AI-powered web solutions",
    exp: "3 Years Experience",
    photo: image8,
  },
  {
    name: "Tauseef Ahmed",
    role: "SEO Specialist",
    info: "Keyword research, on-page SEO and link building",
    exp: "3 Years Experience",
    photo: image3,
    pos: "center",
  },
  {
    name: "Muhammad Ayaz",
    role: "Paid Ads Specialist",
    info: "Meta, Google and TikTok ad campaigns with clear reporting",
    exp: "4 Years Experience",
    photo: image7,
  },
  {
    name: "Muhammad Adnan",
    role: "Social Media Manager",
    info: "Content planning, community growth and daily posting",
    exp: "4 Years Experience",
    photo: image4,
    pos: "center 25%",
  },
  {
    name: "Samreen khalil",
    role: "Business Coordinator",
    info: "Managing tasks, schedules and communication between your business and our team",
    exp: "2 Years Experience",
    photo: image6,
  },
  {
    name: "Hina Malik",
    role: "Content creator",
    info: "AI content, blogs, and social media posts",
    exp: "2 Years Experience",
    photo: image2,
  },
  {
    name: "Bilal Ahmad",
    role: "Video Editor",
    info: "Reels, short-form video and motion graphics",
    exp: "2 Years Experience",
    photo: image5,
  },
];

const css = `
/* ---------- scroll reveal ---------- */
[data-rv]:not(.tm-in) { opacity: 0; }
.tm-in[data-rv] {
  animation: tm-up .85s cubic-bezier(.2, .7, .2, 1) var(--d, 0ms) backwards;
}
@keyframes tm-up { from { opacity: 0; transform: translateY(46px) scale(.96); } to { opacity: 1; transform: none; } }
@keyframes tm-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-22px); } }
@keyframes tm-shift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
@keyframes tm-drop { from { opacity: 0; transform: translateY(-46px) rotate(-8deg); } to { opacity: 1; transform: none; } }
@keyframes tm-grow { to { width: 80px; } }
@keyframes tm-fade { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }

/* ---------- banner (team.png as full background) ---------- */
.tm-banner {
  position: relative; overflow: hidden; text-align: center; color: #fff;
  padding: 140px 6% 130px;
  background-color: var(--teal2);
  background-image: linear-gradient(rgba(0, 0, 0, .22), rgba(0, 0, 0, .22)), var(--hero-img);
  background-size: cover; background-position: center; background-repeat: no-repeat;
}
.tm-banner > * { position: relative; z-index: 1; }
.tm-banner h1 { font-size: clamp(2.2rem, 6vw, 3.6rem); text-transform: uppercase; text-shadow: 0 2px 16px rgba(0, 0, 0, .55); }
.tm-banner h1 em { font-style: normal; color: var(--lime); }
.tm-banner h1::after {
  content: ""; display: block; width: 0; height: 4px; margin: 14px auto 0;
  background: var(--lime); border-radius: 4px; animation: tm-grow .8s .5s ease forwards;
}
.tm-letter { display: inline-block; animation: tm-drop .75s cubic-bezier(.2, .9, .3, 1.3) backwards; animation-delay: calc(var(--i) * 70ms + 100ms); }
.tm-banner p { max-width: 680px; margin: 22px auto 0; line-height: 1.8; font-size: 1.05rem; color: #f0fbfb; text-shadow: 0 1px 10px rgba(0, 0, 0, .6); animation: tm-fade .8s .5s ease backwards; }

/* ---------- team grid ---------- */
.tm-section { padding: 80px 6%; }
.tm-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 260px)); justify-content: center; gap: 22px; max-width: 1200px; margin: 0 auto; }
.tm-card {
  position: relative; display: flex; flex-direction: column; background: #fff;
  border: 1px solid #e5e7eb; border-radius: 16px; overflow: hidden; text-align: center;
  transition: transform .35s, box-shadow .35s, border-color .35s;
}
.tm-card:hover { transform: translateY(-6px); box-shadow: 0 18px 40px rgba(10, 111, 115, .2); border-color: var(--teal); }
.tm-lead { border-color: var(--lime); box-shadow: 0 0 0 3px rgba(184, 240, 60, .35); }

.tm-photo {
  position: relative; aspect-ratio: 1 / 1; overflow: hidden;
  background: linear-gradient(135deg, var(--teal), var(--teal2));
}
.tm-photo img { width: 100%; height: 100%; object-fit: cover; object-position: top; display: block; transition: transform .8s ease; }
.tm-card:hover .tm-photo img { transform: scale(1.08); }
.tm-photo::before {
  content: ""; position: absolute; inset: 0; z-index: 1; pointer-events: none;
  background: linear-gradient(to top, rgba(6, 50, 54, .55), transparent 45%);
}
.tm-photo::after {
  content: ""; position: absolute; top: 0; left: -80%; width: 50%; height: 100%; z-index: 2; pointer-events: none;
  background: linear-gradient(100deg, transparent, rgba(255, 255, 255, .35), transparent); transform: skewX(-20deg);
}
.tm-card:hover .tm-photo::after { left: 130%; transition: left .9s ease; }
.tm-fallback {
  width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;
  font-size: 70px; font-weight: 700; color: var(--lime);
}
.tm-role {
  position: absolute; left: 50%; bottom: 12px; transform: translateX(-50%); z-index: 3; white-space: nowrap;
  background: var(--lime); color: #111; font-size: 11px; font-weight: 700; padding: 5px 13px; border-radius: 20px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, .2); transition: transform .35s;
}
.tm-card:hover .tm-role { transform: translateX(-50%) translateY(-4px); }
.tm-badge {
  position: absolute; top: 10px; left: 10px; z-index: 3;
  background: #fff; color: var(--teal2); font-size: 10px; font-weight: 700; letter-spacing: .5px; text-transform: uppercase;
  padding: 5px 10px; border-radius: 20px; box-shadow: 0 6px 16px rgba(0, 0, 0, .18);
}

.tm-body { padding: 16px 16px 12px; flex: 1; }
.tm-body h4 { font-size: 18px; color: #222; margin-bottom: 6px; transition: color .3s; }
.tm-card:hover .tm-body h4 { color: var(--teal2); }
.tm-body p { font-size: 13px; color: #777; line-height: 1.5; }

.tm-meta {
  position: relative; display: flex; flex-direction: column; align-items: center; gap: 6px;
  border-top: 1px solid #e5e7eb; padding: 12px 14px;
  font-size: 12px; font-weight: 600; color: var(--teal2);
}
.tm-meta span { display: inline-flex; align-items: center; gap: 6px; }
.tm-meta svg { width: 15px; height: 15px; }
.tm-meta svg { transition: transform .35s; }
.tm-card:hover .tm-meta svg { transform: scale(1.2) rotate(-8deg); }
.tm-meta::before {
  content: ""; position: absolute; left: 0; top: -1px; width: 100%; height: 3px;
  background: linear-gradient(90deg, var(--teal), var(--lime));
  transform: scaleX(0); transform-origin: left; transition: transform .45s ease;
}
.tm-card:hover .tm-meta::before { transform: scaleX(1); }

/* ---------- call to action ---------- */
.tm-cta {
  position: relative; overflow: hidden; text-align: center; color: #fff;
  background: linear-gradient(120deg, var(--teal), var(--teal2), #0f8f92, var(--teal));
  background-size: 300% 300%; animation: tm-shift 14s ease infinite;
  padding: 76px 6%;
}
.tm-cta::before, .tm-cta::after { content: ""; position: absolute; border-radius: 50%; pointer-events: none; }
.tm-cta > * { position: relative; z-index: 1; }
.tm-cta::before { left: 5%; top: -70px; width: 260px; height: 260px; background: rgba(255, 255, 255, .08); animation: tm-float 8s ease-in-out infinite; }
.tm-cta::after { right: 8%; bottom: -60px; width: 180px; height: 180px; background: rgba(184, 240, 60, .18); animation: tm-float 6s -2s ease-in-out infinite; }
.tm-cta h2 { font-size: 30px; text-transform: uppercase; margin-bottom: 12px; color: #fff; }
.tm-cta p { max-width: 540px; margin: 0 auto 26px; line-height: 1.7; color: #e6f7f7; }
.tm-btn { transition: transform .25s, box-shadow .25s; animation: tm-glow 2.4s ease-in-out infinite; }
.tm-btn:hover { transform: translateY(-3px); }
@keyframes tm-glow { 0%, 100% { box-shadow: 0 0 0 0 rgba(184, 240, 60, .55); } 50% { box-shadow: 0 0 0 14px rgba(184, 240, 60, 0); } }

@media (max-width: 850px) { .tm-banner { padding: 100px 6% 90px; } }
@media (max-width: 600px) { .tm-grid { grid-template-columns: minmax(0, 300px); } .tm-section { padding: 56px 5%; } }
@media (prefers-reduced-motion: reduce) {
  [data-rv]:not(.tm-in) { opacity: 1; }
  .tm-in[data-rv], .tm-cta, .tm-cta::before, .tm-cta::after,
  .tm-letter, .tm-banner p, .tm-btn { animation: none; }
  .tm-banner h1::after { animation: none; width: 80px; }
  .tm-card, .tm-card * { transition: none !important; }
}
`;

const Letters = ({ text, start = 0 }) =>
  [...text].map((c, i) => (
    <span className="tm-letter" style={{ "--i": start + i }} key={i}>{c === " " ? "\u00A0" : c}</span>
  ));

const Ico = ({ children }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);

function Photo({ name, src, pos }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return <div className="tm-fallback">{name[0]}</div>;
  }
  return <img src={src} alt={name} style={pos ? { objectPosition: pos } : undefined} onError={() => setFailed(true)} />;
}

export default function Team() {
  // Scroll reveal: each card animates in the first time it appears
  useEffect(() => {
    const els = document.querySelectorAll("[data-rv]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("tm-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("tm-in"); io.unobserve(e.target); }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      <style>{css}</style>

      {/* ---------- BANNER (image23 / team.png as full background) ---------- */}
      <section className="tm-banner" style={{ "--hero-img": `url(${image23})` }}>
        <h1 aria-label="Our Team"><Letters text="Our " /><em><Letters text="Team" start={4} /></em></h1>
        <p>
          A skilled team of developers, designers and marketers working together
          to grow your business.
        </p>
      </section>

      <section className="tm-section">
        <div className="tm-grid">
          {team.map((m, i) => (
            <article
              className={"tm-card" + (i === 0 ? " tm-lead" : "")}
              data-rv
              style={{ "--d": `${(i % 3) * 120}ms` }}
              key={m.name}
            >
              <div className="tm-photo">
                <Photo name={m.name} src={m.photo} pos={m.pos} />
                {i === 0 && <span className="tm-badge">Founder</span>}
                <span className="tm-role">{m.role}</span>
              </div>
              <div className="tm-body">
                <h4>{m.name}</h4>
                <p>{m.info}</p>
              </div>
              <div className="tm-meta">
                {m.edu && (
                  <span>
                    <Ico><path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5c3 2.5 9 2.5 12 0v-5" /></Ico>
                    {m.edu}
                  </span>
                )}
                <span>
                  <Ico><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></Ico>
                  {m.exp}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="tm-cta">
        <h2 data-rv>Want to work with our team?</h2>
        <p data-rv style={{ "--d": "100ms" }}>Tell us about your business and we will put the right people on it.</p>
        <Link to="/contact" className="btn lime tm-btn">Get in Touch</Link>
      </section>
    </main>
  );
}