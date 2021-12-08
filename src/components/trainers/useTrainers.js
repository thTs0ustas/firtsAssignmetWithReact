import { useEffect, useState } from "react";
import { actionTypes } from "../../contextApi/state";
import { formValidation } from "../../customFunctions/formValidation";
import { randomId } from "../../customFunctions/randomIdBuilder";

const trainerInitial = {
  firstName: "",
  lastName: "",
  email: "",
  courseSelect: "",
  id: "",
};

export const useTrainers = (dispatch) => {
  const [trainersInput, setTrainersInput] = useState(trainerInitial);
  // const [, dispatch] = useStateProvider();
  const [errors, setErrors] = useState({});
  useEffect(() => {
    formValidation(trainersInput, setErrors);
  }, [trainersInput]);

  const onSubmit = (event) => {
    event.preventDefault();

    for (let i in errors) {
      if (errors[i] === "" || errors[i] === "invalid") {
        return alert("Please correctly fill all the fields");
      }
    }
    setTrainersInput(trainerInitial);
    dispatch({
      type: actionTypes.trState,
      payload: { ...trainersInput, id: randomId() },
    });
  };

  const onChange = (event) => {
    event.preventDefault();
    setTrainersInput((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };
  return { trainersInput, onSubmit, onChange, errors };
};
