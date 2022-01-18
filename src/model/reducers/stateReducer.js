import { INITIAL_SATE } from "./initialState";

import { createSlice } from "@reduxjs/toolkit";
import { filter, isEmpty } from "lodash/fp";

const updateState = (state, payload) => {
  if (isEmpty(state)) return [payload];
  let filteredState = filter((stateSlice) => stateSlice.id !== payload.id)(
    state
  );
  return [...filteredState, payload];
};

const stateReducer = createSlice({
  name: "stateReducer",
  initialState: INITIAL_SATE,
  reducers: {
    stState: (state, { payload }) => ({
      ...state,
      studentState: updateState(state.studentState, payload),
    }),
    trState: (state, { payload }) => ({
      ...state,
      trainerState: updateState(state.trainerState, payload),
    }),
    courState: (state, { payload }) => ({
      ...state,
      courses: [...state.courses, payload],
    }),
    assignState: (state, { payload }) => ({
      ...state,
      courses: [...state.assignments, payload],
    }),
  },
});

const { actions, reducer } = stateReducer;
export { actions, reducer };
//
//     {
//
//       delete(actionTypes.delete(state, { payload })
// =>
// {
//   return {
//     ...state,
//     [payload.statePart]: state[payload.statePart].filter(
//       (trainer) => trainer.id !== payload.id,
//     ),
//   };
// }
// ),
// stState(actionTypes.stState, (state, { payload }) => {
//   return {
//     ...state,
//     studentState: updateState(state.studentState, payload),
//   };
// }),
//   trState(actionTypes.trState, (state, { payload }) => {
//     return {
//       ...state,
//       trainerState: updateState(state.trainerState, payload),
//     };
//   }),
//   courState(actionTypes.courState, (state, { payload }) => {
//     return { ...state, courses: [...state.courses, payload] };
//   }),
//   assignState(actionTypes.assignState, (state, { payload }) => {
//     return { ...state, courses: [...state.assignments, payload] };
//   });
// }
// }
//
// export { stateReducer };
