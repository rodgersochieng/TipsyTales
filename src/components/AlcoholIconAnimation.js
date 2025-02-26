
// import React from 'react';
// import { motion } from 'framer-motion';

// export default function UnfoldingBottleAnimation() {
//   return (
//     <div className="flex flex-col items-center mb-8">
//       <svg 
//         xmlns="http://www.w3.org/2000/svg" 
//         viewBox="0 0 64 64" 
//         className="h-20 w-20 mb-4"
//       >
//         {/* Bottle Body */}
//         <rect x="20" y="10" width="24" height="40" rx="4" fill="#a0c4ff" stroke="#000" strokeWidth="2" />
//         {/* Bottle Cap as a separate motion element */}
//         <motion.rect
//           x="20"
//           y="4"
//           width="24"
//           height="8"
//           rx="2"
//           fill="#ffadad"
//           stroke="#000"
//           strokeWidth="2"
//           initial={{ rotate: 0, originX: "50%", originY: "50%" }}
//           animate={{ rotate: -45 }}
//           transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
//         />
//       </svg>
//       <motion.h1
//         className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Cheers & Challenges
//       </motion.h1>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AnimatedEmojiSwitcher() {
  const emojis = ["😂", "🥴", "🍻", "🥂"]; // Laughing, Drunk, Clinking Beers, Cheers, Hugging Friends
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle through emojis every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % emojis.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [emojis.length]);

  return (
    <div className="relative w-full flex justify-center my-6">
      <motion.div
        className="text-6xl"
        animate={{ x: ["-50%", "50%", "-50%"] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span role="img" aria-label="animated emoji">{emojis[currentIndex]}</span>
      </motion.div>
    </div>
  );
}
