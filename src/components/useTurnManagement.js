

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function useTurnManagement(players) {
//   const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

//   const nextTurn = () => {
//     setCurrentPlayerIndex((prevIndex) => (prevIndex + 1) % players.length);
//   };

//   const CurrentPlayer = () => (
//     <AnimatePresence mode="wait">
//       <motion.div
//         key={currentPlayerIndex}
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 20 }}
//         transition={{ duration: 0.5 }}
//         className="text-gray-800 mb-4"
//       >
//         Current Player: <span className="font-bold">{players[currentPlayerIndex]}</span>
//       </motion.div>
//     </AnimatePresence>
//   );

//   return {
//     CurrentPlayer,
//     nextTurn,
//   };
// }


import { useState } from 'react';

export default function useTurnManagement(players) {
  const [currentTurn, setCurrentTurn] = useState(0);

  const nextTurn = () => {
    setCurrentTurn((prevTurn) => (prevTurn + 1) % players.length);
  };

  const CurrentPlayer = () => {
    if (players.length === 0) return null;
    return (
      <p className="text-gray-800 mb-4">
        It's <span className="font-bold">{players[currentTurn]}</span>'s turn to spin!
      </p>
    );
  };

  return { CurrentPlayer, nextTurn };
}