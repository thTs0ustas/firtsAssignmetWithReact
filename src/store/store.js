import { configureStore } from "@reduxjs/toolkit";
import { reducer as stateReducer } from "../model/reducers/reducer";

const store = configureStore({
  reducer: {
    state: stateReducer,
  },
});

export default store;
