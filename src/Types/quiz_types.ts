import React from "react";
export type Quiz = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};
export type questionType = {
  question: string;
  answer: string;
  option: string[];
};
export type questionPropsType = {
  options: string[];
  question: string;
  answer: string;
  callback: (e: React.FormEvent<EventTarget>, userAnswer: string) => void;
  quesIncre: Number;
};
