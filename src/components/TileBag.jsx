const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function generateBag() {
  let bag = [];
  for (let i = 0; i < 100; i++) {
    const letter = LETTERS[Math.floor(Math.random() * LETTERS.length)];
    bag.push(letter);
  }
  return bag;
}

export default generateBag;
