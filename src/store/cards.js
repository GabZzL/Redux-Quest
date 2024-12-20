import { createSlice } from "@reduxjs/toolkit";
import { shuffleArray } from "../utils/questlogic";

const initialCardsState = {
  selectedCard: null,
  shuffleCards: [],
  initialCards: [],
  selectedCards: [],
};

const cardsSlice = createSlice({
  name: "cards",
  initialState: initialCardsState,
  reducers: {
    setInitialCards(state, action) {
      state.initialCards = action.payload; // pass initial cards
    },
    setSelectedCard(state) {
      if (state.initialCards.length === state.selectedCards.length) {
        console.log("All cards have been selected!");
        return;
      }

      let selectedCard;

      do {
        const i = Math.floor(Math.random() * state.initialCards.length);
        selectedCard = state.initialCards[i];
      } while (state.selectedCards.some((card) => card.id === selectedCard.id));

      state.selectedCard = selectedCard;
      state.selectedCards.push(selectedCard); // add to selected cards
    },
    setSelectAnswers(state) {
      const unselectedCards = state.initialCards.filter(
        (card) => card.id !== state.selectedCard.id
      );

      if (unselectedCards.length < 3) {
        throw new Error("Not enough unselected cards to shuffle.");
      }

      const randomCards = unselectedCards.slice(0, 3); // Take only the first 3 unselected cards
      const allCards = [...randomCards, state.selectedCard];

      state.shuffleCards = shuffleArray(allCards);
    },
  },
});

export const cardsActions = cardsSlice.actions;
export default cardsSlice.reducer;
