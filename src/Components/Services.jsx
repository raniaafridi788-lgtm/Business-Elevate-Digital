import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import image11 from "../assets/web.jpg";
import image12 from "../assets/socialmedia.jpg";
import image13 from "../assets/AICreation.jpg";
import image14 from "../assets/SEO.jpg";
import image15 from "../assets/Ads.jpg";
import image16 from "../assets/branding.jpg";
import image17 from "../assets/designing.jpg"; // used for Graphics Designing for now; swap for your own graphics image
import image18 from "../assets/sms.jpg";
import image19 from "../assets/analytics.jpg";
import image20 from "../assets/consulting.jpg";
import image21 from "../assets/PR.jpg";
import image26 from "../assets/AI.jpg";
import image27 from "../assets/Production.jpg";
import image28 from "../assets/CRM.jpg";
import image29 from "../assets/coordinator.jpg";

// Name shown on every service card ("By ...")
const AUTHOR = "Khattak Digital";

const css = `
/* ---------- page header animation ---------- */
.hx-fade-1 { animation: hx-fade .8s ease both; }
.hx-fade-2 { animation: hx-fade .8s .15s ease both; }
.hx-fade-1::after {
  content: ""; display: block; width: 0; height: 4px; margin: 12px auto 0;
  background: var(--lime); border-radius: 4px;
  animation: hx-grow .8s .5s ease forwards;
}
@keyframes hx-fade { from { opacity: 0; transform: translateY(-14px); } to { opacity: 1; transform: none; } }
@keyframes hx-grow { to { width: 80px; } }

/* ---------- cards ---------- */
.hx-svc-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 22px; margin-bottom: 40px; }
.hx-svc {
  display: flex; flex-direction: column; background: #fff; text-align: left; color: inherit;
  border: 1px solid #e5e7eb; border-radius: 6px; overflow: hidden;
  scroll-margin-top: 110px;
  transition: box-shadow .3s, transform .3s, border-color .3s;
}
/* hidden until it scrolls into view, then rises in (staggered by --d) */
.hx-svc.hx-pre { opacity: 0; }
.hx-svc.hx-in { animation: hx-rise .75s cubic-bezier(.2, .7, .2, 1) var(--d, 0ms) backwards; }
@keyframes hx-rise {
  from { opacity: 0; transform: translateY(46px) scale(.96); }
  to   { opacity: 1; transform: none; }
}
.hx-svc:hover { box-shadow: 0 16px 36px rgba(10, 111, 115, .18); transform: translateY(-6px); border-color: #cfe9ea; }

/* target card (when arriving from the home page link) */
.hx-svc.hx-on { border-color: var(--teal); box-shadow: 0 0 0 3px rgba(18, 163, 165, .25); animation: hx-ring 1.6s ease-out 2; }
@keyframes hx-ring {
  0%   { box-shadow: 0 0 0 3px rgba(18, 163, 165, .25), 0 0 0 0 rgba(18, 163, 165, .45); }
  100% { box-shadow: 0 0 0 3px rgba(18, 163, 165, .25), 0 0 0 16px rgba(18, 163, 165, 0); }
}

/* image: zoom + light sweep on hover */
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

/* footer link: growing accent line + sliding arrow */
.hx-svc-foot {
  position: relative; display: block; border-top: 1px solid #e5e7eb; padding: 14px 24px;
  font-size: 14px; font-weight: 600; color: var(--teal2); transition: color .3s;
}
.hx-svc-foot::before {
  content: ""; position: absolute; left: 0; top: -1px; width: 100%; height: 3px;
  background: linear-gradient(90deg, var(--teal), var(--lime));
  transform: scaleX(0); transform-origin: left; transition: transform .45s ease;
}
.hx-svc:hover .hx-svc-foot::before { transform: scaleX(1); }
.hx-svc-foot:hover { color: var(--teal); }
.hx-go { display: inline-block; transition: transform .3s; }
.hx-svc:hover .hx-go { transform: translateX(8px); }

/* bottom button */
.hx-cta { transition: transform .25s, box-shadow .25s; }
.hx-cta:hover { transform: translateY(-3px); box-shadow: 0 10px 22px rgba(184, 240, 60, .45); }

/* respect "reduce motion" settings */
@media (prefers-reduced-motion: reduce) {
  .hx-fade-1, .hx-fade-2, .hx-svc.hx-in, .hx-svc.hx-on { animation: none; }
  .hx-fade-1::after { animation: none; width: 80px; }
  .hx-svc.hx-pre { opacity: 1; }
  .hx-svc, .hx-svc * { transition: none !important; }
}
`;

// Shown in the picture area until you add an image to that service
const Icon = ({ children }) => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);
const icons = {
  "ai-automation": (
    <Icon>
      <rect x="4" y="8" width="16" height="12" rx="3" /><path d="M12 8V4" /><circle cx="12" cy="3" r="1" />
      <circle cx="9" cy="14" r="1.3" /><circle cx="15" cy="14" r="1.3" /><path d="M9.5 17.5h5" />
      <path d="M2 13v3M22 13v3" />
    </Icon>
  ),
  "video-production": (
    <Icon>
      <rect x="2" y="5" width="14" height="14" rx="2" /><path d="m16 10 6-3v10l-6-3z" />
    </Icon>
  ),
  "lead-generation-crm": (
    <Icon>
      <path d="M3 4h18l-7 8v6l-4 2v-8z" />
    </Icon>
  ),
  "business-coordinator": (
    <Icon>
      <rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" /><path d="M10 13v2h4v-2" />
    </Icon>
  ),
  "graphics-designing": (
    <Icon>
      <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
    </Icon>
  ),
};

