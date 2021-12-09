import { useEffect, useState } from "react";
import { formValidation } from "../../customFunctions/formValidation";
import { actionTypes } from "../../contextApi/state";
import { set } from "lodash/fp";

export const useIndividualStudent = (state, dispatch) => {
  let [formInputs, setFormInputs] = useState(state);

  const [errors, setErrors] = useState({
    emailValid: "",
    firstNameValid: "",
    lastNameValid: "",
    dateOfBirthValid: "",
    courseSelectValid: "",
  });

  useEffect(() => {
    formValidation(formInputs, setErrors);
  }, [formInputs]);

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: actionTypes.stState,
      payload: { ...formInputs },
    });
  };

  const onChangeAddress = (event) => {
    event.stopPropagation();
    // event.preventDefault();

    setFormInputs(
      set(
        `studentInfo.Address[${event.target.id}]`,
        event.target.value
      )(formInputs)
    );
  };
  return { formInputs, onSubmit, onChangeAddress, errors };
};
