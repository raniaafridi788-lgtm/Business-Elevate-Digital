import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import image10 from "../assets/FKK.png";
import image11 from "../assets/web.jpg";
import image12 from "../assets/socialmedia.jpg";
import image13 from "../assets/AICreation.jpg";
import image14 from "../assets/SEO.jpg";
import image15 from "../assets/Ads.jpg";
import image16 from "../assets/branding.jpg";
import image21 from "../assets/image21.png";
// Client photos: put each picture in /assets, import it here, then set it as `image` on that review below.
import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";
import client4 from "../assets/client4.jpg";
import client5 from "../assets/client5.jpg";
import client6 from "../assets/client6.jpg";
import client7 from "../assets/client7.jpg";
import client8 from "../assets/client8.jpg";

/* Small extra CSS for the new sections. It reuses your existing variables
   (--teal, --teal2, --lime, --dark, --bg) and classes (.section, .grid, .card,
   .hover, .icon, .avatar, .btn.lime, .role-tag, .footer, .fgrid, .copy),
   so the page matches your hero exactly. */
const css = `
.hx-teal { background: linear-gradient(135deg, var(--teal), var(--teal2)); color: #fff; }
.hx-teal h2 { color: #fff; }
.hx-teal h2 .accent { color: var(--lime); }

.hx-sub { max-width: 560px; margin: -14px auto 34px; line-height: 1.7; color: #666; }
.hx-teal .hx-sub { color: #e6f7f7; }

/* CEO */
.hx-ceo { display: grid; grid-template-columns: 1.2fr 1fr; gap: 50px; align-items: center; }
.hx-ceo h2 { margin-bottom: 10px; }
.hx-ceo .lead { margin: 18px 0 28px; max-width: 580px; color: #e6f7f7; text-align: left; }
.hx-ceo-cards { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
.hx-glass {
  background: rgba(255, 255, 255, .12);
  border: 1px solid rgba(255, 255, 255, .28);
  border-radius: 16px; padding: 20px; text-align: left; color: #fff;
}
.hx-glass h4 { margin: 10px 0 6px; }
.hx-glass p { font-size: 14px; color: #e6f7f7; line-height: 1.55; }
.hx-glass .icon {
  display: inline-flex; align-items: center; justify-content: center;
  width: 46px; height: 46px; border-radius: 12px; background: var(--lime); font-size: 22px;
}
.hx-ceo-photo {
  border-radius: 24px; overflow: hidden; aspect-ratio: 4 / 5;
  border: 3px solid var(--lime); background: var(--teal2);
  box-shadow: 0 12px 34px rgba(0, 0, 0, .25);
}
.hx-ceo-photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
.hx-fallback {
  width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;
  font-size: 90px; font-weight: 700; color: var(--lime);
}

/* Services (image cards) */
.hx-svc {
  display: flex; flex-direction: column; background: #fff; text-align: left; color: inherit;
  border: 1px solid #e5e7eb; border-radius: 6px; overflow: hidden;
  transition: box-shadow .3s, transform .3s, border-color .3s;
}
.hx-svc:hover { box-shadow: 0 16px 36px rgba(10, 111, 115, .18); transform: translateY(-6px); border-color: #cfe9ea; }
.hx-svc:focus-visible { outline: 3px solid var(--teal); outline-offset: 2px; }
.hx-svc-img {
  position: relative; height: 200px; overflow: hidden;
  display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, var(--teal), var(--teal2));
}
.hx-svc-img img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .7s ease; }
.hx-svc:hover .hx-svc-img img { transform: scale(1.1); }
.hx-svc-img::after {
  content: ""; position: absolute; top: 0; left: -80%; width: 50%; height: 100%;
  background: linear-gradient(100deg, transparent, rgba(255, 255, 255, .35), transparent);
  transform: skewX(-20deg);
}
.hx-svc:hover .hx-svc-img::after { left: 130%; transition: left .9s ease; }
.hx-svc-body { padding: 26px 24px 20px; flex: 1; display: flex; flex-direction: column; }
.hx-svc-body h4 { font-size: 21px; font-weight: 500; color: #222; line-height: 1.3; margin-bottom: 10px; transition: color .3s; }
.hx-svc:hover .hx-svc-body h4 { color: var(--teal2); }
.hx-svc-body p { font-size: 14px; color: #777; line-height: 1.6; margin-bottom: 20px; }
.hx-svc-by { display: flex; align-items: center; gap: 14px; margin-top: auto; font-size: 15px; color: #777; }
.hx-svc-by strong { color: #222; font-weight: 600; }
.hx-svc-av {
  width: 46px; height: 46px; border-radius: 50%; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  background: var(--teal2); color: var(--lime); font-weight: 700; font-size: 18px;
  transition: transform .4s;
}
.hx-svc:hover .hx-svc-av { transform: scale(1.12) rotate(-8deg); }
.hx-svc-foot {
  position: relative; border-top: 1px solid #e5e7eb; padding: 14px 24px;
  font-size: 14px; font-weight: 600; color: var(--teal2); transition: color .3s;
}
.hx-svc-foot::before {
  content: ""; position: absolute; left: 0; top: -1px; width: 100%; height: 3px;
  background: linear-gradient(90deg, var(--teal), var(--lime));
  transform: scaleX(0); transform-origin: left; transition: transform .45s ease;
}
.hx-svc:hover .hx-svc-foot::before { transform: scaleX(1); }
.hx-svc:hover .hx-svc-foot { color: var(--teal); }
.hx-go { display: inline-block; transition: transform .3s; }
.hx-svc:hover .hx-go { transform: translateX(8px); }

/* Why choose us / Industries Grid */
.hx-why { text-align: center; }
.hx-why .icon { margin: 0 auto; }
.hx-ind-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 0;
}
@media (max-width: 900px) {
  .hx-ind-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .hx-ind-grid { grid-template-columns: 1fr; }
}

/* Testimonials (photo cards, auto-sliding) */
.hx-slider { overflow: hidden; margin: 0 -10px 18px; padding: 12px 0; }
.hx-track { display: flex; transition: transform .6s ease; }
.hx-slide { padding: 0 10px; box-sizing: border-box; }
.hx-tcard {
  position: relative; height: 520px; border-radius: 28px; overflow: hidden;
  display: flex; align-items: flex-end; text-align: left; color: #fff;
  background: linear-gradient(160deg, var(--teal), var(--teal2)) center / cover no-repeat;
  box-shadow: 0 10px 28px rgba(0, 0, 0, .15);
}
.hx-tcard::before {
  content: ""; position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, .92) 0%, rgba(0, 0, 0, .68) 42%, rgba(0, 0, 0, .08) 72%);
}
.hx-mark {
  position: absolute; left: 50%; top: 70px; transform: translateX(-50%);
  width: 120px; height: 120px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: rgba(255, 255, 255, .14); border: 2px solid rgba(255, 255, 255, .35);
  font-size: 42px; font-weight: 700; letter-spacing: 2px; color: #fff;
}
.hx-quote { position: absolute; top: 24px; right: 26px; font: 700 84px/1 Georgia, serif; color: #fff; opacity: .3; }
.hx-tbody { position: relative; width: 100%; padding: 28px; }
.hx-tbody h4 { font-size: 26px; font-weight: 700; margin-bottom: 4px; }
.hx-trole { display: block; font-size: 14px; color: rgba(255, 255, 255, .72); margin-bottom: 16px; }
.hx-ttext {
  font-size: 15.5px; line-height: 1.65; margin-bottom: 10px;
  display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;
}
.hx-more {
  display: inline-block; margin-bottom: 18px; padding: 0; border: 0; background: none; cursor: pointer;
  font: inherit; font-size: 14px; font-weight: 600; color: var(--lime); text-decoration: underline;
}
.hx-full { display: block; -webkit-line-clamp: unset; overflow: visible; }
.hx-open::before { background: linear-gradient(to top, rgba(0, 0, 0, .94), rgba(0, 0, 0, .8)); }
.hx-open .hx-tbody { max-height: 100%; overflow-y: auto; }
.hx-tfoot {
  display: flex; justify-content: space-between; align-items: center;
  border-top: 1px solid rgba(255, 255, 255, .25); padding-top: 16px;
  font-size: 13px; color: rgba(255, 255, 255, .72);
}
.hx-stars { color: #f5b301; letter-spacing: 3px; font-size: 20px; }
.hx-nav { display: flex; align-items: center; justify-content: center; gap: 18px; margin-bottom: 30px; }
.hx-arrow {
  width: 40px; height: 40px; border-radius: 50%; cursor: pointer;
  border: 2px solid var(--teal); background: #fff; color: var(--teal2);
  font-size: 22px; line-height: 1; padding-bottom: 3px; transition: .2s;
}
.hx-arrow:hover { background: var(--teal); color: #fff; }

/* ---------- animations ---------- */
[data-rv]:not(.hx-in) { opacity: 0; }
.hx-in[data-rv] {
  animation-duration: .85s; animation-timing-function: cubic-bezier(.2, .7, .2, 1);
  animation-delay: var(--d, 0ms); animation-fill-mode: backwards;
}
.hx-in[data-rv="up"]    { animation-name: hx-up; }
.hx-in[data-rv="left"]  { animation-name: hx-left; }
.hx-in[data-rv="right"] { animation-name: hx-right; }
.hx-in[data-rv="zoom"]  { animation-name: hx-zoom; }
@keyframes hx-up    { from { opacity: 0; transform: translateY(46px); } to { opacity: 1; transform: none; } }
@keyframes hx-left  { from { opacity: 0; transform: translateX(-60px); } to { opacity: 1; transform: none; } }
@keyframes hx-right { from { opacity: 0; transform: translateX(60px); } to { opacity: 1; transform: none; } }
@keyframes hx-zoom  { from { opacity: 0; transform: scale(.88); } to { opacity: 1; transform: none; } }

/* hero */
.hero { position: relative; }
.hero-text > * { animation: hx-up .85s cubic-bezier(.2, .7, .2, 1) backwards; }
.hero-text > :nth-child(1) { animation-delay: .1s; }
.hero-text > :nth-child(2) { animation-delay: .28s; }
.hero-text > :nth-child(3) { animation-delay: .5s; }
.hero-text > :nth-child(4) { animation-delay: .7s; }
.hero::before, .hero::after { content: ""; position: absolute; border-radius: 50%; pointer-events: none; }
.hero::before { right: 8%; top: 12%; width: 340px; height: 340px; background: rgba(255, 255, 255, .08); animation: hx-float 9s ease-in-out infinite; }
.hero::after  { right: 22%; bottom: 10%; width: 190px; height: 190px; background: rgba(184, 240, 60, .18); animation: hx-float 7s -3s ease-in-out infinite; }
@keyframes hx-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-24px); } }

.hero.hx-hero-bg {
  background-size: cover; background-position: center; background-repeat: no-repeat;
  overflow: hidden;
}
.hero.hx-hero-bg::before, .hero.hx-hero-bg::after { display: none; }
.hero.hx-hero-bg .hero-text { position: relative; z-index: 2; }
.hero.hx-hero-bg .hero-text h1,
.hero.hx-hero-bg .hero-text .best { color: #fff; text-shadow: 0 2px 4px rgba(0, 0, 0, .55), 0 4px 22px rgba(0, 0, 0, .5); }

/* hero heading (professional) */
.hero .hero-text h1 {
  font-size: clamp(32px, 5vw, 60px); font-weight: 800; line-height: 1.12;
  letter-spacing: -0.5px; max-width: 700px; margin: 0 0 16px;
}
.hx-h1-accent { color: var(--lime); }
.hx-eyebrow {
  display: inline-block; margin-bottom: 18px; padding: 7px 16px; border-radius: 999px;
  background: rgba(184, 240, 60, .16); border: 1px solid var(--lime);
  color: var(--lime); font-size: 13px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase;
}
.hx-hero-sub {
  max-width: 540px; margin: 0 0 28px; font-size: 18px; line-height: 1.65; color: #f1f5f5;
  text-shadow: 0 2px 10px rgba(0, 0, 0, .5);
}

.hx-glass { transition: transform .3s, background .3s, border-color .3s; }
.hx-glass:hover { transform: translateY(-5px); background: rgba(255, 255, 255, .2); border-color: rgba(255, 255, 255, .55); }
.hx-glass .icon { transition: transform .35s; }
.hx-glass:hover .icon { transform: translateY(-4px) rotate(-8deg) scale(1.08); }
.hx-ceo-photo img { transition: transform .9s ease; }
.hx-ceo-photo:hover img { transform: scale(1.05); }
.hx-tcard { transition: transform .35s, box-shadow .35s; }
.hx-tcard:hover { transform: translateY(-6px); box-shadow: 0 18px 38px rgba(0, 0, 0, .25); }
.hx-cta { transition: transform .25s, box-shadow .25s; }
.hx-cta:hover { transform: translateY(-3px); box-shadow: 0 10px 22px rgba(184, 240, 60, .45); }

@media (max-width: 850px) {
  .hero::before, .hero::after { display: none; }
  .hx-ceo { grid-template-columns: 1fr; }
  .hx-ceo-photo { max-width: 380px; width: 100%; margin: 0 auto; }
}
@media (max-width: 560px) {
  .hx-ceo-cards { grid-template-columns: 1fr; }
  .hx-tcard { height: 480px; }
}
`;

