{/* 
import React, { useState, useEffect } from 'react';
import ScrabbleBoard from '../components/ScrabbleBoard';
import TileRack from '../components/TileRack';
import WordValidator from '../components/WordValidator';
import generateBag from '../components/TileBag';
const initialPlayers = [
  { name: 'Player 1', score: 0, rack: [] },
  { name: 'Player 2', score: 0, rack: [] }
];

const generateEmptyBoard = () => {
  return Array(15).fill(null).map(() => Array(15).fill(null));
};

function Game() {
  const [players, setPlayers] = useState(initialPlayers);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [board, setBoard] = useState(generateEmptyBoard());
  const [tileBag, setTileBag] = useState(generateBag());

  const [wordScore, setWordScore] = useState(0);

  const currentPlayer = players[currentPlayerIndex];

  // 🔁 Give players 7 tiles on game start
  useEffect(() => {
    setPlayers(prevPlayers =>
      prevPlayers.map(player => ({
        ...player,
        rack: tileBag.splice(0, 7),
      }))
    );
    setTileBag([...tileBag]);
  }, []);

  // 🧠 Log whenever score updates
  useEffect(() => {
    console.log(`${currentPlayer.name}'s new score: ${currentPlayer.score}`);
  }, [players]);

  // 📛 Update browser tab title with turn
  useEffect(() => {
    document.title = `${currentPlayer.name}'s Turn | Scrabble`;
  }, [currentPlayerIndex]);

  return (
    <div>
      <h2>{currentPlayer.name}'s Turn</h2>
      <p>Score: {currentPlayer.score}</p>
      <ScrabbleBoard board={board} setBoard={setBoard} />
      <TileRack player={currentPlayer} />
      <WordValidator
        board={board}
        currentPlayer={currentPlayer}
        setPlayers={setPlayers}
        currentPlayerIndex={currentPlayerIndex}
        setCurrentPlayerIndex={setCurrentPlayerIndex}
        setWordScore={setWordScore}
      >
        {({ playWord }) => (
          <button onClick={playWord}>Submit Word</button>
        )}
      </WordValidator>
    </div>
  );
}

export default Game;

*/}

