import React, { useContext, useReducer } from "react";

const StateContext = React.createContext({});

const stateReducer = (state, { type, payload }) => {
  switch (type) {
    case "delete": {
      return {
        ...state,
        [payload.statePart]: state[payload.statePart].filter(
          (trainer) => trainer.id !== payload.id
        ),
      };
    }
    case "trainerState": {
      return { ...state, trainerState: [...state.trainerState, payload] };
    }
    case "studentState": {
      return { ...state, studentState: [...state.studentState, payload] };
    }
    case "courses": {
      return { ...state, courses: [...state.courses, payload] };
    }
    case "assignments": {
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