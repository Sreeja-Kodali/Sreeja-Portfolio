import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">

              {/* Typewriter text (Hero Section) */}
              <div style={{ paddingTop: 60, textAlign: "left" }}>
                <h1 className="heading">
                  <Type />
                </h1>
              </div>

            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              {/* Keep empty or add image later */}
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>

            <ul className="home-about-social-links">

              <li className="social-icons">
                <a
                  href="https://github.com/Sreeja-Kodali"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/sreejakodali"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:sreejakodali12@gmail.com"
                  className="icon-colour home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
