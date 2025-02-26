
import { useState } from 'react';
import { motion } from 'framer-motion';

// Animations
const loadingAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const blockAnimation = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function PlayerInput({ onStartGame }) {
  const [players, setPlayers] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const addPlayer = () => {
    if (inputValue.trim() && players.length < 10) {
      setIsAdding(true);
      setTimeout(() => {
        setPlayers([...players, inputValue.trim()]);
        setInputValue('');
        setIsAdding(false);
      }, 500); // Simulate a short loading state
    }
  };

  const removePlayer = (index) => {
    const updatedPlayers = players.filter((_, i) => i !== index);
    setPlayers(updatedPlayers);
  };

  return (
    <div className="flex flex-col items-center text-center relative">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Who's footing the bill? Let the game decide.</h2>
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md"
        initial="hidden"
        animate="visible"
        variants={loadingAnimation}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col space-y-4">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter player name"
              className="flex-1 p-2 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <motion.button
              onClick={addPlayer}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Add
            </motion.button>
          </div>
          <ul className="space-y-2">
            {players.map((player, index) => (
              <motion.li
                key={index}
                className="flex justify-between items-center bg-gray-100 p-2 rounded-lg"
                initial="hidden"
                animate="visible"
                variants={blockAnimation}
                transition={{ duration: 0.5 }}
              >
                <span className="text-gray-800">{player}</span>
                <button
                  onClick={() => removePlayer(index)}
                  className="text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Remove
                </button>
              </motion.li>
            ))}
          </ul>
          <motion.button
            onClick={() => onStartGame(players)}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            disabled={players.length < 2}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Game
          </motion.button>
        </div>
      </motion.div>

      {/* Loading Animation */}
      {isAdding && (
        <motion.div
          className="absolute top-0 left-0 right-0 bg-yellow-300 h-1"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.5, ease: "linear" }}
        />
      )}
    </div>
  );
}