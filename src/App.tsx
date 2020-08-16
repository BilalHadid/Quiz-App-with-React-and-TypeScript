import React, { useEffect } from "react";
import "./App.css";
import { getQuizDetail } from "./services/quiz_app";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const questions = await getQuizDetail(5, "easy");
      console.log(questions);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
