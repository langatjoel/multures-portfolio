import React from 'react'; 
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Telephone, Envelope, Globe, GeoAlt, Share } from 'react-bootstrap-icons';
import './Contact.css';
import contactSideImg from '../assets/piyush-saini-a1a-noida-render-01.jpg'; 
import logoImg from '../assets/logo.png';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <Container fluid className="p-0">
        <Row className="g-0">
          {/* Left Side: Contact Information & Form */}
          <Col lg={6} className="contact-left-content">
            <div className="contact-info-wrapper">
              <img src={logoImg} alt="Multures Logo" className="contact-logo" />
              <h2 className="contact-title">TALK TO US</h2>
              
              <div className="contact-details">
                <p><Globe className="me-3" /> Website: www.MultureSuppliersLtd.com</p>
                <p><Telephone className="me-3" /> Phone: +254 727304963</p>
                <p><Envelope className="me-3" /> Mail: info@multures.com</p>
                <p><Share className="me-3" /> Social Media: MultureSuppliersLtd</p>
                <p><GeoAlt className="me-3" /> Outlet Address: Nrb Bunyala Rd bazaar bld</p>
              </div>

              {/* Simple Functional Form (Integrating with Formspree) */}
              <Form action="https://formspree.io/f/xnjjqaab" method="POST" className="mt-5">
                <Form.Group className="mb-3">
                  <Form.Control type="text" name="name" placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="email" name="email" placeholder="Your Email" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control as="textarea" name="message" rows={4} placeholder="How can we help?" required />
                </Form.Group>
                <Button type="submit" className="submit-btn">Send Message</Button>
              </Form>
            </div>
          </Col>

          {/* Right Side: Image */}
          <Col lg={6} className="d-none d-lg-block">
            <div 
              className="contact-image" 
              style={{ backgroundImage: `url(${contactSideImg})` }}
            ></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;