import { useSelector, useDispatch } from "react-redux";

import { startActions } from "../../store/start";
import { cardsActions } from "../../store/cards";
import REDUX_CARDS from "../../utils/questions";

import Button from "../../UI/Button";

export default function StartBox() {
  const dispatch = useDispatch();

  const isStarted = useSelector((state) => state.start.isStarted);

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
          <Button text="Start" isAnswer onClick={handleClick} />
        </div>
      )}
    </>
  );
}
