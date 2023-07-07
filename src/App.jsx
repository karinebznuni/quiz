import "./App.css";
import Question from "./components/Question";
import Result from "./components/Result";
import React from "react";
import { useState } from "react";

const questions = [
  {
    text: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { id: 0, text: "javascript", isCorrect: false },
      { id: 1, text: "css", isCorrect: false },
      { id: 2, text: "script", isCorrect: true },
      { id: 3, text: "scripting", isCorrect: false },
    ],
  },
  {
    text: "Where is the correct place to insert a JavaScript?",
    answers: [
      { id: 0, text: "The <body> section", isCorrect: false },
      { id: 1, text: "The <head> section", isCorrect: false },
      { id: 2, text: "Both are true", isCorrect: true },
      { id: 3, text: "Both are false", isCorrect: false },
    ],
  },
  {
    text: "How to write an IF statement in JavaScript?",
    answers: [
      { id: 0, text: "if i = 5 then", isCorrect: false },
      { id: 1, text: "if (i == 5)", isCorrect: true },
      { id: 2, text: "if i == 5 then", isCorrect: false },
      { id: 3, text: "if i = 5", isCorrect: false },
    ],
  },
  {
    text: "How do you round the number 7.25, to the nearest integer?",
    answers: [
      { id: 0, text: "rnd(7.25)", isCorrect: false },
      { id: 1, text: "Math.rnd(7.25)", isCorrect: false },
      { id: 2, text: "round(7.25)", isCorrect: false },
      { id: 3, text: "Math.round(7.25)", isCorrect: true },
    ],
  },
  {
    text: "Which event occurs when the user clicks on an HTML element?",
    answers: [
      { id: 0, text: "onmouseover", isCorrect: false },
      { id: 1, text: "onmouseclick", isCorrect: false },
      { id: 2, text: "onclick", isCorrect: true },
      { id: 3, text: "onChange", isCorrect: false },
    ],
  },
  {
    text: "How do you declare a JavaScript variable?",
    answers: [
      { id: 0, text: "v narName", isCorrect: false },
      { id: 1, text: "variable carName", isCorrect: false },
      { id: 2, text: "var=carName", isCorrect: false },
      { id: 3, text: "var carName", isCorrect: true },
    ],
  },
  {
    text: "Which operator is used to assign a value to a variable?",
    answers: [
      { id: 0, text: "*", isCorrect: false },
      { id: 1, text: "=", isCorrect: true },
      { id: 2, text: "x", isCorrect: false },
      { id: 3, text: "-", isCorrect: false },
    ],
  },
  {
    text: "What will the following code return: Boolean(10 > 9)",
    answers: [
      { id: 0, text: "NaN", isCorrect: false },
      { id: 1, text: "true", isCorrect: true },
      { id: 2, text: "false", isCorrect: false },
      { id: 3, text: "undefined", isCorrect: false },
    ],
  },
  {
    text: "How to write an IF statement for executing some code if i is NOT equal to 5?",
    answers: [
      { id: 0, text: "if i<>5", isCorrect: false },
      { id: 1, text: "if (i != 5)", isCorrect: true },
      { id: 2, text: "if i =! 5 then", isCorrect: false },
      { id: 3, text: "if (i<>5)", isCorrect: false },
    ],
  },
  {
    text: "How does a WHILE loop start?",
    answers: [
      { id: 0, text: "While (i <= 10)", isCorrect: true },
      { id: 1, text: "While $i <= 10", isCorrect: false },
      { id: 2, text: "While i = 1 to 10", isCorrect: false },
      { id: 3, text: "while (i <= 10; i++)", isCorrect: false },
    ],
  },
];

export default function App() {
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <>
      <div className="App">
        <h1>Quiz game</h1>
        <h2 className="score">Current score: {score}</h2>
        {showResult ? (
          <Result
            score={score}
            questions={questions}
            setScore={setScore}
            setShowResult={setShowResult}
          />
        ) : (
          <Question
            setScore={setScore}
            score={score}
            setShowResult={setShowResult}
            questions={questions}
          />
        )}
      </div>
    </>
  );
}
