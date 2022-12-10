const input = new URL(".", import.meta.url).pathname + "input.txt";
const file = await Deno.readTextFile(input);
const matches = file.split("\n");

const LOSS = 0;
const DRAW = 3;
const WIN = 6;

const ROCK = 1;
const PAPER = 2;
const SCISSOR = 3;

let total = 0;
let secondTotal = 0;

matches.map((match) => {
  const opponentChoice = match.split(" ")[0];
  const ownChoice = match.split(" ")[1];

  if (ownChoice === "X") {
    total += ROCK;
    if (opponentChoice === "A") total += DRAW;
    if (opponentChoice === "B") total += LOSS;
    if (opponentChoice === "C") total += WIN;
  }

  if (ownChoice === "Y") {
    total += PAPER;
    if (opponentChoice === "A") total += WIN;
    if (opponentChoice === "B") total += DRAW;
    if (opponentChoice === "C") total += LOSS;
  }

  if (ownChoice === "Z") {
    total += SCISSOR;
    if (opponentChoice === "A") total += LOSS;
    if (opponentChoice === "B") total += WIN;
    if (opponentChoice === "C") total += DRAW;
  }
});

// First part
console.log(total);

/** ***************************************************** */
/** ********************* SECOND PART ******************* */
/** ***************************************************** */

matches.map((match) => {
  const opponentChoice = match.split(" ")[0];
  const ownChoice = match.split(" ")[1];

  if (ownChoice === "X") {
    secondTotal += 0;
    if (opponentChoice === "A") secondTotal += SCISSOR;
    if (opponentChoice === "B") secondTotal += ROCK;
    if (opponentChoice === "C") secondTotal += PAPER;
  }

  if (ownChoice === "Y") {
    secondTotal += 3;
    if (opponentChoice === "A") secondTotal += ROCK;
    if (opponentChoice === "B") secondTotal += PAPER;
    if (opponentChoice === "C") secondTotal += SCISSOR;
  }

  if (ownChoice === "Z") {
    secondTotal += 6;
    if (opponentChoice === "A") secondTotal += PAPER;
    if (opponentChoice === "B") secondTotal += SCISSOR;
    if (opponentChoice === "C") secondTotal += ROCK;
  }
});

// Second part
console.log(secondTotal);
