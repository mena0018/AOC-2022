const input = new URL(".", import.meta.url).pathname + "input.txt";
const file = await Deno.readTextFile(input);

const elfes = file.split("\n\n");

const caloriesByElf = elfes
  .map((elf) => {
    const calories = elf.split("\n");
    return calories.reduce((acc, curr) => Number(acc) + Number(curr), 0);
  })
  .sort((a, b) => b - a);

// First part
console.log(caloriesByElf[0]);

// Second part
console.log(caloriesByElf.slice(0, 3).reduce((acc, curr) => acc + curr, 0));
