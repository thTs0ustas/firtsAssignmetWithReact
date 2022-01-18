import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { Button, Container, Table } from "reactstrap";
import { RiDeleteBin6Fill } from "react-icons/all";

import { actions } from "../../model";
import "./trainersTable.css";

export const TrainersTable = ({ trainerState, dispatch }) => {
  const deleteTrainer = (id) =>
    dispatch(actions.delete({ statePart: "trainerState", id }));
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
            {trainerState.map((trainer, index) => {
              return (
                <tr
                  key={trainer.id}
                  onClick={() => navigate(`/trainers/${trainer.id}`)}
                >
                  <th scope="row">{index + 1}</th>
                  <td>{trainer.firstName}</td>
                  <td>{trainer.lastName}</td>
                  <td>{trainer.courseSelect}</td>

                  <td>
                    <Button
                      onClick={(event) => {
                        event.stopPropagation();
                        deleteTrainer(trainer.id);
                      }}
                    >
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

TrainersTable.propTypes = {
  trainerState: PropTypes.array,
  dispatch: PropTypes.func,
};
