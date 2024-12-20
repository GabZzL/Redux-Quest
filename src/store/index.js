import { configureStore } from "@reduxjs/toolkit";
import startReducer from "./start";
import cardsReducer from "./cards";

const store = configureStore({
  reducer: { start: startReducer, cards: cardsReducer },
});

export default store;
