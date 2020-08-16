import { Quiz, questionType } from "../Types/quiz_types";

const suffleArray = (array: string[]) =>
  [...array].sort(() => Math.random() - 0.5);

export const getQuizDetail = async (
  totalQuestuions: number,
  level: string
): Promise<questionType[]> => {
  const res = await fetch(
    `https://opentdb.com/api.php?amount=${totalQuestuions}&diffivulty=${level}&type=multiple`
  );
  let { results } = await res.json();
  let quizQues: questionType[] = results.map((questionObj: Quiz) => {
    return {
      question: questionObj.question,
      answer: questionObj.correct_answer,
      option: suffleArray(
        questionObj.incorrect_answers.concat(questionObj.correct_answer)
      ),
    };
  });
  return quizQues;
};
