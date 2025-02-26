
// import { useState } from 'react';
// import PlayerInput from '../components/PlayerInput';
// import SpinningWheel from '../components/WhoPaysWheel';

// export default function WhoPays() {
//   const [players, setPlayers] = useState([]);
//   const [selectedPlayer, setSelectedPlayer] = useState(null);
//   const [isGameStarted, setIsGameStarted] = useState(false);
//   const [currentTurn, setCurrentTurn] = useState(0); // Track whose turn it is

//   // Start the game with the list of players
//   const startGame = (players) => {
//     setPlayers(players);
//     setIsGameStarted(true);
//     setSelectedPlayer(null); // Reset selected player when starting a new game
//     setCurrentTurn(0); // Start with the first player
//   };

//   // Reset the game to the initial state
//   const resetGame = () => {
//     setPlayers([]);
//     setSelectedPlayer(null);
//     setIsGameStarted(false);
//     setCurrentTurn(0);
//   };

//   // Handle player selection after spinning the wheel
//   const handleSelectPlayer = (player) => {
//     setSelectedPlayer(player);
//     setCurrentTurn((prevTurn) => (prevTurn + 1) % players.length); // Move to the next player
//   };

//   // Clear the selected player to allow spinning again
//   const spinAgain = () => {
//     setSelectedPlayer(null);
//   };

//   // Random emoji for the result
//   const getRandomEmoji = () => {
//     const emojis = ['😢', '😅', '😡', '😭', '🤬', '😤'];
//     return emojis[Math.floor(Math.random() * emojis.length)];
//   };

//   return (
//     <div className="min-h-screen bg-white p-4">
//       <main className="container mx-auto">
//         <h1 className="text-4xl font-bold text-gray-800 mb-8"></h1>
//         {!isGameStarted ? (
//           // Show player input if the game hasn't started
//           <PlayerInput onStartGame={startGame} />
//         ) : (
//           // Show the game interface if the game has started
//           <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold text-gray-800 mb-4">Game On!</h2>
//             {selectedPlayer ? (
//               // Show the selected player and emoji if the wheel has been spun
//               <div className="flex flex-col items-center space-y-6">
//                 <div className="text-9xl">{getRandomEmoji()}</div>
//                 <p className="text-2xl font-bold text-gray-800 text-center">
//                   <span className="text-red-500">{selectedPlayer}</span> pays for this round!
//                 </p>
//                 <div className="flex space-x-4">
//                   <button
//                     onClick={spinAgain}
//                     className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
//                   >
//                     Spin Again
//                   </button>
//                   <button
//                     onClick={resetGame}
//                     className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-all"
//                   >
//                     Reset
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               // Show the spinning wheel if no player has been selected yet
//               <>
//                 <p className="text-gray-800 mb-4 text-center">
//                   It's <span className="font-bold text-red-500">{players[currentTurn]}</span>'s turn to spin!
//                 </p>
//                 <SpinningWheel players={players} onSelectPlayer={handleSelectPlayer} />
//                 {/* <button
//                   onClick={resetGame}
//                   className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-all w-full mt-4"
//                 >
//                   Reset
//                 </button> */}
//               </>
//             )}
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }



import { useState } from 'react';
import PlayerInput from '../components/PlayerInput';
import SpinningWheel from '../components/WhoPaysWheel';
import AlcoholIconAnimation from '../components/AlcoholIconAnimation';


export default function WhoPays() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [currentTurn, setCurrentTurn] = useState(0); // Track whose turn it is

  // Start the game with the list of players
  const startGame = (players) => {
    setPlayers(players);
    setIsGameStarted(true);
    setSelectedPlayer(null); // Reset selected player when starting a new game
    setCurrentTurn(0); // Start with the first player
  };

  // Reset the game to the initial state
  const resetGame = () => {
    setPlayers([]);
    setSelectedPlayer(null);
    setIsGameStarted(false);
    setCurrentTurn(0);
  };

  // Handle player selection after spinning the wheel
  const handleSelectPlayer = (player) => {
    setSelectedPlayer(player);
    setCurrentTurn((prevTurn) => (prevTurn + 1) % players.length); // Move to the next player
  };

  // Clear the selected player to allow spinning again
  const spinAgain = () => {
    setSelectedPlayer(null);
  };

  // Random emoji for the result
  const getRandomEmoji = () => {
    const emojis = ['😢', '😅', '😡', '😭', '🤬', '😤'];
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <main className="container mx-auto">
      <AlcoholIconAnimation />
        {!isGameStarted ? (
          // Show player input if the game hasn't started
          <PlayerInput onStartGame={startGame} />
        ) : (
          // Show the game interface if the game has started
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Game On!</h2>
            {selectedPlayer ? (
              // Show the selected player and emoji if the wheel has been spun
              <div className="flex flex-col items-center space-y-6">
                <div className="text-9xl">{getRandomEmoji()}</div>
                <p className="text-2xl font-bold text-gray-800 text-center">
                  <span className="text-red-500">{selectedPlayer}</span> pays for this round!
                </p>
                <div className="flex space-x-4">
                  <button
                    onClick={spinAgain}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
                  >
                    Spin Again
                  </button>
                  <button
                    onClick={resetGame}
                    className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-all"
                  >
                    Reset
                  </button>
                </div>
              </div>
            ) : (
              // Show the spinning wheel if no player has been selected yet
              <>
                <p className="text-gray-800 mb-6 text-center">
                  It's <span className="font-bold text-red-500">{players[currentTurn]}</span>'s turn to spin!
                </p>
                <SpinningWheel players={players} onSelectPlayer={handleSelectPlayer} />
                {/* <button
                  onClick={resetGame}
                  className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition-all w-full mt-6"
                >
                  Reset
                </button> */}
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
}