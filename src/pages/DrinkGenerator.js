
// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function DrinkGenerator() {
//   // List of drinks available in Kenya
//   const drinks = [
//     { name: 'Tusker Lager', emoji: '🍺', funnyLine: 'The OG. The father of all beers. If your dad drinks this, he has at least three stories that start with "Back in my day..."' },
//     { name: 'White Cap', emoji: '🍻', funnyLine: 'If you drink this, you either work in Karen, have a Land Cruiser with KDJ plates, or you were raised by an ex-British army dad.' },
//     { name: 'Pilsner', emoji: '🍺', funnyLine: 'You like your alcohol bitter, just like your ex left you. Real men drink this and start debates about "the old constitution vs. the new one."' },
//     { name: 'Balozi', emoji: '🍺', funnyLine: " You’re the hustler who just got paid and wants to act like they drink craft beer. You say “Wewe hujui hii ni malt!?” but deep down, you're suffering." },
//     { name: 'Summit Lager', emoji: '🍺', funnyLine: 'This is for people who live in Thika but tell people they live in Ruiru. Affordable, lakini haina pressure.' },
//     { name: 'Guinness (Foreign Extra Stout)', emoji: '🍺', funnyLine: 'If you drink this, you believe you’re the main character in a Nigerian movie. You also probably call people boss or chief unprovoked.' },
//     { name: 'Kenya Cane', emoji: '🥃', funnyLine: 'If your uncle drinks this, he has very strong opinions about the government. Also, KC lovers never whisper, they announce.' },
//     { name: 'Chrome Vodka', emoji: '🍸', funnyLine: 'The unofficial drink of every Nairobi party that ends with lost car keys and people sleeping on the couch. Also, someone will cry.' },
//     { name: 'Kibao Vodka', emoji: '🍸', funnyLine: 'The definition of budget but effective. If you drink this, your life is currently a learning experience.' },
//     { name: 'Legend Brandy', emoji: '🥃', funnyLine: 'You have either just been dumped or you are listening to Rhumba while questioning life. There is no in-between.' },
//     { name: 'Jameson', emoji: '🥃', funnyLine: 'If you buy Jameson in the club, congratulations! You have officially joined Nairobi’s middle-class struggle economy (high bills, no savings).' },
//     { name: 'Johnnie Walker (Black Label & Above)', emoji: '🥃', funnyLine: 'You don’t just drink whisky, you sip it. Your sentences start with “You know, in Dubai…”' },
//     { name: 'Muratina', emoji: '🍯', funnyLine: 'If you drink this, you are either a true shujaa or your liver has a PhD in pain. Also, your supplier knows you personally.' },
//     { name: 'Busaa', emoji: '🍺', funnyLine: 'You believe in supporting local businesses and you fear no man. Your squad is called “team ya rika”.' },
//     { name: 'Four Cousins Wine', emoji: '🍷', funnyLine: 'If you drink this, you probably text your ex after two glasses and believe you have an elite palate.' },
//     { name: 'Robertson Sweet Red', emoji: '🍷', funnyLine: 'Your Instagram stories have aesthetic candles and "soft life" captions. You pretend you’re classy, but you finish the whole bottle.' },
//     { name: 'Nederburg', emoji: '🍷', funnyLine: 'If you drink this, you either have a wine rack at home or you Googled "fancy wines to impress someone."' },
//     { name: 'Viceroy', emoji: '🥃', funnyLine: 'You are either an uncle who owns a plot in Kitengela or someone who listens to Rhumba religiously.' },
//     { name: 'Richot Brandy', emoji: '🥃', funnyLine: 'This is for people who wear trench coats even when it’s hot. The drink of deep thoughts and questionable decisions.' },
//     { name: 'William Lawson’s', emoji: '🥃', funnyLine: 'If you drink this, you probably have an ego as strong as the whisky. You call it "premium" but buy it on offer.' },
//     { name: 'Beefeater Gin', emoji: '🍸', funnyLine: 'Your go-to drink if you believe you’re the main character in every situation. You claim you love gin, but deep down, you just like the aesthetics.' },
//     { name: 'Tanqueray Gin', emoji: '🍸', funnyLine: 'If you drink this, you probably order sushi when you go out and pretend you understand wine pairings.' },
//     { name: 'Amarula', emoji: '🍷', funnyLine: 'You are either a first-time drinker or a sweet tooth who refuses to drink "real" alcohol. You drink it and call it dessert.' },
//     { name: 'Baileys Irish Cream', emoji: '🍷', funnyLine: 'You don’t really drink, you just like things that taste like melted chocolate. Your idea of wild is adding extra sugar to your tea.' },
//     { name: 'Jack Daniel’s', emoji: '🥃', funnyLine: 'You either own a leather jacket or desperately want to. You also think adding Coke makes it sophisticated.' },
//     { name: 'Martell', emoji: '🥃', funnyLine: 'You drink this to prove a point. That point is usually "I have money" even when you don’t.' },
//     { name: 'Hennessy', emoji: '🥃', funnyLine: 'If you drink Henny, you believe you’re a rapper. You’ve also posted “No face, no case” at least once.' },
//     { name: 'Moët & Chandon', emoji: '🍾', funnyLine: 'If you pop Moët, you either made it in life or you just got paid and will be broke by Monday.' },
//     { name: 'Veuve Clicquot', emoji: '🍾', funnyLine: 'If this is your drink, your Instagram has at least one yacht picture. Also, you call champagne “sham-pain.”' }
// ];