// The order of this list is the order of the cards on the page.
const services = [
  { slug: "ai-automation", image: image26, title: "AI Automation", text: "AI chatbots, workflow automation, and smart tools that handle repetitive work and save your team time." },
  { slug: "web-development", image: image11, title: "Web Development", text: "Websites, landing pages, and e-commerce stores." },
  { slug: "graphics-designing", image: image17, title: "Graphics Designing", text: "Social media posts, banners, flyers, logos, and print-ready designs that make your brand stand out." },
  { slug: "business-coordinator", image: image29, title: "Business Coordinator", text: "One point of contact to manage tasks, schedules, and communication between your business and our team." },
  { slug: "social-media-management", image: image12, title: "Social Media Management", text: "Content planning, posting, community engagement, and channel growth." },
  { slug: "content-creation", image: image13, title: "AI Content Creation", text: "AI-powered graphics, short-form video, copywriting, and reels." },
  { slug: "paid-advertising", image: image15, title: "Paid Advertising", text: "Meta, Google, LinkedIn, TikTok, and YouTube ad campaigns." },
  { slug: "seo", image: image14, title: "SEO", text: "Keyword research, on-page and technical optimization, and link building." },
  { slug: "branding-creative", image: image16, title: "Branding & Creative", text: "Logos, brand identity, messaging, and style guides." },
  { slug: "email-sms-marketing", image: image18, title: "Email & SMS Marketing", text: "Campaigns, automation, and newsletters." },
  { slug: "analytics-reporting", image: image19, title: "Analytics & Reporting", text: "Performance tracking, conversion tracking, and insights." },
  { slug: "digital-strategy-consulting", image: image20, title: "Digital Strategy & Consulting", text: "Audience research, competitor analysis, and campaign planning." },
  { slug: "pr-reputation-management", image: image21, title: "PR & Reputation Management", text: "Online reviews, brand monitoring, and crisis handling." },
  { slug: "video-production", image: image27, title: "Video Production & Editing", text: "Reels, promo videos, ad creatives, and motion graphics that keep people watching." },
  { slug: "lead-generation-crm", image: image28, title: "Lead Generation & CRM Setup", text: "Landing pages, sales funnels, and CRM setup that turn visitors into customers." },
];

export default function Services() {
  const { hash } = useLocation();
  const [target, setTarget] = useState("");
  const [seen, setSeen] = useState(() => new Set());

  // Links from the home page (/services#seo) scroll to and highlight that card
  useEffect(() => {
    const id = hash.replace("#", "");
    setTarget(id);
    if (!id) return;
    const t = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 50);
    return () => clearTimeout(t);
  }, [hash]);

  // Scroll reveal: each card animates in the first time it enters the screen.
  // A fallback timer reveals every card shortly after load, so no card can stay blank.
  useEffect(() => {
    const all = () => setSeen(new Set(services.map((s) => s.slug)));
    if (!("IntersectionObserver" in window)) {
      all();
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        const show = entries.filter((e) => e.isIntersecting || e.boundingClientRect.top < 0);
        if (!show.length) return;
        const slugs = show.map((e) => e.target.dataset.slug);
        setSeen((prev) => {
          const next = new Set(prev);
          slugs.forEach((slug) => next.add(slug));
          return next;
        });
        show.forEach((e) => io.unobserve(e.target));
      },
      { threshold: 0 }
    );
    document.querySelectorAll(".hx-svc[data-slug]").forEach((el) => io.observe(el));
    const fallback = setTimeout(all, 1500);
    return () => { io.disconnect(); clearTimeout(fallback); };
  }, []);

  return (
    <main className="page">
      <style>{css}</style>
      <h1 className="title hx-fade-1">Our <span className="teal">Services</span></h1>
      <p className="lead hx-fade-2">Everything your business needs to get found, look professional, and grow online.</p>

      <div className="hx-svc-grid">
        {services.map((s, i) => (
          <article
            id={s.slug}
            data-slug={s.slug}
            key={s.slug}
            style={{ "--d": `${(i % 3) * 120}ms` }}
            className={
              "hx-svc" +
              (seen.has(s.slug) ? " hx-in" : " hx-pre") +
              (target === s.slug ? " hx-on" : "")
            }
          >
            <div className="hx-svc-img">
              {s.image ? <img src={s.image} alt={s.title} /> : icons[s.slug] || null}
            </div>
            <div className="hx-svc-body">
              <h4>{s.title}</h4>
              <p>{s.text}</p>
              <div className="hx-svc-by">
                <span className="hx-svc-av">{AUTHOR[0]}</span>
                <span>By <strong>{AUTHOR}</strong></span>
              </div>
            </div>
            <Link to="/contact" className="hx-svc-foot">
              Get a quote <span className="hx-go">➤</span>
            </Link>
          </article>
        ))}
      </div>

      <Link to="/contact" className="btn lime hx-cta">Get a Free Quote</Link>
    </main>
  );
}