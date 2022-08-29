import { createSlice } from "@reduxjs/toolkit";

const calcSlice = createSlice({
  name: "calc",
  initialState: { theme: "1" },
  reducers: {
    switchTheme: (state, action) => {
      state.theme = action.payload.theme;
    },
  },
});

export const { switchTheme } = calcSlice.actions;

export default calcSlice;
