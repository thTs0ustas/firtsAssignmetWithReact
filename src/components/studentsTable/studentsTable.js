import React from "react";
import { actionTypes, useStateProvider } from "../../contextApi/state";
import { Button, Container, Table } from "reactstrap";
import { RiDeleteBin6Fill } from "react-icons/all";
import "./studentsTable.css";
import { useNavigate } from "react-router-dom";

export const StudentsTable = () => {
  const [state, dispatch] = useStateProvider();
  const deleteTrainer = (id) =>
    dispatch({ type: actionTypes.delete, payload: { statePart: "trainerState", id } });
  const navigate = useNavigate();

  return (
    <div className="outer-table">
      <Container className="mainTable">
        <Table className="student-table" hover responsive size="md">
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
            {state.studentState.map((student, index) => {
              return (
                <tr
                  key={student.id}
                  onClick={() => navigate(`/students/${student.lastName.toLowerCase()}`)}
                >
                  <th scope="row">{index + 1}</th>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.courseSelect}</td>

                  <td>
                    <Button
                      onClick={(event) => {
                        event.stopPropagation();
                        deleteTrainer(student.id);
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
