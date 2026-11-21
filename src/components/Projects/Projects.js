import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

// Images
import mygradesaiImg from "../../Assets/Projects/mygradesai.png";
import hondalogo from "../../Assets/Projects/honda_logo.png";
import fixitaiImg from "../../Assets/Projects/fixitaiImg.png";
import sass from "../../Assets/Projects/saas.png";
import ticket from "../../Assets/Projects/ticket.png";
import bitsOfCode from "../../Assets/Projects/login.png";

const projectsData = [
  {
    title: "MyGrades AI - Adaptive Learning Platform",
    subtitle: "Current Company · Node.js · TypeScript · MongoDB · RabbitMQ · CI/CD",
    badge: "⚡ Current Company · Production AI EdTech",
    img: mygradesaiImg,
    desc: "AI-driven EdTech platform providing personalized learning paths, adaptive assessments, and smart tutoring for K-12 students across 100+ subjects.",
    tags: ["Node.js", "TypeScript", "MongoDB", "RabbitMQ", "GitHub Actions", "API Optimization", "CI/CD", "EdTech"],
    features: [
      "Architected and built scalable backend services and optimized REST APIs using Node.js, TypeScript, and MongoDB for an AI-powered EdTech platform.",
      "Implemented RabbitMQ message queues for asynchronous background jobs, event-driven task processing, and automated reminder notifications.",
      "Managed, modeled, and tuned high-volume MongoDB databases—optimizing indexes, complex aggregation pipelines, and query latency under heavy read/write loads.",
      "Automated end-to-end production deployments using GitHub Actions CI/CD pipelines, ensuring seamless automated testing and zero-downtime releases.",
      "Integrated AI study assistant (AIRA Chat) APIs and adaptive assessment engines to deliver personalized student evaluation across 100+ school subjects.",
    ],
    github: null,
    demo: "https://mygradesai.com/",
  },
  {
    title: "Dealer Evaluation Audit System",
    subtitle: "Honda Motorcycle & Scooter India Pvt. Ltd.",
    badge: "⚡ Enterprise Production · 50K+ Daily Active Users",
    img: hondalogo,
    desc: "Enterprise field audit backend supporting nationwide Sales, Service, and BigWing dealership operations with high-concurrency data sync.",
    tags: ["Node.js", "SQL Optimization", "Column Indexing", "HMSI Production", "50K+ Daily Active Users", "Redis Caching", "RBAC"],
    features: [
      "Built scalable backend systems for Sales, Service, and Bigwing, supporting 50K+ daily active users across India.",
      "Reduced audit report generation time by 80% by optimizing slow SQL queries, adding indexes on heavily used columns, and fixing delays in real-time data synchronization.",
      "Designed role-based access for managers, auditors, and admins, enforcing isolation across 600+ dealer locations.",
      "Implemented Redis caching and SQL connection pooling, enabling the backend to reliably handle 10K+ concurrent requests during peak audit cycles.",
    ],
    github: null,
    demo: "#",
  },
  {
    title: "FixItAI - AI Code Assistant",
    subtitle: "Node.js · TypeScript · OpenAI & Gemini · AWS · WebSockets · Judge0",
    badge: "⚡ Multi-LLM Pipelines · Cloud Architecture",
    img: fixitaiImg,
    desc: "Intelligent developer assistant utilizing multi-provider AI models to analyze, refactor, and execute code directly on GitHub repositories.",
    tags: ["Node.js", "TypeScript", "OpenAI (GPT-4)", "Google Gemini", "AWS", "Redis Caching", "WebSockets", "Judge0"],
    features: [
      "Engineered an AI code assistant that analyzes, refactors, and fixes bugs in GitHub repositories using GitHub OAuth.",
      "Architected multi-provider LLM pipelines integrating OpenAI and Google Gemini with token rate-limiting and Redis caching for high throughput.",
      "Deployed and hosted scalable backend infrastructure on AWS with Docker containerization, ensuring reliable cloud execution.",
      "Powered real-time multi-user collaborative workspaces with WebSocket live editing and remote sandboxed code execution via Judge0.",
    ],
    github: "https://github.com/raviverma199/Fixitai",
    demo: "#",
  },
  {
    title: "MFS Travel - Booking & CRM Backend",
    subtitle: "Contract (Jan. 2025 – Aug. 2025) · Node.js · TypeScript · AWS S3",
    badge: "⚡ 20K+ Daily Requests · 15K+ S3 Uploads",
    img: sass,
    desc: "Modular travel booking and CRM backend handling real-time customer communications, role-based workflows, and automated cloud file storage on AWS.",
    tags: ["Node.js", "TypeScript", "AWS S3", "Redis Caching", "WebSockets", "SQL Optimization", "GitHub Actions"],
    features: [
      "Built a modular CRM backend for Auth, RBAC, live chat, and bookings using Node.js, TypeScript, and WebSockets.",
      "Optimized SQL query plans and Redis caching across 20K+ daily requests, keeping APIs fast under load.",
      "Automated CI/CD with GitHub Actions and built secure S3 uploads via presigned URLs, handling 15K+ file uploads.",
    ],
    github: null,
    demo: "#",
  },
  {
    title: "Customer Support Ticketing Platform",
    subtitle: "Manthan IT Solutions · Merged into HMSI",
    badge: "⚡ 40% Faster Resolution · Live WebSockets",
    img: ticket,
    desc: "Real-time support and issue tracking backend built from the ground up and successfully merged into Honda's production infrastructure.",
    tags: ["Node.js", "Express", "WebSockets", "JWT Authentication", "RBAC", "MongoDB", "Auto-Routing"],
    features: [
      "Built the ticketing backend from scratch with ticket creation, routing, and admin controls, later merged into HMSI.",
      "Implemented real-time chat using WebSockets and JWT-based authentication with role-based access control (RBAC).",
      "Developed scalable ticket processing with automated routing and assignment, cutting average resolution time by 40%.",
    ],
    github: null,
    demo: "#",
  },
  {
    title: "Finance Tracker & Expense Analytics",
    subtitle: "Personal Finance & Budget Engine · GitHub Open Source",
    badge: "⚡ Expense Analytics · Real-Time Tracking",
    img: bitsOfCode,
    desc: "Personal finance platform that enables users to manage income, categorize expenses, monitor budget thresholds, and view financial analytics.",
    tags: ["Node.js", "Express", "REST APIs", "Data Modeling", "Analytics", "GitHub"],
    features: [
      "Engineered a personal finance backend to manage, track, and categorize income, multi-currency expenses, and savings.",
      "Designed transaction data models and aggregation queries for real-time budget tracking and savings goal milestones.",
      "Built clean, modular REST API endpoints with robust error handling, category breakdowns, and time-series financial reporting.",
    ],
    github: "https://github.com/raviverma199/Finance-Tracker",
    demo: "#",
  },
];

