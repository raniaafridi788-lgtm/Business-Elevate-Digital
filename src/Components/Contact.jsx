import { useEffect, useState } from "react";
import image30 from "../assets/contact.jpg";

// ---- Edit your real contact details here ----
const EMAIL = "info@youragency.com";
const PHONE_DISPLAY = "+92 300 1234567";
const PHONE_LINK = "+923001234567";       // for tel: links
const WHATSAPP = "923001234567";          // country code + number, digits only
const LOCATION = "Sher Shah Link Road, Near Haji Lateef Marriage Hall Lahore";
const HOURS = "Mon – Sat, 11:00 AM – 11:00 PM";

const services = [
  "Social Media Management",
  "Content Creation",
  "Paid Advertising",
  "SEO",
  "Web Design & Development",
  "Branding & Creative",
  "Influencer Marketing",
  "Email & SMS Marketing",
  "Analytics & Reporting",
  "Digital Strategy & Consulting",
  "PR & Reputation Management",
];

// Replace the body of this function with your backend / EmailJS call.
// It must throw an error if sending fails, so the form can show a message.
async function sendMessage(data) {
  await new Promise((resolve) => setTimeout(resolve, 700)); // demo delay, remove when connected
  return data;
}

const css = `
/* ---------- scroll reveal ---------- */
[data-rv]:not(.ct-in) { opacity: 0; }
.ct-in[data-rv] { animation-duration: .85s; animation-timing-function: cubic-bezier(.2, .7, .2, 1); animation-delay: var(--d, 0ms); animation-fill-mode: backwards; }
.ct-in[data-rv="up"]    { animation-name: ct-up; }
.ct-in[data-rv="left"]  { animation-name: ct-left; }
.ct-in[data-rv="right"] { animation-name: ct-right; }
@keyframes ct-up    { from { opacity: 0; transform: translateY(44px); } to { opacity: 1; transform: none; } }
@keyframes ct-left  { from { opacity: 0; transform: translateX(-60px); } to { opacity: 1; transform: none; } }
@keyframes ct-right { from { opacity: 0; transform: translateX(60px); } to { opacity: 1; transform: none; } }
@keyframes ct-drop  { from { opacity: 0; transform: translateY(-46px) rotate(-8deg); } to { opacity: 1; transform: none; } }
@keyframes ct-grow  { to { width: 80px; } }
@keyframes ct-fade  { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
@keyframes ct-spin  { to { transform: rotate(360deg); } }
@keyframes ct-draw  { to { stroke-dashoffset: 0; } }
@keyframes ct-pop   { 0% { transform: scale(.4); opacity: 0; } 70% { transform: scale(1.12); } 100% { transform: scale(1); opacity: 1; } }

/* ---------- banner (contact.jpg shown in full) ---------- */
.ct-banner {
  position: relative; overflow: hidden; text-align: center; color: #fff;
  background: var(--teal2);
}
.ct-bg { display: block; width: 100%; height: auto; min-height: 380px; max-height: 85vh; object-fit: cover; }
.ct-banner::before { content: ""; position: absolute; inset: 0; background: rgba(0, 0, 0, .22); pointer-events: none; }
.ct-hero {
  position: absolute; inset: 0; z-index: 1; padding: 0 6% 60px; /* bottom padding keeps the text clear of the cards that overlap the image */
  display: flex; flex-direction: column; align-items: center; justify-content: center;
}
.ct-banner h1 { font-size: clamp(2.2rem, 6vw, 3.6rem); text-transform: uppercase; text-shadow: 0 2px 16px rgba(0, 0, 0, .55); }
.ct-banner h1 em { font-style: normal; color: var(--lime); }
.ct-banner h1::after { content: ""; display: block; width: 0; height: 4px; margin: 14px auto 0; background: var(--lime); border-radius: 4px; animation: ct-grow .8s .5s ease forwards; }
.ct-letter { display: inline-block; animation: ct-drop .75s cubic-bezier(.2, .9, .3, 1.3) backwards; animation-delay: calc(var(--i) * 70ms + 100ms); }
.ct-banner p { max-width: 620px; margin: 22px auto 0; line-height: 1.8; font-size: 1.05rem; color: #f0fbfb; text-shadow: 0 1px 10px rgba(0, 0, 0, .6); animation: ct-fade .8s .5s ease backwards; }

/* ---------- layout ---------- */
.ct-wrap {
  display: grid; grid-template-columns: 1fr 1.3fr; gap: 30px; align-items: start;
  max-width: 1100px; margin: -60px auto 0; padding: 0 6% 80px; position: relative; z-index: 2;
}

/* info cards */
.ct-info { display: grid; gap: 16px; }
.ct-item {
  display: flex; align-items: center; gap: 16px; text-decoration: none; color: inherit;
  background: #fff; border: 1px solid #e5e7eb; border-radius: 16px; padding: 18px 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, .06);
  transition: transform .3s, box-shadow .3s, border-color .3s;
}
.ct-item:hover { transform: translateX(8px); box-shadow: 0 14px 32px rgba(10, 111, 115, .18); border-color: var(--teal); }
.ct-ico {
  width: 52px; height: 52px; border-radius: 14px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, var(--teal), var(--teal2)); color: #fff; transition: transform .4s;
}
.ct-item:hover .ct-ico { transform: rotate(-8deg) scale(1.1); }
.ct-item small { display: block; font-size: 12px; font-weight: 700; letter-spacing: .5px; text-transform: uppercase; color: var(--teal2); margin-bottom: 3px; }
.ct-item span.ct-val { font-size: 15px; font-weight: 600; color: #222; word-break: break-word; }

/* form card */
.ct-card {
  background: #fff; border: 1px solid #e5e7eb; border-radius: 20px; padding: 36px 34px;
  box-shadow: 0 16px 44px rgba(0, 0, 0, .09);
}
.ct-card h2 { font-size: 24px; color: #222; margin-bottom: 6px; }
.ct-card .ct-lead { color: #777; font-size: 14px; margin-bottom: 26px; line-height: 1.6; }
.ct-form { display: grid; gap: 18px; }
.ct-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }

/* floating labels */
.ct-field { position: relative; }
.ct-field input, .ct-field textarea, .ct-field select {
  width: 100%; padding: 22px 16px 8px; border: 1.5px solid #dde5e5; border-radius: 12px;
  background: #fbfcfc; font: inherit; font-size: 15px; color: #222; outline: 0;
  transition: border-color .25s, box-shadow .25s, background .25s;
}
.ct-field textarea { resize: vertical; min-height: 130px; }
.ct-field label {
  position: absolute; left: 16px; top: 17px; font-size: 15px; color: #8a9a9a; pointer-events: none;
  transform-origin: left top; transition: transform .2s, color .2s;
}
.ct-field input:focus + label, .ct-field input:not(:placeholder-shown) + label,
.ct-field textarea:focus + label, .ct-field textarea:not(:placeholder-shown) + label,
.ct-field select + label { transform: translateY(-11px) scale(.78); }
.ct-field input:focus + label, .ct-field textarea:focus + label, .ct-field select:focus + label { color: var(--teal2); }
.ct-field input:focus, .ct-field textarea:focus, .ct-field select:focus {
  border-color: var(--teal); background: #fff; box-shadow: 0 0 0 4px rgba(18, 163, 165, .15);
}

/* send button */
.ct-send {
  display: inline-flex; align-items: center; justify-content: center; gap: 10px; justify-self: start;
  padding: 14px 32px; border: 0; border-radius: 30px; cursor: pointer; font: inherit; font-size: 15px; font-weight: 700;
  background: var(--lime); color: #111; transition: transform .25s, box-shadow .25s;
}
.ct-send:hover:not(:disabled) { transform: translateY(-3px); box-shadow: 0 10px 22px rgba(184, 240, 60, .5); }
.ct-send:disabled { opacity: .85; cursor: wait; }
.ct-send svg { transition: transform .3s; }
.ct-send:hover:not(:disabled) svg { transform: translate(4px, -4px); }
.ct-spin { width: 18px; height: 18px; border-radius: 50%; border: 3px solid rgba(0, 0, 0, .2); border-top-color: #111; animation: ct-spin .7s linear infinite; }
.ct-error { color: #c0392b; font-size: 14px; font-weight: 600; animation: ct-fade .4s ease; }

/* success */
.ct-success { text-align: center; padding: 30px 10px; animation: ct-fade .5s ease; }
.ct-check {
  width: 92px; height: 92px; margin: 0 auto 20px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, var(--teal), var(--teal2)); animation: ct-pop .6s ease;
}
.ct-check path { stroke-dasharray: 40; stroke-dashoffset: 40; animation: ct-draw .6s .35s ease forwards; }
.ct-success h3 { font-size: 24px; color: #222; margin-bottom: 8px; }
.ct-success p { color: #777; line-height: 1.7; margin-bottom: 22px; }

@media (max-width: 880px) {
  .ct-wrap { grid-template-columns: 1fr; margin-top: -50px; }
  .ct-hero { padding-bottom: 50px; }
}
@media (max-width: 560px) {
  .ct-row { grid-template-columns: 1fr; }
  .ct-card { padding: 28px 22px; }
}
@media (prefers-reduced-motion: reduce) {
  [data-rv]:not(.ct-in) { opacity: 1; }
  .ct-in[data-rv], .ct-letter, .ct-banner p,
  .ct-success, .ct-check, .ct-error { animation: none; }
  .ct-banner h1::after { animation: none; width: 80px; }
  .ct-check path { animation: none; stroke-dashoffset: 0; }
  .ct-item, .ct-item *, .ct-send, .ct-send * { transition: none !important; }
}
`;

