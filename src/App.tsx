import "./app.css";
import React from "react";
import { useContext } from "react";
import { QuizContext } from "./context/quiz";
import Gameover from "./components/gameover";
import Question from "./components/questions";
import Wellcome from "./components/wellcome";

function App() {
  const [quiz_state, dispach] = React.useContext(QuizContext);

  return (
    <div className="App">
      {/* <h1>Quiz App</h1> */}
      {quiz_state.gameStage === "start" && <Wellcome />}
      {quiz_state.gameStage === "playing" && <Question />}
      {quiz_state.gameStage === "end" && <Gameover />}
    </div>
  );
}

export default App;
