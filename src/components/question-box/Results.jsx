import { useSelector } from "react-redux";

export default function Results() {
  const score = useSelector((state) => state.cards.score);

  return (
    <div>
      <h2>Your Total Score</h2>
      <p>{score}</p>
    </div>
  );
}
