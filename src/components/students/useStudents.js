import { useEffect, useState } from "react";
import { actionTypes } from "../../contextApi/state";
import { formValidation } from "../../customFunctions/formValidation";
import { randomId } from "../../customFunctions/randomIdBuilder";

const studentInitial = {
  firstName: "",
  lastName: "",
  email: "",
  dateOfBirth: "",
  courseSelect: "",
  id: "",
};

export const useStudents = (dispatch) => {
  const [studentsInput, setStudentsInputInput] = useState(studentInitial);
  const [errors, setErrors] = useState({
    emailValid: "",
    firstNameValid: "",
    lastNameValid: "",
    dateOfBirthValid: "",
    courseSelectValid: "",
  });

  useEffect(() => {
    formValidation(studentsInput, setErrors);
  }, [studentsInput]);

  const onSubmit = (event) => {
    event.preventDefault();

    for (let i in errors) {
      if (errors[i] === "" || errors[i] === "invalid") {
        return alert("Please correctly fill all the fields");
      }
    }
    setStudentsInputInput(studentInitial);
    dispatch({
      type: actionTypes.stState,
      payload: {
        ...studentsInput,
        id: randomId(),
        assignments: [],
        studentInfo: {
          About: "",
          completedAssignments: [],
          Address: {
            street: "",
            city: "",
            state: "",
            zipCode: "",
          },
        },
      },
    });
  };
  const onChange = (event) => {
    event.preventDefault();

    setStudentsInputInput((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };
  return { studentsInput, onSubmit, onChange, errors };
};
