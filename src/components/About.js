import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import aboutImg from '../assets/pexels-sevenstormphotography-443383.jpg'; // Use an image of aluminium/glazing work

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="align-items-center">
          {/* Left Side: Image */}
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="about-image-wrapper">
              <img src={aboutImg} alt="Our Glazing Work" className="img-fluid rounded shadow" />
              <div className="experience-badge">
                <h3>5+</h3>
                <p>Years of Excellence</p>
              </div>
            </div>
          </Col>

          {/* Right Side: Content */}
          <Col lg={6} className="ps-lg-5">
            <h2 className="section-subtitle">Who We Are</h2>
            <h2 className="section-title">Your Trusted Partner in <span>Aluminium & Glazing</span></h2>
            <h2 className="about-text">
              Maltures is a leading construction solutions provider, dedicated to delivering exceptional quality and innovative design in every project.With 25 combined years of experience in the construction industry, Multures takes pride in precision, professionalism and commitment to client satisfaction. Maltures began as a sole proprietorship in 1994 before being its incooperation as a company in 2022. Our expertise spans residential, commercial, and industrial projects, ensuring that we bring your vision to life with unmatched craftsmanship. 
            </h2>
            <ul className="about-features">
              <li><strong>Quality Materials:</strong> Only the finest grade aluminium and glass.</li>
              <li><strong>Expert Installation:</strong> Certified professionals with years of experience.</li>
              <li><strong>Timely Delivery:</strong> We value your project timelines.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;