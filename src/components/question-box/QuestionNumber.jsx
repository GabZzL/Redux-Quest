import { useSelector } from "react-redux";
import classes from "./QuestionNumber.module.css";

export default function QuestionNumber() {
  const selectedCards = useSelector((state) => state.cards.selectedCards);
  const initialCards = useSelector((state) => state.cards.initialCards);

  return (
    <div className={classes["question-number"]}>
      <p>
        {selectedCards.length}/{initialCards.length}
      </p>
    </div>
  );
}