{/* 
import React, { useState, useEffect } from 'react';
import ScrabbleBoard from '../components/ScrabbleBoard';
import TileRack from '../components/TileRack';
import WordValidator from '../components/WordValidator';
import generateBag from '../components/TileBag';
import '../components/scrabble-style.css'; // Ensure styles are applied

// 🧩 BONUS TEMPLATE and board generator
const BONUS_TEMPLATE = [
  ["TW", "", "", "DL", "", "", "", "TW", "", "", "", "DL", "", "", "TW"],
  ["", "DW", "", "", "", "TL", "", "", "", "TL", "", "", "", "DW", ""],
  ["", "", "DW", "", "", "", "DL", "", "DL", "", "", "", "DW", "", ""],
  ["DL", "", "", "DW", "", "", "", "DL", "", "", "", "DW", "", "", "DL"],
  ["", "", "", "", "DW", "", "", "", "", "", "DW", "", "", "", ""],
  ["", "TL", "", "", "", "TL", "", "", "", "TL", "", "", "", "TL", ""],
  ["", "", "DL", "", "", "", "DL", "", "DL", "", "", "", "DL", "", ""],
  ["TW", "", "", "DL", "", "", "", "DW", "", "", "", "DL", "", "", "TW"],
  ["", "", "DL", "", "", "", "DL", "", "DL", "", "", "", "DL", "", ""],
  ["", "TL", "", "", "", "TL", "", "", "", "TL", "", "", "", "TL", ""],
  ["", "", "", "", "DW", "", "", "", "", "", "DW", "", "", "", ""],
  ["DL", "", "", "DW", "", "", "", "DL", "", "", "", "DW", "", "", "DL"],
  ["", "", "DW", "", "", "", "DL", "", "DL", "", "", "", "DW", "", ""],
  ["", "DW", "", "", "", "TL", "", "", "", "TL", "", "", "", "DW", ""],
  ["TW", "", "", "DL", "", "", "", "TW", "", "", "", "DL", "", "", "TW"]
];

const generateEmptyBoard = () => {
  return BONUS_TEMPLATE.map(row =>
    row.map(bonus => ({
      tile: null,
      bonus: bonus || null
    }))
  );
};

// 🎮 Players setup
const initialPlayers = [
  { name: 'Player 1', score: 0, rack: [] },
  { name: 'Player 2', score: 0, rack: [] }
];

function Game() {
  const [players, setPlayers] = useState(initialPlayers);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [board, setBoard] = useState(generateEmptyBoard());
  const [tileBag, setTileBag] = useState(generateBag());
  const [wordScore, setWordScore] = useState(0);

  const currentPlayer = players[currentPlayerIndex];

  // 🎲 Give players 7 tiles at game start
  useEffect(() => {
    setPlayers(prevPlayers =>
      prevPlayers.map(player => ({
        ...player,
        rack: tileBag.splice(0, 7),
      }))
    );
    setTileBag([...tileBag]);
  }, []);

  // 🧠 Log score updates
  useEffect(() => {
    console.log(`${currentPlayer.name}'s new score: ${currentPlayer.score}`);
  }, [players]);

  // 🕹️ Show whose turn it is in browser tab
  useEffect(() => {
    document.title = `${currentPlayer.name}'s Turn | Scrabble`;
  }, [currentPlayerIndex]);

  return (
    <div className="game-container">
      <h2>{currentPlayer.name}'s Turn</h2>
      <p>Score: {currentPlayer.score}</p>
      <ScrabbleBoard board={board} setBoard={setBoard} />
      <TileRack player={currentPlayer} />
      <WordValidator
        board={board}
        currentPlayer={currentPlayer}
        setPlayers={setPlayers}
        currentPlayerIndex={currentPlayerIndex}
        setCurrentPlayerIndex={setCurrentPlayerIndex}
        setWordScore={setWordScore}
      >
        {({ playWord }) => (
          <button onClick={playWord} className="play-button">
            Submit Word
          </button>
        )}
      </WordValidator>
    </div>
  );
}

export default Game;
\*/}

