import { useEffect } from "react";
import { Link } from "react-router-dom";
import ceoImg from "../assets/FKK.png";
import image22 from "../assets/About.png";

const css = `
/* ---------- scroll reveal ---------- */
[data-rv]:not(.ab-in) { opacity: 0; }
.ab-in[data-rv] {
  animation-duration: .85s; animation-timing-function: cubic-bezier(.2, .7, .2, 1);
  animation-delay: var(--d, 0ms); animation-fill-mode: backwards;
}
.ab-in[data-rv="up"]    { animation-name: ab-up; }
.ab-in[data-rv="left"]  { animation-name: ab-left; }
.ab-in[data-rv="right"] { animation-name: ab-right; }
.ab-in[data-rv="zoom"]  { animation-name: ab-zoom; }
@keyframes ab-up    { from { opacity: 0; transform: translateY(46px); } to { opacity: 1; transform: none; } }
@keyframes ab-left  { from { opacity: 0; transform: translateX(-60px); } to { opacity: 1; transform: none; } }
@keyframes ab-right { from { opacity: 0; transform: translateX(60px); } to { opacity: 1; transform: none; } }
@keyframes ab-zoom  { from { opacity: 0; transform: scale(.88); } to { opacity: 1; transform: none; } }
@keyframes ab-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-22px); } }
@keyframes ab-grow  { to { width: 80px; } }

/* ---------- banner / hero ---------- */
.ab-banner {
  position: relative; overflow: hidden; text-align: center; color: #fff;
  padding: 140px 6% 130px;
  background-color: var(--teal2);
  background-image: linear-gradient(rgba(0, 0, 0, .22), rgba(0, 0, 0, .22)), var(--hero-img);
  background-size: cover; background-position: center; background-repeat: no-repeat;
}
.ab-banner > * { position: relative; z-index: 1; }
.ab-banner h1 { font-size: clamp(2.2rem, 6vw, 3.6rem); text-transform: uppercase; text-shadow: 0 2px 16px rgba(0, 0, 0, .55); }
.ab-banner h1 em { font-style: normal; color: var(--lime); }
.ab-banner h1::after {
  content: ""; display: block; width: 0; height: 4px; margin: 14px auto 0;
  background: var(--lime); border-radius: 4px; animation: ab-grow .8s .5s ease forwards;
}
.ab-banner p { max-width: 700px; margin: 22px auto 0; line-height: 1.8; font-size: 1.05rem; color: #f0fbfb; text-shadow: 0 1px 10px rgba(0, 0, 0, .6); }

/* ---------- pillars ---------- */
.ab-section { padding: 80px 6%; }
.ab-center { text-align: center; }
.ab-section h2 { font-size: 32px; text-transform: uppercase; margin-bottom: 14px; }
.ab-sub { max-width: 560px; margin: 0 auto 40px; line-height: 1.7; color: #666; }
.ab-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 22px; }
.ab-card {
  background: #fff; border: 1px solid #e5e7eb; border-radius: 16px; padding: 34px 26px; text-align: center;
  transition: transform .3s, box-shadow .3s, border-color .3s;
}
.ab-card:hover { transform: translateY(-8px); box-shadow: 0 16px 36px rgba(10, 111, 115, .18); border-color: var(--teal); }
.ab-ico {
  width: 66px; height: 66px; margin: 0 auto 18px; border-radius: 18px;
  display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, var(--teal), var(--teal2)); transition: transform .4s;
}
.ab-card:hover .ab-ico { transform: rotate(-8deg) scale(1.1); }
.ab-card h4 { font-size: 20px; color: #222; margin-bottom: 10px; }
.ab-card p { font-size: 14.5px; color: #777; line-height: 1.7; }

/* ---------- who we are ---------- */
.ab-who { display: grid; grid-template-columns: 1fr 1.2fr; gap: 56px; align-items: center; background: #fff; }
.ab-photo {
  border-radius: 24px; overflow: hidden; aspect-ratio: 4 / 5; max-width: 420px; width: 100%; justify-self: center;
  border: 3px solid var(--lime); background: var(--teal2); box-shadow: 0 12px 34px rgba(0, 0, 0, .18);
}
.ab-photo img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .9s ease; }
.ab-photo:hover img { transform: scale(1.05); }
.ab-who h2 { text-align: left; }
.ab-who .ab-role { display: inline-block; background: var(--lime); color: #111; font-size: 12px; font-weight: 700; padding: 5px 14px; border-radius: 20px; margin-bottom: 18px; }
.ab-who p { line-height: 1.85; color: #666; margin-bottom: 14px; }

/* ---------- our values ---------- */
.ab-values {
  padding: 90px 4% 100px; text-align: center;
  background: linear-gradient(180deg, #eaf8f8 0%, #f7fcfc 70%, #fff 100%);
}
.ab-values h2 {
  font-size: clamp(2.4rem, 6vw, 4rem); text-transform: none; letter-spacing: -1px;
  color: #0b0b0b; margin-bottom: 14px;
}
.ab-values .ab-sub { margin-bottom: 56px; }
.ab-vgrid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px;
  max-width: 1400px; margin: 0 auto;
}
.ab-vcard {
  background: #fff; border-radius: 40px; padding: 46px 44px 52px; text-align: left;
  box-shadow: 0 4px 18px rgba(10, 111, 115, .06);
  transition: transform .35s, box-shadow .35s;
}
.ab-vcard:hover { transform: translateY(-8px); box-shadow: 0 20px 44px rgba(10, 111, 115, .16); }
.ab-vico {
  width: 96px; height: 96px; border-radius: 50%; margin-bottom: 52px;
  display: flex; align-items: center; justify-content: center;
  background: #f3f4f6; transition: background .35s, transform .4s;
}
.ab-vcard:hover .ab-vico { background: var(--lime); transform: rotate(-8deg) scale(1.06); }
.ab-vcard h4 { font-size: 28px; font-weight: 700; color: #0b0b0b; margin-bottom: 26px; letter-spacing: -.3px; }
.ab-vcard p { font-size: 17px; color: #4b5563; line-height: 2; }

/* ---------- call to action ---------- */
.ab-cta {
  text-align: center; color: #fff; padding: 80px 6%;
  background: linear-gradient(135deg, var(--teal), var(--teal2));
}
.ab-cta h2 { color: #fff; margin-bottom: 12px; }
.ab-cta p { max-width: 560px; margin: 0 auto 28px; line-height: 1.7; color: #e6f7f7; }
.ab-btns { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
.ab-btn { transition: transform .25s, box-shadow .25s; }
.ab-btn:hover { transform: translateY(-3px); box-shadow: 0 10px 22px rgba(0, 0, 0, .25); }
.ab-btn.ghost { background: transparent; border: 2px solid #fff; color: #fff; }

@media (max-width: 850px) {
  .ab-banner { padding: 100px 6% 90px; }
  .ab-who { grid-template-columns: 1fr; }
  .ab-who h2 { text-align: center; }
  .ab-who { text-align: center; }
}
@media (max-width: 560px) {
  .ab-vcard { padding: 34px 28px 40px; border-radius: 30px; }
  .ab-vico { width: 80px; height: 80px; margin-bottom: 34px; }
}
@media (prefers-reduced-motion: reduce) {
  [data-rv]:not(.ab-in) { opacity: 1; }
  .ab-in[data-rv] { animation: none; }
  .ab-banner h1::after { animation: none; width: 80px; }
  .ab-card, .ab-card *, .ab-vcard, .ab-vcard *, .ab-photo img, .ab-btn { transition: none !important; }
}
`;

