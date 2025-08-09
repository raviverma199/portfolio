import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

// Images
import leaf from "../../Assets/Projects/api.png";
import bitsOfCode from "../../Assets/Projects/login.png";
import weather from "../../Assets/Projects/weather.png";
import fixitaiImg from "../../Assets/Projects/fixitaiImg.png";
import sass from "../../Assets/Projects/saas.png";
import hondalogo from "../../Assets/Projects/honda_logo.png";
import ticket from "../../Assets/Projects/ticket.png";

// Reusable card styles
const cardStyle = {
  padding: "30px",
  border: "1px solid #e0e0e0",
  borderRadius: "12px",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#ffffff",
  textAlign: "center",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "transform 0.3s ease-in-out",
};

const imgStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  borderRadius: "8px",
  marginBottom: "20px",
};

const titleStyle = {
  fontSize: "1.6rem",
  fontWeight: "bold",
  color: "#333",
  marginBottom: "10px",
};

const descStyle = {
  fontSize: "1rem",
  color: "#555",
  marginBottom: "15px",
};

const ulStyle = {
  fontSize: "1.05rem",
  color: "#555",
  lineHeight: "1.6",
  marginBottom: "20px",
  textAlign: "left",
  paddingLeft: "20px",
};

const btnStyle = {
  display: "inline-block",
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "white",
  textDecoration: "none",
  borderRadius: "5px",
  fontSize: "1rem",
  fontWeight: "600",
  transition: "background-color 0.3s ease-in-out",
  margin: "5px",
};

const projectsData = [
  {
    title: "Fixitai - AI Code Assistant",
    img: fixitaiImg,
    desc: "An AI-powered code assistant that writes, debugs & optimizes code with multi-language support.",
    features: [
      "Built with TypeScript, React & Node.js for seamless UI & backend integration",
      "AI-powered code writing, debugging & optimization for 10+ programming languages",
      "Integrates with OpenAI API to provide intelligent real-time suggestions",
      "Implemented clean, modular architecture improving maintainability by 35%",
      "Boosted developer productivity by 40% during internal testing",
    ],
    github: "https://github.com/raviverma199/Fixitai",
    demo: "#",
  },
  {
    title: "Task Management SaaS",
    img: sass,
    desc: "A scalable SaaS platform to manage projects, teams & multi-level tasks efficiently.",
    features: [
      "Developed with TypeScript & React for scalable and responsive interface",
      "Role-based access control ensuring enterprise-level security",
      "Real-time progress tracking with interactive dashboards",
      "Automated reminders & priority settings improving task completion rates",
      "Increased team efficiency by 25% through streamlined workflows",
    ],
    github: "https://github.com/raviverma199/RESTful-API-with-Authentication",
    demo: "#",
  },
  {
    title: "Dealer Audit System (FieldConnect)",
    img: hondalogo,
    desc: "Honda's field audit system for seamless dealer performance tracking.",
    features: [
      "Designed & optimized RESTful APIs to handle large-scale audit data",
      "Wrote efficient SQL queries reducing data retrieval time by 30%",
      "Implemented backend caching to improve load speeds",
      "Enhanced backend performance enabling 10k+ concurrent requests",
      "Improved dealer audit accuracy by 20% through automation",
    ],
    github: "https://github.com/raviverma199/RESTful-API-with-Authentication",
    demo: "#",
  },
  {
    title: "Ticketing System",
    img: ticket,
    desc: "A real-time ticket management system with chat for issue resolution.",
    features: [
      "Developed with Node.js, Express, and MongoDB for high scalability",
      "Three user roles: Admin, Agent, User for structured workflow",
      "Real-time chat between users & agents via WebSocket",
      "Role-based authentication ensuring secure access control",
      "Reduced average ticket resolution time by 35%",
    ],
    github: "https://github.com/raviverma199/RESTful-API-with-Authentication",
    demo: "#",
  },
  {
    title: "Weather Forecast App",
    img: weather,
    desc: "A weather app providing real-time updates for any location.",
    features: [
      "Built with TypeScript & React for a responsive, smooth UI",
      "Real-time weather updates via OpenWeather API",
      "Search functionality delivering instant results",
      "Mobile-friendly responsive design for all devices",
      "Improved user engagement by 18% through intuitive UX",
    ],
    github: "https://github.com/raviverma199/RESTful-API-with-Authentication",
    demo: "#",
  },
  {
    title: "Finance Tracker",
    img: bitsOfCode,
    desc: "Track income, expenses, and savings with visual insights.",
    features: [
      "Developed with React for dynamic & interactive UI",
      "Categorize transactions with color-coded visuals",
      "Set & monitor budget goals with reminders",
      "Visual progress tracking using charts & graphs",
      "Helped users save 15% more on average by tracking expenses",
    ],
    github: "https://github.com/raviverma199/Finance-Tracker",
    demo: "#",
  },
  {
    title: "RESTful API with Authentication",
    img: leaf,
    desc: "A secure Node.js API with user authentication & session management.",
    features: [
      "Developed using Node.js with RESTful architecture",
      "Secure password hashing using bcrypt",
      "User registration, login & logout with JWT authentication",
      "Ready for front-end integration with CORS enabled",
      "Enhanced security compliance reducing breach risk by 40%",
    ],
    github: "https://github.com/raviverma199/RESTful-API-with-Authentication",
    demo: "#",
  },
];



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I've worked on recently. Click below to explore code & live demos.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsData.map((proj, index) => (
            <Col md={4} className="project-card" key={index}>
              <div className="project-card-inner" style={cardStyle}>
                <img src={proj.img} alt={proj.title} style={imgStyle} />
                <h3 style={titleStyle}>{proj.title}</h3>
                <p style={descStyle}>{proj.desc}</p>
                <ul style={ulStyle}>
                  {proj.features.map((feat, i) => (
                    <li key={i}>✅ {feat}</li>
                  ))}
                </ul>
                <div>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={btnStyle}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
                  >
                    View GitHub
                  </a>
                  {proj.demo !== "#" && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ ...btnStyle, backgroundColor: "#28a745" }}
                      onMouseOver={(e) => (e.target.style.backgroundColor = "#1e7e34")}
                      onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
