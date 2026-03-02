import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Projects.css';

// Import images from your assets (mapped from your Projects.pdf)
import project1 from '../assets/shower-cubical-1.png'; // Page 1/7/8/9
import project2 from '../assets/aluminium-doors.png';   // Page 2/3
import project3 from '../assets/glazing-installation.png'; // Page 4/5
import project4 from '../assets/bath-enclosure.png';    // Page 6/10/11

const Projects = () => {
  const gallery = [
    { title: "Frameless Shower Cubicles", category: "Interior", img: project1 },
    { title: "Aluminium Door Systems", category: "Fabrication", img: project2 },
    { title: "Structural Glazing", category: "Exterior", img: project3 },
    { title: "Premium Bath Enclosures", category: "Interior", img: project4 }
  ];

  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h6 className="projects-subtitle text-success fw-bold">OUR PORTFOLIO</h6>
          <h2 className="projects-main-title">RECENT <span>PROJECTS</span></h2>
          <div className="title-underline mx-auto"></div>
        </div>

        <Row className="g-4">
          {gallery.map((project, index) => (
            <Col lg={6} md={12} key={index} data-aos="fade-up" data-aos-delay={index * 200}>
              <div className="project-item">
                <div className="project-img-wrapper">
                  <img src={project.img} alt={project.title} className="img-fluid" />
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <span className="project-cat">{project.category}</span>
                      <h4 className="project-name">{project.title}</h4>
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

export default Projects;