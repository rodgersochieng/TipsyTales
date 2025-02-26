
import { useState } from 'react';
import { motion } from 'framer-motion';

// const challenges = [
//   "Take 2 sips.",
//   "Assign 3 sips to another player.",
//   "Finish your drink.",
//   "Tell a joke. If no one laughs, take 3 sips.",
//   "Do a dance move.",
//   "Swap seats with another player.",
//   "Sing a song for 30 seconds.",
//   "Imitate another player for the next round.",
// ];

const challenges = [
  // 🔥 Wild & Crazy Challenges
  "Take a shot while standing on one leg.",
  "Let someone send a text to your ex.",
  "Run outside and shout, 'I love [a random player]!'",
  "Call your crush and confess your feelings.",
  "Do your best impression of a chicken for 30 seconds.",
  "Balance a drink on your head for a full round.",
  "Swap one clothing item with the player to your left.",
  "Speak in an accent for the next three rounds.",
  "Stand up and give a wedding toast to a random player.",
  "Take a sip while keeping both hands behind your back.",
  "Dance for 30 seconds like no one is watching.",
  "Eat a spoonful of something chosen by the group.",
  "Let someone write something embarrassing on your forehead with a marker.",
  "Take a shot without using your hands.",
  "Post an embarrassing picture on your story until the game ends.",
  "Let someone tweet something embarrassing from your account.",
  "Speak only in questions for the next round.",
  "Do 10 push-ups and take a sip after each one.",
  "Pretend you're in a dramatic soap opera scene for 30 seconds.",
  "Act out your drunk alter ego for one full round.",

  // 💔 Friendship-Testing Challenges
  "Reveal the most annoying habit of the person on your right.",
  "Give your phone to a friend and let them scroll your messages for 10 seconds.",
  "Pick two players and make them switch drinks for the rest of the game.",
  "Play rock-paper-scissors with a friend—loser must take a shot and do a dare.",
  "Roast your best friend in 15 seconds.",
  "Tell the group who you think is the weakest drinker here.",
  "Choose someone who can make you laugh in 10 seconds or they drink.",
  "Trade seats with the person you trust the least in the group.",
  "Say something brutally honest to the person in front of you.",
  "Reveal one secret you’ve never told anyone in the group.",
  "Let the group decide a dare for you.",
  "Reveal the last thing you searched on Google.",
  "Let another player hold your phone for the next 5 minutes.",
  "Choose a player to remove one social media app from your phone.",
  "Say who you think is the best liar in the group.",
  "Let someone send a voice note from your phone saying, 'I need to tell you something important…'",
  "Let the group decide who you'd be stranded on a desert island with.",
  "Name one person in the group you’d unfollow if you had to.",
  "Take a sip for every lie you’ve ever told a friend in this room.",
  "Reveal something you’ve done that you never told your closest friend about.",

  // 😊 Nice & Fun Challenges
  "Give a genuine compliment to everyone playing.",
  "Take a sip for every year you’ve known your oldest friend in the group.",
  "Pick someone and tell them why you’re grateful to have them as a friend.",
  "Do a synchronized sip with a person of your choice.",
  "Hug the person to your right and say one thing you love about them.",
  "Everyone cheers and takes a sip together.",
  "Say something nice about the person you roasted in the last round.",
  "Take a drink for every country you’ve visited.",
  "Name one thing you admire about the person sitting across from you.",
  "Tell the group one childhood memory that makes you happy.",
  "If you could take one person here on an all-expenses-paid trip, who would it be?",
  "Compliment someone’s outfit in the funniest way possible.",
  "Say something you’ve always wanted to tell someone in the group.",
  "Pick a player and sing them a short, made-up song about them.",
  "If you had to be trapped in a room with one person here for 24 hours, who would it be?",
  "Share one of your happiest drunken memories.",
  "Reveal the first impression you had of everyone in the group.",
  "Tell the group your go-to karaoke song and why.",
  "Name the friendliest person in the group and say why.",
  "Say one thing that always makes you happy no matter what.",

  // 🔥 Spicy & Sexy Challenges
  "Whisper something dirty to the player on your left.",
  "Kiss the back of someone's hand like royalty.",
  "Choose a player to give a 10-second shoulder massage.",
  "Tell the group your favorite body part on the opposite gender.",
  "Let someone pick a random contact from your phone and text them 'Hey, I miss you 😘.'",
  "Hold hands with the person on your right for the next round.",
  "Choose a player to switch shirts with for two rounds.",
  "Take a sip for every person in the room you've ever found attractive.",
  "Pick a player and describe their type in relationships.",
  "Let another player set your next Tinder/DM pickup line.",
  "Reveal who you’d hook up with if you had to choose from the group.",
  "Pick a person to stare into their eyes for 10 seconds without laughing.",
  "If you had to kiss one person here, who would it be?",
  "Share the most romantic thing someone has ever done for you.",
  "Take a drink for every time you've caught feelings for someone too fast.",
  "Let someone in the group give you a new 'sexy' nickname.",
  "Take a sip for every bad date you've ever been on.",
  "Describe your dream partner in five words.",
  "Tell the group your most embarrassing flirty moment.",
  "Say the most attractive trait of the person sitting two seats to your left."
];


const loadingAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const blockAnimation = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function DrunkJenga() {
  const [tower, setTower] = useState([...challenges]);
  const [currentChallenge, setCurrentChallenge] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const pullBlock = () => {
    if (tower.length === 0) {
      setGameOver(true);
      setCurrentChallenge("The tower collapsed! Game over.");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * tower.length);
      const challenge = tower[randomIndex];
      setTower(tower.filter((_, i) => i !== randomIndex));
      setCurrentChallenge(challenge);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center text-center relative">
      <h2 className="text-2xl font-bold mb-4">Drunk Jenga</h2>
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
          variants={blockAnimation}
          transition={{ duration: 1 }}
        >
          {isLoading ? "Loading..." : currentChallenge || "Click Pull to Start"}
        </motion.p>
        <button
          className="bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-800 transition-all"
          onClick={pullBlock}
          disabled={isLoading || gameOver}
        >
          {gameOver ? 'Game Over' : 'Pull a Block'}
        </button>
      </motion.div>
      <motion.div
        className="absolute top-0 left-0 right-0 bg-yellow-300 h-1"
        initial={{ width: 0 }}
        animate={{ width: isLoading ? "100%" : "0%" }}
        transition={{ duration: 3, ease: "linear" }}
      />
      {gameOver && (
        <motion.div
          className="absolute inset-0 bg-red-500 flex justify-center items-center text-white text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Game Over!
        </motion.div>
            )}
          </div>
        );
      }