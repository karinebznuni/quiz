import "./Result.css";

export default function Result({ questions, score, setScore, setShowResult }) {
  const restartGame = () => {
    setScore(0);
    setShowResult(false);
  };
  return (
    <>
      <div className="result">
        <h2>Final result</h2>
        <h3>
          {score} out of {questions.length} - (
          {(score / questions.length) * 100}
          %){" "}
        </h3>
        <button className="restart" onClick={() => restartGame()}>
          Restart
        </button>
      </div>
    </>
  );
}
