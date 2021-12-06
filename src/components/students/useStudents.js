import { useState } from "react";
import { actionTypes, useStateProvider } from "../../contextApi/state";

let idCounter = 0;
const studentInitial = {
  firstName: "",
  lastName: "",
  email: "",
  dateOfBirth: "",
  courseSelect: "",
  id: idCounter,
};

export const useStudents = () => {
  const [studentsInput, setStudentsInputInput] = useState(studentInitial);
  const [, dispatch] = useStateProvider();
  const onSubmit = (event) => {
    event.preventDefault();
    // TODO: Better validation
    for (let i in studentsInput) {
      if (studentsInput[i] === "") {
        return alert("All inputs must be filled");
      }
    }
    setStudentsInputInput(studentInitial);
    dispatch({ type: actionTypes.stState, payload: { ...studentsInput, id: idCounter } });
    idCounter++;
  };

  const onChange = (event) => {
    event.preventDefault();
    setStudentsInputInput({
      ...studentsInput,
      [event.target.id]: event.target.value,
    });
  };
  return { studentsInput, onSubmit, onChange };
};
