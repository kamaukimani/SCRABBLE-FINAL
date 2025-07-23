// const LETTER_DISTRIBUTION = {
//   A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2,
//   I: 9, J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2,
//   Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1,
//   Y: 2, Z: 1
// };

// const LETTER_POINTS = {
//   A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4,
//   I: 1, J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3,
//   Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4, W: 4, X: 8,
//   Y: 4, Z: 10
// };

// function createTileBag() {
//   const bag = [];
//   Object.entries(LETTER_DISTRIBUTION).forEach(([letter, count]) => {
//     for (let i = 0; i < count; i++) {
//       bag.push({ letter, points: LETTER_POINTS[letter] });
//     }
//   });
//   return shuffle(bag);
// }

// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

// function refillRack(player, tileBag) {
//   const newRack = [...player.rack];
//   while (newRack.length < 7 && tileBag.length > 0) {
//     newRack.push(tileBag.pop());
//   }
//   return [newRack, tileBag];
// }

// function getWordDirection(placedTiles) {
//   const allSameRow = placedTiles.every(t => t.row === placedTiles[0].row);
//   const allSameCol = placedTiles.every(t => t.col === placedTiles[0].col);
//   if (allSameRow) return "horizontal";
//   if (allSameCol) return "vertical";
//   return null;
// }

// function extractWordFromBoard(board, placedTiles) {
//   if (placedTiles.length === 0) return "";
//   const direction = getWordDirection(placedTiles);
//   if (!direction) return "";

//   let { row, col } = placedTiles[0];
//   let r = row, c = col;

//   if (direction === "horizontal") {
//     while (c > 0 && board[r][c - 1]?.tile) c--;
//   } else {
//     while (r > 0 && board[r - 1][c]?.tile) r--;
//   }

//   let word = "";
//   while (r < 15 && c < 15 && board[r][c]?.tile?.letter) {
//     word += board[r][c].tile.letter;
//     if (direction === "horizontal") c++;
//     else r++;
//   }

//   return word;
// }

// function isFirstMoveValid(placedTiles) {
//   return placedTiles.some(({ row, col }) => row === 7 && col === 7);
// }

// function isStraightLine(tiles) {
//   const rows = tiles.map(t => t.row);
//   const cols = tiles.map(t => t.col);
//   return rows.every(r => r === rows[0]) || cols.every(c => c === cols[0]);
// }

// function isConnectedToExisting(board, placedTiles) {
//   for (let { row, col } of placedTiles) {
//     const neighbors = [
//       [row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]
//     ];
//     for (let [r, c] of neighbors) {
//       if (r >= 0 && r < 15 && c >= 0 && c < 15) {
//         const cell = board[r][c];
//         if (cell.tile && !placedTiles.some(t => t.row === r && t.col === c)) {
//           return true;
//         }
//       }
//     }
//   }
//   return false;
// }

// function isValidPlacement(board, placedTiles, isFirstMove) {
//   if (placedTiles.length === 0) return false;
//   if (!isStraightLine(placedTiles)) return false;
//   if (isFirstMove) return isFirstMoveValid(placedTiles);
//   return isConnectedToExisting(board, placedTiles);
// }

// function calculateWordScore(board, placedTiles) {
//   let total = 0;
//   let wordMultiplier = 1;

//   for (const { row, col, tile } of placedTiles) {
//     const cell = board[row][col];
//     const letterScore = tile.points;

//     if (!cell.originallyOccupied) {
//       if (cell.bonus === "DL") {
//         total += letterScore * 2;
//       } else if (cell.bonus === "TL") {
//         total += letterScore * 3;
//       } else {
//         total += letterScore;
//       }

//       if (cell.bonus === "DW") wordMultiplier *= 2;
//       if (cell.bonus === "TW") wordMultiplier *= 3;
//     } else {
//       total += letterScore;
//     }
//   }

//   return total * wordMultiplier;
// }

// export {
//   createTileBag,
//   refillRack,
//   extractWordFromBoard,
//   isValidPlacement,
//   calculateWordScore
// };



// const LETTER_DISTRIBUTION = {
//   A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2,
//   I: 9, J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2,
//   Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1,
//   Y: 2, Z: 1
// };

// const LETTER_POINTS = {
//   A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4,
//   I: 1, J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3,
//   Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4, W: 4, X: 8,
//   Y: 4, Z: 10
// };

// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

// function createTileBag() {
//   const bag = [];
//   for (const [letter, count] of Object.entries(LETTER_DISTRIBUTION)) {
//     for (let i = 0; i < count; i++) {
//       bag.push({ letter, points: LETTER_POINTS[letter] });
//     }
//   }
//   return shuffle(bag);
// }

