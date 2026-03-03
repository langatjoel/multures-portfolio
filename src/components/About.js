import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import aboutImg from '../assets/pexels-sevenstormphotography-443383.jpg'; 

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Left Side: Image & Badge sliding from Left */}
          <Col lg={6} className="mb-4 mb-lg-0" data-aos="fade-right" data-aos-duration="1000">
            <div className="about-image-wrapper">
              <img src={aboutImg} alt="Our Glazing Work" className="img-fluid rounded shadow" loading="lazy" />
              <div className="experience-badge" data-aos="zoom-in" data-aos-delay="500">
                <h3>25+</h3>
                <p>Combined Years</p>
              </div>
            </div>
          </Col>

          {/* Right Side: Content sliding from Right */}
          <Col lg={6} className="ps-lg-5" data-aos="fade-left" data-aos-duration="1000">
            <h6 className="section-subtitle" data-aos="fade-up" data-aos-delay="200">Who We Are</h6>
            <h2 className="section-title" data-aos="fade-up" data-aos-delay="300">
              Your Trusted Partner in <span>Aluminium & Glazing</span>
            </h2>
            <p className="about-text" data-aos="fade-up" data-aos-delay="400">
              Multure is a leading construction solutions provider, dedicated to delivering exceptional quality 
              and innovative design in every project. With <strong>25 combined years of experience</strong> 
              in the construction industry, Multures takes pride in precision, professionalism, and commitment 
              to client satisfaction. Multures began as a sole proprietorship in 1994 before its incorporation 
              as a company in 2022.
            </p>
            
            <ul className="about-features list-unstyled">
              <li data-aos="fade-left" data-aos-delay="500">
                <strong>Quality Materials:</strong> Only the finest grade aluminium and glass.
              </li>
              <li data-aos="fade-left" data-aos-delay="600">
                <strong>Expert Installation:</strong> Certified professionals with years of experience.
              </li>
              <li data-aos="fade-left" data-aos-delay="700">
                <strong>Timely Delivery:</strong> We value your project timelines.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;