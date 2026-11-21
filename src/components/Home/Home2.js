import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row>
  <Col md={8} className="home-about-description">
    <h1 style={{ fontSize: "2.6em" }}>
      LET ME <span className="purple">INTRODUCE</span> MYSELF
    </h1>
  <p className="home-about-body">
  I'm a <b className="purple">Backend Developer with 3.6+ years of experience</b> building, architecting, and scaling backend applications using <b className="purple">Node.js, TypeScript, and SQL & NoSQL databases</b>.
  
  <br />
  <br />
  My experience covers backend architecture, API development, database design, and performance optimization. I work on building services that can handle growing traffic, increased concurrent requests, and changing application demands. This includes optimizing database queries and indexing, implementing Redis caching, and improving how backend services process and manage workloads.
  
  <br />
  <br />
  I've also worked with <b className="purple">RabbitMQ for asynchronous processing, background jobs, and event-driven workflows, WebSockets for real-time communication, and Docker for containerization</b>. Alongside development, I have hands-on experience with <b className="purple">AWS, CI/CD pipelines, and production deployments</b>.
  
  <br />
  <br />
  I focus on building scalable backend architectures, identifying performance bottlenecks, optimizing resource utilization, and ensuring services remain reliable as traffic and business requirements grow.
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
                  href="https://github.com/raviverma199"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/RaviVerma_Dev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ravi-verma-dev/"
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
