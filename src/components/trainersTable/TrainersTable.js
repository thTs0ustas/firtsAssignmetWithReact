import React from "react";
import { actionTypes, useStateProvider } from "../../contextApi/state";
import { Button, Container, Table } from "reactstrap";
import { RiDeleteBin6Fill } from "react-icons/all";
import "./trainersTable.css";
import { useNavigate } from "react-router-dom";
// import { Route } from "react-router-dom";

export const TrainersTable = () => {
  const [state, dispatch] = useStateProvider();
  const deleteTrainer = (id) =>
    dispatch({ type: actionTypes.delete, payload: { statePart: "trainerState", id } });
  const navigate = useNavigate();
  return (
    <div className="outer-table">
      <Container className="mainTable">
        <Table className="trainer-table" hover responsive size="md">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Language</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {state.trainerState.map((trainer, index) => {
              return (
                <tr key={trainer.id}>
                  <th scope="row">{index + 1}</th>
                  <td
                    onClick={() =>
                      navigate(`/trainers/${trainer.lastName.toLowerCase()}`)
                    }
                  >
                    {trainer.firstName}
                  </td>
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
    </div>
  );
};
