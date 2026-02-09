import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>

        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>

        <p style={{ color: "white" }}>
          Academic and personal projects demonstrating AI, ML, and Full-Stack skills.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              title={<span className="purple">Emotion-Aware Voice Analysis</span>}
              description="Detects infant emotional states from cry audio using deep learning."
              ghLink="https://github.com/Sreeja-Kodali/Voice-Based-Sentimental-Analysis-with-Baby-Cry-Detection"
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              title={<span className="purple">Sign Language Detection</span>}
              description="Real-time hand gesture recognition and text conversion."
              ghLink="https://github.com/Sreeja-Kodali/Sign-Language-Detection-System"
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              title={<span className="purple">Smart Surveillance Object Detection</span>}
              description="Live object detection in video streams using pretrained CNN models."
              ghLink="https://github.com/Sreeja-Kodali/Real-Time-Object-Video-Detection-for-Smart-Security-Surveillance"
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              title={<span className="purple">Patient Care Management Platform</span>}
              description="Healthcare system for managing patient records and appointments."
              ghLink="https://github.com/Sreeja-Kodali/Integrated-Patient-Care-Management-Platform"
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              title={<span className="purple">Biometric Data Privacy Vault</span>}
              description="Secure encrypted storage system for biometric authentication."
              ghLink="https://github.com/Sreeja-Kodali/Biometric-Data-Privacy-Vault"
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              title={<span className="purple">House Price Analysis</span>}
              description="Regression model developed for housing price prediction."
              ghLink="https://github.com/Sreeja-Kodali/House-Price-Analysis"
            />
          </Col>

          <Col lg={4} md={6} sm={12} className="project-card">
            <ProjectCard
              title={<span className="purple">Interactive Map for Local Services</span>}
              description="Web-based interactive map to locate nearby services."
              ghLink="https://github.com/Likitha-Thumma/Interactive-Map-For-Local-Services"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
