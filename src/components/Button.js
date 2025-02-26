// export default function Button({ children, onClick }) {
//     return (
//       <button
//         className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all"
//         onClick={onClick}
//       >
//         {children}
//       </button>
//     );
//   }

import { motion } from 'framer-motion';

export default function Button({ children, onClick }) {
  return (
    <motion.button
      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold text-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
      onClick={onClick}
      whileHover={{ scale: 1.05 }} // Framer Motion hover animation
      whileTap={{ scale: 0.95 }}  // Framer Motion tap animation
    >
      {children}
    </motion.button>
  );
}