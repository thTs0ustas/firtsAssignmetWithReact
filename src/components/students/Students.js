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
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";
import { useStateProvider } from "../../contextApi/state";
import { useTrainers } from "../trainers/useTrainers";

const Students = () => {
  // const [targetId] = React.useState("1");
  const [state] = useStateProvider();
  // const [isOpen, setIsOpen] = useState("1");
  const { trainersInput, onSubmit, onChange } = useTrainers();
  return (
    <Container>
      <Row className="flex-md-nowrap">
        <Col md={3} sm={3}>
          <Row>
            <ListGroup style={{ paddingLeft: "12px" }} className="justify-content-center">
              <h3 className="h3">Assignments</h3>
              {state.trainerState.map((trainer) => (
                <ListGroupItem accordionid={trainer.id} key={trainer.id}>
                  {trainer.firstName} {trainer.lastName}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Row>
        </Col>
        <Col className="col-md-8">
          <Row>
            <Form>
              <h3 className="mb-3 col-lg-8 offset-lg-2 col-sm-12 ">
                Students Registration
              </h3>
              <FormGroup className="mb-3 col-lg-8 offset-lg-2 col-sm-12 ">
                <Label for="firstName">First Name</Label>
                <Input
                  required
                  id="firstName"
                  type="text"
                  placeholder="Enter First Name...."
                  value={trainersInput.firstName}
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup className="mb-3 col-lg-8 offset-lg-2 col-sm-12 ">
                <Label for="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  value={trainersInput.lastName}
                  placeholder="Enter Last Name....."
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup className="mb-3 col-lg-8 offset-lg-2 col-sm-12 ">
                <Label for="email">Email</Label>
                <Input
                  id="email"
                  value={trainersInput.email}
                  type="email"
                  placeholder="Enter Email......"
                  onChange={onChange}
                />
              </FormGroup>
              <FormGroup className="mb-3 col-lg-8 offset-lg-2 col-sm-12 ">
                <Label for="courseSelect">Select</Label>
                <Input
                  type="select"
                  value={trainersInput.courseSelect}
                  name="select"
                  id="courseSelect"
                  onChange={onChange}
                >
                  <option>-</option>
                  <option>1</option>
                  <option>2</option>

                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <div className="mb-3 col-lg-8 offset-lg-2 col-sm-12 ">
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
