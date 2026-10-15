import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo"; // Footer.jsx is in src/Components next to Logo.jsx

export default function Footer() {
  const [mail, setMail] = useState("");
  const [done, setDone] = useState(false);
  const sub = (e) => { e.preventDefault(); setDone(true); setMail(""); };

  return (
    <footer className="footer">
      <style>{`
        .footer .fgrid { grid-template-columns: 1.7fr 1fr 1.4fr 1.3fr; column-gap: 64px; row-gap: 36px; }
        @media (max-width: 1000px) { .footer .fgrid { grid-template-columns: 1fr 1fr; column-gap: 40px; } }
        @media (max-width: 600px)  { .footer .fgrid { grid-template-columns: 1fr; } }
        .footer .flogo-sm { display: none; }
        @media (max-width: 600px) { .footer .flogo-lg { display: none; } .footer .flogo-sm { display: inline-block; } }
      `}</style>
      <div className="fgrid">
        <div>
          <Link to="/" aria-label="Business Elevate Digital home" style={{ display: "inline-block", marginBottom: 16 }}>
            <span className="flogo-lg"><Logo variant="dark" size={44} /></span>
            <span className="flogo-sm"><Logo variant="dark" size={36} /></span>
          </Link>
          <p>Your trusted agency for business growth.</p>
        </div>
        <div>
          <h4>QUICK LINK</h4>
          {[["/", "Home"], ["/about", "About Us"], ["/services", "Services"], ["/team", "Team"], ["/clients", "Clients"], ["/contact", "Contact Us"]].map(([t, l]) => (
            <Link key={t} to={t}>✔ {l}</Link>
          ))}
        </div>
        <div>
          <h4>CONTACT US</h4>
          <p>📍 Sher Shah Link Road, Near <br /> Haji Lateef Marriage Hall Lahore</p>
          <p>📞 +92 329-0252877</p>
          <p>✉ info@yourmail.com</p>
        </div>
        <div>
          <h4>NEWSLETTER</h4>
          <form className="search" onSubmit={sub}>
            <input type="email" required value={mail} onChange={(e) => setMail(e.target.value)} placeholder="Enter your email" />
            <button type="submit">➤</button>
          </form>
          {done && <p className="ok">Subscribed!</p>}
        </div>
      </div>
      <div className="copy">© {new Date().getFullYear()} Adrite Solutions. All rights reserved.</div>
    </footer>
  );
}