// function refillRack(player, tileBag) {
//   const newRack = [...player.rack];
//   while (newRack.length < 7 && tileBag.length > 0) {
//     newRack.push(tileBag.pop());
//   }
//   return [newRack, tileBag];
// }

// function getWordDirection(placedTiles) {
//   const allSameRow = placedTiles.every(t => t.row === placedTiles[0].row);
//   const allSameCol = placedTiles.every(t => t.col === placedTiles[0].col);
//   if (allSameRow) return "horizontal";
//   if (allSameCol) return "vertical";
//   return null;
// }

// function extractWordFromBoard(board, placedTiles) {
//   if (placedTiles.length === 0) return "";

//   const direction = getWordDirection(placedTiles);
//   if (!direction) return "";

//   let { row, col } = placedTiles[0];
//   let r = row;
//   let c = col;

//   // move to start of word
//   if (direction === "horizontal") {
//     while (c > 0 && board[r][c - 1]?.tile) c--;
//   } else {
//     while (r > 0 && board[r - 1][c]?.tile) r--;
//   }

//   let word = "";
//   while (
//     r < 15 && c < 15 &&
//     board[r][c]?.tile?.letter
//   ) {
//     word += board[r][c].tile.letter;
//     if (direction === "horizontal") {
//       c++;
//     } else {
//       r++;
//     }
//   }

//   return word;
// }

// function isFirstMoveValid(placedTiles) {
//   return placedTiles.some(({ row, col }) => row === 7 && col === 7);
// }

// function isStraightLine(placedTiles) {
//   const rows = placedTiles.map(t => t.row);
//   const cols = placedTiles.map(t => t.col);
//   return rows.every(r => r === rows[0]) || cols.every(c => c === cols[0]);
// }

// function isConnectedToExisting(board, placedTiles) {
//   for (let { row, col } of placedTiles) {
//     const neighbors = [
//       [row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]
//     ];
//     for (let [r, c] of neighbors) {
//       if (r >= 0 && r < 15 && c >= 0 && c < 15) {
//         const neighborCell = board[r][c];
//         if (neighborCell.tile && !placedTiles.some(t => t.row === r && t.col === c)) {
//           return true;
//         }
//       }
//     }
//   }
//   return false;
// }

// // function isValidPlacement(board, placedTiles, isFirstMove) {
// //   if (placedTiles.length === 0) return false;
// //   if (!isStraightLine(placedTiles)) return false;
// //   if (isFirstMove) return isFirstMoveValid(placedTiles);
// //   return isConnectedToExisting(board, placedTiles);
// // }
// function isValidPlacement(board, placedTiles, isFirstMove) {
//   if (placedTiles.length === 0) return false;
//   if (!isStraightLine(placedTiles)) return false;

//   return isFirstMove
//     ? isFirstMoveValid(placedTiles)
//     : isConnectedToExisting(board, placedTiles);
// }


// function calculateWordScore(board, placedTiles) {
//   let total = 0;
//   let wordMultiplier = 1;

//   for (const { row, col, tile } of placedTiles) {
//     const cell = board[row][col];
//     const base = tile.points;

//     if (!cell.originallyOccupied) {
//       if (cell.bonus === "DL") total += base * 2;
//       else if (cell.bonus === "TL") total += base * 3;
//       else total += base;

//       if (cell.bonus === "DW") wordMultiplier *= 2;
//       if (cell.bonus === "TW") wordMultiplier *= 3;
//     } else {
//       total += base;
//     }
//   }

//   return total * wordMultiplier;
// }

// export {
//   createTileBag,
//   refillRack,
//   LETTER_POINTS,
//   extractWordFromBoard,
//   isValidPlacement,
//   calculateWordScore
// };

const LETTER_DISTRIBUTION = {
  A: 9, B: 2, C: 2, D: 4, E: 12, F: 2, G: 3, H: 2,
  I: 9, J: 1, K: 1, L: 4, M: 2, N: 6, O: 8, P: 2,
  Q: 1, R: 6, S: 4, T: 6, U: 4, V: 2, W: 2, X: 1,
  Y: 2, Z: 1
};

const LETTER_POINTS = {
  A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4,
  I: 1, J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3,
  Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4, W: 4, X: 8,
  Y: 4, Z: 10
};

// 🎲 Generate a tile bag based on official Scrabble letter distribution
function createTileBag() {
  const bag = [];
  for (const [letter, count] of Object.entries(LETTER_DISTRIBUTION)) {
    for (let i = 0; i < count; i++) {
      bag.push({ letter, points: LETTER_POINTS[letter] });
    }
  }
  return shuffle(bag);
}

// 🔁 Shuffle using Fisher-Yates
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// ♻️ Refill rack to 7 tiles
function refillRack(player, tileBag) {
  const newRack = [...player.rack];
  while (newRack.length < 7 && tileBag.length > 0) {
    newRack.push(tileBag.pop());
  }
  return [newRack, tileBag];
}

