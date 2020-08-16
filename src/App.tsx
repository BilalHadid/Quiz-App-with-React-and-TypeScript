import React, { useEffect, useState } from "react";
import "./App.css";
import { getQuizDetail } from "./services/quiz_app";
import Quizcard from "./Components/Quizcard";
import { questionType } from "./Types/quiz_types";
import quizlogo from "./images/quiz-logo.png";

function App() {
  const [quiz, setquiz] = useState<questionType[]>([]);
  let [quizIter, setquizIter] = useState(0);
  let [quizScore, setquizScore] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const questions = await getQuizDetail(5, "easy");
      console.log(questions);

      setquiz(questions);
    };
    fetchData();
  }, []);
  let afterSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (quizIter !== quiz.length - 1) {
      setquizIter(++quizIter);
    } else {
      alert("Quiz Finished");
      setquizIter(0);
    }
  };
  let afterAnswer = () => {
    setquizScore(++quizScore);
  };
  if (!quiz.length) return <h3>Loading ..</h3>;
  return (
    <div>
      <img src={quizlogo} alt="heading" />
      <div>
        <h1>Score : {quizIter}</h1>
      </div>
      <Quizcard
        options={quiz[quizIter].option}
        question={quiz[quizIter].question}
        callback={afterSubmit}
        answers={afterAnswer}
      />
    </div>
  );
}

export default App;
