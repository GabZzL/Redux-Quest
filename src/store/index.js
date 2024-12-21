import { configureStore } from "@reduxjs/toolkit";
import startReducer from "./start";
import cardsReducer from "./cards";
import answerReducer from "./answer";

const store = configureStore({
  reducer: { start: startReducer, cards: cardsReducer, answer: answerReducer },
});

export default store;
