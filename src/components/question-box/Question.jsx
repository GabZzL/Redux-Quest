import { useSelector } from "react-redux";

export default function Question({question}) {
  const card = useSelector((state) => state.cards.selectedCard);

  return <h2>{card.question}</h2>;
}
