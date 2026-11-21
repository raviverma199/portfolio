import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiMysql,
  DiDocker,
  DiAws,
} from "react-icons/di";
import {
  SiRedis,
  SiPostgresql,
  SiTypescript,
  SiNestjs,
  SiExpress,
  SiOracle,
  SiRabbitmq,
  SiSocketdotio,
  SiPrisma,
  SiNginx,
  SiGithubactions,
} from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{ fontSize: "18px" }}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNestjs />
        <p style={{ fontSize: "18px" }}>NestJS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <p style={{ fontSize: "18px" }}>Express.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <p style={{ fontSize: "18px" }}>TypeScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: "18px" }}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRabbitmq />
        <p style={{ fontSize: "18px" }}>RabbitMQ</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSocketdotio />
        <p style={{ fontSize: "18px" }}>WebSockets</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbApi />
        <p style={{ fontSize: "18px" }}>REST APIs</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p style={{ fontSize: "18px" }}>PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <p style={{ fontSize: "18px" }}>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={{ fontSize: "18px" }}>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
        <p style={{ fontSize: "18px" }}>Redis</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrisma />
        <p style={{ fontSize: "18px" }}>Prisma ORM</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle />
        <p style={{ fontSize: "18px" }}>OracleDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAws />
        <p style={{ fontSize: "18px" }}>AWS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
        <p style={{ fontSize: "18px" }}>Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNginx />
        <p style={{ fontSize: "18px" }}>Nginx</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions />
        <p style={{ fontSize: "18px" }}>GitHub Actions</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{ fontSize: "18px" }}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaProjectDiagram />
        <p style={{ fontSize: "18px" }}>System Design</p>
      </Col>
    </Row>
  );
}

export default Techstack;
