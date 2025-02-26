


// import { motion } from "framer-motion";
// import { FaCocktail, FaUserFriends, FaDice } from "react-icons/fa";

// export default function HomePage() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
//       {/* Header Section */}
//       <motion.h1
//         className="text-4xl md:text-6xl font-extrabold mb-6 text-center"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         The Ultimate Party Game 🎉
//       </motion.h1>
//       <motion.p
//         className="text-lg md:text-xl text-gray-300 mb-8 text-center max-w-2xl"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5, duration: 1 }}
//       >
//         Play outrageous drinking games, challenge your friends, and survive the madness! 🍻
//       </motion.p>

//       {/* Game Sections */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
//         <GameCard
//           icon={<FaCocktail className="text-4xl text-yellow-400" />}
//           title="Drink Generator"
//           description="Not sure what to drink? Let fate decide! Get a random drink challenge."
//         />
//         <GameCard
//           icon={<FaUserFriends className="text-4xl text-blue-400" />}
//           title="Who Pays?"
//           description="Split the bill or dodge it? Find out who’s paying tonight!"
//         />
//         <GameCard
//           icon={<FaDice className="text-4xl text-red-400" />}
//           title="Never Have I Ever"
//           description="Spill your secrets or take a shot! Play the wildest Never Have I Ever."
//         />
//       </div>
//     </div>
//   );
// }

// function GameCard({ icon, title, description }) {
//   return (
//     <motion.div
//       className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition-all cursor-pointer"
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="mb-4">{icon}</div>
//       <h2 className="text-xl font-bold mb-2">{title}</h2>
//       <p className="text-gray-300">{description}</p>
//     </motion.div>
//   );
// }



import { motion } from "framer-motion";
import { FaBeer, FaDice, FaWineGlassAlt, FaQuestion, FaGlassCheers, FaSkull } from "react-icons/fa";

const games = [
  { name: "Drink Generator", icon: <FaBeer className="text-4xl text-yellow-400" />, description: "Need a drink idea? Let fate decide your next sip!" },
  { name: "Who Pays?", icon: <FaDice className="text-4xl text-blue-400" />, description: "Who's footing the bill? Let the game decide." },
  { name: "Drunk Jenga", icon: <FaWineGlassAlt className="text-4xl text-green-400" />, description: "Classic Jenga, but make it chaotic and boozy." },
  { name: "Never Have I Ever", icon: <FaQuestion className="text-4xl text-red-400" />, description: "Spill your secrets or sip up!" },
  { name: "Truth or Drink", icon: <FaGlassCheers className="text-4xl text-purple-400" />, description: "Answer the wildest questions... or take a shot." },
  { name: "Hangover Tales", icon: <FaSkull className="text-4xl text-gray-400" />, description: "The morning after? Tell us your most ridiculous hangover stories." },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      {/* Header Section */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        The Ultimate Party Game 🎉
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-gray-300 mb-8 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Play outrageous drinking games, challenge your friends, and survive the madness! 🍻
      </motion.p>

      {/* Game Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {games.map((game, index) => (
          <GameCard key={index} icon={game.icon} title={game.name} description={game.description} />
        ))}
      </div>
    </div>
  );
}

function GameCard({ icon, title, description }) {
  return (
    <motion.div
      className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition-all cursor-pointer"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">{icon}</div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}