// 📏 Get direction of placed word
function getWordDirection(placedTiles) {
  const allSameRow = placedTiles.every(t => t.row === placedTiles[0].row);
  const allSameCol = placedTiles.every(t => t.col === placedTiles[0].col);
  if (allSameRow) return "horizontal";
  if (allSameCol) return "vertical";
  return null;
}

// 🧠 Extract full word from board given placed tiles
function extractWordFromBoard(board, placedTiles) {
  if (placedTiles.length === 0) return "";

  const direction = getWordDirection(placedTiles);
  if (!direction) return "";

  let { row, col } = placedTiles[0];

  // ⬅️⬆️ Move to start of word
  if (direction === "horizontal") {
    while (col > 0 && board[row][col - 1]?.tile) col--;
  } else {
    while (row > 0 && board[row - 1][col]?.tile) row--;
  }

  // ➡️⬇️ Collect letters
  let word = "";
  while (row < 15 && col < 15 && board[row][col]?.tile?.letter) {
    word += board[row][col].tile.letter;
    if (direction === "horizontal") col++;
    else row++;
  }

  return word;
}

// ✅ Allow gaps if filled with existing tiles
function isStraightLine(placedTiles, board) {
  if (placedTiles.length === 0) return false;

  const isRow = placedTiles.every(t => t.row === placedTiles[0].row);
  const isCol = placedTiles.every(t => t.col === placedTiles[0].col);

  if (!isRow && !isCol) return false;

  if (isRow) {
    const row = placedTiles[0].row;
    const cols = placedTiles.map(t => t.col).sort((a, b) => a - b);
    for (let c = cols[0]; c <= cols[cols.length - 1]; c++) {
      if (!board[row][c].tile) return false;
    }
  }

  if (isCol) {
    const col = placedTiles[0].col;
    const rows = placedTiles.map(t => t.row).sort((a, b) => a - b);
    for (let r = rows[0]; r <= rows[rows.length - 1]; r++) {
      if (!board[r][col].tile) return false;
    }
  }

  return true;
}

// 🔗 Must be next to a locked-in tile (not counting placedTiles)
// function isConnectedToExisting(board, placedTiles) {
//   for (const { row, col } of placedTiles) {
//     const neighbors = [
//       [row - 1, col], [row + 1, col],
//       [row, col - 1], [row, col + 1]
//     ];
//     for (const [r, c] of neighbors) {
//       if (
//         r >= 0 && r < 15 && c >= 0 && c < 15 &&
//         board[r][c].tile &&
//         !placedTiles.some(t => t.row === r && t.col === c)
//       ) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
function isConnectedToExisting(board, placedTiles) {
  const placedSet = new Set(placedTiles.map(t => `${t.row},${t.col}`));

  for (let { row, col } of placedTiles) {
    const neighbors = [
      [row - 1, col],
      [row + 1, col],
      [row, col - 1],
      [row, col + 1]
    ];

    for (let [r, c] of neighbors) {
      if (r >= 0 && r < 15 && c >= 0 && c < 15) {
        const cell = board[r][c];
        const coordKey = `${r},${c}`;
        if (cell.tile && !placedSet.has(coordKey)) {
          return true; // connected to existing tile
        }
      }
    }
  }

  // If none of the placed tiles are adjacent to existing tiles, invalid
  return false;
}


// 🟨 First word must cross center
function isFirstMoveValid(placedTiles) {
  return placedTiles.some(({ row, col }) => row === 7 && col === 7);
}

// ✅ Validate full placement
function isValidPlacement(board, placedTiles, isFirstMove) {
  if (placedTiles.length === 0) return false;
  if (!isStraightLine(placedTiles, board)) return false;
  return isFirstMove
    ? isFirstMoveValid(placedTiles)
    : isConnectedToExisting(board, placedTiles);
}

// 🔢 Score based on tiles and bonus
function calculateWordScore(board, placedTiles) {
  let total = 0;
  let wordMultiplier = 1;

  for (const { row, col, tile } of placedTiles) {
    const cell = board[row][col];
    const letterScore = tile.points;

    if (!cell.originallyOccupied) {
      if (cell.bonus === "DL") total += letterScore * 2;
      else if (cell.bonus === "TL") total += letterScore * 3;
      else total += letterScore;

      if (cell.bonus === "DW") wordMultiplier *= 2;
      if (cell.bonus === "TW") wordMultiplier *= 3;
    } else {
      total += letterScore;
    }
  }

  return total * wordMultiplier;
}

export {
  createTileBag,
  refillRack,
  extractWordFromBoard,
  isValidPlacement,
  calculateWordScore,
  LETTER_POINTS
};
