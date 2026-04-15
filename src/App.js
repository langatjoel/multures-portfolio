import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Services from './components/Services';
import Contact from './components/Contact';
import Directors from './components/Directors';
import Projects from './components/Projects';
import ScrollToTop from './components/ScrollToTop';

// Main Home component that renders all sections for smooth scrolling
const Home = () => (
  <>
    <Hero />
    <About />
    <VisionMission />
    <Services />
    <Projects />
    <Directors />
    <Contact />
  </>
);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <MyNavbar />
        <main>
          <Routes>
            {/* All major routes render the Home component with all sections */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/mission" element={<Home />} />
            <Route path="/services" element={<Home />} />
            <Route path="/projects" element={<Home />} />
            <Route path="/directors" element={<Home />} />
            <Route path="/contact" element={<Home />} />
          </Routes>
        </main>
        <footer className="text-center py-4 bg-dark text-white">
          <p>© 2026 Multure Supplies Limited. All Rights Reserved.</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
