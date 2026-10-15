// import { useState } from "react";
// import { NavLink, Link } from "react-router-dom";
// import Logo from "../Components/Logo"

// const links = [
//   ["/", "Home"], ["/about", "About Us"], ["/services", "Services"],
//   ["/team", "Team"], ["/clients", "Clients"], ["/contact", "Contact Us"],
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   return (
//     <header className="nav">
//       <Link to="/" className="logo">▲</Link>
//       <nav className={open ? "links open" : "links"}>
//         {links.map(([to, label]) => (
//           <NavLink key={to} to={to} end={to === "/"} onClick={() => setOpen(false)}>
//             {label}
//           </NavLink>
//         ))}
//       </nav>
//       {/* <button className="burger" onClick={() => setOpen(!open)}>☰</button> */}
//     </header>
//   );
// }



import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Logo, { LogoMark } from "../Components/Logo"; // change to "./Logo" if Navbar.jsx is in the same folder as Logo.jsx

const links = [
  ["/", "Home"], ["/about", "About Us"], ["/services", "Services"],
  ["/team", "Team"], ["/clients", "Clients"], ["/contact", "Contact Us"],
];

/* All classes start with "hxn-" so they will not clash with your old .nav / .links CSS.
   You can delete the old .nav, .logo, .links, .burger rules from your CSS file. */
const css = `
.hxn {
  position: sticky; top: 0; z-index: 1000;
  background: rgba(255, 255, 255, .96);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e8eef0;
  transition: box-shadow .3s, background .3s;
}
.hxn.hxn-scrolled { box-shadow: 0 8px 28px rgba(10, 74, 78, .12); }
.hxn-bar {
  max-width: 1280px; margin: 0 auto; padding: 12px 32px;
  display: flex; align-items: center; justify-content: space-between; gap: 24px;
  min-height: 90px;
}
.hxn-logo { display: flex; align-items: center; text-decoration: none; flex-shrink: 0; }
.hxn-logo-mark { display: none; }

.hxn-links { display: flex; align-items: center; gap: 6px; }
.hxn-links a.hxn-link {
  position: relative; padding: 10px 16px; border-radius: 10px;
  font-size: 15.5px; font-weight: 500; color: #1f3b3d; text-decoration: none;
  transition: color .25s, background .25s;
}
.hxn-links a.hxn-link::after {
  content: ""; position: absolute; left: 16px; right: 16px; bottom: 4px; height: 3px;
  border-radius: 3px; background: linear-gradient(90deg, #1b9bb0, #b8f03c);
  transform: scaleX(0); transform-origin: left; transition: transform .3s ease;
}
.hxn-links a.hxn-link:hover { color: #148da3; background: #f1fafa; }
.hxn-links a.hxn-link:hover::after { transform: scaleX(1); }
.hxn-links a.hxn-link.active { color: #148da3; font-weight: 600; }
.hxn-links a.hxn-link.active::after { transform: scaleX(1); }

.hxn-right { display: flex; align-items: center; gap: 14px; }
.hxn-cta {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 24px; border-radius: 999px; text-decoration: none;
  background: #b8f03c; color: #07363a; font-size: 15px; font-weight: 700;
  box-shadow: 0 6px 16px rgba(184, 240, 60, .4);
  transition: transform .25s, box-shadow .25s, background .25s;
}
.hxn-cta:hover { transform: translateY(-2px); box-shadow: 0 10px 22px rgba(184, 240, 60, .55); background: #c7f65c; }

.hxn-burger {
  display: none; width: 46px; height: 46px; border-radius: 12px; cursor: pointer;
  border: 1.5px solid #cfe3e4; background: #fff; padding: 0;
  align-items: center; justify-content: center; flex-direction: column; gap: 5px;
}
.hxn-burger span {
  display: block; width: 22px; height: 2.5px; border-radius: 2px; background: #148da3;
  transition: transform .3s, opacity .3s;
}
.hxn-burger.open span:nth-child(1) { transform: translateY(7.5px) rotate(45deg); }
.hxn-burger.open span:nth-child(2) { opacity: 0; }
.hxn-burger.open span:nth-child(3) { transform: translateY(-7.5px) rotate(-45deg); }

/* ---------- tablet & mobile ---------- */
@media (max-width: 1000px) {
  .hxn-bar { padding: 10px 20px; min-height: 76px; }
  .hxn-burger { display: inline-flex; }
  .hxn-cta { display: none; }
  .hxn-links {
    position: absolute; top: 100%; left: 0; right: 0;
    flex-direction: column; align-items: stretch; gap: 4px;
    background: #fff; padding: 14px 20px 22px;
    border-bottom: 1px solid #e8eef0; box-shadow: 0 18px 30px rgba(10, 74, 78, .14);
    opacity: 0; visibility: hidden; transform: translateY(-10px);
    transition: opacity .25s, transform .25s, visibility .25s;
  }
  .hxn-links.open { opacity: 1; visibility: visible; transform: none; }
  .hxn-links a.hxn-link { padding: 14px 16px; font-size: 17px; }
  .hxn-links a.hxn-link::after { display: none; }
  .hxn-links a.hxn-link.active { background: #e9f7f7; }
  .hxn-links .hxn-cta-m {
    display: flex; justify-content: center; margin-top: 10px; padding: 14px;
    border-radius: 12px; background: #b8f03c; color: #07363a; font-weight: 700;
    text-decoration: none;
  }
}
@media (min-width: 1001px) { .hxn-cta-m { display: none !important; } }
@media (max-width: 520px) {
  .hxn-logo-full { display: none; }
  .hxn-logo-mark { display: block; }
}
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu whenever the page changes
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={"hxn" + (scrolled ? " hxn-scrolled" : "")}>
      <style>{css}</style>
      <div className="hxn-bar">
        <Link to="/" className="hxn-logo" aria-label="Business Elevate Digital home">
          <span className="hxn-logo-full"><Logo size={54} /></span>
          <span className="hxn-logo-mark"><LogoMark size={44} /></span>
        </Link>

        <nav className={"hxn-links" + (open ? " open" : "")} aria-label="Main navigation">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) => "hxn-link" + (isActive ? " active" : "")}
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="hxn-cta-m">Get Free Quote</Link>
        </nav>

        <div className="hxn-right">
          <Link to="/contact" className="hxn-cta">Get Free Quote <span aria-hidden="true">→</span></Link>
          <button
            type="button"
            className={"hxn-burger" + (open ? " open" : "")}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}