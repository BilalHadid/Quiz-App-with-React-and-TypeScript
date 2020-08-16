import React from "react";

const Quizcard: React.FC<any> = ({ options, question }) => {
  console.log(question);
  console.log(options);
  return (
    <div>
      <div>
        <p>{question} </p>
      </div>
      <form>
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
      <input type="submit" />
    </div>
  );
};

export default Quizcard;
