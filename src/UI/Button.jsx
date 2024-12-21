export default function Button({ text, isAnswer, onClick }) {
  return (
    <button onClick={onClick} disabled={!isAnswer}>
      {text}
    </button>
  );
}
