import { useSelector, useDispatch } from "react-redux";
import { cardsActions } from "../../store/cards";

import Question from "./Question";
import Answer from "./Answer";

export default function QuestBox() {
  const initialCards = useSelector((state) => state.cards.initialCards);
  const card = useSelector((state) => state.cards.selectedCard);
  const selectedCards = useSelector((state) => state.cards.selectedCards);
  const cards = useSelector((state) => state.cards.shuffleCards);

  const dispatch = useDispatch();

  function handleNextQuestion() {
    dispatch(cardsActions.setSelectedCard());
    dispatch(cardsActions.setSelectAnswers());
  }

  console.log(selectedCards);

  return (
    <div>
      <span>
        {selectedCards.length}
        {initialCards.length}
      </span>
      <Question question={card.question} />
      <ul>
        {cards.map((card) => (
          <Answer key={card.id} answer={card.answer} />
        ))}
      </ul>
      <button onClick={handleNextQuestion}>Next Question</button>
    </div>
  );
}
