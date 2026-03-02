import React, { useState } from 'react'; 
import { Container, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap';
import { Telephone, Envelope, Globe, GeoAlt, Share } from 'react-bootstrap-icons';
import './Contact.css';
import contactSideImg from '../assets/piyush-saini-a1a-noida-render-01.jpg'; 
import logoImg from '../assets/logo.png';

const Contact = () => {
  // States to manage the feedback loop without redirecting
  const [status, setStatus] = useState(""); // Options: "", "SENDING", "SUCCESS", "ERROR"

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the Formspree redirect
    setStatus("SENDING");
    
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mgolpyqz", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset(); // Clears the inputs after successful send
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <Container fluid className="p-0">
        <Row className="g-0">
          <Col lg={6} className="contact-left-content">
            <div className="contact-info-wrapper">
              <img src={logoImg} alt="Multures Logo" className="contact-logo" loading="lazy" />
              <h2 className="contact-title">TALK TO US</h2>
              
              <div className="contact-details">
  <p>
    <Globe className="me-3" /> 
    Website: <a href="https://www.multures.social" target="_blank" rel="noopener noreferrer" className="contact-link">
      www.multures.social
    </a>
  </p>
  <p><Telephone className="me-3" /> Phone: +254 727304963</p>
  <p>
    <Envelope className="me-3" /> 
    Mail: <a href="mailto:Multuressuppliers@multures.social" className="contact-link">
      Multuressuppliers@multures.social
    </a>
  </p>
  <p><Share className="me-3" /> Social Media: MultureSuppliersLtd</p>
  <p><GeoAlt className="me-3" /> Outlet Address: Nrb Bunyala Rd bazaar bld</p>
</div>

              {/* Success and Error Alerts */}
              {status === "SUCCESS" && (
                <Alert variant="success" className="mt-3">
                  Thank you! Your message has been sent successfully.
                </Alert>
              )}
              {status === "ERROR" && (
                <Alert variant="danger" className="mt-3">
                  Oops! There was a problem. Please try again or email us directly.
                </Alert>
              )}

              {/* We use onSubmit instead of action/method to control the flow */}
              <Form onSubmit={handleSubmit} className="mt-5">
                <Form.Group className="mb-3">
                  <Form.Control type="text" name="name" placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="email" name="email" placeholder="Your Email" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control as="textarea" name="message" rows={4} placeholder="How can we help?" required />
                </Form.Group>
                
                <Button 
                  type="submit" 
                  className="submit-btn" 
                  disabled={status === "SENDING"}
                >
                  {status === "SENDING" ? (
                    <>
                      <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
                      Sending...
                    </>
                  ) : "Send Message"}
                </Button>
              </Form>
            </div>
          </Col>

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