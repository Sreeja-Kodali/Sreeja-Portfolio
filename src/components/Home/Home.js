import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Techstack from "../About/Techstack";
import Github from "../About/Github";

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
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SREEJA KODALI </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              
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

              </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
