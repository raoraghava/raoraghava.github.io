import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import BookExchange from "../../Assets/Projects/BookExchange.png";
import ExamHallSeating from "../../Assets/Projects/ExamHallSeating.png";
import ATMSimulation from "../../Assets/Projects/ATMSimulation.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BookExchange}
              isBlog={false}
              title="Book Exchange Web Application"
              description="This project focuses on creating a community platform for book enthusiasts to exchange books, promoting literacy and environmental sustainability. The application, developed using React JS for the frontend, Node.js and Express.js for the backend, and MongoDB for data management, integrates advanced algorithms for efficient partner selection and robust recommendation systems to enhance user engagement."
              ghLink="https://github.com/raoraghava/Book-Exchange-Web-Application"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ExamHallSeating}
              isBlog={false}
              title="Exam Hall Seating Arrangement Application"
              description="This project is developed for the colleges to simplify examination hall allotment and Seating arrangement manual work. It facilitates to access the examination information of a particular student in a particular class. This application will generate the room plan for the students and assign invigilation duties to the faculty without any clash by removing a lot of manual activity."
              ghLink="https://github.com/raoraghava/Exam-Hall-Seating-Arrangement-Application"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ATMSimulation}
              isBlog={false}
              title="Simulation of ATM Operations"
              description="The aim of this project is to build a Java based ATM simulation system. This ATM simulation system requires constant updating of records between the bank servers and a spread out network of ATM's. The whole process will be automated right from PIN validation to transaction completion. The services include cash withdrawal, deposit, transfer and enquiry. It has both Admin and User roles with specific set of privileges to each role."
              ghLink="https://github.com/raoraghava/Simulation-of-ATM-Operations"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
