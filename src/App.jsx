import { useSelector } from "react-redux";

import Header from "./components/header/Header";
import StartBox from "./components/help-boxes/StartBox";
import QuestionBox from "./components/question-box/QuestionBox";

function App() {
  const isStarted = useSelector((state) => state.start.isStarted);

  return (
    <>
      <Header />
      <StartBox />
      {isStarted && <QuestionBox />}
    </>
  );
}

export default App;
