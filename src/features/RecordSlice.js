import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getRecord = createAsyncThunk("api/getstudent", async () => {
  const res = await axios.get("/api/get-students");
  return res.data.students;
});

const recordSlice = createSlice({
  name: "record",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },

  reducers: {
    addNewRecord: (state, action) => {
      state.data = [...state.data, action.payload];
    },

    removeRecord: (state, action) => {
      const Index = state.data.findIndex(
        (data) => data.index === action.payload.index
      );

      let newState = [...state.data];

      if (Index) {
        newState.splice(Index);
      } else {
        console.log("can't delete student");
      }

      state.data = newState;
    },
  },

  extraReducers: {
    [getRecord.pending]: (state, action) => {
      state.loading = true;
    },
    [getRecord.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getRecord.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { addNewRecord, removeRecord } = recordSlice.actions;

export default recordSlice.reducer;
