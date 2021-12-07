export const formValidation = (state, fn) => {
  for (let i in state) {
    if (i === "id") {
      // if (!state[i]) {
      //   console.log("Something is wrong with the 'id'");
      // }
      fn((prevState) => ({ ...prevState, [`${i}Valid`]: "valid" }));
      continue;
    }
    if (i === "email") {
      if (!state[i]) {
        fn((prevState) => ({ ...prevState, [`${i}Valid`]: "" }));
        continue;
      }
      if (state[i].match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        fn((prevState) => ({ ...prevState, [`${i}Valid`]: "valid" }));
      } else {
        fn((prevState) => ({ ...prevState, [`${i}Valid`]: "invalid" }));
      }
      continue;
    }
    if (i === "dateOfBirth") {
      if (!state[i]) {
        fn((prevState) => ({ ...prevState, [`${i}Valid`]: "" }));
        continue;
      }
      if (
        state["dateOfBirth"].match(
          /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/
        )
      ) {
        fn((prevState) => ({ ...prevState, [`${i}Valid`]: "valid" }));
      } else {
        fn((prevState) => ({ ...prevState, [`${i}Valid`]: "invalid" }));
      }
      continue;
    }
    if (!state[i] || state[i] === "-") {
      fn((prevState) => ({ ...prevState, [`${i}Valid`]: "" }));
      continue;
    }
    if (state[i] === "") {
      fn((prevState) => ({ ...prevState, [`${i}Valid`]: "invalid" }));
    } else {
      fn((prevState) => ({ ...prevState, [`${i}Valid`]: "valid" }));
    }
  }
};
