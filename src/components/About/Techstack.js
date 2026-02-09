import React from "react";
import { Col, Row } from "react-bootstrap";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import HTML from "../../Assets/TechIcons/HTML.svg";
import CSS from "../../Assets/TechIcons/CSS.svg";
import C from "../../Assets/TechIcons/C.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", alignItems: "center", paddingBottom: "50px" }}>


      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
  <img src={HTML} alt="html" />
  <div className="tech-icons-text">HTML</div>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <img src={CSS} alt="css" />
  <div className="tech-icons-text">CSS</div>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <img src={C} alt="c" />
  <div className="tech-icons-text">C</div>
</Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" />
        <div className="tech-icons-text">Node.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="java" />
        <div className="tech-icons-text">Java</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="python" />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="sql" />
        <div className="tech-icons-text">SQL / MySQL</div>
      </Col>

    </Row>
  );
}

export default Techstack;
