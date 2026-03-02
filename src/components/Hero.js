import React from 'react';
import { Container } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  return (
    <div id="home" className="hero-section">
      <Container className="text-center">
        <div className="hero-text-content">
          {/* Main Title: Zooms in with a slight delay */}
          <h1 
            className="hero-title" 
            data-aos="zoom-in" 
            data-aos-duration="1200"
          >
            MULTURE SUPPLIES LTD<br/>
          </h1>

          {/* Subtitle: Fades up after the title starts */}
          <p 
            className="hero-subtitle" 
            data-aos="fade-up" 
            data-aos-delay="400"
          >
            Specialise in premium aluminium fittings and glazing for innovative interior and exterior design and fabrication
          </p>

          {/* Decorative Line: Expands or fades up */}
          <div 
            className="white-line" 
            data-aos="fade-up" 
            data-aos-delay="600"
          ></div>

          {/* Website Link: Final subtle entrance */}
          <p 
            className="hero-web" 
            data-aos="fade-up" 
            data-aos-delay="800"
          >
            www.multures.social
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Hero;