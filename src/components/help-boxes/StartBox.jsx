import { useDispatch } from "react-redux";
import { startActions } from "../../store/start";

export default function StartBox() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(startActions.start());
  }

  return (
    <div id="actions">
      <button onClick={handleClick}>Start</button>
    </div>
  );
}
