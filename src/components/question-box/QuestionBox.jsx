import { showSelectedCard } from "../../utils/questlogic";

export default function QuestionBox() {
  function showQuestion() {
    const card = showSelectedCard();
    console.log(card);
  }

  return (
    <div>
      <h2>Question?</h2>
      <ul>
        <li>answer 1</li>
        <li>answer 2</li>
        <li>answer 3</li>
      </ul>
      <button onClick={showQuestion}>Show Question</button>
    </div>
  );
}
