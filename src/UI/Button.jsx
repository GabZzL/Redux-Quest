import classes from "./Button.module.css";

export default function Button({ text, isAnswer, onClick }) {
  return (
    <button className={classes.button} onClick={onClick} disabled={!isAnswer}>
      {text}
    </button>
  );
}
