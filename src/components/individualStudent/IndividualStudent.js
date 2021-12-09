import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Table,
} from "reactstrap";
import "./individualStudent.css";
import PropTypes from "prop-types";
import { find } from "lodash/fp";
import myImg from "../../assets/facebook-user-icon-4.jpg";
import { useIndividualStudent } from "./useIndividualStudent";

export const IndividualStudent = ({ studentState, dispatch }) => {
  let [edit, setEdit] = useState(false);
  const { id } = useParams();
  const individualStudent = find({ id })(studentState);

  let { onSubmit, onChangeAddress } = useIndividualStudent(
    individualStudent,
    dispatch
  );

  const {
    email,
    firstName,
    lastName,
    dateOfBirth,
    studentInfo,
    courseSelect,
    assignments,
  } = individualStudent;

  return (
    <div className="background-div">
      <Container>
        <Row className="gutters">
          <Col className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <Card className="h-100">
              <CardBody>
                <div className="account-settings">
                  <div className="user-profile">
                    <div className="user-avatar">
                      <CardImg src={myImg} alt="" />
                    </div>
                    <h5 className="user-name">Student {id}</h5>
                  </div>
                  <br />
                  <div className="about">
                    <h5>About</h5>
                    {edit ? (
                      <Input type="textarea" value={studentInfo.about} />
                    ) : (
                      <p>{studentInfo.about || "Add personal info"}</p>
                    )}
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <Card className="h-100">
              <CardBody className="card-body">
                <Form>
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
                          disabled={!edit}
                          type="text"
                          className="form-control"
                          id="fullName"
                          value={`${firstName} ${lastName}`}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          disabled={!edit}
                          type="email"
                          className="form-control"
                          id="email"
                          value={email}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <FormGroup className="form-group">
                        <Label htmlFor="phone">Selected Course</Label>
                        <Input
                          disabled={!edit}
                          type="text"
                          className="form-control"
                          id="selectedCourse"
                          value={courseSelect}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <FormGroup className="form-group">
                        <Label htmlFor="dateOfBirth">Date Of Birth</Label>
                        <Input
                          disabled={!edit}
                          type="date"
                          className="form-control"
                          id="dateOfBirth"
                          value={dateOfBirth}
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
                        <Label htmlFor="street">Street</Label>
                        <Input
                          onChange={onChangeAddress}
                          disabled={!edit}
                          type="name"
                          className="form-control"
                          id="street"
                          placeholder="Enter Street"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <FormGroup className="form-group">
                        <Label htmlFor="city">City</Label>
                        <Input
                          onChange={onChangeAddress}
                          disabled={!edit}
                          type="name"
                          className="form-control"
                          id="city"
                          placeholder="Enter City"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <FormGroup className="form-group">
                        <Label htmlFor="state">State</Label>
                        <Input
                          onChange={onChangeAddress}
                          disabled={!edit}
                          type="text"
                          className="form-control"
                          id="state"
                          placeholder="Enter State"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <FormGroup className="form-group">
                        <Label htmlFor="zipCode">Zip Code</Label>
                        <Input
                          onChange={onChangeAddress}
                          disabled={!edit}
                          type="text"
                          className="form-control"
                          id="zipCode"
                          placeholder="Zip Code"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="gutters">
                    <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="text-right ">
                        <Button
                          color="danger"
                          type="button"
                          id="submit"
                          name="submit"
                        >
                          Cancel
                        </Button>
                        <Button
                          disabled={edit}
                          className="ms-2"
                          color="primary"
                          type="button"
                          onClick={() => setEdit(!edit)}
                        >
                          Update
                        </Button>
                        <Button
                          className="ms-2"
                          color="success"
                          type="submit"
                          disabled={!edit}
                          onClick={(event) => {
                            onSubmit(event);
                            setEdit(!edit);
                          }}
                        >
                          Submit
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
                <hr />
                <Row className="row gutters">
                  <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 className="mt-3 mb-2 text-primary">
                      Current Assignments
                    </h6>
                  </Col>
                  <Col className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
                    <Table hover>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Title</th>
                          <th>Course Related</th>
                          <th>Deadline</th>
                          <th>Oral Mark</th>
                          <th>Total Mark</th>
                        </tr>
                      </thead>
                      <tbody>
                        {assignments.map((assignment, index) => {
                          return (
                            <tr key={assignment.id}>
                              <th scope="row">{index + 1}</th>
                              <td>{assignment.title}</td>
                              <td>{assignment.courseRelation}</td>
                              <td>{assignment.deadline}</td>
                              <td>{assignment.oralMark}</td>
                              <td>{assignment.totalMark}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

IndividualStudent.propTypes = {
  studentState: PropTypes.array,
  dispatch: PropTypes.func,
};
