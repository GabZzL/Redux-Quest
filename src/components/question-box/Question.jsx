import { useSelector } from "react-redux";
import classes from "./Question.module.css";

export default function Question() {
  const card = useSelector((state) => state.cards.selectedCard);

  return <h2 className={classes.question}>{card.question}</h2>;
}
