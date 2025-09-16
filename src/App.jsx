import "./App.css";
import Index from "./pages/Index";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
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
