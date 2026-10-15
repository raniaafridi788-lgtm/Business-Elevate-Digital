/* Floating WhatsApp button (bottom-right) with a "Contact us" bubble.
   Add it ONCE in App.jsx, outside <Routes>, so it shows on every page. */

// Your WhatsApp number: country code + number, digits only (no +, spaces or dashes).
// Example for Pakistan: 0300 1234567  ->  923001234567
const PHONE = "923001234567";
const MESSAGE = "Hello! I would like to know more about your services.";

const css = `
.wa-float {
  position: fixed; right: 24px; bottom: 24px; z-index: 1000;
  display: flex; align-items: center; gap: 14px; text-decoration: none;
}
.wa-label {
  position: relative; background: #fff; color: #1e88e5;
  padding: 12px 20px; border-radius: 14px; font-size: 18px; line-height: 1;
  box-shadow: 0 6px 20px rgba(0, 0, 0, .14); white-space: nowrap;
  font-family: 'Segoe UI', Arial, sans-serif;
  transition: transform .2s;
}
.wa-label::after {
  content: ""; position: absolute; right: -6px; top: 50%;
  width: 12px; height: 12px; background: #fff; transform: translateY(-50%) rotate(45deg);
  border-radius: 2px;
}
.wa-circle {
  width: 64px; height: 64px; border-radius: 50%; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  background: #4ae06f; box-shadow: 0 10px 26px rgba(37, 211, 102, .45);
  animation: wa-pulse 2.4s infinite;
  transition: transform .2s;
}
.wa-float:hover .wa-circle { transform: scale(1.08); }
.wa-float:focus-visible { outline: 3px solid #1e88e5; outline-offset: 4px; border-radius: 40px; }
@keyframes wa-pulse {
  0%   { box-shadow: 0 10px 26px rgba(37, 211, 102, .45), 0 0 0 0 rgba(74, 224, 111, .55); }
  70%  { box-shadow: 0 10px 26px rgba(37, 211, 102, .45), 0 0 0 16px rgba(74, 224, 111, 0); }
  100% { box-shadow: 0 10px 26px rgba(37, 211, 102, .45), 0 0 0 0 rgba(74, 224, 111, 0); }
}
@media (prefers-reduced-motion: reduce) { .wa-circle { animation: none; } }
@media (max-width: 520px) {
  .wa-float { right: 16px; bottom: 16px; }
  .wa-label { display: none; }
  .wa-circle { width: 58px; height: 58px; }
}
`;

export default function WhatsAppButton() {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;
  return (
    <a className="wa-float" href={href} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp">
      <style>{css}</style>
      <span className="wa-label">Contact us</span>
      <span className="wa-circle">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </span>
    </a>
  );
}