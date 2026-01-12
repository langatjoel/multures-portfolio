import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Services.css';

import windowsImg from '../assets/3PANE_SLIDER_INTERIOR_F360.jpg'; 
import partitionsImg from '../assets/special-lite-dual-glazed-litespace-office-corner-sq-scaled.webp';
import curtainImg from '../assets/p1.jpg';
import fabricationImg from '../assets/special-lite-dual-glazed-litespace-office-corner-sq-scaled.webp';

const Services = () => {
  const products = [
    { 
      title: "Windows & Doors", 
      desc: "Custom fabricated aluminium doors and windows designed for durability and style.",
      img: windowsImg 
    },
    { 
      title: "Partitions & Blinds", 
      desc: "Office partitions, service counters for banks, and vertical blinds/curtains.",
      img: partitionsImg
    },
    { 
      title: "Curtain Walling", 
      desc: "Advanced structural glazing systems and curtain walling for modern facades.",
      img: curtainImg
    },
    { 
      title: "Specialized Fabrication", 
      desc: "Picture frames and varied extrusions tailored to institutional needs.",
      img: fabricationImg
    }
  ];

  return (
    <section id="services" className="services-section">
      <Container>
        <div className="text-center mb-5">
          <h6 className="services-subtitle">Expert Installation</h6>
          <h2 className="services-main-title">OUR PRODUCTS <span>& SERVICES</span></h2>
          <p className="services-intro">
            We specialize in the installation of aluminium products, combining durability with modern design 
            to enhance both interior and exterior spaces.
          </p>
        </div>

        <Row className="g-4"> {/* Added g-4 for consistent gutter spacing */}
          {products.map((item, index) => (
            <Col lg={3} md={6} key={index}>
              <div className="service-box">
                <div 
                  className="service-image-bg" 
                  style={{ backgroundImage: `linear-gradient(transparent, rgba(0, 31, 63, 0.9)), url(${item.img})` }}
                >
                  <div className="service-content">
                    <h3>{item.title}</h3>
                    <div className="hover-text">
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;