import React from "react";
import { useStateProvider } from "../../contextApi/state";
import { Button, Container, Table } from "reactstrap";
import { RiDeleteBin6Fill } from "react-icons/all";
import "./trainersTable.css";

export const TrainersTable = () => {
  const [state, dispatch] = useStateProvider();
  const deleteTrainer = (id) =>
    dispatch({ type: "delete", payload: { statePart: "trainerState", id } });

  return (
    <Container>
      <Table className="trainer-table" hover responsive size="">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Course</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {state.trainerState.map((trainer, index) => {
            return (
              <tr key={trainer.id}>
                <th scope="row">{index + 1}</th>
                <td>{trainer.firstName}</td>
                <td>{trainer.lastName}</td>
                <td>{trainer.courseSelect}</td>
                <td>
                  <Button onClick={() => deleteTrainer(trainer.id)}>
                    <RiDeleteBin6Fill />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};
