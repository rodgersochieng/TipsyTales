
import { useState } from 'react';
import { motion } from 'framer-motion';

const questions = [
  // **🥴 Nai Madness & Clubbing Edition**
  "Never have I ever lost a phone in a matatu or club.",
  "Never have I ever taken an Uber and prayed my M-Pesa balance would be enough.",
  "Never have I ever said ‘I’m five minutes away’ while still in bed.",
  "Never have I ever gone to the club on an empty wallet hoping for ‘sponsors’.",
  "Never have I ever been kicked out of a club for being too lit.",
  "Never have I ever seen someone’s man/woman in a club doing something shady.",
  "Never have I ever blacked out and woken up in a random location.",
  "Never have I ever pre-gamed too hard and missed the actual event.",
  "Never have I ever danced on a table at Quiver, Jiweke, or 1824.",
  "Never have I ever pulled a ‘my phone died’ excuse to avoid sending fare back.",

  // **😂 Nairobi Survival Tactics**
  "Never have I ever crossed the road like a madman in Nairobi CBD.",
  "Never have I ever pretended not to hear ‘niaje boss, kuna kakitu?’ from a cop.",
  "Never have I ever used 'hustler stories' to get a discount in a shop.",
  "Never have I ever hopped on a boda just to avoid traffic like a VIP.",
  "Never have I ever finessed my way into a club without paying entrance.",
  "Never have I ever fake-laughed at a boss's joke to avoid drama.",
  "Never have I ever tried to bribe a cop and it actually worked.",
  "Never have I ever survived a whole weekend in Nairobi with less than Ksh 500.",
  "Never have I ever faked a call to avoid a chapo mwitu vendor or beggar.",
  "Never have I ever seen a friend in CBD and pretended not to see them.",

  // **💀 Relationship & Situationship Chaos**
  "Never have I ever gone through my partner's phone when they weren’t looking.",
  "Never have I ever lied about my location to my partner.",
  "Never have I ever hooked up with someone just because they had a car.",
  "Never have I ever caught feelings for someone who was just a ‘plan’.",
  "Never have I ever entertained a toxic ex ‘for the memories’.",
  "Never have I ever used someone for their money.",
  "Never have I ever been caught cheating (or almost caught).",
  "Never have I ever stayed in a situationship longer than I should have.",
  "Never have I ever been a side piece and didn't know it.",
  "Never have I ever been ghosted or ghosted someone.",

  // **😈 Wild & Unhinged Questions**
  "Never have I ever done something crazy in a house party and regretted it.",
  "Never have I ever had a crush on my friend’s partner.",
  "Never have I ever texted my ex while drunk.",
  "Never have I ever been in a love triangle.",
  "Never have I ever pretended to be asleep to avoid paying the Uber fare.",
  "Never have I ever used my ‘cousin’ as a cover story for a sneaky link.",
  "Never have I ever been in a room where something illegal was happening.",
  "Never have I ever kissed two different people on the same night.",
  "Never have I ever regretted waking up next to someone.",
  "Never have I ever made out in a car in Nairobi traffic.",

  // **🔥 Hustle & Money Moves**
  "Never have I ever spent all my money immediately after getting paid.",
  "Never have I ever flexed on social media, but my real life was struggling.",
  "Never have I ever lied about my job to impress someone.",
  "Never have I ever taken a boda to work to beat Nairobi traffic.",
  "Never have I ever borrowed money and ‘forgotten’ to pay back.",
  "Never have I ever made someone believe I was richer than I actually am.",
  "Never have I ever ‘accidentally’ used someone else’s Netflix login for months.",
  "Never have I ever lied about being ‘on the way’ when I was still at home.",
  "Never have I ever seen my landlord calling and ignored it.",
  "Never have I ever convinced someone to send me money with a fake excuse.",

  // **😂 If You Admit These, You’re a Legend**
  "Never have I ever snuck food into a movie theatre.",
  "Never have I ever walked into an event pretending I was invited.",
  "Never have I ever lied to my boss about being sick just to sleep in.",
  "Never have I ever made a fake excuse to avoid a social event.",
  "Never have I ever seen someone fall in CBD and laughed instead of helping.",
  "Never have I ever taken an Uber to a close location just to flex.",
  "Never have I ever ditched a plan last minute because I was too lazy.",
  "Never have I ever had a stranger pay for my meal or drinks.",
  "Never have I ever played ‘rich kid’ in a club only to regret the bill later.",
  "Never have I ever successfully pulled off a ‘Nairobi disappearance’ (ignoring texts/calls for weeks).",
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
      <h2 className="text-2xl font-bold mb-4"> Never Have I Ever</h2>
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
