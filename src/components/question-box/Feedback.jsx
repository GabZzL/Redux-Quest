export default function Feedback({ feedback, message }) {
  return (
    <div>
      <h3>{feedback.message}</h3>
      {feedback.correctAnswer && (
        <p>The correct answer was: {feedback.correctAnswer}</p>
      )}
    </div>
  );
}
