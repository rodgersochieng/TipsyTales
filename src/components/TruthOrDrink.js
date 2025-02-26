import { useState } from 'react';

const questions = [
  "What’s the most embarrassing thing you’ve done while drunk?",
  "Have you ever had a crush on a friend’s partner?",
  "What’s the weirdest place you’ve ever slept?",
];

export default function TruthOrDrink() {
  const [currentQuestion, setCurrentQuestion] = useState('');

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(getRandomQuestion());
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Truth or Drink</h2>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <p className="text-xl mb-4">{currentQuestion || "Click Next to Start"}</p>
        <button
          className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-all"
          onClick={handleNextQuestion}
        >
          Next Question
        </button>
      </div>
    </div>
  );
}