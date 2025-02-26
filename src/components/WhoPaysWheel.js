

// import { motion, useAnimation } from 'framer-motion';
// import { useState } from 'react';

// export default function SpinningWheel({ players, onSelectPlayer }) {
//   const [isSpinning, setIsSpinning] = useState(false);
//   const controls = useAnimation();

//   const spinWheel = async () => {
//     if (isSpinning) return;
//     setIsSpinning(true);

//     // Randomize the spin duration and rotation
//     const spinDuration = Math.random() * 3 + 2; // Between 2 and 5 seconds
//     const rotations = Math.floor(Math.random() * 5 + 5); // Between 5 and 10 rotations

//     await controls.start({
//       rotate: 360 * rotations,
//       transition: { duration: spinDuration, ease: 'easeInOut' },
//     });

//     // Select a random player
//     const randomPlayer = players[Math.floor(Math.random() * players.length)];
//     onSelectPlayer(randomPlayer);

//     setIsSpinning(false);
//   };

//   return (
//     <div className="flex flex-col items-center space-y-6">
//       <motion.div
//         className="w-64 h-64 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full flex items-center justify-center relative shadow-2xl"
//         animate={controls}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         style={{
//           boxShadow: '0 10px 30px rgba(255, 99, 71, 0.5)', // Glow effect
//         }}
//       >
//         {/* Center Circle */}
//         <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-inner">
//           <span className="text-xl font-bold text-red-500">Spin</span>
//         </div>

//         {/* Decorative Lines */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           {[...Array(12)].map((_, index) => (
//             <div
//               key={index}
//               className="absolute w-1 h-12 bg-white opacity-30"
//               style={{
//                 transform: `rotate(${index * 30}deg) translateY(-50%)`,
//               }}
//             />
//           ))}
//         </div>
//       </motion.div>
//       <button
//         onClick={spinWheel}
//         className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-all focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
//         disabled={isSpinning}
//       >
//         {isSpinning ? 'Spinning...' : 'Spin the Wheel'}
//       </button>
//     </div>
//   );
// }


import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';

export default function SpinningWheel({ players, onSelectPlayer }) {
  const [isSpinning, setIsSpinning] = useState(false);
  const controls = useAnimation();

  const spinWheel = async () => {
    if (isSpinning || players.length === 0) return; // Prevent spinning if no players are added
    setIsSpinning(true);

    // Randomize the spin duration and rotation
    const spinDuration = Math.random() * 3 + 2; // Between 2 and 5 seconds
    const rotations = Math.floor(Math.random() * 5 + 5); // Between 5 and 10 rotations

    await controls.start({
      rotate: 360 * rotations,
      transition: { duration: spinDuration, ease: 'easeInOut' },
    });

    // Select a random player
    const randomPlayer = players[Math.floor(Math.random() * players.length)];
    onSelectPlayer(randomPlayer);

    setIsSpinning(false);
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <motion.div
        className="w-64 h-64 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full flex items-center justify-center relative shadow-2xl"
        animate={controls}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          boxShadow: '0 10px 30px rgba(255, 99, 71, 0.5)', // Glow effect
        }}
      >
        {/* Center Circle */}
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-inner">
          <span className="text-xl font-bold text-red-500">Spin</span>
        </div>

        {/* Decorative Lines */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="absolute w-1 h-12 bg-white opacity-30"
              style={{
                transform: `rotate(${index * 30}deg) translateY(-50%)`,
              }}
            />
          ))}
        </div>
      </motion.div>
      <button
        onClick={spinWheel}
        className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-all focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        disabled={isSpinning || players.length === 0} // Disable if spinning or no players
      >
        {isSpinning ? 'Spinning...' : 'Spin the Wheel'}
      </button>
    </div>
  );
}