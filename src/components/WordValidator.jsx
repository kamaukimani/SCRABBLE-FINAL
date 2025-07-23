
// import isWordValid from '../index';

// function WordValidator({
//   board, currentPlayer, setPlayers, currentPlayerIndex,
//   setCurrentPlayerIndex, setWordScore, children
// }) {
//   const playWord = () => {
//     const formedWord = extractWord(board);

//     if (!isWordValid(formedWord)) {
//       alert(`"${formedWord}" is not a valid word.`);
//       return;
//     }

//     const points = Math.floor(Math.random() * 10) + 1;
//     setPlayers(prev => {
//       const updated = [...prev];
//       updated[currentPlayerIndex].score += points;
//       return updated;
//     });
//     setWordScore(points);
//     setCurrentPlayerIndex((currentPlayerIndex + 1) % 2);
//   };

//   const extractWord = (board) => {
//     const letters = [];
//     for (let row of board) {
//       for (let cell of row) {
//         if (cell?.tile?.letter) letters.push(cell.tile.letter);
//       }
//     }
//     return letters.join('');
//   };

//   return <div>{children({ playWord })}</div>;
// }

// export default WordValidator;

// import {
//   extractWordFromBoard,
//   isValidPlacement,
//   calculateWordScore,
//   refillRack
// } from './TileBag';
// import isWordValid from '../index';

// function WordValidator({
//   board, currentPlayer, setPlayers, currentPlayerIndex,
//   setCurrentPlayerIndex, setWordScore, tileBag, setTileBag,
//   placedTiles, setPlacedTiles, children
// }) {
//   const playWord = () => {
//     const word = extractWordFromBoard(board, placedTiles);
//     const isFirstMove = board.every(row => row.every(cell => !cell.tile));

//     if (!isValidPlacement(board, placedTiles, isFirstMove)) {
//       alert("Invalid placement. Must be a straight line, connected, and cross center.");
//       return;
//     }

//     if (!word || !isWordValid(word)) {
//       alert(`"${word}" is not a valid word.`);
//       return;
//     }

//     const score = calculateWordScore(board, placedTiles);
//     setPlayers(prev => {
//       const newPlayers = [...prev];
//       newPlayers[currentPlayerIndex].score += score;
//       return newPlayers;
//     });
//     setWordScore(score);

//     const updatedBoard = [...board];
//     placedTiles.forEach(({ row, col }) => {
//       updatedBoard[row][col] = {
//         ...updatedBoard[row][col],
//         originallyOccupied: true
//       };
//     });

//     // Refill tiles
//     const [newRack, newBag] = refillRack(currentPlayer, tileBag);
//     const updatedPlayers = [...players];
//     updatedPlayers[currentPlayerIndex].rack = newRack;

//     setPlayers(updatedPlayers);
//     setTileBag(newBag);
//     setPlacedTiles([]);
//     setCurrentPlayerIndex((currentPlayerIndex + 1) % 2);
//   };

//   return <>{children({ playWord })}</>;
// }

// export default WordValidator;


// import isWordValid from '../index';

// function WordValidator({
//   board,
//   currentPlayer,
//   setPlayers,
//   currentPlayerIndex,
//   setCurrentPlayerIndex,
//   setWordScore,
//   tileBag,
//   setTileBag,
//   placedTiles,
//   setPlacedTiles,
//   extractWordFromBoard,
//   isValidPlacement,
//   calculateWordScore,
//   refillRack,
//   children
// }) {
//   const playWord = () => {
//     const isFirstMove = board.every(row => row.every(cell => !cell.tile));
//     const word = extractWordFromBoard(board, placedTiles);

//     if (!isValidPlacement(board, placedTiles, isFirstMove)) {
//       alert("Invalid placement. Must be straight, connected, and cross center.");
//       return;
//     }

//     if (!isWordValid(word)) {
//       alert(`"${word}" is not a valid word.`);
//       return;
//     }

//     const score = calculateWordScore(board, placedTiles);
//     setPlayers(prev => {
//       const updated = [...prev];
//       updated[currentPlayerIndex].score += score;
//       return updated;
//     });
//     setWordScore(score);

//     const updatedBoard = [...board];
//     placedTiles.forEach(({ row, col }) => {
//       updatedBoard[row][col] = {
//         ...updatedBoard[row][col],
//         originallyOccupied: true
//       };
//     });

//     const [newRack, newBag] = refillRack(currentPlayer, tileBag);
//     const newPlayers = [...setPlayers(prev => prev)];
//     newPlayers[currentPlayerIndex].rack = newRack;

//     setTileBag(newBag);
//     setPlayers(newPlayers);
//     setPlacedTiles([]);
//     setCurrentPlayerIndex((currentPlayerIndex + 1) % 2);
//   };

//   return <div>{children({ playWord })}</div>;
// }

// export default WordValidator;


import isWordValid from '../index';
import {
  extractWordFromBoard,
  isValidPlacement,
  calculateWordScore,
  refillRack
} from './TileBag';

function WordValidator({
  board, currentPlayer, setPlayers, currentPlayerIndex,
  setCurrentPlayerIndex, setWordScore, placedTiles, setPlacedTiles,
  tileBag, setTileBag, children
}) {
  const playWord = () => {
    const isFirstMove = board.flat().every(cell => !cell.originallyOccupied);

    const word = extractWordFromBoard(board, placedTiles);

    if (!isValidPlacement(board, placedTiles, isFirstMove)) {
      alert("Invalid placement. Must be straight, connected, and cross center.");
      return;
    }

    if (!word || !isWordValid(word)) {
      alert(`"${word}" is not a valid word.`);
      return;
    }

    const score = calculateWordScore(board, placedTiles);

    const updatedBoard = [...board];
    placedTiles.forEach(({ row, col }) => {
      updatedBoard[row][col] = {
        ...updatedBoard[row][col],
        originallyOccupied: true
      };
    });

    setPlayers(prev => {
      const updated = [...prev];
      updated[currentPlayerIndex].score += score;
      return updated;
    });
    setWordScore(score);

    const [newRack, newBag] = refillRack(currentPlayer, tileBag);
    const updatedPlayers = [...currentPlayer];
    updatedPlayers[currentPlayerIndex].rack = newRack;
    setPlayers(updatedPlayers);
    setTileBag(newBag);

    setPlacedTiles([]);
    setCurrentPlayerIndex((currentPlayerIndex + 1) % 2);
  };

  return <div>{children({ playWord })}</div>;
}

export default WordValidator;
