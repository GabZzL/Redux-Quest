import { useSelector, useDispatch } from "react-redux";
import { startActions } from "../../store/start";
import { cardsActions } from "../../store/cards";

import REDUX_CARDS from "../../utils/questions";

export default function StartBox() {
  const isStarted = useSelector((state) => state.start.isStarted);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(startActions.start());
    dispatch(cardsActions.setInitialCards(REDUX_CARDS));
    dispatch(cardsActions.setSelectedCard());
    dispatch(cardsActions.setSelectAnswers());
  }

  return (
    <>
      {!isStarted && (
        <div id="actions">
          <button onClick={handleClick}>Start</button>
        </div>
      )}
    </>
  );
}
