import React from "react";
import { Container, Row } from "reactstrap";
import "./home.css";

export const Home = () => {
  return (
    <Container fluid>
      <Row className="heading-container">
        <h2 className="heading1">Private</h2>

        <h2 className="heading2">School</h2>
      </Row>
    </Container>
  );
};
