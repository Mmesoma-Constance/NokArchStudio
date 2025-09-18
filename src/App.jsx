import { useEffect } from 'react';
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Index from "./pages/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: false,
    })
  }, [])
  return (
    <>
    
      <ScrollToTop />
      <Routes>
     
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/Projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<Projects />} />
        <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
    </Routes>
    
    </>
  );
}

export default App;
