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
      LET ME <span className="purple">INTRODUCE</span> MYSELF
    </h1>
  <p className="home-about-body">
  I’m a <b className="purple">Backend Developer</b> with nearly 2 years of experience crafting 
  scalable, high-performance applications using <b className="purple">Node.js</b> and <b className="purple">SQL</b>.  
  My journey started with building small scripts, but quickly evolved into 
  delivering <b className="purple">production-ready systems</b> that handle real-world challenges. 🚀
  
  <br />
  <br />
  I thrive on turning complex problems into simple, elegant solutions. 
  Whether it’s architecting a <b className="purple">secure API</b>, optimizing SQL queries for speed, 
  or integrating third-party services, I’m obsessed with building things that just work — fast and reliably.
  
  <br />
  <br />
  Lately, I’ve been expanding my skills into 
  <i>
    <b className="purple"> Machine Learning</b> and advanced <b className="purple">backend systems</b>,
  </i> 
  blending data-driven intelligence with rock-solid infrastructure.  
  I also enjoy working with modern frontend tools like <b className="purple">React.js</b> & <b className="purple">Next.js</b> 
  to create seamless full-stack experiences.
  
  <br />
  <br />
  Beyond code, I’m constantly chasing new challenges, collaborating with passionate teams, 
  and pushing myself to deliver impactful products that make a difference.
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
                  href="https://www.linkedin.com/in/ravi-verma-lindedin-profile/"
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
