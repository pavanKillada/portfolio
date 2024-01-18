import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import IPL from "../../Assets/Projects/IPL.png";
import job_portal from "../../Assets/Projects/job_portal.png";
import LMS from "../../Assets/Projects/LMS.png";
import money_note from "../../Assets/Projects/money_note.png";
import nxttrendz from "../../Assets/Projects/nxttrendz.png";
import nxtwatch from "../../Assets/Projects/nxtwatch.png";
import tasty_kitchens from "../../Assets/Projects/tasty_kitchens.png";
import todo from "../../Assets/Projects/todo.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nxtwatch}
              isBlog={false}
              title="Nxt Watch"
              description="A YouTube alternative allowing users to log in, browse videocategories such as Trending and Gaming, view saved videos, and search for specific content with a customizable theme. Designed interactive pages, including Login, Home, Trending, Gaming, and Saved videos, using React components, state management, and lists."
              ghLink="https://github.com/pavanKillada/Nxt-Watch"
              demoLink="https://pkyoutube.ccbp.tech"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tasty_kitchens}
              isBlog={false}
              title="Tasty Kitchens"
              description="Online Food Ordering System resembling Swiggy/Zomato, allowing users to browse popular restaurants, view detailed restaurant information, add or remove items from their cart, and complete payments."
              ghLink="https://github.com/pavanKillada/miniProject"
              demoLink="https://pkminiproject.ccbp.tech"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nxttrendz}
              isBlog={false}
              title="Nxt Trendz"
              description="Online shopping website resembling Amazon/Flipkart, allowing users to browse anything including Electronics, Grocories, Toys etc. Add or remove items from their cart, and complete payments."
              ghLink="https://github.com/pavanKillada/Nxt-Trendz"
              demoLink="https://pknxttrendz.ccbp.tech"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={job_portal}
              isBlog={false}
              title="Nxt Jobs"
              description="A LinkedIn/Naukri alternative allowing users to log in, browse prefered job roles and newly posted jobs. The User can filter the jobs with the options provided in the website which helps the user to find the relative job quickly."
              ghLink="https://github.com/pavanKillada/jobPortal"
              demoLink="https://pkjobportal.ccbp.tech"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LMS}
              isBlog={false}
              title="Learning Management System"
              description="A Learning Management System platform akin to 'Udemy'. The user can opt for any number of courses in this platform and some courses for sale and few are totally for free. The users can enroll and start learning the skill from the videos and can raise any question related to the course and admin or anyone who knows the answer can reply to the question."
              ghLink="https://github.com/pavanKillada/LMS-platform"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IPL}
              isBlog={false}
              title="IPL Dashboard"
              description="IPL dashboard that showcases all the teams in this IPL seassion. Can see each individual teams performance over the other teams and also number of wins and loses by each team."
              ghLink="https://github.com/pavanKillada/cricket-team"
              demoLink="https://pkipldashboard.ccbp.tech"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={money_note}
              isBlog={false}
              title="Money Monitor"
              description="I built this app for my personal use. We can make track of the money through out the month, just needs to manually enter the incomes/expenses and save the transactions. It will calculate the expenditure, income and let over amount in the wallet. We can always come back and see all our transactions for the whole month."
              ghLink="https://github.com/pavanKillada/moneyManager"
              demoLink="https://pkmoneymanager.ccbp.tech"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo App"
              description="It's a basic and my first dynamic application that maintains the tasks for the day. The User can enter any number of todos and whenever he/she completes the task/work can strike of todo, the data is stored and maintained in the local storage."
              ghLink="https://github.com/pavanKillada/todoApplication"
              demoLink="https://pkdailytasks.ccbp.tech"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
