import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Services from './components/Services';
import Contact from './components/Contact'; // Final import

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Services />
        <Contact />
      </main>
      
      {/* Footer (Optional) */}
      <footer className="text-center py-4 bg-dark text-white">
        <p>© 2026 Multures Suppliers Limited. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;