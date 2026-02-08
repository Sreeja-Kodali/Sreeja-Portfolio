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
          These are some of the academic and personal projects I developed.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Emotion-Aware Voice Analysis"
              description="AI system that analyzes baby cry audio to detect emotional states."
              ghLink="https://github.com/Sreeja-Kodali/Voice-Based-Sentimental-Analysis-with-Baby-Cry-Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Sign Language Detection"
              description="Real-time hand gesture recognition using Computer Vision."
              ghLink="https://github.com/Sreeja-Kodali/Sign-Language-Detection-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Smart Surveillance Object Detection"
              description="Live video object detection using pretrained CNN models."
              ghLink="https://github.com/Sreeja-Kodali/Real-Time-Object-Video-Detection-for-Smart-Security-Surveillance"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Patient Care Management Platform"
              description="Full stack healthcare system to manage patient records."
              ghLink="https://github.com/Sreeja-Kodali/Integrated-Patient-Care-Management-Platform"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Biometric Data Privacy Vault"
              description="Secure encrypted storage system for biometric data."
              ghLink="https://github.com/Sreeja-Kodali/Biometric-Data-Privacy-Vault"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="House Price Analysis"
              description="Regression model for housing price prediction."
              ghLink="https://github.com/Sreeja-Kodali/House-Price-Analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Interactive Map for Local Services"
              description="Web-based map to locate nearby services."
              ghLink="https://github.com/Likitha-Thumma/Interactive-Map-For-Local-Services"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
