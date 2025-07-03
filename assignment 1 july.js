document.body.innerHTML = "<h2>Assignment 1 July Output:</h2>";

function out(title, value) {
  document.body.innerHTML += `<p><strong>${title}:</strong> ${JSON.stringify(value)}</p>`;
}

// 1. Loop Basics
let a1 = [];
for (let i = 1; i <= 10; i++) a1.push(i);
out("1 to 10 (for loop)", a1);

let a2 = [], j = 10;
while (j >= 1) { a2.push(j); j--; }
out("10 to 1 (while loop)", a2);

let a3 = [], k = 1;
do { a3.push(k); k++; } while (k <= 5);
out("1 to 5 (do...while)", a3);

// 2. Even, Odd, Multiples
let evens = [], odds = [], div3 = [];
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) evens.push(i);
  if (i % 2 !== 0 && i >= 20) odds.push(i);
}
for (let i = 1; i <= 30; i++) if (i % 3 === 0) div3.push(i);
out("Even 1-50", evens);
out("Odd 20-50", odds);
out("Div by 3 (1-30)", div3);

// 3. Summation & Product
let sum100 = 0, prod10 = 1, evenSum = 0, squareSum = 0;
for (let i = 1; i <= 100; i++) sum100 += i;
for (let i = 1; i <= 10; i++) prod10 *= i;
for (let i = 1; i <= 50; i++) if (i % 2 === 0) evenSum += i;
for (let i = 1; i <= 10; i++) squareSum += i * i;
out("Sum 1-100", sum100);
out("Product 1-10", prod10);
out("Sum of evens 1-50", evenSum);
out("Sum of squares 1-10", squareSum);

// 4. Conditionals in Loops
let skip4 = [];
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) continue;
  skip4.push(i);
}
out("Skip multiples of 4", skip4);

let stop7 = [];
for (let i = 1; i <= 10; i++) {
  if (i === 7) break;
  stop7.push(i);
}
out("Stop at 7", stop7);

let divBy3and5 = 0;
for (let i = 1; i <= 100; i++) if (i % 3 === 0 && i % 5 === 0) divBy3and5++;
out("Divisible by 3 and 5 (1-100)", divBy3and5);

// 5. Nested Loops
let pairs = [];
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    pairs.push([i, j]);
  }
}
out("Pairs (1-3)", pairs);

let combos = [];
for (let a = 1; a <= 4; a++) {
  for (let b = 1; b <= 4; b++) {
    if (a + b === 5) combos.push([a, b]);
  }
}
out("a + b = 5", combos);

// 6. Logic Tasks
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
  return true;
}
out("Is 17 prime?", isPrime(17));

let num = 6, fact = 1;
for (let i = 1; i <= num; i++) fact *= i;
out("Factorial of 6", fact);

let rev = 0, temp = 123;
while (temp > 0) {
  rev = rev * 10 + (temp % 10);
  temp = Math.floor(temp / 10);
}
out("Reverse of 123", rev);

let count = 0, n = 12345;
let x = n;
while (x > 0) {
  count++;
  x = Math.floor(x / 10);
}
out("Digit count (12345)", count);

let p = 1331, r = 0, t = p;
while (t > 0) {
  r = r * 10 + (t % 10);
  t = Math.floor(t / 10);
}
out("Is 1331 Palindrome?", r === p);
/* for output 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Assignment 1 July</title>
</head>
<body>
  <script src="assignment 1 july.js"></script>
</body>
</html>
*/