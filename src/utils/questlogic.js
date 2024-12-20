import REDUX_CARDS from "./questions";

const SELECTED_CARDS = [];

function selectCard() {
  const i = Math.floor(Math.random() * REDUX_CARDS.length);
  const card = REDUX_CARDS[i];

  return card;
}

// Fisher-Yates Shuffle algorithm
export function shuffleArray(array) {
  const shuffled = [...array]; // Create a copy of the array to avoid mutating the original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
  }
  return shuffled;
}

export function returnInitialCards() {
  return REDUX_CARDS;
}

export function returnSelectedCards() {
  return SELECTED_CARDS;
}

export function showShuffleCards(selectedCard) {
  const unselectedCards = REDUX_CARDS.filter(
    (card) => card.id !== selectedCard.id
  );

  if (unselectedCards.length < 3) {
    throw new Error("Not enough unselected cards to shuffle.");
  }

  const cards = unselectedCards.slice(0, 3); // Take only the first 3 unselected cards

  cards.push(selectedCard);

  const shuffleCards = shuffleArray(cards);

  return shuffleCards;
}

export function showSelectedCard() {
  let selectedCard;

  if (REDUX_CARDS.length === SELECTED_CARDS.length) {
    return;
  }

  do {
    selectedCard = selectCard();
  } while (SELECTED_CARDS.some((card) => card.id === selectedCard.id));

  SELECTED_CARDS.push(selectedCard);

  // console.log(SELECTED_CARDS);

  return selectedCard;
}
