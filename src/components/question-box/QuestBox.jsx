import { useSelector, useDispatch } from "react-redux";
import { cardsActions } from "../../store/cards";
import { answerActions } from "../../store/answer";

import Question from "./Question";
import Answers from "./Answers";
import Feedback from "./Feedback";
import QuestionNumber from "./QuestionNumber";
import Results from "./Results";
import Button from "../../UI/Button";

export default function QuestBox() {
  const dispatch = useDispatch();

  const selectedCards = useSelector((state) => state.cards.selectedCards);
  const isAnswer = useSelector((state) => state.answer.isAnswer);

  function handleNextQuestion() {
    dispatch(answerActions.resetAnswer());

    dispatch(cardsActions.setSelectedCard());
    dispatch(cardsActions.setSelectAnswers());
  }

  if (selectedCards.length === 15 && isAnswer) {
    return <Results />;
  }

  return (
    <div className="question-box">
      <QuestionNumber />
      <Question />
      {!isAnswer && <Answers />}
      {isAnswer && <Feedback />}
      <Button
        text="Next Question"
        isAnswer={isAnswer}
        onClick={handleNextQuestion}
      />
    </div>
  );
}
