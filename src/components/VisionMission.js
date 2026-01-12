import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
// 'Target' does not exist in this library, use 'Bullseye' instead
import { Eye, Bullseye } from 'react-bootstrap-icons'; 
import './VisionMission.css';

const VisionMission = () => {
  return (
    <section id="mission" className="vm-section">
      <Container>
        <Row className="justify-content-center gap-lg-4">
          
          {/* Mission Card */}
          <Col md={5} className="mb-4">
            <Card className="vm-card mission-card h-100">
              <Card.Body className="d-flex flex-column align-items-center text-center">
                <div className="icon-box">
                  <Bullseye size={70} />
                </div>
                <Card.Title className="fw-bold">Our Mission</Card.Title>
                <hr className="vm-divider" />
                <Card.Text>
                  To provide innovative and sustainable aluminium and glazing solutions 
                  that enhance architectural beauty while maintaining the highest 
                  standards of safety, quality, and customer satisfaction.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Vision Card */}
          <Col md={5} className="mb-4">
            <Card className="vm-card vision-card h-100">
              <Card.Body className="d-flex flex-column align-items-center text-center">
                <div className="icon-box">
                  <Eye size={70} />
                </div>
                <Card.Title className="fw-bold">Our Vision</Card.Title>
                <hr className="vm-divider" />
                <Card.Text>
                  To be the leading partner in the construction industry across the 
                  region, recognized for our precision, integrity, and excellence 
                  in glazing and aluminium fabrication.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default VisionMission;