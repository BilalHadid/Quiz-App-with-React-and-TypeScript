import React, { useEffect, useState } from "react";
import "./App.css";
import { getQuizDetail } from "./services/quiz_app";
import Quizcard from "./Components/Quizcard";
import { questionType } from "./Types/quiz_types";

function App() {
  const [quiz, setquiz] = useState<questionType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const questions = await getQuizDetail(5, "easy");
      console.log(questions);

      setquiz(questions);
    };
    fetchData();
  }, []);
  if (!quiz.length) return <h3>Loading ..</h3>;
  return (
    <div>
      <h1>Hello</h1>
      <Quizcard options={quiz[0].option} question={quiz[0].question} />
    </div>
  );
}

export default App;
