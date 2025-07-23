function isWordValid(word) {
  const dictionary = [
    'HELLO', 'WORLD', 'REACT', 'SCRABBLE', 'CODE', 'FIGMA', 'TILE', 'RACK', 'BOARD',
    'SCORE', 'TURN', 'GAME', 'JAVASCRIPT', 'PYTHON', 'FRONTEND', 'BACKEND',
    'DEVELOPER', 'FUNCTION', 'VARIABLE', 'BUTTON', 'INPUT', 'TIMER', 'PLAYER',
    'MOVE', 'WORD','ABOUT', 'ABOVE', 'ACT', 'ADD', 'AFTER', 'AGAIN', 'AIR', 'ALL', 'ALMOST', 'ALONG',
  'ALSO', 'ALWAYS', 'AM', 'AMONG', 'AN', 'AND', 'ANIMAL', 'ANOTHER', 'ANSWER', 'ANY',
  'ARE', 'AROUND', 'AS', 'ASK', 'AT', 'AWAY', 'BACK', 'BALL', 'BASE', 'BE', 'BECAUSE',
  'BEEN', 'BEFORE', 'BEGAN', 'BEGIN', 'BEHIND', 'BEING', 'BELL', 'BEST', 'BETTER',
  'BETWEEN', 'BIG', 'BIRD', 'BLACK', 'BLUE', 'BOAT', 'BODY', 'BOOK', 'BOTH', 'BOY',
  'BRING', 'BROUGHT', 'BUILD', 'BUT', 'BUY', 'BY', 'CALL', 'CAME', 'CAN', 'CAR',
  'CARRY', 'CHANGE', 'CHECK', 'CHILDREN', 'CITY', 'CLEAN', 'CLOSE', 'COLD', 'COME',
  'COULD', 'COUNTRY', 'CUT', 'DID', 'DIDN’T', 'DO', 'DOES', 'DOG', 'DOING', 'DOLLAR',
  'DONE', 'DOOR', 'DOWN', 'DRAW', 'DREAM', 'DRINK', 'DRIVE', 'DROP', 'DRY', 'DURING',
  ];
  return dictionary.includes(word.toUpperCase());
}

export default isWordValid;

