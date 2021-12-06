import React from "react";
// import PropTypes from "prop-types";
import { Col, Container, Row } from "reactstrap";
import "./footer.css";

export function Footer() {
  return (
    <footer className="page-footer font-small pt-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5 className="text-uppercase">Footer Content</h5>
            <p>
              Here you can use rows and columns to organize your footer content.
            </p>
          </Col>
          <hr className="clearfix w-100 d-md-none pb-0" />
          <Col md={3} sm={6} xs={6}>
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </Col>
          <Col md={3} sm={6} xs={6}>
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <div className="footer-copyright text-center py-3">
            © 2021 Copyright:
            <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
          </div>
        </Row>
      </Container>
    </footer>
  );
}
