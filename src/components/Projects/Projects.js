import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Project images (make sure these exist)
import alishbaArt from "../../Assets/Projects/alishba-art.PNG";
import shoeStore from "../../Assets/Projects/shoe-store.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some real-world projects I’ve worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          {/* Project 1: Alishba Khan Art */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alishbaArt}
              isBlog={false}
              title="Alishba Khan Art – Portfolio & E-Commerce"
              description="
A live portfolio and e-commerce website built for an artist using Next.js, React, and Firebase.
Includes a custom CMS where the admin can manage collections and products, Firebase authentication
for admin access, Cloudinary-based image uploads, and an inquiry-based product flow instead of
direct checkout.
              "
              demoLink="https://www.alishbakhanart.com/"
            />
          </Col>

          {/* Project 2: PHP Shoe Store */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoeStore}
              isBlog={false}
              title="Men’s Shoe E-Commerce Platform (PHP & MySQL)"
              description="
A full-stack PHP-based e-commerce platform built from scratch without frameworks.
Features session-based authentication, dynamic product & category management, cart and checkout
with size-based stock handling, admin dashboard, and a JavaScript chatbot assistant for instant
customer queries.
              "
              demoLink="https://www.linkedin.com/feed/update/urn:li:activity:7354774868363534337/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
