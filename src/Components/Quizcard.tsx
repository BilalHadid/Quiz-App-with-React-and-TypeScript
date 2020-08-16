import React from "react";
import { questionPropsType } from "../Types/quiz_types";

const Quizcard: React.FC<questionPropsType> = ({
  options,
  question,
  callback,
  answers,
}) => {
  return (
    <div>
      <div>
        <p>{question} </p>
      </div>
      <form onSubmit={callback}>
        {options.map((opt: string, ind: number) => {
          return (
            <div key={ind}>
              <label>
                <input type="radio" name="opt" value={opt} />
                {opt}
              </label>
            </div>
          );
        })}
      </form>
      <input type="submit" onClick={callback} />
    </div>
  );
};

export default Quizcard;
