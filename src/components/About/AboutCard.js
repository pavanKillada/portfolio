import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pavan Kumar </span>
            from <span className="purple"> Hyderabad, Telangana, India.</span>
            <br />
            <br />
            I am currently looking for a job and I have previous work experience of half a year at <a href="https://www.godspeed.systems" className="purple">Godspeed Systems </a>as a <span className="purple">Software Engineer</span>.
            <br />
            I completed MCA - Computer Applications in the year 2022 from <span className="purple">Loyola Academy</span>, Hyderabad.
            <br />
            <br />
            My Contribution to the previous work includes:
          </p>
          <ul>
            <li className="about-activity">
              <span className="purple"><ImPointRight /></span> Developing test plans and cases for software components.
            </li>
            <li className="about-activity">
              <span className="purple"><ImPointRight /></span> Coded, tested, debugged, and documented the Godspeed framework.
            </li>
            <li className="about-activity">
              <span className="purple"><ImPointRight /></span> Performed unit testing and integration testing to identify potential issues in the codebase.
            </li>
            <li className="about-activity">
              <span className="purple"><ImPointRight /></span> Collaborated with other developers on various projects using version control systems.
            </li>
            <li className="about-activity">
              <span className="purple"><ImPointRight /></span> Provided technical support for customer inquiries related to the framework.
            </li>
            <li className="about-activity">
              <span className="purple"><ImPointRight /></span> Maintained up-to-date documentation on all aspects of assigned projects.
            </li>
            <li className="about-activity">
              <span className="purple"><ImPointRight /></span> Collaborated effectively with team members while maintaining a strong sense of individualresponsibility.
            </li>
            <li className="about-activity">
              <span className="purple"><ImPointRight /></span> Designed and implemented backend models and API endpoints for complex workflows.
            </li>
            <li className="about-activity">
              <span className="purple"><ImPointRight /></span> Implemented plugins to the framework and a good knowledge of Kafka, Express, Fastify, Axios,AWS, Node mailer, Redis Prisma, etc, as plugins.
            </li>
            <li className="about-activity">
              <span className="purple"><ImPointRight /></span> Analyzed code and corrected errors, glitches, and bugs to optimize output.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
