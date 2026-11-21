import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiSwagger,
  SiJest,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{ fontSize: "18px" }}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSwagger />
        <p style={{ fontSize: "18px" }}>Swagger</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJest />
        <p style={{ fontSize: "18px" }}>Jest</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