// For each review: change `name` to the client's name, and set `image` to their photo (e.g. image: client1).
// With no photo, the card shows the person's initials automatically.
const reviews = [
  { name: "Kamran Khan", role: "Client · G Care", image: client1, rating: 5,
    text: "Professional, fast and reliable. They handled everything for our business end to end.",
    full: "From planning to launch we always knew what was happening and what came next. Deadlines were met, questions were answered quickly, and the final result looked exactly like our business. We would gladly work with them again." },
  { name: "Muhammad Rehan", role: "Client · TechNexus Virtual University", image: client2, rating: 5,
    text: "Our growth improved a lot after working with this agency. Highly recommended.",
    full: "Our website, campaigns and reporting are now handled in one place, and the team explains every step clearly. We have seen steady growth since the first month, and we always know what is working." },
  { name: "shah Roz", role: "Client · SZ Dispatching LLC", image: client3, rating: 5,
    text: "Great communication and results. The team is always available when we need them.",
    full: "Whenever we had a question or an urgent change, someone replied the same day. That kind of support is rare, and it has made working together easy. The results speak for themselves." },
  { name: "Ahmed Khan", role: "Client · Alkhan Restaurant Lahore", image: client4, rating: 5,
    text: "They helped us reach more customers and the results were visible within weeks.",
    full: "Our social pages are active again, new customers mention finding us online, and the content actually looks like our restaurant. It felt like having a marketing team in-house." },
  { name: "Fakhir Zaman", role: "Client · G & P Logistics KSA", image: client5, rating: 5,
    text: "From the website to our online presence, everything was delivered on time. We now get regular inquiries from new customers.",
    full: "The team took the time to understand our logistics business and kept everything simple for our customers to use. Communication was clear from the first call to the final delivery." },
  { name: "Sarah Jaseem", role: "Client · Doctor Pharmacy", image: client6, rating: 5,
    text: "They made our pharmacy easy to find online and our social pages look professional. Customers notice the difference.",
    full: "Our customers can now find our details quickly, and the pages look trustworthy. The team handled the whole setup without taking up much of our time." },
  { name: "Ali Raza", role: "Client · Quetta Cafe", image: client7, rating: 5,
    text: "Our cafe is now easy to find online, and our posts bring in new guests every week.",
    full: "The photos and posts finally look like our cafe, and more people mention seeing us on social media. The team replies quickly and always keeps our daily work in mind." },
  { name: "Usman Ali", role: "Client · MI One Logistics", image: client8, rating: 5,
    text: "A dependable team. Our online presence looks professional and inquiries have increased.",
    full: "They understood our logistics business, set everything up on time, and kept us informed at each step. We now look more trustworthy to new customers, and the results are easy to see." },
];

