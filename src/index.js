import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import calcSlice from "./calcSlice";
import App from "./App";

const store = configureStore({ reducer: { calc: calcSlice.reducer } });

const root = createRoot(document.querySelector("#root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
