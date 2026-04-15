import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logoImg from '../assets/logo2.png'; 

const MyNavbar = () => {
  const [opacity, setOpacity] = useState(1);
  const location = useLocation();

  // Handle scroll behavior to fade out the navbar as we scroll down
  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      const scrollY = window.scrollY;
      const fadeDistance = 300; // Distance in px over which the navbar will fade
      
      const newOpacity = Math.max(0, 1 - (scrollY / fadeDistance));
      setOpacity(newOpacity);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, []);

  return (
    <Navbar 
      expand="lg" // Changed to lg for horizontal layout
      className="custom-navbar fixed-top"
      style={{ 
        opacity: opacity,
        pointerEvents: opacity < 0.1 ? 'none' : 'auto', 
        transition: 'opacity 0.1s ease-out' 
      }}
    >
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={Link} to="/" className="brand-logo-container">
          <img src={logoImg} alt="Multures Logo" className="logo-img" loading="lazy" />
        </Navbar.Brand>

        {/* Removed Toggle/Offcanvas and replaced with standard Nav */}
        <Nav className="flex-row gap-4 d-none d-lg-flex">
          <Nav.Link as={Link} to="/" className={`menu-item-horizontal ${location.pathname === '/' ? 'active' : ''}`}>Home</Nav.Link>
          <Nav.Link as={Link} to="/about" className={`menu-item-horizontal ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Nav.Link>
          <Nav.Link as={Link} to="/mission" className={`menu-item-horizontal ${location.pathname === '/mission' ? 'active' : ''}`}>Our Mission</Nav.Link>
          <Nav.Link as={Link} to="/services" className={`menu-item-horizontal ${location.pathname === '/services' ? 'active' : ''}`}>Products & Services</Nav.Link>
          <Nav.Link as={Link} to="/projects" className={`menu-item-horizontal ${location.pathname === '/projects' ? 'active' : ''}`}>Our Projects</Nav.Link>
          <Nav.Link as={Link} to="/directors" className={`menu-item-horizontal ${location.pathname === '/directors' ? 'active' : ''}`}>Leadership</Nav.Link>
          <Nav.Link as={Link} to="/contact" className={`menu-item-horizontal ${location.pathname === '/contact' ? 'active' : ''}`}>Talk To Us</Nav.Link>
        </Nav>

        {/* Small screen menu toggle (optional, keeping it simple for now) */}
        <Navbar.Toggle className="d-lg-none" />
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
