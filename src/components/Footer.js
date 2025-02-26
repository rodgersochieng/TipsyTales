
// import { motion } from 'framer-motion';
// import { FaTiktok, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// export default function Footer() {
//   return (
//     <motion.footer
//       className="bg-gradient-to-r from-red-800 to-red-900 p-4"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <div className="container mx-auto text-center text-white">
//         {/* Logo or Site Name */}
//         <motion.h2
//           className="text-2xl font-playfair italic font-extrabold drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           Tipsy Tales
//         </motion.h2>

//         {/* Social Media Links */}
//         <motion.div
//           className="flex justify-center space-x-4 my-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           {/* Facebook */}
//           <motion.a
//             href="#"
//             aria-label="Facebook"
//             className="hover:text-red-300"
//             whileHover={{ scale: 1.2 }}
//           >
//             <FaFacebookF className="w-6 h-6" />
//           </motion.a>

//           {/* Instagram */}
//           <motion.a
//             href="#"
//             aria-label="Instagram"
//             className="hover:text-red-300"
//             whileHover={{ scale: 1.2 }}
//           >
//             <FaInstagram className="w-6 h-6" />
//           </motion.a>

//           {/* TikTok */}
//           <motion.a
//             href="#"
//             aria-label="TikTok"
//             className="hover:text-red-300"
//             whileHover={{ scale: 1.2 }}
//           >
//             <FaTiktok className="w-6 h-6" />
//           </motion.a>

//           {/* LinkedIn */}
//           <motion.a
//             href="#"
//             aria-label="LinkedIn"
//             className="hover:text-red-300"
//             whileHover={{ scale: 1.2 }}
//           >
//             <FaLinkedinIn className="w-6 h-6" />
//           </motion.a>
//         </motion.div>

//         {/* Copyright */}
//         <motion.p
//           className="text-xs"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//         >
//           &copy; {new Date().getFullYear()} Tipsy Tales. All rights reserved.
//         </motion.p>
//       </div>
//     </motion.footer>
//   );
// }


import { motion } from 'framer-motion';
import { FaTiktok, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <motion.footer
      className="bg-gradient-to-r from-red-800 via-red-700 to-red-900 p-4" // Added via-red-700 for gradient play
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto text-center text-white">
        {/* Logo or Site Name */}
        <motion.h2
          className="text-2xl font-playfair italic font-extrabold drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Tipsy Tales
        </motion.h2>

        {/* Social Media Links */}
        <motion.div
          className="flex justify-center space-x-4 my-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Facebook */}
          <motion.a
            href="www.linkedin.com/in/ochieng-o-rodgers"
            aria-label="Facebook"
            className="hover:text-red-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaFacebookF className="w-6 h-6" />
          </motion.a>

          {/* Instagram */}
          <motion.a
            href="www.linkedin.com/in/ochieng-o-rodgers"
            aria-label="Instagram"
            className="hover:text-red-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaInstagram className="w-6 h-6" />
          </motion.a>

          {/* TikTok */}
          <motion.a
            href="www.linkedin.com/in/ochieng-o-rodgers"
            aria-label="TikTok"
            className="hover:text-red-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaTiktok className="w-6 h-6" />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="www.linkedin.com/in/ochieng-o-rodgers"
            aria-label="LinkedIn"
            className="hover:text-red-300"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedinIn className="w-6 h-6" />
          </motion.a>
        </motion.div>

        {/* Copyright */}
        <motion.p
          className="text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          &copy; {new Date().getFullYear()} Tipsy Tales. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
}
