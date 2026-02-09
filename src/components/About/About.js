import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Card from "react-bootstrap/Card";


function About() {
  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              
            </Col>
          </Row>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <Techstack />

          <Toolstack />
<h1 className="project-heading" style={{ marginTop: "40px" }}>
  <strong className="purple">Experience & Participation</strong>
</h1>

<Row style={{ justifyContent: "center", paddingBottom: "40px" }}>

  <Col md={4} className="project-card">
    <Card className="project-card-view" style={{ height: "100%" }}>
      <Card.Body>
        <Card.Title style={{ fontSize: "1.2rem" }}>
          Hack2Skill TechSprint
        </Card.Title>
        <Card.Text>
          Top 10 Finalist — Google Developer Communities Hackathon.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>

  <Col md={4} className="project-card">
    <Card className="project-card-view" style={{ height: "100%" }}>
      <Card.Body>
        <Card.Title style={{ fontSize: "1.2rem" }}>
          OpenSourceX 2025
        </Card.Title>
        <Card.Text>
          Participant — Hackathon organized by KL University & sponsored by Red Hat.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>

  <Col md={4} className="project-card">
    <Card className="project-card-view" style={{ height: "100%" }}>
      <Card.Body>
        <Card.Title style={{ fontSize: "1.2rem" }}>
          Industry Internships
        </Card.Title>
        <Card.Text>
          Completed AI/ML and Full-Stack Virtual Internships with hands-on project experience.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>

</Row>

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
