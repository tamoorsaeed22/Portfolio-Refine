import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import books from '../../Assets/Screenshot (74).png';
import mathmagician from '../../Assets/Screenshot (76).png';
import globalsummit from '../../Assets/Screenshot (73).png';
import Appointment from '../../Assets/Screenshot (71).png';
import worldweatherapp from '../../Assets/Screenshot (75).png';
import budgetapp from '../../Assets/Screenshot (72).png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent
          {' '}
          <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I&apos;ve worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Appointment}
              isBlog={false}
              title="Book an Appointment"
              description="The collaborative Kanban board project is designed to foster teamwork and enhance communication within a group or organization. It allows team members to easily collaborate on tasks, share updates, and delegate responsibilities in real time. By providing a centralized platform where team members can contribute, discuss, and coordinate their work, the collaborative Kanban board promotes synergy, productivity, and effective project management."
              ghLink="https://github.com/tamoorsaeed22/Final-Capstone-Front-End"
              demoLink="https://harley-davidson-73po.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budgetapp}
              isBlog={false}
              title="Budget-App"
              description="Budget-app is a mobile web application designed for efficient budget management. Users can register, log in, add transactions to categories, and monitor their expenses. With secure authentication, PostgreSQL database, and comprehensive testing, this app ensures seamless and secure budget tracking."
              ghLink="https://github.com/tamoorsaeed22/Budget-app"
              demoLink="https://budget-app-tamoor.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={globalsummit}
              isBlog={false}
              title="Global-summit"
              description="The Creative Commons Global Summit is an annual gathering that brings together a diverse community of creators, activists, and advocates of open content and open licensing. It serves as a platform for sharing knowledge, discussing emerging trends, and fostering collaborations that aim to promote the principles of open access and creative commons licensing worldwide."
              ghLink="https://github.com/tamoorsaeed22/My-Capstone-Project"
              demoLink="https://tamoorsaeed22.github.io/My-Capstone-Project/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={books}
              isBlog={false}
              title="Awsome books"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/tamoorsaeed22/Awsome-books-ES6"
              demoLink="https://tamoorsaeed22.github.io/Awsome-books-ES6/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={worldweatherapp}
              isBlog={false}
              title="React-capstone-project-Metrics-webapp"
              description="This is an app that lets you view the current weather around the world. And a detailed minimum and maximum temperature of the last week."
              ghLink="https://github.com/tamoorsaeed22/React-capstone-project-Metrics-webapp"
              demoLink="https://jazzy-vacherin-1fcd5c.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mathmagician}
              isBlog={false}
              title="Math Magicians"
              description="This is Math Magicians (SPA) Web App, The Web App is made up of one Calculator and one Math-related Quotes generator. React, CSS, JS, and API in are the basic tools for this project."
              ghLink="https://github.com/tamoorsaeed22/Math-Magician"
              demoLink="https://math-magician-project-m5ro.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
