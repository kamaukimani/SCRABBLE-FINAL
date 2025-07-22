
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Scrabble Game</h1>
      <Link to="/game">
        <button>Start Game</button>
      </Link>
    </div>
  );
}

export default Home;