{/* 
import React, { useState, useEffect } from 'react';
import ScrabbleBoard from '../components/ScrabbleBoard';
import TileRack from '../components/TileRack';
import WordValidator from '../components/WordValidator';
import generateBag from '../components/TileBag';
import '../components/scrabble-style.css';

// 🎯 BONUS TEMPLATE and generator
const BONUS_TEMPLATE = [
  ["TW", "", "", "DL", "", "", "", "TW", "", "", "", "DL", "", "", "TW"],
  ["", "DW", "", "", "", "TL", "", "", "", "TL", "", "", "", "DW", ""],
  ["", "", "DW", "", "", "", "DL", "", "DL", "", "", "", "DW", "", ""],
  ["DL", "", "", "DW", "", "", "", "DL", "", "", "", "DW", "", "", "DL"],
  ["", "", "", "", "DW", "", "", "", "", "", "DW", "", "", "", ""],
  ["", "TL", "", "", "", "TL", "", "", "", "TL", "", "", "", "TL", ""],
  ["", "", "DL", "", "", "", "DL", "", "DL", "", "", "", "DL", "", ""],
  ["TW", "", "", "DL", "", "", "", "DW", "", "", "", "DL", "", "", "TW"],
  ["", "", "DL", "", "", "", "DL", "", "DL", "", "", "", "DL", "", ""],
  ["", "TL", "", "", "", "TL", "", "", "", "TL", "", "", "", "TL", ""],
  ["", "", "", "", "DW", "", "", "", "", "", "DW", "", "", "", ""],
  ["DL", "", "", "DW", "", "", "", "DL", "", "", "", "DW", "", "", "DL"],
  ["", "", "DW", "", "", "", "DL", "", "DL", "", "", "", "DW", "", ""],
  ["", "DW", "", "", "", "TL", "", "", "", "TL", "", "", "", "DW", ""],
  ["TW", "", "", "DL", "", "", "", "TW", "", "", "", "DL", "", "", "TW"]
];

const generateEmptyBoard = () => {
  return BONUS_TEMPLATE.map(row =>
    row.map(bonus => ({
      tile: null,
      bonus: bonus || null
    }))
  );
};

// 👥 Initial player state
const initialPlayers = [
  { name: 'User1', score: 0, rack: [] },
  { name: 'User2', score: 0, rack: [] }
];

function Game() {
  const [players, setPlayers] = useState(initialPlayers);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [board, setBoard] = useState(generateEmptyBoard());
  const [tileBag, setTileBag] = useState(generateBag());
  const [wordScore, setWordScore] = useState(0);

  const currentPlayer = players[currentPlayerIndex];

  // 🎲 Draw initial tiles
  useEffect(() => {
    setPlayers(prevPlayers =>
      prevPlayers.map(player => ({
        ...player,
        rack: tileBag.splice(0, 7)
      }))
    );
    setTileBag([...tileBag]);
  }, []);

  // 🧠 Log score changes
  useEffect(() => {
    console.log(`${currentPlayer.name}'s new score: ${currentPlayer.score}`);
  }, [players]);

  // 🕹️ Update title
  useEffect(() => {
    document.title = `${currentPlayer.name}'s Turn | Scrabble`;
  }, [currentPlayerIndex]);

  // 🔄 Pass turn handler
  const handlePass = () => {
    setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
  };

  return (
    <div className="game-container">
      
      <div>
        <ScrabbleBoard board={board} setBoard={setBoard} />
        <TileRack player={currentPlayer} />
      </div>

      {/* Sidebar 
      <div className="sidebar">
        <h2>{currentPlayer.name}'s Turn</h2>
        <p>Score: {currentPlayer.score}</p>
        <p>Word Score: {wordScore}</p>
        <p>Timer: 00:00</p>

        <WordValidator
          board={board}
          currentPlayer={currentPlayer}
          setPlayers={setPlayers}
          currentPlayerIndex={currentPlayerIndex}
          setCurrentPlayerIndex={setCurrentPlayerIndex}
          setWordScore={setWordScore}
        >
          {({ playWord }) => (
            <button className="play-button" onClick={playWord}>Play word</button>
          )}
        </WordValidator>

        <button className="pass-button" onClick={handlePass}>PASS</button>
      </div>
    </div>
  );
}

export default Game;
\*/}
// import React, { useState, useEffect } from 'react';
// import ScrabbleBoard from '../components/ScrabbleBoard';
// import TileRack from '../components/TileRack';
// import WordValidator from '../components/WordValidator';
// import generateBag from '../components/TileBag';
// import '../components/scrabble-style.css';

// const BONUS_TEMPLATE = [
//   ["TW", "", "", "DL", "", "", "", "TW", "", "", "", "DL", "", "", "TW"],
//   ["", "DW", "", "", "", "TL", "", "", "", "TL", "", "", "", "DW", ""],
//   ["", "", "DW", "", "", "", "DL", "", "DL", "", "", "", "DW", "", ""],
//   ["DL", "", "", "DW", "", "", "", "DL", "", "", "", "DW", "", "", "DL"],
//   ["", "", "", "", "DW", "", "", "", "", "", "DW", "", "", "", ""],
//   ["", "TL", "", "", "", "TL", "", "", "", "TL", "", "", "", "TL", ""],
//   ["", "", "DL", "", "", "", "DL", "", "DL", "", "", "", "DL", "", ""],
//   ["TW", "", "", "DL", "", "", "", "DW", "", "", "", "DL", "", "", "TW"],
//   ["", "", "DL", "", "", "", "DL", "", "DL", "", "", "", "DL", "", ""],
//   ["", "TL", "", "", "", "TL", "", "", "", "TL", "", "", "", "TL", ""],
//   ["", "", "", "", "DW", "", "", "", "", "", "DW", "", "", "", ""],
//   ["DL", "", "", "DW", "", "", "", "DL", "", "", "", "DW", "", "", "DL"],
//   ["", "", "DW", "", "", "", "DL", "", "DL", "", "", "", "DW", "", ""],
//   ["", "DW", "", "", "", "TL", "", "", "", "TL", "", "", "", "DW", ""],
//   ["TW", "", "", "DL", "", "", "", "TW", "", "", "", "DL", "", "", "TW"]
// ];

