import React from "react";
import { QuizContext } from "../../context/quiz";
import { useContext } from "react";
import "./index.css";

function Gameover() {
  const [quiz_state, dispach] = React.useContext(QuizContext);
  console.log(quiz_state);

  return (
    <div id="gameover">
      <h1>O jogo acabou {":>"} </h1>
      <ul className="options_container">
        <li>
          <p>pnituação: {quiz_state.score}</p>
        </li>
        <li>
          <p>
            errou {quiz_state.questions.length - quiz_state.score} de {quiz_state.questions.length} perguntas
          </p>
        </li>
      </ul>
      <button className="reiniciar" onClick={() => dispach({ type: "NEWGAME" })}>
        Voltar ao início
      </button>
    </div>
  );
}

export default Gameover;
