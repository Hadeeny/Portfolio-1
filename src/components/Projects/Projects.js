import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import shorterlink from "../../Assets/Projects/shorter links.jpg";
// import suicide from "../../Assets/Projects/suicide.png";
import easybank from "../../Assets/Projects/easybank.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "#1b0e58" }}>Here are some of my recent projects.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shorterlink}
              isBlog={false}
              title="Shorter Link"
              description="Shortly URL shortening API Challenge built with reactjs"
              ghLink="https://github.com/Hadeeny/shorterlink.git"
              demoLink="https://short-lnk.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={easybank}
              isBlog={false}
              title="Easybank Landing page"
              description="Easybank landing page a frontend mentor challenge built with reactjs"
              ghLink="https://github.com/Hadeeny/easybank-landing-page.git"
              demoLink="https://easybank-landign-page.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