const initials = (name) =>
  name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");

const cardBg = [
  "linear-gradient(160deg, #12a3a5, #0a6f73)",
  "linear-gradient(200deg, #0a6f73, #0a4a4e)",
  "linear-gradient(150deg, #1bb8b0, #0a6f73)",
  "linear-gradient(190deg, #0f8f92, #07474b)",
];
const glow = "radial-gradient(circle at 82% 14%, rgba(184,240,60,.28), transparent 42%)";

function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [open, setOpen] = useState(null);
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const base = width >= 1100 ? 4 : width >= 700 ? 2 : 1;
  const per = Math.max(1, Math.min(base, reviews.length - 1));
  const last = reviews.length - per;

  useEffect(() => { setIndex((i) => Math.min(i, last)); }, [last]);
  useEffect(() => { setOpen(null); }, [index]);

  useEffect(() => {
    if (paused || open !== null || last <= 0) return;
    const t = setInterval(() => setIndex((i) => (i >= last ? 0 : i + 1)), 5000);
    return () => clearInterval(t);
  }, [paused, open, last]);

  return (
    <>
      <div className="hx-slider" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="hx-track" style={{ transform: `translateX(-${index * (100 / per)}%)` }}>
          {reviews.map((r, n) => (
            <div className="hx-slide" style={{ flex: `0 0 ${100 / per}%` }} key={n}>
              <article
                className={"hx-tcard" + (open === n ? " hx-open" : "")}
                style={{ backgroundImage: r.image ? `url(${r.image})` : `${glow}, ${cardBg[n % cardBg.length]}` }}
              >
                {!r.image && <div className="hx-mark" aria-hidden="true">{initials(r.name)}</div>}
                <span className="hx-quote" aria-hidden="true">{"\u201D"}</span>
                <div className="hx-tbody">
                  <h4>{r.name}</h4>
                  <span className="hx-trole">{r.role}</span>
                  <p className={"hx-ttext" + (open === n ? " hx-full" : "")}>"{open === n ? r.full : r.text}"</p>
                  <button type="button" className="hx-more" onClick={() => setOpen(open === n ? null : n)}>
                    {open === n ? "Show Less" : "Read More"}
                  </button>
                  <div className="hx-tfoot">
                    <span className="hx-stars" aria-label={`${r.rating} out of 5 stars`}>
                      {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                    </span>
                    <span>{r.rating.toFixed(1)} / 5</span>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
      <div className="hx-nav">
        <button type="button" className="hx-arrow" aria-label="Previous" onClick={() => setIndex((i) => (i <= 0 ? last : i - 1))}>‹</button>
        <div className="dots" style={{ margin: 0 }}>
          {Array.from({ length: last + 1 }).map((_, n) => (
            <i key={n} className={n === index ? "on" : ""} onClick={() => setIndex(n)} />
          ))}
        </div>
        <button type="button" className="hx-arrow" aria-label="Next" onClick={() => setIndex((i) => (i >= last ? 0 : i + 1))}>›</button>
      </div>
    </>
  );
}

const Ico = ({ children, size = 24, color = "#000" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);

const ceoHighlights = [
  {
    title: "Full Stack Developer",
    text: "Builds fast, modern websites and web apps, from front end to back end.",
    icon: <Ico><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></Ico>,
  },
  {
    title: "AI Developer",
    text: "Brings AI automation and smart tools into everyday business work.",
    icon: (
      <Ico>
        <rect x="5" y="5" width="14" height="14" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
      </Ico>
    ),
  },
  {
    title: "Education",
    text: "Master's degree foundation combined with continuous cutting-edge technical training.",
    icon: (
      <Ico>
        <path d="M22 10 12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5c3 2.5 9 2.5 12 0v-5" />
      </Ico>
    ),
  },
  {
    title: "Client Focused",
    text: "Stays close to each client until the result is visible.",
    icon: (
      <Ico>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" />
      </Ico>
    ),
  },
];

const AUTHOR = "Khattak Digital";

const services = [
  { slug: "social-media-management", image: image12, title: "Social Media Management",
    text: "Content planning, posting, community engagement, and channel growth." },
  { slug: "content-creation", image: image13, title: "AI Content Creation",
    text: "AI-powered graphics, short-form video, copywriting, and reels." },
  { slug: "paid-advertising", image: image15, title: "Paid Advertising",
    text: "Meta, Google, LinkedIn, TikTok, and YouTube ad campaigns." },
  { slug: "seo", image: image14, title: "SEO",
    text: "Keyword research, on-page and technical optimization, and link building." },
  { slug: "web-design-development", image: image11, title: "Web Development",
    text: "Websites, landing pages, and e-commerce stores." },
  { slug: "branding-creative", image: image16, title: "Branding & Creative",
    text: "Logos, brand identity, messaging, and style guides." },
];

const why = [
  { icon: <Ico color="#000"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></Ico>,
    title: "Fast delivery", text: "Clear timelines and quick turnaround, without cutting corners." },
  { icon: <Ico color="#000"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></Ico>,
    title: "Direct communication", text: "You talk to the people doing the work, and we reply fast." },
  { icon: <Ico color="#000"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></Ico>,
    title: "Results you can see", text: "We focus on growth you can measure, not just good-looking work." },
  { icon: <Ico color="#000"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></Ico>,
    title: "End-to-end support", text: "From idea to launch and after, one team handles it all." },
];

const industries = [
  { icon: <Ico color="#000"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></Ico>,
    title: "E-Commerce & D2C Brands", text: "Scaling online stores through high-converting Meta/TikTok ads and organic viral content." },
  { icon: <Ico color="#000"><rect x="3" y="4" width="18" height="12" rx="2" /><line x1="2" y1="20" x2="22" y2="20" /></Ico>,
    title: "Tech Startups & SaaS", text: "Driving product launches, customer acquisition campaigns, and sleek web apps." },
  { icon: <Ico color="#000"><path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z" /></Ico>,
    title: "Healthcare & Clinics", text: "Building local online trust, patient lead generation, and professional social branding." },
  { icon: <Ico color="#000"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" /></Ico>,
    title: "Restaurants & Hospitality", text: "Mouth-watering content creation, local community engagement, and reservation ads." },
  { icon: <Ico color="#000"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></Ico>,
    title: "Real Estate & Agencies", text: "Showcasing listings via premium video reels, targeted lead gen, and personal branding." },
  { icon: <Ico color="#000"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></Ico>,
    title: "Truck Dispatching", text: "Lead generation, trusted online presence, and brand building for dispatch and freight companies." },
  { icon: <Ico color="#000"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.2.4c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.4-.2c.4-.3.6-.7.5-1.2z" /></Ico>,
    title: "Travel Agency", text: "Eye-catching destination content, booking campaigns, and customer inquiries from social media and search." },
  { icon: <Ico color="#000"><path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5c3 2.5 9 2.5 12 0v-5" /></Ico>,
    title: "Education & E-Learning", text: "Promoting courses, student enrollment campaigns, and engaging creator-style content." },
    { icon: <Ico color="#000"><path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></Ico>,
    title: "Fashion & Lifestyle Brands", text: "Growing clothing, beauty, and lifestyle brands through trend-led content, influencer-style reels, and targeted social campaigns." },
  
  
];

export default function Home() {
  const [q, setQ] = useState("");
  const [photoOk, setPhotoOk] = useState(true);
  const nav = useNavigate();

  useEffect(() => {
    const els = document.querySelectorAll("[data-rv]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("hx-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("hx-in"); io.unobserve(e.target); }
      }),
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const search = (e) => {
    e.preventDefault();
    nav(`/clients?q=${encodeURIComponent(q)}`);
  };

  return (
    <main>
      <style>{css}</style>

      {/* ---------- HERO ---------- */}
      <section
        className="hero hx-hero-bg"
        style={{ backgroundImage: `url(${image21})` }}
      >
        <div className="hero-text">
          <span className="hx-eyebrow">Digital Marketing &amp; Web Agency</span>
          <h1>
            The Agency Built for Your <span className="hx-h1-accent">Business Growth</span>
          </h1>
          <p className="hx-hero-sub">
            Web Development, AI Content, SEO and Paid Ads, all handled by one dedicated team.
          </p>
          <form className="search" onSubmit={search}>
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search here..." />
            <button type="submit" aria-label="Search">
              <Ico size={20}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></Ico>
            </button>
          </form>
        </div>
      </section>

      {/* ---------- ABOUT THE CEO ---------- */}
      <section className="section hx-teal hx-ceo">
        <div data-rv="left">
          <h2>Engr. Muhammad <span className="accent">Fayaz</span></h2>
          <span className="role-tag">CEO · Full Stack Web Developer · AI Developer</span>
          <p className="lead">
            Engr. Muhammad Fayaz is the founder and CEO of Business Elevate Digital,
             a full stack web and AI developer with a master’s degree and years 
             of hands-on experience. He leads the team with one clear goal: to build fast, 
             smart and reliable digital solutions that turn online presence into real business growth. 
             From websites and AI automation to marketing strategy, he works closely with every client 
             so that local and international businesses get results they can see.
          </p>
          <div className="hx-ceo-cards">
            {ceoHighlights.map((c, i) => (
              <div className="hx-glass" data-rv="up" style={{ "--d": `${i * 100}ms` }} key={c.title}>
                <span className="icon">{c.icon}</span>
                <h4>{c.title}</h4>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hx-ceo-photo" data-rv="right">
          {photoOk ? (
            <img src={image10} alt="Muhammad Fayaz, CEO" onError={() => setPhotoOk(false)} />
          ) : (
            <div className="hx-fallback">MF</div>
          )}
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="section center">
        <h2 data-rv="up">Our <span className="teal">Services</span></h2>
        <p className="hx-sub" data-rv="up" style={{ "--d": "100ms" }}>Pick a service to see what is included.</p>
        <div className="grid">
          {services.map((s, i) => (
            <Link to={`/services#${s.slug}`} className="hx-svc" data-rv="up" style={{ "--d": `${(i % 3) * 120}ms` }} key={s.slug}>
              <div className="hx-svc-img">
                {s.image ? <img src={s.image} alt={s.title} /> : null}
              </div>
              <div className="hx-svc-body">
                <h4>{s.title}</h4>
                <p>{s.text}</p>
                <div className="hx-svc-by">
                  <span className="hx-svc-av">{AUTHOR[0]}</span>
                  <span>By <strong>{AUTHOR}</strong></span>
                </div>
              </div>
              <div className="hx-svc-foot">View service <span className="hx-go">➤</span></div>
            </Link>
          ))}
        </div>
        <Link to="/services" className="btn lime hx-cta">View All Services</Link>
      </section>

      {/* ---------- WHY CHOOSE US ---------- */}
      <section className="section hx-teal center">
        <h2 data-rv="up">Why <span className="accent">Choose Us</span></h2>
        <p className="hx-sub" data-rv="up" style={{ "--d": "100ms" }}>What working with us looks like.</p>
        <div className="grid four" style={{ marginBottom: 0 }}>
          {why.map((w, i) => (
            <div className="hx-glass hx-why" data-rv="zoom" style={{ "--d": `${i * 110}ms` }} key={w.title}>
              <span className="icon">{w.icon}</span>
              <h4>{w.title}</h4>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="section center">
        <h2 data-rv="up">What Our <span className="teal">Clients Say</span></h2>
        <p className="hx-sub" data-rv="up" style={{ "--d": "100ms" }}>Feedback from businesses we have worked with.</p>
        <div data-rv="up"><Testimonials /></div>
        <Link to="/clients" className="btn lime hx-cta">See Our Clients</Link>
      </section>

      {/* ---------- INDUSTRIES WE SERVE ---------- */}
      <section className="section hx-teal center">
        <h2 data-rv="up">Industries <span className="accent">We Serve</span></h2>
        <p className="hx-sub" data-rv="up" style={{ "--d": "100ms" }}>Specialized social media and digital growth strategies engineered for diverse market sectors.</p>
        <div className="hx-ind-grid">
          {industries.map((ind, i) => (
            <div className="hx-glass hx-why" data-rv="zoom" style={{ "--d": `${(i % 3) * 100}ms` }} key={ind.title}>
              <span className="icon">{ind.icon}</span>
              <h4>{ind.title}</h4>
              <p>{ind.text}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}






