import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cardsActions } from "../../store/cards";

import Question from "./Question";
import Answer from "./Answer";
import Feedback from "./Feedback";
import QuestionNumber from "./QuestionNumber";
import Results from "./Results";

export default function QuestBox() {
  const dispatch = useDispatch();

  const [isAnswer, setIsAnswer] = useState(null);

  const initialCards = useSelector((state) => state.cards.initialCards);
  const card = useSelector((state) => state.cards.selectedCard);
  const selectedCards = useSelector((state) => state.cards.selectedCards);
  const cards = useSelector((state) => state.cards.shuffleCards);

  function handleNextQuestion() {
    setIsAnswer(null);

    dispatch(cardsActions.setSelectedCard());
    dispatch(cardsActions.setSelectAnswers());
  }

  function handleClick(e) {
    const userAnswer = e.target.textContent;

    dispatch(cardsActions.setScore(userAnswer));

    if (card.answer === userAnswer) {
      setIsAnswer({ message: "Correct Answer" });
    } else {
      setIsAnswer({ message: "Wrong Answer", correctAnswer: card.answer });
    }
  }

  if (selectedCards.length === 15 && isAnswer) {
    return <Results />;
  }

  return (
    <div>
      <QuestionNumber
        actualNumber={selectedCards.length}
        totalNumber={initialCards.length}
      />
      <Question question={card.question} />
      {!isAnswer && (
        <ul>
          {cards.map((card) => (
            <Answer key={card.id} onClick={handleClick} answer={card.answer} />
          ))}
        </ul>
      )}
      {isAnswer && <Feedback feedback={isAnswer} />}
      <button onClick={handleNextQuestion} disabled={!isAnswer}>
        Next Question
      </button>
    </div>
  );
}
