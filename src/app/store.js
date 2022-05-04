import { configureStore } from "@reduxjs/toolkit";
import recordReducer from "../features/RecordSlice";

export const store = configureStore({
  reducer: {
    record: recordReducer,
  },
});
