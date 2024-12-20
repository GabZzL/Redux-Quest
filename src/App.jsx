import { useSelector } from "react-redux";

import Header from "./components/header/Header";
import StartBox from "./components/help-boxes/StartBox";
import QuestBox from "./components/question-box/QuestBox";

function App() {
  const isStarted = useSelector((state) => state.start.isStarted);

  return (
    <>
      <Header />
      <StartBox />
      {isStarted && <QuestBox />}
    </>
  );
}

export default App;
