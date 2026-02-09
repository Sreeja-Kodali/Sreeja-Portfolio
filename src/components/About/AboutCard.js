import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Kodali Naga Sreeja</span>.
            <br />
            I am currently pursuing B.Tech in Computer Science Engineering.
            <br />
            <br />
            I am interested in Artificial Intelligence, Machine Learning,
            Computer Vision, and Full Stack Development.
            <br />
            <br />
            I have developed academic projects such as Emotion-Aware Voice
            Analysis, Sign Language Detection, Real-Time Object Detection,
            and a Patient Care Management System.
            <br />
            <br />
            Through these projects, I gained practical experience in building
            models, analyzing data, and developing applications that solve
            real-world problems.I enjoy developing real-world applications.
          </p>
  <br />
<h2 className="purple" style={{ marginTop: "30px" }}>Education</h2>

<div className="edu-timeline">

  <div className="edu-item">
    <h4>Koneru Lakshmaiah University (2024–Present)</h4>
    <p>B.Tech – Computer Science Engineering</p>
    <b>CGPA: 9.79 / 10</b>
  </div>

  <div className="edu-item">
    <h4>Sri Vasishta Junior College (2022–2024)</h4>
    <p>Intermediate – MPC</p>
    <b>Marks: 968 / 1000</b>
  </div>

  <div className="edu-item">
    <h4>Jyothi Vidyalaya High School (2021–2022)</h4>
    <p>SSC (10th)</p>
    <b>GPA: 9.5 / 10</b>
  </div>

</div>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
