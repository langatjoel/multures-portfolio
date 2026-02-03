import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { PersonCircle } from 'react-bootstrap-icons';
import './Directors.css';

const Directors = () => {
  const directors = [
    { name: "Jackson Mirimu Mbele", role: "Managing Director" },
    { name: "Patrick Karani Imbwaga", role: "Technical Director" },
    { name: "Joseph Hemstone Avugwi", role: "Operations Director" },
    { name: "Victor Imbwaga Karani", role: "Project Director" }
  ];

  return (
    <section id="directors" className="directors-section">
      <Container>
        <div className="text-center mb-5">
          <h6 className="directors-subtitle">Our Leadership</h6>
          <h2 className="directors-main-title">BOARD OF <span>DIRECTORS</span></h2>
          <p className="directors-intro">
            Guided by a team of experienced professionals dedicated to excellence in 
            aluminium fabrication and structural glazing.
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {directors.map((director, index) => (
            <Col lg={3} md={6} key={index}>
              <Card className="director-card">
                <div className="director-img-container">
                  {/* Replace with <img src={...} /> once you have their photos */}
                  <PersonCircle size={100} className="director-placeholder" />
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="director-name">{director.name}</Card.Title>
                  <Card.Text className="director-role">{director.role}</Card.Text>
                  <div className="director-divider"></div>
                  <Card.Text className="director-nationality">Kenyan</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Directors;