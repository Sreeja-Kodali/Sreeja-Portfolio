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
              I am a Computer Science Engineering student interested in
              Artificial Intelligence, Machine Learning, Computer Vision, and Full Stack Development.
              <br /><br />

              I have developed several academic projects such as Emotion-Aware Voice Analysis,
              Sign Language Detection, Real-Time Object Detection, and a Patient Care Management Platform.
              <br /><br />

              Through these projects, I gained practical experience in using
              <b className="purple"> Python, OpenCV, TensorFlow, React, and MySQL </b>
              to build applications that solve real-world problems.
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
