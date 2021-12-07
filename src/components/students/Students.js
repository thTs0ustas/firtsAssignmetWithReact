import React from "react";
import "./students.css";
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
// import { useStateProvider } from "../../contextApi/state";
import { useStudents } from "./useStudents";
import { useStateProvider } from "../../contextApi/state";

const Students = () => {
  const [state] = useStateProvider();
  const { studentsInput, onSubmit, onChange } = useStudents();
  return (
    <div className="outer-form-div">
      <Container fluid>
        <Row>
          <Col md={8} className="img-title ">
            <h2 className="h2 p-md-5">Make a new start</h2>
          </Col>
        </Row>
        <Row className="description">
          <Col md={8} sm={12} className="offset-md-2">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa
              distinctio, doloribus et expedita fuga illum, minima molestias nesciunt
              possimus quae repudiandae suscipit tenetur veniam? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa
              distinctio, doloribus et expedita fuga illum, minima molestias nesciunt
              possimus quae repudiandae suscipit tenetur veniam?
            </p>
          </Col>
        </Row>

        <Row>
          <div className="img-title-two">
            <h2 className="h2 p-md-5 p-sm-5">Registration</h2>
          </div>
        </Row>

        <Row className="flex-md-nowrap  custom-form">
          <Col className="col-md-12">
            <Row>
              <Form>
                <h3 className="mb-3 col-md-10 offset-md-1 col-sm-12 ">
                  Students Registration
                </h3>
                <FormGroup className="mb-3 col-md-10 offset-md-1 col-sm-12 ">
                  <Label for="firstName">First Name</Label>
                  <Input
                    required
                    id="firstName"
                    type="text"
                    placeholder="Enter First Name...."
                    value={studentsInput.firstName}
                    onChange={onChange}
                  />
                </FormGroup>
                <FormGroup className="mb-3 col-md-10 offset-md-1 col-sm-12 ">
                  <Label for="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={studentsInput.lastName}
                    placeholder="Enter Last Name....."
                    onChange={onChange}
                  />
                </FormGroup>
                <FormGroup className="mb-3 col-md-10 offset-md-1 col-sm-12 ">
                  <Label for="email">Email</Label>
                  <Input
                    id="email"
                    value={studentsInput.email}
                    type="email"
                    placeholder="Enter Email......"
                    onChange={onChange}
                  />
                </FormGroup>
                <FormGroup className="mb-3 col-md-10 offset-md-1 col-sm-12 ">
                  <Label for="dateOfBirth">Date of Birth</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={studentsInput.dateOfBirth}
                    onChange={onChange}
                  />
                </FormGroup>
                <FormGroup className="mb-3 col-md-10 offset-md-1 col-sm-12 ">
                  <Label for="courseSelect">Select</Label>
                  <Input
                    type="select"
                    value={studentsInput.courseSelect}
                    name="select"
                    id="courseSelect"
                    onChange={onChange}
                  >
                    <option>-</option>
                    {state.languages.map((language) => (
                      <React.Fragment key={language}>
                        <option>{language}</option>
                      </React.Fragment>
                    ))}
                  </Input>
                </FormGroup>
                <div className="mb-3 col-md-10 offset-md-1 col-sm-12 ">
                  <Button className="form-buttons" color="primary" onClick={onSubmit}>
                    Submit
                  </Button>
                  <Button type="reset" className="form-buttons" color="danger">
                    Reset
                  </Button>
                </div>
              </Form>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export { Students };
