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
          <h2 className="purple" style={{ marginTop: "30px" }}>Education</h2>

<div style={{ textAlign: "left", marginTop: "15px" }}>
  

  <p>
    <strong>Koneru Lakshmaiah University (KL University)</strong><br/>
    B.Tech – Computer Science Engineering<br/>
    CGPA: <strong>9.79 / 10</strong>
  </p>

  <p>
    <strong>Sri Vasishta Junior College</strong><br/>
    Intermediate – MPC<br/>
    Marks: <strong>968 / 1000</strong>
  </p>

  <p>
    <strong>Jyothi Vidyalaya High School</strong><br/>
    SSC (10th Grade)<br/>
    GPA: <strong>9.5 / 10</strong>
  </p>

</div>


        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
