import React from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

import "./trainers.css";
import { useTrainers } from "./useTrainers";
import PropTypes from "prop-types";

export const Trainers = ({ languages, dispatch }) => {
  const { trainersInput, onSubmit, onChange, errors } = useTrainers(dispatch);

  return (
    <div className="outer-div">
      <div id="trainersForm">
        <Container className="trainer-container">
          <Form onSubmit={onSubmit}>
            <h3 className="mb-3 col-md-10 offset-md-1 col-sm-12">
              Trainer Registration
            </h3>
            <FormGroup className="mb-3 col-md-10 offset-md-1 col-sm-12 ">
              <Label for="firstName">First Name</Label>
              <Input
                valid={errors.firstNameValid === "valid"}
                invalid={errors.firstNameValid === "invalid"}
                id="firstName"
                type="text"
                placeholder="Enter First Name...."
                value={trainersInput.firstName}
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
                value={trainersInput.lastName}
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
                value={trainersInput.email}
                type="email"
                placeholder="Enter Email......"
                onChange={onChange}
              />
            </FormGroup>
            <FormGroup className="mb-3 col-md-10 offset-md-1 col-sm-12 ">
              <Label for="courseSelect">Programming Language</Label>
              <Input
                valid={errors.courseSelectValid === "valid"}
                invalid={errors.courseSelectValid === "invalid"}
                type="select"
                value={trainersInput.courseSelect}
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
              <Button type="submit" className="form-buttons" color="primary">
                Submit
              </Button>
              <Button type="reset" className="form-buttons" color="danger">
                Reset
              </Button>
            </div>
          </Form>
        </Container>
      </div>
    </div>
  );
};

Trainers.propTypes = {
  languages: PropTypes.array,
  dispatch: PropTypes.func,
};
