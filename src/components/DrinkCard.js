import { motion } from 'framer-motion';

export default function DrinkCard({ drink }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-2xl rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{drink.name}</h2>
        <p className="text-gray-600 mb-4">{drink.description}</p>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-700">Ingredients:</h3>
          <ul className="list-disc list-inside text-gray-600">
            {drink.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-center">
        <button className="text-white font-semibold hover:underline">
          Save Recipe
        </button>
      </div>
    </motion.div>
  );
}