{/* 
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
  'DONE', 'DOOR', 'DOWN', 'DRAW', 'DREAM', 'DRINK', 'DRIVE', 'DROP', 'DRY', 'DURING',"PUT", "GIV"
  ];
  return dictionary.includes(word.toUpperCase());
}

export default isWordValid;

*/}
function isWordValid(word){

const dictionary = [
  "ABOUT", "ABOVE", "ACT", "ADD", "AFTER", "AGAIN", "AIR", "ALL", "ALMOST", "ALONG",
  "ALSO", "ALWAYS", "AM", "AMONG", "AN", "AND", "ANIMAL", "ANOTHER", "ANSWER", "ANY",
  "ARE", "AROUND", "AS", "ASK", "AT", "AWAY", "BACK", "BALL", "BASE", "BE", "BECAUSE",
  "BEEN", "BEFORE", "BEGAN", "BEGIN", "BEHIND", "BEING", "BELL", "BEST", "BETTER", "BETWEEN",
  "BIG", "BIRD", "BLACK", "BLUE", "BOAT", "BODY", "BOARD", "BOOK", "BOTH", "BOY",
  "BRING", "BROUGHT", "BUILD", "BUT", "BUY", "BY", "CALL", "CAME", "CAN", "CAR",
  "CARRY", "CHANGE", "CHECK", "CHILDREN", "CITY", "CLEAN", "CLOSE", "CODE", "COLD", "COME",
  "COULD", "COUNTRY", "CUT", "DEVELOPER", "DID", "DIDN’T", "DO", "DOG", "DOES", "DOING",
  "DOLLAR", "DONE", "DOOR", "DOWN", "DRAW", "DREAM", "DRINK", "DRIVE", "DROP", "DRY",
  "DURING", "EACH", "EARLY", "EARTH", "EAST", "EAT", "END", "ENOUGH", "EVEN", "EVER",
  "EVERY", "EXAMPLE", "EYE", "FACE", "FACT", "FALL", "FAMILY", "FAR", "FARM", "FAST",
  "FATHER", "FEEL", "FEW", "FIELD", "FIGHT", "FIGMA", "FIGURE", "FILL", "FINAL", "FIND",
  "FINE", "FIRE", "FIRST", "FISH", "FIVE", "FLOOR", "FOLLOW", "FOOD", "FOOT", "FOR",
  "FORM", "FOUND", "FOUR", "FREE", "FRIEND", "FROM", "FRONT", "FULL", "GAME", "GAVE",
  "GET", "GIRL", "GIVE", "GO", "GOD", "GOLD", "GONE", "GOOD", "GOT", "GOVERN",
  "GREAT", "GREEN", "GROUND", "GROUP", "GROW", "GUESS", "HAD", "HALF", "HAND", "HAPPEN",
  "HARD", "HAS", "HAVE", "HE", "HEAD", "HEAR", "HEARD", "HEART", "HELP", "HELLO",
  "HER", "HERE", "HIGH", "HIM", "HIMSELF", "HIS", "HOLD", "HOME", "HORSE", "HOT",
  "HOUR", "HOUSE", "HOW", "HUNDRED", "I", "IDEA", "IF", "IMPORTANT", "IN", "INCH",
  "INPUT", "INTO", "IS", "IT", "JAVASCRIPT", "JOB", "JUST", "KEEP", "KIND", "KING",
  "KNEW", "KNOW", "LAND", "LANGUAGE", "LARGE", "LAST", "LATE", "LATER", "LAUGH", "LAW",
  "LAY", "LEAD", "LEARN", "LEAVE", "LEFT", "LEG", "LENGTH", "LESS", "LET", "LETTER",
  "LIFE", "LIGHT", "LIKE", "LINE", "LIST", "LISTEN", "LITTLE", "LIVE", "LONG", "LOOK",
  "LOVE", "LOW", "MACHINE", "MADE", "MAKE", "MAN", "MANY", "MAP", "MARK", "MAY",
  "ME", "MEAN", "MEN", "MIDDLE", "MIGHT", "MILE", "MILK", "MIND", "MINE", "MISS",
  "MONEY", "MONTH", "MOON", "MORE", "MORNING", "MOST", "MOTHER", "MOUNTAIN", "MOVE", "MUCH",
  "MUSIC", "MUST", "MY", "NAME", "NEAR", "NEVER", "NEW", "NEXT", "NIGHT", "NO",
  "NORTH", "NOT", "NOTHING", "NOTICE", "NOW", "NUMBER", "OF", "OFF", "OFTEN", "OH",
  "OLD", "ON", "ONCE", "ONE", "ONLY", "OPEN", "OR", "OTHER", "OUR", "OUT",
  "OVER", "OWN", "PAGE", "PAPER", "PART", "PASS", "PAST", "PATH", "PAY", "PEOPLE",
  "PERHAPS", "PERSON", "PICTURE", "PIECE", "PLACE", "PLAN", "PLANE", "PLANT", "PLAY", "POINT",
  "POWER", "PRESS", "PRETTY", "PROBLEM", "PULL", "PUT", "PYTHON", "QUESTION", "QUICK", "QUICKLY",
  "RACE", "RACK", "RADIO", "RAIN", "RAN", "REACH", "READ", "READY", "REACT", "REAL",
  "RED", "REMEMBER", "REST", "RESULT", "RICH", "RIDE", "RIGHT", "RIVER", "ROAD", "ROCK",
  "ROLL", "ROOM", "ROUND", "RULE", "RUN", "SAID", "SAME", "SCORE", "SAW", "SAY",
  "SCHOOL", "SCIENCE", "SCRABBLE", "SEA", "SECOND", "SEE", "SEEM", "SEEN", "SELL", "SEND",
  "SENSE", "SENT", "SEVERAL", "SHALL", "SHE", "SHIP", "SHORT", "SHOULD", "SHOW", "SIDE",
  "SIGN", "SIMPLE", "SINCE", "SING", "SISTER", "SIT", "SIX", "SIZE", "SLEEP", "SLOW",
  "SMALL", "SNOW", "SO", "SOME", "SONG", "SOON", "SOUND", "SOUTH", "SPACE", "SPEAK",
  "SPECIAL", "SPELL", "SPRING", "STAND", "START", "STATE", "STAY", "STEP", "STILL", "STONE",
  "STOOD", "STOP", "STORE", "STORY", "STREET", "STRONG", "STUDY", "SUCH", "SUDDENLY", "SUMMER",
  "SUN", "SURE", "TABLE", "TAKE", "TALK", "TALL", "TEACH", "TELL", "TEN", "TEST",
  "THAN", "THAT", "THE", "THEIR", "THEM", "THEN", "THERE", "THESE", "THEY", "THING",
  "THINK", "THIRD", "THIS", "THOSE", "THOUGH", "THOUGHT", "THREE", "THROUGH", "TILE", "TIME",
  "TIMER", "TO", "TODAY", "TOGETHER", "TOLD", "TOO", "TOOK", "TOP", "TOTAL", "TOUCH",
  "TOWN", "TRACK", "TRADE", "TRAIN", "TREE", "TRIED", "TRIP", "TROUBLE", "TRUE", "TRY",
  "TURN", "TWO", "UNDER", "UNTIL", "UP", "US", "USE", "USUALLY", "VARIABLE", "VERY",
  "VOICE", "WALK", "WANT", "WAR", "WARM", "WAS", "WATCH", "WATER", "WAY", "WE",
  "WEEK", "WEIGHT", "WELL", "WENT", "WERE", "WEST", "WHAT", "WHEN", "WHERE", "WHICH",
  "WHILE", "WHITE", "WHO", "WHOLE", "WHY", "WILL", "WIN", "WIND", "WINDOW", "WINTER",
  "WISH", "WITH", "WOMAN", "WOMEN", "WON", "WOOD", "WORD", "WORK", "WORLD", "WOULD",
  "WRITE", "WRITTEN", "WRONG", "WROTE", "YEAR", "YELLOW", "YES", "YET", "YOU", "YOUNG",
  "YOUR"
];
return dictionary.includes(word.toUpperCase());

}

export default isWordValid;