// const generateEmptyBoard = () => {
//   return BONUS_TEMPLATE.map(row =>
//     row.map(bonus => ({
//       tile: null,
//       bonus: bonus || null
//     }))
//   );
// };

// const initialPlayers = [
//   { name: 'User1', score: 0, rack: [] },
//   { name: 'User2', score: 0, rack: [] }
// ];

// function Game() {
//   const [players, setPlayers] = useState(initialPlayers);
//   const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
//   const [board, setBoard] = useState(generateEmptyBoard());
//   const [tileBag, setTileBag] = useState(generateBag());
//   const [wordScore, setWordScore] = useState(0);
//   const [selectedTile, setSelectedTile] = useState(null);

//   const currentPlayer = players[currentPlayerIndex];

//   useEffect(() => {
//     setPlayers(prevPlayers =>
//       prevPlayers.map(player => ({
//         ...player,
//         rack: tileBag.splice(0, 7)
//       }))
//     );
//     setTileBag([...tileBag]);
//   }, []);

//   useEffect(() => {
//     document.title = `${currentPlayer.name}'s Turn | Scrabble`;
//   }, [currentPlayerIndex]);

//   const handlePass = () => {
//     setSelectedTile(null);
//     setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
//   };

//   return (
//     <div className="game-container">
//       <div>
//         <ScrabbleBoard
//           board={board}
//           setBoard={setBoard}
//           selectedTile={selectedTile}
//           setSelectedTile={setSelectedTile}
//           players={players}
//           setPlayers={setPlayers}
//           currentPlayerIndex={currentPlayerIndex}
//         />
//         <TileRack
//           player={currentPlayer}
//           selectedTile={selectedTile}
//           setSelectedTile={setSelectedTile}
//         />
//       </div>

//       <div className="sidebar">
//         <h2>{currentPlayer.name}'s Turn</h2>
//         <p>Score: {currentPlayer.score}</p>
//         <p>Word Score: {wordScore}</p>
//         <p>Timer: 00:00</p>

//         <WordValidator
//           board={board}
//           currentPlayer={currentPlayer}
//           setPlayers={setPlayers}
//           currentPlayerIndex={currentPlayerIndex}
//           setCurrentPlayerIndex={setCurrentPlayerIndex}
//           setWordScore={setWordScore}
//         >
//           {({ playWord }) => (
//             <button className="play-button" onClick={playWord}>Play word</button>
//           )}
//         </WordValidator>

//         <button className="pass-button" onClick={handlePass}>PASS</button>
//       </div>
//     </div>
//   );
// }

// export default Game;


import React, { useState, useEffect } from 'react';
import ScrabbleBoard from '../components/ScrabbleBoard';
import TileRack from '../components/TileRack';
import WordValidator from '../components/WordValidator';
import {
  createTileBag,
  refillRack,
  extractWordFromBoard,
  isValidPlacement,
  calculateWordScore
} from '../components/TileBag';
import '../components/scrabble-style.css';

