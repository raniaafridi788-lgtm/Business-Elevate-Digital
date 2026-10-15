import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Team from "./Components/Team";
import Clients from "./Components/Clients";
import Contact from "./Components/Contact";
import WhatsAppButton from "./Components/Whatsappbutton";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
