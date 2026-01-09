import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I’m <span className="purple">Zoha Saif</span> from{" "}
            <span className="purple">Lahore, PK</span>.
            <br />
            I’m currently a <span className="purple">BSc Computer Science student</span> in my 8th semester, 
            and I have recently started my journey as a <span className="purple">freelance developer</span>. 
            I’ve built projects such as a <span className="purple">portfolio e-commerce website</span> for a client 
            and I enjoy creating practical, user-friendly applications.
            <br />
            <br />
            My background is in <span className="purple">computer sciences</span> and I hold a few <span className="purple">cybersecurity certifications</span>.
            I am passionate about exploring new technologies and continuously improving my skills.
            <br />
            <br />
            Outside of tech, I enjoy activities that keep me creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Skills and Tools 🛠️
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning about business and entrepreneurship 
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Discovering New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to learn, build, and make an impact every day!"{" "}
          </p>
          <footer className="blockquote-footer">Zoha Saif</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
