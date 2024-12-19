import { configureStore } from "@reduxjs/toolkit";
import startReducer from "./start";

const store = configureStore({ reducer: { start: startReducer } });

export default store;
