import { useEffect, useState } from "react";
import { actionTypes, useStateProvider } from "../../contextApi/state";
import { formValidation } from "../../customFunctions/formValidation";

let idCounter = 0;
const trainerInitial = {
  firstName: "",
  lastName: "",
  email: "",
  courseSelect: "",
  id: idCounter,
};

export const useTrainers = () => {
  const [trainersInput, setTrainersInput] = useState(trainerInitial);
  const [, dispatch] = useStateProvider();
  const [errors, setErrors] = useState({});
  useEffect(() => {
    formValidation(trainersInput, setErrors);
  }, [trainersInput]);

  const onSubmit = (event) => {
    event.preventDefault();
    // TODO: Better validation
    for (let i in trainersInput) {
      if (trainersInput[i] === "") {
        return alert("All inputs must be filled");
      }
    }
    setTrainersInput(trainerInitial);
    dispatch({ type: actionTypes.trState, payload: { ...trainersInput, id: idCounter } });
    idCounter++;
  };

  const onChange = (event) => {
    event.preventDefault();
    setTrainersInput({
      ...trainersInput,
      [event.target.id]: event.target.value,
    });
  };
  return { trainersInput, onSubmit, onChange, errors };
};
