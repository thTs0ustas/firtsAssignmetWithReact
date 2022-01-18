import { configureStore } from "@reduxjs/toolkit";
import { reducer as stateReducer } from "../model";

const store = configureStore({
  reducer: {
    stateReducer,
  },
});

export default store;
