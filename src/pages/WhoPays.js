
// import { useState } from 'react';
// import PlayerInput from '../components/PlayerInput';
// import SpinningWheel from '../components/WhoPaysWheel';
// import useTurnManagement from '../components/useTurnManagement';

// export default function WhoPays() {
//   const [players, setPlayers] = useState([]);
//   const [selectedPlayer, setSelectedPlayer] = useState(null);
//   const { CurrentPlayer, nextTurn } = useTurnManagement(players);

//   const startGame = (players) => {
//     setPlayers(players);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-gray-900 p-4">
//       <main className="container mx-auto">
//         <h1 className="text-4xl font-bold text-white mb-8">Who Pays?</h1>
//         {players.length === 0 ? (
//           <PlayerInput onStartGame={startGame} />
//         ) : (
//           <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold text-white mb-4">Game On!</h2>
//             {selectedPlayer ? (
//               <p className="text-white mb-4">
//                 <span className="font-bold">{selectedPlayer}</span> pays for this round!
//               </p>
//             ) : (
//               <>
//                 <CurrentPlayer />
//                 <SpinningWheel players={players} onSelectPlayer={setSelectedPlayer} />
//               </>
//             )}
//             <button
//               onClick={() => setSelectedPlayer(null)}
//               className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
//             >
//               Reset
//             </button>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }



import { useState } from 'react';
import PlayerInput from '../components/PlayerInput';
import SpinningWheel from '../components/WhoPaysWheel';
import useTurnManagement from '../components/useTurnManagement';

export default function WhoPays() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const { CurrentPlayer, nextTurn } = useTurnManagement(players);

  const startGame = (players) => {
    setPlayers(players);
  };

  const resetGame = () => {
    setPlayers([]);
    setSelectedPlayer(null);
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <main className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Who Pays?</h1>
        {players.length === 0 ? (
          <PlayerInput onStartGame={startGame} />
        ) : (
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Game On!</h2>
            {selectedPlayer ? (
              <p className="text-gray-800 mb-4">
                <span className="font-bold">{selectedPlayer}</span> pays for this round!
              </p>
            ) : (
              <>
                <CurrentPlayer />
                <SpinningWheel players={players} onSelectPlayer={setSelectedPlayer} />
              </>
            )}
            <button
              onClick={resetGame}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
            >
              Reset
            </button>
          </div>
        )}
      </main>
    </div>
  );
}