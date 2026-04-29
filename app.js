const { multiply, divide } = require("./calculator");
const name = require("./message");

console.log("Name:", name);

console.log("Multiplication:", multiply(5, 3));
console.log("Division:", divide(10, 2));