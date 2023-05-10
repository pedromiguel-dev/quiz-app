import React from "react";
import { QuizContext } from "../../context/quiz";
import "./index.css";

function Wellcome() {
  const [quiz_state, dispach] = React.useContext(QuizContext);
  // console.log(quiz_state);

  return (
    <div id="wellcome">
      <h1>
        Hey! Wellcome to the <b>Quizapp</b> :D
      </h1>
      <h3>Let's start test your web knowledge </h3>
      <div className="topic_buttons">
        <button onClick={() => dispach({ type: "CHANGE_STATE", payload: { topic: "HTML" } })} id="wellcome-button-start">
          Start HTML🚀
        </button>
        <button onClick={() => dispach({ type: "CHANGE_STATE", payload: { topic: "CSS" } })} id="wellcome-button-start">
          Start CSS🚀
        </button>
        <button onClick={() => dispach({ type: "CHANGE_STATE", payload: { topic: "JavaScript" } })} id="wellcome-button-start">
          Start JS🚀
        </button>
      </div>
    </div>
  );
}

export default Wellcome;
