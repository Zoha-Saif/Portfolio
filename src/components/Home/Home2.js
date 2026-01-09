import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
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
              I’m Zoha Saif Ansari, a passionate Full-Stack Web Developer who turns ideas into high-performance, 
              scalable digital experiences. Over time, I’ve explored multiple technologies and discovered my passion
               for building high-performance systems with intuitive user experiences. I develop modern, secure, 
               and scalable websites using HTML, CSS, JavaScript, React.js, Next.js, Firebase, PHP, MySQL, and C++.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, Next.js, React.js, Node.js{" "}
                </b>
              </i>
               and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
             I focus strongly on speed optimization, clean architecture, and website security. I also enjoy 
              <i>
                <b className="purple">
                  {" "}
                  integrating AI-powered chatbots{" "}
                </b>
              </i>
              to enhance user engagement and automation.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>
              <br />
              
              If you’re looking for creativity, performance, and precision, you’re in the right place.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
