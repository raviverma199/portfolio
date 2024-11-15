import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiJest
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{ fontSize: "18px" }}>Visual Studio Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{ fontSize: "18px" }}>PostMan</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJest />
        <p style={{ fontSize: "18px" }}>Jest</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
