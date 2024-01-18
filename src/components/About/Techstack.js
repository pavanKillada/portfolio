import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiRedis,
  SiNextdotjs,
  SiRabbitmq,
  SiFastify,
  SiTailwindcss,
  SiSqlite
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.javascript.com/" className="purple"><DiJavascript1 /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://nodejs.org/en" className="purple"><DiNodejs /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://react.dev/" className="purple"><DiReact /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.sqlite.org/index.html" className="purple"><SiSqlite /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.mongodb.com" className="purple"><DiMongodb /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://nextjs.org/" className="purple"><SiNextdotjs /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.github.com/" className="purple"><DiGit /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://redis.io/" className="purple"><SiRedis /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.rabbitmq.com/" className="purple"><SiRabbitmq /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://fastify.io/" className="purple"><SiFastify /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://tailwindcss.com/" className="purple"><SiTailwindcss /></a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.python.org/" className="purple"><DiPython /></a>
      </Col>
    </Row>
  );
}

export default Techstack;
