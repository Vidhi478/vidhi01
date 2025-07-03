document.body.innerHTML = "<h2>Assignment 3 July Output:</h2>";

function writeOutput(title, result) {
  document.body.innerHTML += `<p><strong>${title}:</strong> ${JSON.stringify(result)}</p>`;
}

function flattenDeep(arr) {
  let res = [];
  arr.forEach(i => Array.isArray(i) ? res = res.concat(flattenDeep(i)) : res.push(i));
  return res;
}
writeOutput("Flatten Deep Array", flattenDeep([1, [2, [3, [4]], 5]]));

function removeDuplicates(arr) {
  let result = [];
  for (let i of arr) {
    if (!result.includes(i)) result.push(i);
  }
  return result;
}
writeOutput("Remove Duplicates", removeDuplicates([1, 2, 2, 3, 1]));

const a = [1, 2, 3];
const b = a;
b.push(4);
writeOutput("Output of pushing to b", a);

function secondLargest(arr) {
  let max = -Infinity, second = -Infinity;
  for (let num of arr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num > second && num !== max) {
      second = num;
    }
  }
  return second;
}
writeOutput("Second Largest", secondLargest([10, 5, 8, 1, 9]));

function countOccurrences(arr) {
  let obj = {};
  arr.forEach(i => obj[i] = (obj[i] || 0) + 1);
  return obj;
}
writeOutput("Count Occurrences", countOccurrences([1, 2, 2, 3, 1, 1]));

function customMap(arr, func) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(func(arr[i], i, arr));
  }
  return res;
}
writeOutput("Custom Map", customMap([1, 2, 3], x => x * 2));

function sortByMultipleProps(arr) {
  return arr.sort((a, b) => {
    if (a.name === b.name) return a.age - b.age;
    return a.name.localeCompare(b.name);
  });
}
let people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "John", age: 22 }
];
writeOutput("Sort Objects", sortByMultipleProps(people));

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0) return false;
  return true;
}
function getPrimes(arr) {
  return arr.filter(isPrime);
}
writeOutput("Prime Numbers", getPrimes([1, 2, 3, 4, 5, 6, 7, 11]));

const arr2 = [1, 2, 3];
arr2.length = 0;
writeOutput("After arr.length = 0", arr2[0]);

writeOutput("forEach vs map", "map returns new array, forEach doesn't");

const arr3 = [1, 2, 3];
const b2 = arr3.slice(0, 2);
b2[0] = 100;
writeOutput("Slice effect on original", arr3);

function findPairs(arr, target) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        res.push([arr[i], arr[j]]);
      }
    }
  }
  return res;
}
writeOutput("Pairs with Sum", findPairs([1, 2, 3, 4, 5], 6));

function chunkArray(arr, size) {
  let res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
}
writeOutput("Chunk Array", chunkArray([1, 2, 3, 4, 5, 6], 2));

const reduced = [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0);
writeOutput("Reduce Sum", reduced);

writeOutput("splice() Time Complexity", "O(n) because elements need to be shifted");
   /* for output ------->
   <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Assignment 3 July</title>
</head>
<body>
  <script src="assignment 3 july.js"></script>
</body>
</html>
*/