import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Home() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Tipsy Tales!</h1>
      <div className="space-y-4">
        <Link to="/drink-generator">
          <Button>What Am I Drinking Today?</Button>
        </Link>
        <Link to="/who-pays">
          <Button>Who Pays?</Button>
        </Link>
      </div>
    </div>
  );
}