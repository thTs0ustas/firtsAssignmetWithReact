import { get } from "lodash/fp";

export const formValidation = (data, fn) => {
  if (get("id")(data)) {
    fn((prevState) => ({ ...prevState, idValid: "valid" }));
  }

  if (!get("email")(data)) {
    fn((prevState) => ({ ...prevState, emailValid: "" }));
  } else if (get("email")(data).match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
    fn((prevState) => ({ ...prevState, emailValid: "valid" }));
  } else {
    fn((prevState) => ({ ...prevState, emailValid: "invalid" }));
  }

  if (!get("firstName")(data)) {
    fn((prevState) => ({ ...prevState, firstNameValid: "" }));
  } else if (get("firstName")(data) === "") {
    fn((prevState) => ({ ...prevState, firstNameValid: "invalid" }));
  } else {
    fn((prevState) => ({ ...prevState, firstNameValid: "valid" }));
  }

  if (!get("lastName")(data)) {
    fn((prevState) => ({ ...prevState, lastNameValid: "" }));
  } else if (get("lastName")(data) === "") {
    fn((prevState) => ({ ...prevState, lastNameValid: "invalid" }));
  } else {
    fn((prevState) => ({ ...prevState, lastNameValid: "valid" }));
  }

  if (!get("dateOfBirth")(data)) {
    fn((prevState) => ({ ...prevState, dateOfBirthValid: "" }));
  } else if (
    get("dateOfBirth")(data).match(
      /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/
    )
  ) {
    fn((prevState) => ({ ...prevState, dateOfBirthValid: "valid" }));
  } else {
    fn((prevState) => ({ ...prevState, dateOfBirthValid: "invalid" }));
  }

  if (!get("courseSelect")(data) || get("courseSelect")(data) === "-") {
    fn((prevState) => ({ ...prevState, courseSelectValid: "" }));
  } else if (get("courseSelect")(data) === "") {
    fn((prevState) => ({ ...prevState, courseSelectValid: "invalid" }));
  } else {
    fn((prevState) => ({ ...prevState, courseSelectValid: "valid" }));
  }
};
