import React, { useContext, useReducer } from "react";

const StateContext = React.createContext({});

export const actionTypes = {
  delete: "delete",
  trState: "trainerState",
  stState: "studentState",
  courState: "courseState",
  assignState: "assignments",
};

const stateReducer = (state, { type, payload }) => {
  switch (type) {
    case actionTypes.delete: {
      return {
        ...state,
        [payload.statePart]: state[payload.statePart].filter(
          (trainer) => trainer.id !== payload.id
        ),
      };
    }
    case actionTypes.trState: {
      return { ...state, trainerState: [...state.trainerState, payload] };
    }
    case actionTypes.stState: {
      return { ...state, studentState: [...state.studentState, payload] };
    }
    case actionTypes.courState: {
      return { ...state, courses: [...state.courses, payload] };
    }
    case actionTypes.assignState: {
      return { ...state, courses: [...state.assignments, payload] };
    }
    default:
      return state;
  }
};

const initialState = {
  trainerState: [],
  studentState: [],
  courses: [],
  assignments: [],
  languages: ["Java", "Javascript", "C++", "Python"],
};

// eslint-disable-next-line react/prop-types
const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState, () => initialState);
  const value = [state, dispatch];
  return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
};

const useStateProvider = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};

export { StateProvider, useStateProvider };
