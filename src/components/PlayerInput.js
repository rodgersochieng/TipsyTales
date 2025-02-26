import { useState } from 'react';

export default function PlayerInput({ onStartGame }) {
  const [players, setPlayers] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addPlayer = () => {
    if (inputValue.trim() && players.length < 10) {
      setPlayers([...players, inputValue.trim()]);
      setInputValue('');
    }
  };

  const removePlayer = (index) => {
    const updatedPlayers = players.filter((_, i) => i !== index);
    setPlayers(updatedPlayers);
  };

  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">Add Players</h2>
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter player name"
            className="flex-1 p-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300"
          />
          <button
            onClick={addPlayer}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {players.map((player, index) => (
            <li key={index} className="flex justify-between items-center bg-white bg-opacity-10 p-2 rounded-lg">
              <span className="text-white">{player}</span>
              <button
                onClick={() => removePlayer(index)}
                className="text-red-500 hover:text-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => onStartGame(players)}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all"
          disabled={players.length < 2}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}