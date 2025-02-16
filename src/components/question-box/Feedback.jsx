import { useSelector } from "react-redux";

export default function Feedback() {
  const message = useSelector((state) => state.answer.message);
  const rightAnswer = useSelector((state) => state.cards.selectedCard.answer);

  return (
    <div>
      <h3>{message}</h3>
      {message === "Wrong Answer" && (
        <p>
          <b>The correct answer was:</b> {rightAnswer}
        </p>
      )}
    </div>
  );
}
