import { get } from "lodash/fp";

export const formValidation = (data, callback) => {
  if (get("id")(data)) {
    callback((prevState) => ({ ...prevState, idValid: "valid" }));
  }

  if (!get("email")(data)) {
    callback((prevState) => ({ ...prevState, emailValid: "" }));
  } else if (get("email")(data).match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
    callback((prevState) => ({ ...prevState, emailValid: "valid" }));
  } else {
    callback((prevState) => ({ ...prevState, emailValid: "invalid" }));
  }

  if (!get("firstName")(data)) {
    callback((prevState) => ({ ...prevState, firstNameValid: "" }));
  } else if (get("firstName")(data) === "") {
    callback((prevState) => ({ ...prevState, firstNameValid: "invalid" }));
  } else {
    callback((prevState) => ({ ...prevState, firstNameValid: "valid" }));
  }

  if (!get("lastName")(data)) {
    callback((prevState) => ({ ...prevState, lastNameValid: "" }));
  } else if (get("lastName")(data) === "") {
    callback((prevState) => ({ ...prevState, lastNameValid: "invalid" }));
  } else {
    callback((prevState) => ({ ...prevState, lastNameValid: "valid" }));
  }

  if (!get("dateOfBirth")(data)) {
    callback((prevState) => ({ ...prevState }));
    // callback((prevState) => ({ ...prevState, dateOfBirthValid: "" }));
  } else if (
    get("dateOfBirth")(data).match(
      /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/
    )
  ) {
    callback((prevState) => ({ ...prevState, dateOfBirthValid: "valid" }));
  } else {
    callback((prevState) => ({ ...prevState, dateOfBirthValid: "invalid" }));
  }

  if (!get("courseSelect")(data) || get("courseSelect")(data) === "-") {
    // callback((prevState) => ({ ...prevState }));
    callback((prevState) => ({ ...prevState, courseSelectValid: "" }));
  } else if (get("courseSelect")(data) === "") {
    callback((prevState) => ({ ...prevState, courseSelectValid: "invalid" }));
  } else {
    callback((prevState) => ({ ...prevState, courseSelectValid: "valid" }));
  }
};
