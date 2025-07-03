function show(msg) {
  const div = document.createElement("div");
  div.className = "output";
  div.textContent = msg;
  document.body.appendChild(div);
}

// Beginner Level
let num1 = 4;
show(`1. ${num1} is ${num1 % 2 === 0 ? 'Even' : 'Odd'}`);

let num2 = -3;
show(`2. ${num2} is ${num2 > 0 ? 'Positive' : num2 < 0 ? 'Negative' : 'Zero'}`);

let a = 10, b = 7;
show(`3. Greater number is ${a > b ? a : b}`);

let num3 = 15;
show(`4. ${num3} is ${num3 % 3 === 0 ? '' : 'not '}divisible by 3`);

let num4 = 28;
show(`5. ${num4} is ${num4 % 7 === 0 ? '' : 'not '}a multiple of 7`);

let ch = 'e';
show(`6. '${ch}' is ${'aeiou'.includes(ch) ? 'Vowel' : 'Consonant'}`);

let num5 = 25;
show(`7. ${num5} is ${num5 >= 10 && num5 <= 50 ? 'within' : 'outside'} 10-50`);

let num6 = 123;
show(`8. ${num6} is ${num6 >= 100 && num6 <= 999 ? '' : 'not '}a 3-digit number`);

let age = 17;
show(`9. Age ${age} → ${age >= 18 ? 'Eligible' : 'Not eligible'} to vote`);

let temp = 20;
let condition = temp > 30 ? 'Hot' : temp >= 15 ? 'Moderate' : 'Cold';
show(`10. Temperature ${temp}° → ${condition}`);

// Intermediate Level
let x = 5, y = 15, z = 12;
show(`11. Greatest of ${x}, ${y}, ${z} is ${Math.max(x, y, z)}`);

let year = 2024;
let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
show(`12. Year ${year} is ${isLeap ? '' : 'not '}a leap year`);

let ch2 = '9';
let type = /[A-Z]/.test(ch2) ? 'Uppercase' :
           /[a-z]/.test(ch2) ? 'Lowercase' :
           /[0-9]/.test(ch2) ? 'Digit' : 'Special Character';
show(`13. '${ch2}' is a ${type}`);

let marks = 76;
let grade = marks >= 90 ? 'A' :
            marks >= 75 ? 'B' :
            marks >= 60 ? 'C' :
            marks >= 40 ? 'D' : 'F';
show(`14. Marks: ${marks} → Grade: ${grade}`);

let day = 5;
let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
show(`15. Day ${day} → ${days[day - 1] || 'Invalid'}`);

let num7 = 55;
show(`16. ${num7} is ${num7 % 5 === 0 && num7 % 11 === 0 ? '' : 'not '}divisible by 5 and 11`);

let num8 = 7;
let isPrime = true;
for (let i = 2; i < num8; i++) {
  if (num8 % i === 0) {
    isPrime = false;
    break;
  }
}
show(`17. ${num8} is ${isPrime ? 'a Prime' : 'Not Prime'} number`);

let person = 'Amit', age2 = 21;
show(`18. ${person} is ${age2 >= 18 ? 'eligible' : 'not eligible'} for license`);

let numA = 7, numB = 7;
show(`19. ${numA} and ${numB} are ${numA === numB ? 'equal' : numA > numB ? 'first is greater' : 'second is greater'}`);

let num9 = -8;
show(`20. ${num9} is ${num9 % 2 === 0 ? 'Even' : 'Odd'} and ${num9 >= 0 ? 'Positive' : 'Negative'}`);

// Advanced Level
let s1 = 80, s2 = 75, s3 = 60, s4 = 70, s5 = 85;
let avg = (s1 + s2 + s3 + s4 + s5) / 5;
let res = avg >= 90 ? 'A' :
          avg >= 75 ? 'B' :
          avg >= 60 ? 'C' :
          avg >= 40 ? 'D' : 'F';
show(`21. Average: ${avg} → Grade: ${res}`);

let num10 = 15;
let onlyOne = (num10 % 3 === 0) ^ (num10 % 5 === 0);
show(`22. ${num10} divisible by 3 or 5 but not both: ${onlyOne ? 'Yes' : 'No'}`);

let num11 = 121;
let rev = Number([...num11.toString()].reverse().join(''));
show(`23. ${num11} is ${num11 === rev ? '' : 'not '}a Palindrome`);

let num12 = 123;
let sum = [...num12.toString()].reduce((s, d) => s + Number(d), 0);
show(`24. Sum of digits of ${num12} is ${sum} → ${sum % 2 === 0 ? 'Even' : 'Odd'}`);

let hrs = 45;
let pay = hrs > 40 ? (hrs - 40) * 12 : 0;
show(`25. Overtime pay: ₹${pay}`);

let basic = 12000;
let hra = basic < 10000 ? 0.2 * basic : 0.3 * basic;
let da = basic < 10000 ? 0.5 * basic : 0.8 * basic;
let net = basic + hra + da;
show(`26. Net Salary: ₹${net}`);

let month = 2;
let monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
show(`27. Month ${month} has ${monthDays[month - 1]} days`);

let password = "pass@123";
let strong = password.length >= 8 && /\d/.test(password) && /\W/.test(password);
show(`28. Password is ${strong ? 'Strong' : 'Weak'}`);

let t1 = 5, t2 = 5, t3 = 5;
let valid = t1 + t2 > t3 && t1 + t3 > t2 && t2 + t3 > t1;
let tType = t1 === t2 && t2 === t3 ? 'Equilateral' :
            t1 === t2 || t2 === t3 || t1 === t3 ? 'Isosceles' : 'Scalene';
show(`29. Triangle is ${valid ? tType : 'Invalid'}`);

let username = "admin", password2 = "1234";
show(`30. Login ${username === 'admin' && password2 === '1234' ? 'Success' : 'Fail'}`);
/* for ouytput ---------> 
/*<!DOCTYPE html>
<html>
<head>
  <title>Assignment 30 June</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    h2 {
      margin-bottom: 15px;
    }
    .output {
      margin-bottom: 5px;
      padding: 5px;
    }
  </style>
</head>
<body>
  <h2>Assignment 30 June – Output</h2>
  <script src="assignment 30 june.js"></script>
</body>
</html>
*/