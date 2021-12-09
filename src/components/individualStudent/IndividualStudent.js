import React from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import "./individualStudent.css";
export const IndividualStudent = () => {
  const { id } = useParams();
  return (
    <Container>
      <Row className="gutters">
        <Col className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <Card className="h-100">
            <CardBody>
              <div className="account-settings">
                <div className="user-profile">
                  <div className="user-avatar">
                    <img src="" alt="Maxwell Admin" />
                  </div>
                  <h5 className="user-name">Student {id}</h5>
                  <h6 className="user-email">yuki@Maxwell.com</h6>
                </div>
                <div className="about">
                  <h5>About</h5>
                  <p>
                    I&apos;m Yuki. Full Stack Designer I enjoy creating
                    user-centric, delightful and human experiences.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
          <Card className="h-100">
            <CardBody className="card-body">
              <Row className="gutters">
                <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <CardTitle className="mb-2 text-primary">
                    Personal Details
                  </CardTitle>
                </Col>
                <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <FormGroup>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="fullName"
                      placeholder="Enter full name"
                    />
                  </FormGroup>
                </Col>
                <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <FormGroup>
                    <Label htmlFor="eMail">Email</Label>
                    <Input
                      type="email"
                      className="form-control"
                      id="eMail"
                      placeholder="Enter email ID"
                    />
                  </FormGroup>
                </Col>
                <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <FormGroup className="form-group">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Enter phone number"
                    />
                  </FormGroup>
                </Col>
                <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <FormGroup className="form-group">
                    <Label htmlFor="website">Website URL</Label>
                    <Input
                      type="url"
                      className="form-control"
                      id="website"
                      placeholder="Website url"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="row gutters">
                <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 className="mt-3 mb-2 text-primary">Address</h6>
                </Col>
                <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <FormGroup className="form-group">
                    <Label htmlFor="Street">Street</Label>
                    <Input
                      type="name"
                      className="form-control"
                      id="Street"
                      placeholder="Enter Street"
                    />
                  </FormGroup>
                </Col>
                <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <FormGroup className="form-group">
                    <Label htmlFor="ciTy">City</Label>
                    <Input
                      type="name"
                      className="form-control"
                      id="ciTy"
                      placeholder="Enter City"
                    />
                  </FormGroup>
                </Col>
                <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <FormGroup className="form-group">
                    <Label htmlFor="sTate">State</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="sTate"
                      placeholder="Enter State"
                    />
                  </FormGroup>
                </Col>
                <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <FormGroup className="form-group">
                    <Label htmlFor="zIp">Zip Code</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="zIp"
                      placeholder="Zip Code"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="gutters">
                <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="text-right">
                    <Button
                      color="danger"
                      type="button"
                      id="submit"
                      name="submit"
                    >
                      Cancel
                    </Button>
                    <Button
                      color="primary"
                      type="button"
                      id="submit"
                      name="submit"
                    >
                      Update
                    </Button>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};