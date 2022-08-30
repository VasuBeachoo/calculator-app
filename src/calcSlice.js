import { createSlice } from "@reduxjs/toolkit";

const calcSlice = createSlice({
  name: "calc",
  initialState: { theme: "1", value: 0, decimalMode: false, decimalPlace: 0 },
  reducers: {
    switchTheme: (state, action) => {
      state.theme = action.payload.theme;
    },
    insertNum: (state, action) => {
      if (!state.decimalMode) {
        if (state.value !== 0 || action.payload !== 0) {
          state.value *= 10;
          state.value += action.payload;
        }
      } else {
        state.decimalPlace++;
        const decimalValue = Math.pow(10, state.decimalPlace);
        const addValue = action.payload / decimalValue;
        state.value =
          Math.round((state.value + addValue) * decimalValue) / decimalValue;
      }
    },
    removeNum: (state) => {
      if (!state.decimalMode) {
        state.value = Math.floor(state.value / 10);
      } else {
        state.decimalPlace--;
        const decimalValue = Math.pow(10, state.decimalPlace);
        state.value = Math.round(state.value * decimalValue) / decimalValue;
      }
    },
    activateDecimalMode: (state) => {
      state.decimalMode = true;
    },
    reset: (state) => {
      state.decimalPlace = 0;
      state.decimalMode = false;
      state.value = 0;
    },
  },
});

export const { switchTheme, insertNum, removeNum, activateDecimalMode, reset } =
  calcSlice.actions;

export default calcSlice;