const Ico = ({ children, size = 32, color = "#fff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);

const pillars = [
  {
    title: "Our Mission",
    text: "To help businesses grow with smart strategy, creative content and results you can measure.",
    icon: <Ico><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></Ico>,
  },
  {
    title: "Our Vision",
    text: "To be the most trusted digital partner for growing brands, from local shops to international companies.",
    icon: <Ico><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></Ico>,
  },
  {
    title: "Our Values",
    text: "Honesty, speed, creativity and a real commitment to our clients' success.",
    icon: <Ico><path d="M6 3h12l4 6-10 12L2 9z" /><path d="M11 3 8 9l4 12 4-12-3-6" /><path d="M2 9h20" /></Ico>,
  },
];

// Our values: written for a social media & digital agency. Edit the wording to match your team.
const vIcon = { size: 38, color: "#0a6f73" };
const values = [
  {
    title: "Transparency",
    text: "No hidden fees and no vanity numbers. You see what we post, what we spend on ads and what it brings in, in plain monthly reports.",
    icon: <Ico {...vIcon}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></Ico>,
  },
  {
    title: "Creativity",
    text: "Your brand should stand out in the feed. We bring fresh ideas to every post, reel, ad and website, never recycled templates.",
    icon: <Ico {...vIcon}><path d="M9 18h6" /><path d="M10 22h4" /><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2V17h6v-.3c0-.8.4-1.5 1-2A7 7 0 0 0 12 2z" /></Ico>,
  },
  {
    title: "Performance",
    text: "Likes are nice, growth is better. Every campaign is tied to real goals like reach, leads and sales, and we track it from day one.",
    icon: <Ico {...vIcon}><path d="M3 3v18h18" /><polyline points="7 15 11 11 14 14 20 7" /><polyline points="15 7 20 7 20 12" /></Ico>,
  },
  {
    title: "Partnership",
    text: "You talk directly to the people doing the work. We reply fast, share ideas openly and treat your business like our own.",
    icon: <Ico {...vIcon}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></Ico>,
  },
];

export default function About() {
  // Scroll reveal: elements marked data-rv animate in the first time they appear
  useEffect(() => {
    const els = document.querySelectorAll("[data-rv]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("ab-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("ab-in"); io.unobserve(e.target); }
      }),
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      <style>{css}</style>

      {/* ---------- BANNER (image22 as full background) ---------- */}
      <section className="ab-banner" style={{ "--hero-img": `url(${image22})` }}>
        <h1 data-rv="up">About <em>Us</em></h1>
        <p data-rv="up" style={{ "--d": "150ms" }}>
          We are a full-service Social and Digital Agency helping businesses grow
          with smart strategy, dependable support and results you can measure.
        </p>
      </section>

      {/* ---------- MISSION / VISION / VALUES ---------- */}
      <section className="ab-section ab-center">
        <h2 data-rv="up">What We <span className="teal">Stand For</span></h2>
        <p className="ab-sub" data-rv="up" style={{ "--d": "100ms" }}>The ideas behind every project we take on.</p>
        <div className="ab-grid">
          {pillars.map((p, i) => (
            <div className="ab-card" data-rv="up" style={{ "--d": `${i * 120}ms` }} key={p.title}>
              <div className="ab-ico">{p.icon}</div>
              <h4>{p.title}</h4>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- WHO WE ARE ---------- */}
      <section className="ab-section ab-who">
        <div className="ab-photo" data-rv="left">
          <img src={ceoImg} alt="Muhammad Fayaz, CEO" />
        </div>
        <div data-rv="right">
          <h2>Led by <span className="teal">Engr. Muhammad Fayaz</span></h2>
          <span className="ab-role">CEO · Full Stack Web Developer · AI Developer</span>
          <p>
           Business Elevate Digital is led by Engr.Muhammad Fayaz, a hands-on web and AI developer with a master’s degree. He built the team around one clear idea: digital work should be fast, smart and genuinely useful.
          </p>
          <p>
           From social media and content creation to websites, SEO and paid advertising, we take care of every detail, so you can focus on running your business while we help it grow, 24/7.
          </p>
        </div>
      </section>

      {/* ---------- OUR VALUES ---------- */}
      <section className="ab-values">
        <h2 data-rv="up">Our <span className="teal">values</span></h2>
        <p className="ab-sub" data-rv="up" style={{ "--d": "100ms" }}>
          How we work with every brand, from the first call to the monthly report.
        </p>
        <div className="ab-vgrid">
          {values.map((v, i) => (
            <div className="ab-vcard" data-rv="up" style={{ "--d": `${i * 120}ms` }} key={v.title}>
              <div className="ab-vico">{v.icon}</div>
              <h4>{v.title}</h4>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- CALL TO ACTION ---------- */}
      <section className="ab-cta">
        <h2 data-rv="up">Ready to grow your business?</h2>
        <p data-rv="up" style={{ "--d": "100ms" }}>Tell us about your goals and we will show you how we can help.</p>
        <div className="ab-btns" data-rv="up" style={{ "--d": "200ms" }}>
          <Link to="/contact" className="btn lime ab-btn">Work With Us</Link>
          <Link to="/services" className="btn ab-btn ghost">See Our Services</Link>
        </div>
      </section>
    </main>
  );
}