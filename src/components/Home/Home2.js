import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
              I'm a full-stack developer with a passion for crafting exceptional
              user experiences. I've honed my skills in a range of technologies,
              including{" "}
              <b className="purple">
                {" "}
                <i>
                  JavaScript, React, Node.js, and cloud platforms like AWS and
                  Azure.
                </i>
              </b>
              <br />
              <br />
              My journey began with a fascination for problem-solving and a
              desire to build innovative solutions. Through hands-on experience
              and continuous learning, I've developed a strong foundation in{" "}
              <b>
                <i className="purple">
                  {" "}
                  web development, mobile app development, and database
                  management.
                </i>
              </b>
              <br />
              <br />I thrive on collaborating with cross-functional teams to
              bring ideas to life. My experience spans from conceptualization to
              deployment, ensuring that every project is delivered with
              precision and efficiency.
              <br />
              <br />
              Whenever possible, I tend to explore new technologies and stay
              ahead of industry trends. My goal is to create impactful digital
              experiences that exceed expectations.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/raoraghava"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/raghava-rao-79a453146/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
