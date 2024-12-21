import { useSelector } from "react-redux";

export default function QuestionNumber() {
  const selectedCards = useSelector((state) => state.cards.selectedCards);
  const initialCards = useSelector((state) => state.cards.initialCards);

  return (
    <div>
      <p>
        {selectedCards.length}/{initialCards.length}
      </p>
    </div>
  );
}
