import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [],
};

export const studentsSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.students = [...state.students, action.payload];
    },

    removeStudents: (state, action) => {
      console.log(action.payload.id);
      const Index = state.students.findIndex(
        (studentData) => studentData.id === action.payload.id
      );

      let newStudents = [...state.students];

      if (Index > 0) {
        newStudents.splice(Index, 1);
      } else {
        console.log("can't delete student");
      }

      state.students = newStudents;
    },
  },
});

export const { addStudent, removeStudents } = studentsSlice.actions;

export const selectStudents = (state) => state.students.students;
export default studentsSlice.reducer;
