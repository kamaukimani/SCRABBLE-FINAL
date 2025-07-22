
{/*
    import "./scrabble-style.css"

const THEMED_BONUSES = {
  TW: "Cybertron",
  DW: "Autobot",
  TL: "Decepticon",
  DL: "Energon",
  "": "",
};

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

function ScrabbleBoard({ board, setBoard }) {
  return (
    <div className="board">
      {BONUS_TEMPLATE.flatMap((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const theme = THEMED_BONUSES[cell];
          return (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`cell ${cell}`}
              onClick={() => {
                // Placeholder for tile placement
              }}
            >
              {theme}
            </div>
          );
        })
      )}
    </div>
  );
}

export default ScrabbleBoard;
*/}

{/* 
import "./scrabble-style.css"; 

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
  ["TW", "", "", "DL", "", "", "", "TW", "", "", "", "DL", "", "", "TW"],
];

function ScrabbleBoard() {
  return (
    <div className="board">
      {BONUS_TEMPLATE.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div key={`${rowIndex}-${colIndex}`} className={`cell ${cell}`}>
            {cell}
          </div>
        ))
      )}
    </div>
  );
}

export default ScrabbleBoard;

*/}

{/* 
import React from 'react';
import './scrabble-style.css';

function ScrabbleBoard({ board, setBoard }) {
  return (
    <div className="board">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`cell ${cell.bonus || ''}`}
          >
            {cell.tile?.letter || cell.bonus}
          </div>
        ))
      )}
    </div>
  );
}

export default ScrabbleBoard;
*/}

import React from 'react';
import './scrabble-style.css';

function ScrabbleBoard({ board, setBoard, selectedTile, setSelectedTile, players, setPlayers, currentPlayerIndex }) {
  const handleCellClick = (rowIndex, colIndex) => {
    if (!selectedTile || board[rowIndex][colIndex].tile) return;

    const newBoard = [...board];
    newBoard[rowIndex][colIndex] = {
      ...newBoard[rowIndex][colIndex],
      tile: { letter: selectedTile }
    };
    setBoard(newBoard);

    const newPlayers = [...players];
    newPlayers[currentPlayerIndex].rack = newPlayers[currentPlayerIndex].rack.filter(t => t !== selectedTile);
    setPlayers(newPlayers);

    setSelectedTile(null);
  };

  return (
    <div className="board">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`cell ${cell.bonus || ''}`}
            onClick={() => handleCellClick(rowIndex, colIndex)}
          >
            {cell.tile?.letter || cell.bonus}
          </div>
        ))
      )}
    </div>
  );
}

export default ScrabbleBoard;
