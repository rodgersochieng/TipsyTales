import { useState } from 'react';
import DrinkCard from '../components/DrinkCard';
import Button from '../components/Button';

const drinks = [
  {
    name: "Mojito",
    description: "A refreshing minty cocktail.",
    ingredients: ["Rum", "Mint", "Lime", "Sugar", "Soda Water"],
  },
  {
    name: "Margarita",
    description: "A classic tequila-based cocktail.",
    ingredients: ["Tequila", "Triple Sec", "Lime Juice", "Salt"],
  },
];

export default function DrinkGenerator() {
  const [drink, setDrink] = useState(null);

  const handleGenerateDrink = () => {
    const randomDrink = drinks[Math.floor(Math.random() * drinks.length)];
    setDrink(randomDrink);
  };

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-8">What Am I Drinking Today?</h1>
      <Button onClick={handleGenerateDrink}>Generate Drink</Button>
      {drink && (
        <div className="mt-8 max-w-md mx-auto">
          <DrinkCard drink={drink} />
        </div>
      )}
    </div>
  );
}