//exercise 1
let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
let fruity = fruits.slice(1,7);
console.log(fruity);

fruity.sort();
console.log(fruity);

fruity.push("Kiwi");
console.log(fruity);

fruity.shift();
console.log(fruity);

fruity.reverse();
console.log(fruity);

//exercise 2
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
let Yellow = moreFruits[0];
console.log(Yellow);
let Red = moreFruits[1][0];
console.log(Red);
let Blue = moreFruits [1][2];
console.log(Blue);
let Orange = moreFruits [1][1][0];
console.log(Orange);

console.log("Oranges");