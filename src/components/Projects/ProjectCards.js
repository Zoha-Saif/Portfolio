import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="project-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* GitHub button (only if provided) */}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp; GitHub
          </Button>
        )}

        {/* Demo / Live / Video */}
        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            {props.demoLink.includes("linkedin") ? (
              <>
                <BsLinkedin /> &nbsp; Demo Video
              </>
            ) : (
              <>
                <CgWebsite /> &nbsp; Live Site
              </>
            )}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
