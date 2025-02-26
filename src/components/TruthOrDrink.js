
import { useState } from 'react';
import { motion } from 'framer-motion';

const questions = [
  // **🥴 Embarrassing Nairobi Moments**
  "What’s the most embarrassing thing that’s ever happened to you in a matatu?",
  "Have you ever pretended not to see a friend in CBD to avoid greeting them?",
  "What's the most Nairobi thing you've ever done to avoid paying fare?",
  "Have you ever been caught in a situation where you had to ‘piga luku’ but your outfit was struggling?",
  "What’s the most ridiculous lie you’ve ever told to get out of trouble?",
  "Have you ever faked a call to avoid a chapo mwitu vendor?",
  "Ever been rejected in a club? What happened?",
  "What’s the worst Nairobi club you've ever ended up in and why?",
  "Have you ever been broke and acted like you had money in front of friends?",
  "Have you ever pretended to be boujee when deep down, your bank account was screaming?",

  // **💀 Unhinged Nairobi Madness**
  "What's the most illegal thing you’ve done in Nairobi?",
  "Ever ghosted someone after linking up in Westlands? What was the excuse?",
  "What's the wildest thing you've done for money?",
  "Have you ever pulled a 'my phone died' excuse to avoid sending fare back?",
  "What’s the most embarrassing thing you've searched on Google?",
  "Have you ever blacked out and woken up somewhere unexpected?",
  "Ever been arrested? Spill the details.",
  "What’s the wildest thing you’ve ever done under peer pressure?",
  "Have you ever stolen something? Be honest.",
  "What’s the biggest scam you’ve ever fallen for in Nairobi?",

  // **🍾 Relationships & Situationships**
  "Have you ever been in a ‘soft life’ situation? Who was funding it?",
  "Who in this room would you never date, and why?",
  "What’s the most Nairobi way someone has hit on you?",
  "Have you ever had a side thing while in a relationship?",
  "What’s the worst excuse you've used to break up with someone?",
  "Ever faked feelings to get something out of someone? What was it?",
  "Have you ever hooked up with someone just because they had a car?",
  "What’s the most toxic thing you’ve ever done in a relationship?",
  "Have you ever caught feelings for your ‘bestie’? Did you confess?",
  "If you had to date someone in this room, who would it be?",

  // **😈 Spicy & Out-of-Pocket Questions**
  "What’s the craziest DM you’ve ever sent or received?",
  "Have you ever been caught in the act? What happened?",
  "What’s the wildest thing you’ve done at a house party?",
  "What’s the worst text you’ve ever sent while drunk?",
  "Ever been in a love triangle? Who won?",
  "Have you ever hooked up with an ex of a friend?",
  "Who’s the most unexpected person you’ve kissed?",
  "What’s the most desperate thing you’ve done to impress someone?",
  "Have you ever had a one-night stand and regretted it?",
  "Have you ever hooked up with someone and instantly regretted it?",

  // **😂 Nai Hustle & Survival Questions**
  "What’s the pettiest reason you’ve ever stopped talking to someone?",
  "Have you ever lied about where you live to seem cooler?",
  "Ever done a ridiculous side hustle just to make ends meet?",
  "What’s the worst matatu experience you’ve ever had?",
  "Ever been kicked out of a club? What did you do?",
  "What’s the biggest favor you’ve ever had to beg for?",
  "Have you ever been catfished by a Nairobi Instagram baddie?",
  "Have you ever flexed on the ‘gram, but your real life was struggling?",
  "What’s the craziest thing you’ve ever done after getting paid?",
  "Have you ever faked being busy to avoid meeting someone?",

  // **🔥 If You Answer These, You’re Bold AF**
  "What’s the biggest Nairobi scandal you’ve been involved in?",
  "Ever bribed your way out of a problem? How much did it cost?",
  "Who’s the worst Nairobi influencer you’ve ever interacted with?",
  "Have you ever been kicked out of an Airbnb? What happened?",
  "What’s something you’ve done that could get you cancelled?",
  "Have you ever used someone for money or connections?",
  "Have you ever been a side piece and didn’t know?",
  "What’s the most embarrassing thing you’ve done when you were broke?",
  "What’s the worst financial decision you’ve ever made?",
  "If you had to expose one Nairobi influencer for faking their lifestyle, who would it be?",  
];



const loadingAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const questionAnimation = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function TruthOrDrink() {
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  };

  const handleNextQuestion = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentQuestion(getRandomQuestion());
      setIsLoading(false);
    }, 2000); // Simulate a delay for suspense
  };

  return (
    <div className="flex flex-col items-center text-center relative p-6">
      <h2 className="text-2xl font-bold mb-4">Truth or Drink 🍻</h2>
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6"
        initial="hidden"
        animate="visible"
        variants={loadingAnimation}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          className="text-xl mb-4"
          initial="hidden"
          animate={isLoading ? "hidden" : "visible"}
          variants={questionAnimation}
          transition={{ duration: 1 }}
        >
          {isLoading ? "Loading..." : currentQuestion || "Click Next to Start"}
        </motion.p>
        <button
          className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-all"
          onClick={handleNextQuestion}
          disabled={isLoading}
        >
          {isLoading ? "Choosing..." : "Next Question"}
        </button>
      </motion.div>
      
      {/* Loading Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 bg-yellow-300 h-1"
        initial={{ width: 0 }}
        animate={{ width: isLoading ? "100%" : "0%" }}
        transition={{ duration: 2, ease: "linear" }}
      />
    </div>
  );
}
