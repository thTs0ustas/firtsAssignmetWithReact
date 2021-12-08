import React from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./individualStudent.css";
export const IndividualStudent = () => {
  const { id } = useParams();
  return (
    <Container>
      <Row className="w-auto">
        <Col md={3} className="p-0">
          <div className="coll-1">{id}</div>
        </Col>
        <Col md={6} className="p-0">
          <div className="coll-2 p-0">{id}</div>
        </Col>
        <Col md={3} className="p-0">
          <div className="coll-3 p-0">{id}</div>
        </Col>
      </Row>
    </Container>
  );
};
