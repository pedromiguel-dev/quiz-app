import { createContext, useReducer } from "react";
import questions from "../data/questions";
import questions_complete from "../data/questions_complete";

const STAGES = ["start", "playing", "end"];

type stateObject = {
  gameStage: String,
  category: String,
  questions: Object[],
  currentQuestion: number,
  score: number,
  answerSelected: String,
  isAnswerSelected: Boolean,
}
const initialState = (topic: string) : stateObject => {
  let changeCategory = (topic: string) => {
    return questions_complete.findIndex((element) => element.category === topic);
  };

  return {
    gameStage: STAGES[0],
    category: questions_complete[changeCategory(topic)].category,
    questions: questions_complete[changeCategory(topic)].questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: "",
    isAnswerSelected: false,
  };
};

const quizReducer = (state: stateObject, action: { type: string; payload: { topic: string; answer: any; option: any; }; }) : stateObject => {
  console.log({ state, action });

  if (action.type === "CHANGE_STATE") {
    return {
      ...initialState(action.payload.topic),
      gameStage: STAGES[1],
    };
  } else if (action.type === "CHANGE_QUESTION") {
    const nextQuestion = state.currentQuestion + 1;
    let endgame = false;

    if (!questions[nextQuestion]) {
      endgame = true;
    }

    return {
      ...state,
      gameStage: endgame ? STAGES[2] : state.gameStage,
      currentQuestion: nextQuestion,
      answerSelected: "",
      isAnswerSelected: false,
    };
  } else if (action.type === "NEWGAME") {
    return initialState("HTML");
  } else if (action.type === "CHECK_ANSWER") {
    if (state.isAnswerSelected) return state;
    const answer = action.payload.answer;
    const option = action.payload.option;
    let correct = 0;

    if (answer === option) correct = 1;
    return {
      ...state,
      score: state.score + correct,
      answerSelected: option,
      isAnswerSelected: true,
    };
  }
  return state
};

export const QuizContext = createContext<any>(null);

export const QuizProvider = ({ children }: any) => {
  const value = useReducer(quizReducer, initialState("HTML"));

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export default function Quiz() {
  return <div>Quiz</div>;
}
