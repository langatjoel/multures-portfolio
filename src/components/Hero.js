import { Container } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
    <section id="home" className="hero-section"></section>
      <Container className="text-center">
        <div className="hero-text-content">
          <h1 className="hero-title">MULTURES SUPPLIERS LTD<br/>PROFILE</h1>
          <p className="hero-subtitle">Your Aluminium fitting and Glazing partner</p>
          <div className="white-line"></div>
          <p className="hero-web">www.multures.com</p>
        </div>
      </Container>
    </div>
  );
}

export default Hero;