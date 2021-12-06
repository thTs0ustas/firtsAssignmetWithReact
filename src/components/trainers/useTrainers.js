import { useState } from "react";
import { useStateProvider } from "../../contextApi/state";

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
  const onSubmit = (event) => {
    event.preventDefault();

    setTrainersInput(trainerInitial);
    dispatch({ type: "trainerState", payload: { ...trainersInput, id: idCounter } });
    idCounter++;
  };
  // const handleInvalidSubmit = () => {
  //   setTrainersInput({ ...trainerInitial, error: true });
  // };
  const onChange = (event) => {
    event.preventDefault();
    setTrainersInput({
      ...trainersInput,
      [event.target.id]: event.target.value,
    });
  };
  return { trainersInput, onSubmit, onChange };
};
