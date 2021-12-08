import React from "react";
import "./students.css";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { useStudents } from "./useStudents";
import PropTypes from "prop-types";

const Students = ({ languages, dispatch }) => {
  const { studentsInput, onSubmit, onChange, errors } = useStudents(dispatch);

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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              culpa distinctio, doloribus et expedita fuga illum, minima
              molestias nesciunt possimus quae repudiandae suscipit tenetur
              veniam? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
              culpa distinctio, doloribus et expedita fuga illum, minima
              molestias nesciunt possimus quae repudiandae suscipit tenetur
              veniam?
            </p>
          </Col>
        </Row>

        <Row>
          <div className="img-title-two">
            <h2 className="h2 p-md-5 p-sm-5">Registration</h2>
          </div>
        </Row>

        <Row className="flex-md-nowrap  custom-form">
          <Col md={12}>
            <Row>
              <Form onSubmit={onSubmit}>
                <h3 className="mb-3 col-md-10 offset-md-1 col-sm-12 ">
                  Students Registration
                </h3>
                <FormGroup className="mb-3 col-md-10 offset-md-1 col-sm-12 ">
                  <Label for="firstName">First Name</Label>
                  <Input
                    valid={errors.firstNameValid === "valid"}
                    invalid={errors.firstNameValid === "invalid"}
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
                    valid={errors.lastNameValid === "valid"}
                    invalid={errors.lastNameValid === "invalid"}
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
                    valid={errors.emailValid === "valid"}
                    invalid={errors.emailValid === "invalid"}
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
                    valid={errors.dateOfBirthValid === "valid"}
                    invalid={errors.dateOfBirthValid === "invalid"}
                    id="dateOfBirth"
                    type="date"
                    value={studentsInput.dateOfBirth}
                    onChange={onChange}
                  />
                </FormGroup>
                <FormGroup className="mb-3 col-md-10 offset-md-1 col-sm-12 ">
                  <Label for="courseSelect">Select</Label>
                  <Input
                    valid={errors.courseSelectValid === "valid"}
                    invalid={errors.courseSelectValid === "invalid"}
                    type="select"
                    value={studentsInput.courseSelect}
                    name="select"
                    id="courseSelect"
                    onChange={onChange}
                  >
                    <option>-</option>
                    {languages.map((language) => (
                      <React.Fragment key={language}>
                        <option>{language}</option>
                      </React.Fragment>
                    ))}
                  </Input>
                </FormGroup>
                <div className="mb-3 col-md-10 offset-md-1 col-sm-12 ">
                  <Button
                    type="submit"
                    className="form-buttons"
                    color="primary"
                  >
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

Students.propTypes = {
  languages: PropTypes.array,
  dispatch: PropTypes.func,
};
