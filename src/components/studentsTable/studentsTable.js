import React from "react";
import { actionTypes } from "../../contextApi/state";
import { Button, Container, Table } from "reactstrap";
import { RiDeleteBin6Fill } from "react-icons/all";
import "./studentsTable.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const StudentsTable = ({ studentState, dispatch }) => {
  const deleteTrainer = (id) =>
    dispatch({
      type: actionTypes.delete,
      payload: { statePart: "studentState", id },
    });
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
              <th>Contact</th>
              <th>Language</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {studentState.map((student, index) => {
              return (
                <tr
                  key={student.id}
                  onClick={() => navigate(`/students/${student.id}`)}
                >
                  <th scope="row">{index + 1}</th>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.email}</td>
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

StudentsTable.propTypes = {
  studentState: PropTypes.array,
  dispatch: PropTypes.func,
};
