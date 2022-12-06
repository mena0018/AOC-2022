const fs = require("fs");
const path = require("path");

const file = fs.readFileSync(path.join(__dirname, "./input.txt")).toString();
const elfes = file.split("\n\n");

const caloriesByElf = elfes.map((elf) => {
  const calories = elf.split("\n");

  return calories.reduce((acc, curr) => Number(acc) + Number(curr), 0);
});

// First part
console.log(caloriesByElf.sort((a, b) => b - a)[0]);

// Second part
console.log(
  caloriesByElf
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, curr) => acc + curr, 0)
);
