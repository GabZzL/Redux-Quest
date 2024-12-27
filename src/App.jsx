import { useSelector } from "react-redux";

import Header from "./components/header/Header";
import StartBox from "./components/help-boxes/StartBox";
import QuestBox from "./components/question-box/QuestBox";

import classes from "./App.module.css";

function App() {
  const isStarted = useSelector((state) => state.start.isStarted);

  return (
    <div className={classes.container}>
      <Header />
      <StartBox />
      {isStarted && <QuestBox />}
    </div>
  );
}

export default App;
