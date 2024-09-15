// Displays the current progress of the quiz, including question number and score.

import { useQuiz } from "../contexts/QuizContext";

export default function Progress() {
  const { index, numQuestions, maxPossiblePoints, points, answer } = useQuiz();

  return (
    <header className="progress">
      {/* Add 1 if an answer is provided, else add 0 to the index */}
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        {points} <strong> / {maxPossiblePoints}</strong>
      </p>
    </header>
  );
}
