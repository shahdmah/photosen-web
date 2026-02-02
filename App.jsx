import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Gralley1 from "./pages/Gralley1";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";



export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gralley1" element={<Gralley1 />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="footer">
        <p>© 2025 Shahd Salama. All Rights Reserved.</p>
      </footer>
    </>
  );
}
