import "./Question.css";
import { useState } from "react";

export default function Question({
  setScore,
  score,
  setShowResult,
  questions,
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const answerClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };
  return (
    <>
      <div className="question-card">
        <h2>
          Question {currentQuestion + 1} out of {questions.length}
        </h2>
        <h3 className="question">{questions[currentQuestion].text}</h3>
        <ul>
          {questions[currentQuestion].answers.map((answer) => {
            return (
              <li
                key={answer.id}
                onClick={() => answerClicked(answer.isCorrect)}
              >
                {answer.text}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
