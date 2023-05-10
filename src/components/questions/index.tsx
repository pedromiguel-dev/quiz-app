import React from "react";
import { QuizContext } from "../../context/quiz";
import "./index.css";
import Option from "./options";
import arrowBack from '../../assets/icon/arrow_back.svg';

function Question() {
  const [quiz_state, dispach] = React.useContext(QuizContext);
  const currentQuestion = quiz_state.questions[quiz_state.currentQuestion];
  console.log(quiz_state);
  const selectOption = (option: string) => {
    dispach({
      type: "CHECK_ANSWER",
      payload: {
        answer: currentQuestion.answer,
        option,
      },
    });
  };

  return (
    <div id="questions">
      <nav className="questions_nav">
        <button className="menu" onClick={() => dispach({ type: "NEWGAME" })}>
          <img src={arrowBack} alt="arrow back" />
        </button>
      </nav>
      <h1>{quiz_state.category} Questions....</h1>
      <h3>{currentQuestion.question}</h3>
      <p>
        pergunta {quiz_state.currentQuestion + 1} de {quiz_state.questions.length}
      </p>
      <ul className="options_container">
        {currentQuestion.options.map((option: string) => {
          return (
            <Option
              selected={quiz_state.answerSelected}
              option={option}
              key={option}
              answer={currentQuestion.answer}
              selectOption={() => selectOption(option)}
            />
          );
        })}
      </ul>
      {quiz_state.isAnswerSelected && (
        <button className="continuar" onClick={() => dispach({ type: "CHANGE_QUESTION" })}>
          continuar
        </button>
      )}
    </div>
  );
}

export default Question;