function ProjectCardItem({ proj }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      style={{
        padding: "24px",
        borderRadius: "16px",
        background: isHovered
          ? "linear-gradient(145deg, rgba(30, 22, 60, 0.95), rgba(18, 12, 38, 0.95))"
          : "linear-gradient(145deg, rgba(20, 15, 45, 0.85), rgba(12, 8, 26, 0.85))",
        border: isHovered
          ? "1px solid rgba(199, 112, 240, 0.65)"
          : "1px solid rgba(199, 112, 240, 0.22)",
        boxShadow: isHovered
          ? "0 14px 35px rgba(119, 53, 136, 0.45)"
          : "0 8px 24px rgba(0, 0, 0, 0.4)",
        transform: isHovered ? "translateY(-7px)" : "translateY(0)",
        transition: "all 0.35s ease-in-out",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "left",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        {/* Project Image */}
        <div
          style={{
            width: "100%",
            height: "180px",
            borderRadius: "10px",
            overflow: "hidden",
            marginBottom: "16px",
            backgroundColor: "rgba(10, 8, 22, 0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <img
            src={proj.img}
            alt={proj.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              padding: "8px",
            }}
          />
        </div>

        {/* Highlight Badge */}
        {proj.badge && (
          <div style={{ marginBottom: "10px" }}>
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: "600",
                color: "#c770f0",
                backgroundColor: "rgba(199, 112, 240, 0.12)",
                border: "1px solid rgba(199, 112, 240, 0.3)",
                padding: "3px 10px",
                borderRadius: "20px",
                display: "inline-block",
                letterSpacing: "0.3px",
              }}
            >
              {proj.badge}
            </span>
          </div>
        )}

        {/* Title */}
        <h3
          style={{
            fontSize: "1.32rem",
            fontWeight: "700",
            color: "#ffffff",
            marginBottom: "3px",
            lineHeight: "1.3",
          }}
        >
          {proj.title}
        </h3>

        {/* Subtitle */}
        {proj.subtitle && (
          <p
            style={{
              fontSize: "0.85rem",
              color: "#a594c9",
              marginBottom: "12px",
              fontWeight: "500",
            }}
          >
            {proj.subtitle}
          </p>
        )}

        {/* Description */}
        <p
          style={{
            fontSize: "0.91rem",
            color: "#c5bbdb",
            marginBottom: "14px",
            lineHeight: "1.5",
          }}
        >
          {proj.desc}
        </p>

        {/* Tech Stack Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            marginBottom: "16px",
          }}
        >
          {proj.tags &&
            proj.tags.map((t, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: "0.74rem",
                  color: "#d8c7f5",
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  padding: "2px 8px",
                  borderRadius: "5px",
                  fontWeight: "500",
                }}
              >
                {t}
              </span>
            ))}
        </div>

        {/* Features List */}
        <ul
          style={{
            fontSize: "0.89rem",
            color: "#e0d6f2",
            lineHeight: "1.6",
            marginBottom: "20px",
            paddingLeft: "0",
            listStyle: "none",
          }}
        >
          {proj.features.map((feat, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "8px",
              }}
            >
              <span
                style={{
                  color: "#c770f0",
                  marginRight: "8px",
                  fontSize: "1rem",
                  lineHeight: "1.4",
                }}
              >
                ▹
              </span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "10px", marginTop: "auto", paddingTop: "10px" }}>
        {proj.github && (
          <a
            href={proj.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "8px 18px",
              background: "linear-gradient(135deg, #623686 0%, #9b51e0 100%)",
              color: "#ffffff",
              textDecoration: "none",
              borderRadius: "6px",
              fontSize: "0.9rem",
              fontWeight: "600",
              transition: "all 0.3s ease",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              flex: proj.demo && proj.demo !== "#" ? 1 : "initial",
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <BsGithub /> GitHub
          </a>
        )}
        {proj.demo && proj.demo !== "#" && (
          <a
            href={proj.demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "8px 18px",
              backgroundColor: "rgba(40, 167, 69, 0.2)",
              border: "1px solid #28a745",
              color: "#28a745",
              textDecoration: "none",
              borderRadius: "6px",
              fontSize: "0.9rem",
              fontWeight: "600",
              transition: "all 0.3s ease",
              flex: 1,
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#28a745";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(40, 167, 69, 0.2)";
              e.currentTarget.style.color = "#28a745";
            }}
          >
            <CgWebsite /> Live Demo
          </a>
        )}
        {!proj.github && (!proj.demo || proj.demo === "#") && (
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "7px 14px",
              backgroundColor: "rgba(199, 112, 240, 0.1)",
              border: "1px solid rgba(199, 112, 240, 0.28)",
              color: "#d89cf6",
              borderRadius: "6px",
              fontSize: "0.82rem",
              fontWeight: "600",
            }}
          >
            🔒 Enterprise Internal System
          </span>
        )}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Projects & Architecture</strong>
        </h1>
        <p style={{ color: "#d1c4e9", fontSize: "1.05rem" }}>
          Production systems, scalable backends, and engineering solutions I've architected and delivered.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsData.map((proj, index) => (
            <Col md={4} className="project-card" key={index} style={{ marginBottom: "30px" }}>
              <ProjectCardItem proj={proj} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