//   // State to store the randomly selected drink
//   const [randomDrink, setRandomDrink] = useState(null);
//   const [isGenerating, setIsGenerating] = useState(false);

//   // Function to generate a random drink
//   const generateDrink = () => {
//     setIsGenerating(true); // Start generating state
//     setTimeout(() => {
//       const randomIndex = Math.floor(Math.random() * drinks.length);
//       const randomAmount = Math.floor(Math.random() * 5) + 1; // Random amount between 1 and 5
//       setRandomDrink({ ...drinks[randomIndex], amount: randomAmount });
//       setIsGenerating(false); // End generating state
//     }, 2000); // Simulate a short delay for the transition
//   };

//   return (
//     <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-r from-yellow-100 via-red-100 to-pink-100 text-gray-900 p-6 pt-20">
//       {/* Title */}
//       <motion.h1
//         className="text-3xl md:text-5xl font-extrabold mb-8 text-red-600 drop-shadow-lg text-center"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         🍹 Not Sure What to Take?
//       </motion.h1>

//       {/* Drink Display */}
//       <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-md">
//         <AnimatePresence mode="wait">
//           {isGenerating ? (
//             // Loading state
//             <motion.div
//               key="loading"
//               className="text-6xl mb-4"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.8 }}
//               transition={{ duration: 0.5 }}
//             >
//               🌀
//             </motion.div>
//           ) : randomDrink ? (
//             // Drink display
//             <motion.div
//               key="drink"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="text-6xl mb-4">{randomDrink.emoji}</div>
//               <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
//                 How about {randomDrink.name}?
//               </h2>
//               <p className="text-gray-600 mb-4">
//                 Take <span className="font-bold text-red-500">{randomDrink.amount}</span> glasses. 🍻
//               </p>
//               <p className="text-gray-600 italic mb-6">
//                 "{randomDrink.funnyLine}"
//               </p>
//             </motion.div>
//           ) : (
//             // Initial state
//             <motion.div
//               key="initial"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="text-6xl mb-4">🍹</div>
//               <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
//                 Try a Random Drink ?
//               </h2>
//               <p className="text-gray-600 mb-6">
//                 Click the button below to get a random drink.
//               </p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//         <button
//           onClick={generateDrink}
//           className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-all"
//           disabled={isGenerating}
//         >
//           {randomDrink ? 'Generate Another Drink' : 'Generate Drink'}
//         </button>
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DrinkGenerator() {
  // List of drinks available in Kenya
  const drinks = [
    { name: 'Tusker Lager', emoji: '🍺', funnyLine: 'The OG. The father of all beers. If your dad drinks this, he has at least three stories that start with "Back in my day..."' },
    { name: 'White Cap', emoji: '🍻', funnyLine: 'If you drink this, you either work in Karen, have a Land Cruiser with KDJ plates, or you were raised by an ex-British army dad.' },
    { name: 'Pilsner', emoji: '🍺', funnyLine: 'You like your alcohol bitter, just like your ex left you. Real men drink this and start debates about "the old constitution vs. the new one."' },
    { name: 'Balozi', emoji: '🍺', funnyLine: " You’re the hustler who just got paid and wants to act like they drink craft beer. You say “Wewe hujui hii ni malt!?” but deep down, you're suffering." },
    { name: 'Summit Lager', emoji: '🍺', funnyLine: 'This is for people who live in Thika but tell people they live in Ruiru. Affordable, lakini haina pressure.' },
    { name: 'Guinness (Foreign Extra Stout)', emoji: '🍺', funnyLine: 'If you drink this, you believe you’re the main character in a Nigerian movie. You also probably call people boss or chief unprovoked.' },
    { name: 'Kenya Cane', emoji: '🥃', funnyLine: 'If your uncle drinks this, he has very strong opinions about the government. Also, KC lovers never whisper, they announce.' },
    { name: 'Chrome Vodka', emoji: '🍸', funnyLine: 'The unofficial drink of every Nairobi party that ends with lost car keys and people sleeping on the couch. Also, someone will cry.' },
    { name: 'Kibao Vodka', emoji: '🍸', funnyLine: 'The definition of budget but effective. If you drink this, your life is currently a learning experience.' },
    { name: 'Legend Brandy', emoji: '🥃', funnyLine: 'You have either just been dumped or you are listening to Rhumba while questioning life. There is no in-between.' },
    { name: 'Jameson', emoji: '🥃', funnyLine: 'If you buy Jameson in the club, congratulations! You have officially joined Nairobi’s middle-class struggle economy (high bills, no savings).' },
    { name: 'Johnnie Walker (Black Label & Above)', emoji: '🥃', funnyLine: 'You don’t just drink whisky, you sip it. Your sentences start with “You know, in Dubai…”' },
    { name: 'Muratina', emoji: '🍯', funnyLine: 'If you drink this, you are either a true shujaa or your liver has a PhD in pain. Also, your supplier knows you personally.' },
    { name: 'Busaa', emoji: '🍺', funnyLine: 'You believe in supporting local businesses and you fear no man. Your squad is called “team ya rika”.' },
    { name: 'Four Cousins Wine', emoji: '🍷', funnyLine: 'If you drink this, you probably text your ex after two glasses and believe you have an elite palate.' },
    { name: 'Robertson Sweet Red', emoji: '🍷', funnyLine: 'Your Instagram stories have aesthetic candles and "soft life" captions. You pretend you’re classy, but you finish the whole bottle.' },
    { name: 'Nederburg', emoji: '🍷', funnyLine: 'If you drink this, you either have a wine rack at home or you Googled "fancy wines to impress someone."' },
    { name: 'Viceroy', emoji: '🥃', funnyLine: 'You are either an uncle who owns a plot in Kitengela or someone who listens to Rhumba religiously.' },
    { name: 'Richot Brandy', emoji: '🥃', funnyLine: 'This is for people who wear trench coats even when it’s hot. The drink of deep thoughts and questionable decisions.' },
    { name: 'William Lawson’s', emoji: '🥃', funnyLine: 'If you drink this, you probably have an ego as strong as the whisky. You call it "premium" but buy it on offer.' },
    { name: 'Beefeater Gin', emoji: '🍸', funnyLine: 'Your go-to drink if you believe you’re the main character in every situation. You claim you love gin, but deep down, you just like the aesthetics.' },
    { name: 'Tanqueray Gin', emoji: '🍸', funnyLine: 'If you drink this, you probably order sushi when you go out and pretend you understand wine pairings.' },
    { name: 'Amarula', emoji: '🍷', funnyLine: 'You are either a first-time drinker or a sweet tooth who refuses to drink "real" alcohol. You drink it and call it dessert.' },
    { name: 'Baileys Irish Cream', emoji: '🍷', funnyLine: 'You don’t really drink, you just like things that taste like melted chocolate. Your idea of wild is adding extra sugar to your tea.' },
    { name: 'Jack Daniel’s', emoji: '🥃', funnyLine: 'You either own a leather jacket or desperately want to. You also think adding Coke makes it sophisticated.' },
    { name: 'Martell', emoji: '🥃', funnyLine: 'You drink this to prove a point. That point is usually "I have money" even when you don’t.' },
    { name: 'Hennessy', emoji: '🥃', funnyLine: 'If you drink Henny, you believe you’re a rapper. You’ve also posted “No face, no case” at least once.' },
    { name: 'Moët & Chandon', emoji: '🍾', funnyLine: 'If you pop Moët, you either made it in life or you just got paid and will be broke by Monday.' },
    { name: 'Veuve Clicquot', emoji: '🍾', funnyLine: 'If this is your drink, your Instagram has at least one yacht picture. Also, you call champagne “sham-pain.”' }
  ];

  // State to store the randomly selected drink
  const [randomDrink, setRandomDrink] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Function to generate a random drink
  const generateDrink = () => {
    setIsGenerating(true); // Start generating state
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * drinks.length);
      const randomAmount = Math.floor(Math.random() * 5) + 1; // Random amount between 1 and 5
      setRandomDrink({ ...drinks[randomIndex], amount: randomAmount });
      setIsGenerating(false); // End generating state
    }, 2000); // Simulate a short delay for the transition
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white text-gray-900 p-6 pt-20">
      {/* Title */}
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold mb-8 text-red-600 drop-shadow-lg text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🍹 Not Sure What to Take?
      </motion.h1>

      {/* Drink Display */}
      <div className="bg-red-100 p-8 rounded-lg shadow-lg text-center w-full max-w-md">
        <AnimatePresence mode="wait">
          {isGenerating ? (
            // Loading state
            <motion.div
              key="loading"
              className="text-6xl mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              🌀
            </motion.div>
          ) : randomDrink ? (
            // Drink display
            <motion.div
              key="drink"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-4">{randomDrink.emoji}</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                How about {randomDrink.name}?
              </h2>
              <p className="text-gray-600 mb-4">
                Take <span className="font-bold text-red-500">{randomDrink.amount}</span> glasses. 🍻
              </p>
              <p className="text-gray-600 italic mb-6">
                "{randomDrink.funnyLine}"
              </p>
            </motion.div>
          ) : (
            // Initial state
            <motion.div
              key="initial"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-4">🍹</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                Try a Random Drink ?
              </h2>
              <p className="text-gray-600 mb-6">
                Click the button below to get a random drink.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={generateDrink}
          className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-all"
          disabled={isGenerating}
        >
          {randomDrink ? 'Generate Another Drink' : 'Generate Drink'}
        </button>
      </div>
    </div>
  );
}