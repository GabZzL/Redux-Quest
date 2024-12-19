import REDUX_CARDS from "./questions";

const ANSWERED_CARDS = [];

function selectCard() {
  const i = Math.floor(Math.random() * REDUX_CARDS.length);
  const card = REDUX_CARDS[i];

  return card;
}

export function showThreeCards(selectedCard) {
  const cards = [];
  const unselectedCards = REDUX_CARDS.filter(
    (card) => JSON.stringify(card) !== JSON.stringify(selectedCard)
  );

  for (let i = 0; i < 3; i++) {
    cards.push(unselectedCards[i]);
  }

  return cards;
}

export function showSelectedCard() {
  let selectedCard;

  if (REDUX_CARDS.length === ANSWERED_CARDS.length) {
    return;
  }

  do {
    selectedCard = selectCard();
  } while (
    ANSWERED_CARDS.some(
      (card) => JSON.stringify(card) === JSON.stringify(selectedCard)
    )
  );

  ANSWERED_CARDS.push(selectedCard);
  showThreeCards(selectedCard);

  return selectedCard;
}
