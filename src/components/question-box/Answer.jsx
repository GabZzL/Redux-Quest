export default function Answer({ answer, onClick }) {
  return (
    <li>
      <p onClick={onClick}>{answer}</p>
    </li>
  );
}
