import { useState } from 'react';

const questions = [
  "Never have I ever gone to work hungover.",
  "Never have I ever danced on a table.",
  "Never have I ever forgotten a friend's birthday.",
  "Never have I ever lied about my age.",
];

export default function NeverHaveIEver() {
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [usedQuestions, setUsedQuestions] = useState([]);

  const getRandomQuestion = () => {
    const availableQuestions = questions.filter(
      (q) => !usedQuestions.includes(q)
    );
    if (availableQuestions.length === 0) {
      setUsedQuestions([]); // Reset if all questions are used
      return getRandomQuestion();
    }
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const question = availableQuestions[randomIndex];
    setUsedQuestions([...usedQuestions, question]);
    return question;
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(getRandomQuestion());
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Never Have I Ever</h2>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <p className="text-xl mb-4">{currentQuestion || "Click Next to Start"}</p>
        <button
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-all"
          onClick={handleNextQuestion}
        >
          Next Question
        </button>
      </div>
    </div>
  );
}