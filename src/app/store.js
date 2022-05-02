import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "../features/slices/StudentsSlice";

export const store = configureStore({
  reducer: {
    students: studentsReducer,
  },
});
