import React, { useState } from "react";
import { questionPropsType } from "../Types/quiz_types";
import "../App.css";

const Quizcard: React.FC<questionPropsType> = ({
  options,
  question,
  callback,
  answer,
  quesIncre,
}) => {
  let [userAnswer, setUserAnswer] = useState("");
  const handleChange = (e: any) => {
    setUserAnswer(e.target.value);
  };
  return (
    <div className="Card">
      <div className="Parag">
        <span>
          <p>
            <b>Questions {quesIncre}</b>
          </p>
        </span>

        <p>{question} </p>
      </div>
      <form
        onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, userAnswer)}
      >
        {options.map((opt: string, ind: number) => {
          return (
            <div key={ind}>
              <label>
                <input
                  required
                  type="radio"
                  name="opt"
                  value={opt}
                  checked={userAnswer === opt}
                  onChange={handleChange}
                />
                {opt}
              </label>
            </div>
          );
        })}
      </form>
      <br />

      <br />
      <button
        onClick={(e: React.FormEvent<EventTarget>) => callback(e, userAnswer)}
      >
        Submit
      </button>
    </div>
  );
};

export default Quizcard;
