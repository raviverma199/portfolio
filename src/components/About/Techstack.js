import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiMysql,
  DiDocker
} from "react-icons/di";
import {
  SiRedis,
  SiPostgresql,
  SiGraphql,
  SiTypescript
} from "react-icons/si";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: "18px" }}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{ fontSize: "18px" }}>Node.js</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <p style={{ fontSize: "18px" }}>TypeScript</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ fontSize: "18px" }}>React.js</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <p style={{ fontSize: "18px" }}>Mysql</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p style={{ fontSize: "18px" }}>Postgresql</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={{ fontSize: "18px" }}>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{ fontSize: "18px" }}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
        <p style={{ fontSize: "18px" }}>Redis</p>
      </Col>
      

      

      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
        <p style={{ fontSize: "18px" }}>Docker</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql />
        <p style={{ fontSize: "18px" }}>GraphQL</p>
      </Col>
 
    </Row>
  );
}

export default Techstack;
