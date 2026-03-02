import React, { useEffect } from 'react'; // ADD useEffect
import AOS from 'aos'; // IMPORT AOS
import 'aos/dist/aos.css'; // IMPORT AOS STYLES
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Services from './components/Services';
import Contact from './components/Contact';
import Directors from './components/Directors';

function App() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation speed (1 second)
      once: true,     // Animation happens only once while scrolling down
      offset: 100,    // Trigger animation 100px before the element enters the view
    });
  }, []);

  return (
    <div className="App">
      <MyNavbar />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Services />
        <Directors />
        <Contact />
      </main>
      
      <footer className="text-center py-4 bg-dark text-white">
        <p>© 2026 Multures Suppliers Limited. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;