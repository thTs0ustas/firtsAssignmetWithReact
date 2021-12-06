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
    <Container>
      <Row className="flex-md-nowrap">
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
  );
};
export { Students };
