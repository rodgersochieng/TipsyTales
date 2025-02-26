

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
//     <div className="flex flex-col items-center space-y-4">
//       <motion.div
//         className="w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl"
//         animate={controls}
//       >
//         Spin Me!
//       </motion.div>
//       <button
//         onClick={spinWheel}
//         className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all"
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
    if (isSpinning) return;
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
    <div className="flex flex-col items-center space-y-4">
      <motion.div
        className="w-48 h-48 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl"
        animate={controls}
      >
        Spin Me!
      </motion.div>
      <button
        onClick={spinWheel}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all"
        disabled={isSpinning}
      >
        {isSpinning ? 'Spinning...' : 'Spin the Wheel'}
      </button>
    </div>
  );
}