const Letters = ({ text, start = 0 }) =>
  [...text].map((c, i) => (
    <span className="ct-letter" style={{ "--i": start + i }} key={i}>{c === " " ? "\u00A0" : c}</span>
  ));

const Ico = ({ children }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);

const infoItems = [
  {
    label: "Email us", value: EMAIL, href: `mailto:${EMAIL}`,
    icon: <Ico><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" /><polyline points="22,6 12,13 2,6" /></Ico>,
  },
  {
    label: "Call us", value: PHONE_DISPLAY, href: `tel:${PHONE_LINK}`,
    icon: <Ico><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></Ico>,
  },
  {
    label: "WhatsApp", value: "Chat with us now", href: `https://wa.me/${WHATSAPP}`,
    icon: <Ico><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></Ico>,
  },
  {
    label: "Location", value: LOCATION,
    icon: <Ico><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></Ico>,
  },
  {
    label: "Working hours", value: HOURS,
    icon: <Ico><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></Ico>,
  },
];

export default function Contact() {
  const empty = { name: "", email: "", service: "", message: "" };
  const [f, setF] = useState(empty);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const change = (e) => setF({ ...f, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setSending(true);
    try {
      await sendMessage(f); // connect to your backend / EmailJS in sendMessage()
      setSent(true);
      setF(empty);
    } catch {
      setError("Sorry, something went wrong. Please try again or message us on WhatsApp.");
    } finally {
      setSending(false);
    }
  };

  // Scroll reveal: elements marked data-rv animate in the first time they appear
  useEffect(() => {
    const els = document.querySelectorAll("[data-rv]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("ct-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("ct-in"); io.unobserve(e.target); }
      }),
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      <style>{css}</style>

      {/* ---------- BANNER (image30 / contact.jpg shown in full) ---------- */}
      <section className="ct-banner">
        <img className="ct-bg" src={image30} alt="" />
        <div className="ct-hero">
          <h1 aria-label="Contact Us"><Letters text="Contact " /><em><Letters text="Us" start={8} /></em></h1>
          <p>Have a project in mind? Send us a message and our team will get back to you soon.</p>
        </div>
      </section>

      <div className="ct-wrap">
        <div className="ct-info">
          {infoItems.map((it, i) => {
            const inner = (
              <>
                <span className="ct-ico">{it.icon}</span>
                <span>
                  <small>{it.label}</small>
                  <span className="ct-val">{it.value}</span>
                </span>
              </>
            );
            return it.href ? (
              <a className="ct-item" href={it.href} data-rv="left" style={{ "--d": `${i * 100}ms` }} key={it.label}
                 {...(it.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                {inner}
              </a>
            ) : (
              <div className="ct-item" data-rv="left" style={{ "--d": `${i * 100}ms` }} key={it.label}>{inner}</div>
            );
          })}
        </div>

        <div className="ct-card" data-rv="right">
          {sent ? (
            <div className="ct-success" role="status" aria-live="polite">
              <div className="ct-check">
                <svg width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="#b8f03c" strokeWidth="3"
                     strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3>Thank you!</h3>
              <p>We received your message and will contact you soon.</p>
              <button type="button" className="ct-send" onClick={() => setSent(false)}>Send another message</button>
            </div>
          ) : (
            <>
              <h2>Send us a message</h2>
              <p className="ct-lead">Fill in the form and we will reply as soon as we can.</p>
              <form className="ct-form" onSubmit={submit}>
                <div className="ct-row">
                  <div className="ct-field">
                    <input id="ct-name" name="name" value={f.name} onChange={change} placeholder=" " required />
                    <label htmlFor="ct-name">Your name</label>
                  </div>
                  <div className="ct-field">
                    <input id="ct-email" name="email" type="email" value={f.email} onChange={change} placeholder=" " required />
                    <label htmlFor="ct-email">Your email</label>
                  </div>
                </div>
                <div className="ct-field">
                  <select id="ct-service" name="service" value={f.service} onChange={change}>
                    <option value="">Not sure yet</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <label htmlFor="ct-service">Service you need (optional)</label>
                </div>
                <div className="ct-field">
                  <textarea id="ct-message" name="message" rows="5" value={f.message} onChange={change} placeholder=" " required />
                  <label htmlFor="ct-message">Your message</label>
                </div>
                {error && <p className="ct-error" role="alert">{error}</p>}
                <button className="ct-send" type="submit" disabled={sending}>
                  {sending ? (
                    <><span className="ct-spin" aria-hidden="true" /> Sending...</>
                  ) : (
                    <>
                      Send Message
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                           strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4 20-7z" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </main>
  );
}