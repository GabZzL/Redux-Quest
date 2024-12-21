import { useSelector, useDispatch } from "react-redux";

import { cardsActions } from "../../store/cards";
import { answerActions } from "../../store/answer";

import Answer from "./Answer";

export default function Answers() {
  const dispatch = useDispatch();

  const card = useSelector((state) => state.cards.selectedCard);
  const cards = useSelector((state) => state.cards.shuffleCards);

  function handleClick(e) {
    const userAnswer = e.target.textContent;

    dispatch(cardsActions.setScore(userAnswer));

    if (card.answer === userAnswer) {
      dispatch(answerActions.setAnswer("Correct Answer"));
    } else {
      dispatch(answerActions.setAnswer("Wrong Answer"));
    }
  }

  return (
    <div>
      <ul>
        {cards.map((card) => (
          <Answer key={card.id} answer={card.answer} onClick={handleClick} />
        ))}
      </ul>
    </div>
  );
}
