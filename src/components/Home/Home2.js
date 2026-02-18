import React from "react";
import { Container, Row, Col } from "react-bootstrap";


import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>

          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
             Turning ideas into intelligent and practical software solutions through a blend of AI, software engineering, and full-stack development.
             <br /><br />
              My approach focuses on creating applications that are both technically strong and user-oriented, combining innovation with real-world usability. 
              <br /><br />I continuously explore new technologies and development practices to build solutions that are efficient, scalable, and impactful.
<br /><br />
              I actively maintain my GitHub repository and continuously work on improving my technical skills.
            </p>
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