const BONUS_TEMPLATE = [
  ["TW", "", "", "DL", "", "", "", "TW", "", "", "", "DL", "", "", "TW"],
  ["", "DW", "", "", "", "TL", "", "", "", "TL", "", "", "", "DW", ""],
  ["", "", "DW", "", "", "", "DL", "", "DL", "", "", "", "DW", "", ""],
  ["DL", "", "", "DW", "", "", "", "DL", "", "", "", "DW", "", "", "DL"],
  ["", "", "", "", "DW", "", "", "", "", "", "DW", "", "", "", ""],
  ["", "TL", "", "", "", "TL", "", "", "", "TL", "", "", "", "TL", ""],
  ["", "", "DL", "", "", "", "DL", "", "DL", "", "", "", "DL", "", ""],
  ["TW", "", "", "DL", "", "", "", "DW", "", "", "", "DL", "", "", "TW"],
  ["", "", "DL", "", "", "", "DL", "", "DL", "", "", "", "DL", "", ""],
  ["", "TL", "", "", "", "TL", "", "", "", "TL", "", "", "", "TL", ""],
  ["", "", "", "", "DW", "", "", "", "", "", "DW", "", "", "", ""],
  ["DL", "", "", "DW", "", "", "", "DL", "", "", "", "DW", "", "", "DL"],
  ["", "", "DW", "", "", "", "DL", "", "DL", "", "", "", "DW", "", ""],
  ["", "DW", "", "", "", "TL", "", "", "", "TL", "", "", "", "DW", ""],
  ["TW", "", "", "DL", "", "", "", "TW", "", "", "", "DL", "", "", "TW"]
];

const generateEmptyBoard = () => {
  return BONUS_TEMPLATE.map(row =>
    row.map(bonus => ({
      tile: null,
      bonus,
      originallyOccupied: false
    }))
  );
};

const initialPlayers = [
  { name: 'Player 1', score: 0, rack: [] },
  { name: 'Player 2', score: 0, rack: [] }
];

function Game() {
  const [players, setPlayers] = useState(initialPlayers);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [board, setBoard] = useState(generateEmptyBoard());
  const [tileBag, setTileBag] = useState(createTileBag());
  const [wordScore, setWordScore] = useState(0);
  const [selectedTile, setSelectedTile] = useState(null);
  const [placedTiles, setPlacedTiles] = useState([]);

  const currentPlayer = players[currentPlayerIndex];

  useEffect(() => {
    const [rack1, bagAfter1] = refillRack(players[0], tileBag);
    const [rack2, bagAfter2] = refillRack(players[1], bagAfter1);
    setPlayers([
      { ...players[0], rack: rack1 },
      { ...players[1], rack: rack2 }
    ]);
    setTileBag(bagAfter2);
  }, []);

  return (
    <div className="game-container">
      <div>
        <ScrabbleBoard
          board={board}
          setBoard={setBoard}
          selectedTile={selectedTile}
          setSelectedTile={setSelectedTile}
          players={players}
          setPlayers={setPlayers}
          currentPlayerIndex={currentPlayerIndex}
          placedTiles={placedTiles}
          setPlacedTiles={setPlacedTiles}
        />
        <TileRack
          player={currentPlayer}
          selectedTile={selectedTile}
          setSelectedTile={setSelectedTile}
        />
      </div>

      <div className="sidebar">
        <h2>{currentPlayer.name}'s Turn</h2>
        <p>Score: {currentPlayer.score}</p>
        <p>Word Score: {wordScore}</p>

        <WordValidator
          board={board}
          currentPlayer={currentPlayer}
          setPlayers={setPlayers}
          currentPlayerIndex={currentPlayerIndex}
          setCurrentPlayerIndex={setCurrentPlayerIndex}
          setWordScore={setWordScore}
          tileBag={tileBag}
          setTileBag={setTileBag}
          placedTiles={placedTiles}
          setPlacedTiles={setPlacedTiles}
          extractWordFromBoard={extractWordFromBoard}
          isValidPlacement={isValidPlacement}
          calculateWordScore={calculateWordScore}
          refillRack={refillRack}
        >
          {({ playWord }) => (
            <button className="play-button" onClick={playWord}>Submit Word</button>
          )}
        </WordValidator>

        <button className="pass-button" onClick={() => {
          setSelectedTile(null);
          setPlacedTiles([]);
          setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
        }}>
          Pass
        </button>
      </div>
    </div>
  );
}

export default Game;
