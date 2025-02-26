
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// export default function Home() {
//   const games = [
//     {
//       name: 'Drink Generator',
//       icon: '🍹',
//       description: 'Generate random drinks and challenges to keep the party lively!',
//       link: '/drink-generator',
//     },
//     {
//       name: 'Who Pays?',
//       icon: '💸',
//       description: 'Spin the wheel to decide who pays for the next round!',
//       link: '/who-pays',
//     },
//     {
//       name: 'Drunk Jenga',
//       icon: '🪵',
//       description: 'Play Jenga with a tipsy twist! Each block comes with a challenge or dare.',
//       link: '/drunk-jenga',
//     },
//     {
//       name: 'Never Have I Ever',
//       icon: '🙊',
//       description: 'Confess your wildest secrets or take a drink!',
//       link: '/never-have-i-ever',
//     },
//     {
//       name: 'Truth or Drink',
//       icon: '🍻',
//       description: 'Answer truthfully or take a drink! Test your honesty and your liver.',
//       link: '/truth-or-drink',
//     },
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-100 via-red-100 to-pink-100 text-gray-900 p-6">
//       {/* Animated Title */}
//       <motion.h1
//         className="text-3xl md:text-5xl font-extrabold mb-8 text-red-600 drop-shadow-lg text-center"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         🍻 Game Nights 🌙 Let Chaos Decide!
//       </motion.h1>

//       {/* Game Sections */}
//       <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-8">
//         {games.map((game, index) => (
//           <Link key={index} to={game.link}>
//             <motion.div
//               className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all border border-gray-200 cursor-pointer"
//               whileHover={{ scale: 1.05 }}
//             >
//               <div className="text-6xl mb-4 text-yellow-600">{game.icon}</div>
//               <div className="text-center">
//                 <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">{game.name}</h2>
//                 <p className="text-gray-600">{game.description}</p>
//               </div>
//             </motion.div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  const games = [
    {
      name: 'Drink Generator',
      icon: '🍹',
      description: 'Generate random drinks and challenges to keep the party lively!',
      link: '/drink-generator',
    },
    {
      name: 'Who Pays?',
      icon: '💸',
      description: 'Spin the wheel to decide who pays for the next round!',
      link: '/who-pays',
    },
    {
      name: 'Drunk Jenga',
      icon: '🪵',
      description: 'Play Jenga with a tipsy twist! Each block comes with a challenge or dare.',
      link: '/drunk-jenga',
    },
    {
      name: 'Never Have I Ever',
      icon: '🙊',
      description: 'Confess your wildest secrets or take a drink!',
      link: '/never-have-i-ever',
    },
    {
      name: 'Truth or Drink',
      icon: '🍻',
      description: 'Answer truthfully or take a drink! Test your honesty and your liver.',
      link: '/truth-or-drink',
    },
  ];

  // Define the container and item variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-red-600 p-6">
      {/* Animated Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-12 drop-shadow-lg text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🍻 Game Nights 🌙 Let Chaos Decide!
      </motion.h1>

      {/* Game Sections with staggered animations */}
      <motion.div
        className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {games.map((game, index) => (
          <Link key={index} to={game.link}>
            <motion.div
              className="flex flex-col items-center p-6 bg-red-100 rounded-2xl shadow-xl hover:bg-red-200 transition-all cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: -1 }}
            >
              <div className="text-7xl mb-4">{game.icon}</div>
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{game.name}</h2>
                <p className="text-red-500">{game.description}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}