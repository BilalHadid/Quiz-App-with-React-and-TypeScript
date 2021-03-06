import React, { useEffect, useState } from "react";
import "./App.css";
import { getQuizDetail } from "./services/quiz_app";
import Quizcard from "./Components/Quizcard";
import { questionType } from "./Types/quiz_types";
import quizlogo from "./images/quiz-logo.png";
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/RingLoader";
import firebase from "./firebase";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function App() {
  const messaging = firebase.messaging();
  messaging
    .requestPermission()
    .then(() => {
      return messaging.getToken();
    })
    .then((token) => {
      console.log("token", token);
    });
  const [quiz, setquiz] = useState<questionType[]>([]);
  let [quizIter, setquizIter] = useState(0);
  let [score, setScore] = useState(0);
  let [final, setFinal] = useState(false);
  let [questions, setQuestions] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const questions = await getQuizDetail(5, "easy");

      setquiz(questions);
    };
    fetchData();
  }, []);
  let afterSubmit = (e: React.FormEvent<EventTarget>, userAnswer: string) => {
    e.preventDefault();
    if (userAnswer === quiz[quizIter].answer) {
      setScore(++score);
    }
    if (quizIter !== quiz.length - 1) {
      setquizIter(++quizIter);

      setQuestions(++questions);
    } else {
      setFinal(true);
    }
  };

  if (!quiz.length)
    return (
      <div className="sweet-loading">
        <BeatLoader css={override} size={50} color={"#123abc"} loading={true} />
      </div>
    );
  if (final) {
    return (
      <div className="App">
        <div className="container">
          <img src={quizlogo} alt="heading" />
        </div>
        <h1>Your Total Score is {score}</h1>
        <h2>
          {score >= 3 ? "Congratulation You are Passed" : "You aren't passed"}
        </h2>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="container">
          <img src={quizlogo} alt="heading" />
        </div>
        <h1>Score : {score}</h1>
        <div className="Quiz">
          <Quizcard
            options={quiz[quizIter].option}
            question={quiz[quizIter].question}
            answer={quiz[quizIter].answer}
            callback={afterSubmit}
            quesIncre={questions}
          />
        </div>
      </div>
    );
  }
}

export default App;
