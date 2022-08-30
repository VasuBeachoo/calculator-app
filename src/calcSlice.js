import { createSlice } from "@reduxjs/toolkit";

const calcValue = (num1, num2, op) => {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      break;
  }
};

const calcSlice = createSlice({
  name: "calc",
  initialState: {
    theme: "1",
    value: 0,
    prevValue: 0,
    displayValue: 0,
    operation: "+",
    decimalMode: false,
    decimalPlace: 0,
  },
  reducers: {
    switchTheme: (state, action) => {
      state.theme = action.payload;
    },
    insertNum: (state, action) => {
      state.displayValue = state.value;
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
      state.displayValue = state.value;
    },
    removeNum: (state) => {
      if (!state.decimalMode) {
        state.value = Math.floor(state.value / 10);
      } else {
        state.decimalPlace--;
        const decimalValue = Math.pow(10, state.decimalPlace);
        state.value = Math.round(state.value * decimalValue) / decimalValue;
      }
      state.displayValue = state.value;
    },
    activateDecimalMode: (state) => {
      state.decimalMode = true;
    },
    reset: (state) => {
      state.decimalPlace = 0;
      state.decimalMode = false;
      state.value = 0;
      state.prevValue = 0;
      state.displayValue = 0;
    },
    setOperation: (state, action) => {
      state.prevValue = calcValue(
        state.prevValue,
        state.value,
        state.operation
      );
      state.displayValue = state.prevValue;
      state.value = 0;
      state.operation = action.payload;
      state.decimalMode = false;
      state.decimalPlace = 0;
    },
    calculate: (state) => {
      state.prevValue = calcValue(
        state.prevValue,
        state.value,
        state.operation
      );
      state.displayValue = state.prevValue;
      state.value = 0;
      state.operation = "+";
      state.decimalMode = false;
      state.decimalPlace = 0;
    },
  },
});

export const {
  switchTheme,
  insertNum,
  removeNum,
  activateDecimalMode,
  reset,
  setOperation,
  calculate,
} = calcSlice.actions;

export default calcSlice;
