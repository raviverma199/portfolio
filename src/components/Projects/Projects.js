import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/api.png";
import bitsOfCode from "../../Assets/Projects/login.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
        <div
  className="project-card-inner"
  style={{
    padding: '30px',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.3s ease-in-out',
  }}
>
  <h3
    className="project-title"
    style={{
      fontSize: '1.6rem',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '10px', // Reduced margin to minimize space
      textTransform: 'capitalize',
    }}
  >
    Dealer Audit System (Sampark)
  </h3>
  <p
    className="project-description"
    style={{
      fontSize: '1.1rem',
      color: '#555',
      lineHeight: '1.6',
      marginBottom: '15px', // Reduced bottom margin
    }}
  >
    I worked on the Honda Sampark application as part of a team at my previous company. This platform enhances customer interaction and support for Honda users.I gained valuable experience in problem-solving, working with APIs, and improving user experience.
        <br /><br />
    <strong>My Role: As a backend developer, I focused on developing backend services and integrations, leveraging technologies like Node.js and SQL to build scalable and efficient solutions.</strong>
  </p>


</div>

</Col>

<Col md={4} className="project-card">
  <div
    className="project-card-inner"
    style={{
      padding: '30px',
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#ffffff',
      textAlign: 'center',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      transition: 'transform 0.3s ease-in-out',
    }}
  >
    <h3
      className="project-title"
      style={{
        fontSize: '1.6rem',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '15px',
        textTransform: 'capitalize',
      }}
    >
      Ticketing System
    </h3>
    <p
      className="project-description"
      style={{
        fontSize: '1.1rem',
        color: '#555',
        lineHeight: '1.6',
        marginBottom: '20px',
      }}
    >
      I worked on a Ticketing System designed to streamline issue tracking and resolution processes. The application includes user authentication, real-time updates, ticket categorization, and priority management. It enables users to create, track, and manage support tickets while administrators can assign, resolve, and update ticket statuses.
    </p>
    <p
      className="project-role"
      style={{
        fontSize: '1rem',
        color: '#555',
        fontWeight: '600',
        marginBottom: '15px',
      }}
    >
      Role: Backend Developer | Worked on user authentication, API design, and database integration.
    </p>
  </div>
</Col>

<Col md={4} className="project-card">
  <div
    className="project-card-inner"
    style={{
      padding: '30px',
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#ffffff',
      textAlign: 'center',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      transition: 'transform 0.3s ease-in-out',
    }}
  >
    <img
      src={bitsOfCode}
      alt="Finance Tracker"
      style={{
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '8px',
        marginBottom: '20px',
      }}
    />
    <h3
      className="project-title"
      style={{
        fontSize: '1.6rem',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '15px',
        textTransform: 'capitalize',
      }}
    >
      Finance Tracker
    </h3>
    <p
      className="project-description"
      style={{
        fontSize: '1.1rem',
        color: '#555',
        lineHeight: '1.6',
        marginBottom: '20px',
      }}
    >
      A finance tracker app built with React to manage and track income, expenses, and savings. It features an intuitive UI, financial transaction categorization, and goal tracking for savings.
    </p>
    <a
      href="https://github.com/raviverma199/Finance-Tracker"
      target="_blank"
      rel="noopener noreferrer"
      className="github-link"
      style={{
        display: 'inline-block',
        padding: '12px 25px',
        backgroundColor: '#007bff',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        fontSize: '1rem',
        fontWeight: '600',
        transition: 'background-color 0.3s ease-in-out',
      }}
    >
      View GitHub
    </a>
  </div>
</Col>


<Col md={4} className="project-card">
  <div
    className="project-card-inner"
    style={{
      padding: '30px',
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#ffffff',
      textAlign: 'center',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      transition: 'transform 0.3s ease-in-out',
    }}
  >
    <img
      src={leaf}
      alt="Finance Tracker"
      style={{
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '8px',
        marginBottom: '20px',
      }}
    />
    <h3
      className="project-title"
      style={{
        fontSize: '1.6rem',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '15px',
        textTransform: 'capitalize',
      }}
    >
      Restfull api with authentication
    </h3>
    <p
      className="project-description"
      style={{
        fontSize: '1.1rem',
        color: '#555',
        lineHeight: '1.6',
        marginBottom: '20px',
      }}
    >
   This is my first project, a RESTful API built with Node.js that includes user authentication. In this project, I implemented secure authentication mechanisms to manage user accounts, allowing for safe and personalized access to the application. The API features a robust structure with user registration, login, and session management, providing a solid foundation for building secure and scalable web applications.
    </p>
    <a
  href="https://github.com/raviverma199/RESTful-API-with-Authentication"
  target="_blank"
  rel="noopener noreferrer"
  className="github-link"
  style={{
    display: 'inline-block',
    padding: '12px 25px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'background-color 0.3s ease-in-out',
    cursor: 'pointer', // Ensure cursor is set to pointer
  }}
  onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
  onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
>
  View GitHub
</a>


  </div>
</Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
