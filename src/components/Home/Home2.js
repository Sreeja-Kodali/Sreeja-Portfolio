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
             Computer Science undergraduate passionate about AI, Machine Learning, Computer Vision, and Full-Stack Development.
<br /><br />
Experienced in building real-world projects using <b className="purple">Python, OpenCV, TensorFlow, React, and MySQL</b>.

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
