import { useSelector } from "react-redux";

export default function Results() {
  const score = useSelector((state) => +state.cards.score);
  const cards = useSelector((state) => state.cards.initialCards);

  let message;

  if (score === 15) {
    message = "Perfect Score";
  } else if (score >= 10) {
    message = "Great Score";
  } else if (score >= 8) {
    message = "Good Score";
  } else {
    message = "You Need To Improve";
  }

  return (
    <div>
      <h2>Your Total Score</h2>
      <p>{message}</p>
      <p>
        {score}/{cards.length}
      </p>
    </div>
  );
}
