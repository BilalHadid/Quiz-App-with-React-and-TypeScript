import { Quiz } from "../Types/quiz_types";

export const getQuizDetail = async (
  totalQuestuions: number,
  level: string
): Promise<Quiz[]> => {
  const res = await fetch(
    `https://opentdb.com/api.php?amount=${totalQuestuions}&diffivulty=${level}&type=multiple`
  );
  let { results } = await res.json();
  let quizQues = results.map((questionObj: Quiz) => {
    return {
      question: questionObj.question,
      answer: questionObj.correct_answer,
      option: questionObj.incorrect_answers.concat(questionObj.correct_answer),
    };
  });
  return quizQues;
};
