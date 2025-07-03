// Utility function to show output on the screen
function showResult(text) {
  const div = document.createElement("div");
  div.textContent = text;
  document.body.appendChild(div);
}

// ==============================
// STRING QUESTIONS
// ==============================

// 1. Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}
showResult("1. Reverse String ('hello') → " + reverseString("hello"));

// 2. Check Palindrome
function isPalindrome(str) {
  const cleaned = str.toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}
showResult("2. Is Palindrome ('Madam') → " + isPalindrome("Madam"));

// 3. Count Vowels
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
showResult("3. Count Vowels ('JavaScript') → " + countVowels("JavaScript"));

// 4. Capitalize First Letter of Each Word
function capitalizeWords(str) {
  return str.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
}
showResult("4. Capitalize Words ('hello world') → " + capitalizeWords("hello world"));

// 5. Character Frequency
function charFrequency(str) {
  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return JSON.stringify(freq);
}
showResult("5. Character Frequency ('aabbbc') → " + charFrequency("aabbbc"));


// ==============================
// ARRAY QUESTIONS
// ==============================

// 1. Remove Duplicates
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
showResult("6. Remove Duplicates ([1, 2, 2, 3, 4, 4]) → " + removeDuplicates([1, 2, 2, 3, 4, 4]));

// 2. Flatten an Array
function flattenArray(arr) {
  return arr.flat();
}
showResult("7. Flatten Array ([[1, 2], [3, 4], [5]]) → " + flattenArray([[1, 2], [3, 4], [5]]));

// 3. Find Max and Min
function findMaxMin(arr) {
  return {
    max: Math.max(...arr),
    min: Math.min(...arr)
  };
}
let minMax = findMaxMin([4, 1, 9, -2]);
showResult("8. Find Max and Min ([4, 1, 9, -2]) → Max: " + minMax.max + ", Min: " + minMax.min);

// 4. Sum of Even Numbers
function sumEven(arr) {
  return arr.filter(num => num % 2 === 0)
            .reduce((sum, num) => sum + num, 0);
}
showResult("9. Sum of Even Numbers ([1, 2, 3, 4, 5, 6]) → " + sumEven([1, 2, 3, 4, 5, 6]));

// 5. Group by Type
function groupByType(arr) {
  const grouped = {};
  for (let item of arr) {
    const type = typeof item;
    if (!grouped[type]) {
      grouped[type] = [];
    }
    grouped[type].push(item);
  }
  return JSON.stringify(grouped);
}
showResult("10. Group by Type ([1, 'a', true, 2, 'b']) → " + groupByType([1, 'a', true, 2, 'b']));
