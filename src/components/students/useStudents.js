import { useEffect, useState } from "react";
import { actionTypes, useStateProvider } from "../../contextApi/state";
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

export const useStudents = () => {
  const [studentsInput, setStudentsInputInput] = useState(studentInitial);
  const [errors, setErrors] = useState({
    emailValid: "",
    firstNameValid: "",
    lastNameValid: "",
    dateOfBirthValid: "",
    courseSelectValid: "",
  });
  const [, dispatch] = useStateProvider();

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
      payload: { ...studentsInput, id: randomId() },
    });
  };
  const onChange = (event) => {
    event.preventDefault();

    setStudentsInputInput({
      ...studentsInput,
      [event.target.id]: event.target.value,
    });
  };
  return { studentsInput, onSubmit, onChange, errors };
};

// useEffect(() => {
//   for (let i in studentsInput) {
//     console.log(studentsInput[i]);
//
//     switch (i) {
//       case "firstName": {
//         if (studentsInput["firstName"]) {
//           setErrors({
//             ...errors,
//             fmValid: "valid",
//           });
//           break;
//         } else {
//           setErrors({
//             ...errors,
//             fmValid: "invalid",
//           });
//           break;
//         }
//       }
//       case "courseSelect": {
//         if (!studentsInput["courseSelect"] || studentsInput["courseSelect"] === "-") {
//           setErrors({
//             ...errors,
//             selValid: "",
//           });
//           break;
//         } else if (
//           studentsInput["courseSelect"] !== "" ||
//           studentsInput["courseSelect"] !== "-"
//         ) {
//           setErrors({
//             ...errors,

//             selValid: "valid",
//           });
//           break;
//         } else {
//           setErrors({
//             ...errors,
//             selValid: "invalid",
//           });
//           break;
//         }
//       }
//       case "lastName": {
//         if (studentsInput["lastName"] !== "") {
//           setErrors({
//             ...errors,
//             lmValid: "valid",
//           });
//           break;
//         } else {
//           setErrors({
//             ...errors,
//             lmValid: "invalid",
//           });
//           break;
//         }
//       }
//       case "email": {
//         if (studentsInput["email"].match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
//           setErrors({
//             ...errors,
//             emailValid: "valid",
//           });
//           break;
//         } else {
//           setErrors({
//             ...errors,
//             emailValid: "invalid",
//           });
//           break;
//         }
//       }
//       case "dateOfBirth": {
//         if (!studentsInput["dateOfBirth"]) {
//           setErrors({
//             ...errors,
//             dbValid: "",
//           });
//           break;
//         } else if (
//           studentsInput["dateOfBirth"].match(
//             /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/
//           )
//         ) {
//           setErrors({
//             ...errors,
//             dbValid: "valid",
//           });
//           break;
//         } else {
//           setErrors({
//             ...errors,
//             dbValid: "invalid",
//           });
//           break;
//         }
//       }
//       default:
//         break;
//     }
//   }
// }, [studentsInput]);
