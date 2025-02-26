import { useState } from 'react';

const challenges = [
  "Take 2 sips.",
  "Assign 3 sips to another player.",
  "Finish your drink.",
  "Tell a joke. If no one laughs, take 3 sips.",
];

export default function DrunkJenga() {
  const [tower, setTower] = useState([...challenges]);
  const [currentChallenge, setCurrentChallenge] = useState('');

  const pullBlock = () => {
    if (tower.length === 0) {
      setCurrentChallenge("The tower collapsed! Game over.");
      return;
    }
    const randomIndex = Math.floor(Math.random() * tower.length);
    const challenge = tower[randomIndex];
    setTower(tower.filter((_, i) => i !== randomIndex)); // Remove the block
    setCurrentChallenge(challenge);
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Drunk Jenga</h2>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <p className="text-xl mb-4">{currentChallenge || "Click Pull to Start"}</p>
        <button
          className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-all"
          onClick={pullBlock}
        >
          Pull a Block
        </button>
      </div>
    </div>
  );
}