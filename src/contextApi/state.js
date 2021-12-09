import React, { useContext, useReducer } from "react";
import { filter, isEmpty } from "lodash/fp";

const StateContext = React.createContext({});

export const actionTypes = {
  delete: "delete",
  trState: "trainerState",
  stState: "studentState",
  courState: "courseState",
  assignState: "assignments",
};

const initialState = {
  trainerState: [],
  studentState: [],
  courses: [],
  assignments: [],
  languages: ["Java", "Javascript", "C++", "Python"],
};

const updateState = (state, payload) => {
  if (isEmpty(state)) return [payload];
  let filteredState = filter((stateSlice) => stateSlice.id !== payload.id)(
    state
  );
  return [...filteredState, payload];
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
    case actionTypes.stState: {
      return {
        ...state,
        studentState: updateState(state.studentState, payload),
      };
    }
    case actionTypes.trState: {
      return {
        ...state,
        trainerState: updateState(state.trainerState, payload),
      };
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

// eslint-disable-next-line react/prop-types
const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    stateReducer,
    initialState,
    () => initialState
  );
  const value = [state, dispatch];
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

const useStateProvider = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};

export { StateProvider, useStateProvider };
