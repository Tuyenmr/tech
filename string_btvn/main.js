//string - basic
//1
let str = " hello WOrld ";

function capitalize(str) {
  let trimed = str.trim();
  return trimed.slice(0, 1).toUpperCase().concat(trimed.slice(1).toLowerCase());
}

console.log(capitalize(str));

//2

let str1 = " hello world t23 ";

function title(str) {
  let string = str.trim().split(" ");
  for (let i = 0; i < string.length; i++) {
    string[i] = string[i]
      .slice(0, 1)
      .toUpperCase()
      .concat(string[i].slice(1).toLowerCase());
  }
  return string.join(" ");
}

console.log(title(str1));

//3

let email = "baga@gmail.com";

function protectEmail(email) {
  let string = email.trim().split("@");
  string[0] = string[0].replace(string[0].slice(2), "...");
  return string.join("@");
}

console.log(protectEmail(email));

//4
function reverse(str) {
  return str.split("").reverse().join("");
}

console.log(reverse("hello ba ga"));

//5
function countVowel(str) {
  count = 0;
  for (i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log(countVowel("truog"));

//6
let str2 = "thuan ga hoi non";

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseWords(str2));

//7
function randomHex() {
  let hex = "#";
  for (let i = 0; i < 6; ++i) {
    hex += Math.floor(Math.random() * 16).toString(16);
  }
  return hex;
}

console.log(randomHex());

//8
function parameterize(str) {
  return str.trim().split(" ").join("-");
}

console.log(parameterize(" thuan hoi non "));

//9
function isPalindrome(str) {
  let a = str.trim().split(" ").join("").toLowerCase();
  if (a == a.trim().split("").reverse().join("").toLowerCase()) return true;
  else return false;
}
console.log(isPalindrome(" ba aB "));
console.log(isPalindrome(" ba ga "));
//Intermediate - string
//1
str = "tuyen non";
function mostCommonCharacter(str) {
  obj = {};
  return obj;
}

console.log(mostCommonCharacter(str));

//2
const students = [
  { name: "Hoàng Thị Ngọc Linh", point: 0 },
  { name: "Bùi Lan Nhi", point: 0 },
  { name: "Nguyễn Ba", point: 10 },
];

// let a = students[0].name.split(" ");
// console.log(((students[0].name.split(" "))[(students[0].name.split(" ")).length - 1]));

function sortByName(students) {
  for (let i = 0; i < students.length; i++) {
    let idmin = i;
    for (let j = i + 1; j < students.length; j++) {
      if (
        students[j].name.split(" ")[students[j].name.split(" ").length - 1] <
        students[idmin].name.split(" ")[
          students[idmin].name.split(" ").length - 1
        ]
      )
        idmin = j;
    }
    let tg = students[0];
    students[0] = students[i];
    students[i] = tg;
  }
  return students;
}
console.log(sortByName(students));

//basic array

let arr = ["Linh", "Nhi", "Hùng", "Hà", "Mai Anh"];

console.log(arr);

console.log(arr.length);

console.log(arr[0]);

console.log(arr[2]);

console.log(arr[arr.length - 1]);

console.log(arr[-1]);

for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

arr.push("Ba");

arr[arr.length] = "Thảo";

arr.unshift("Béo ú");

arr.pop();

arr.shift();

arr.slice(0, 2);

arr.slice(0);

arr.slice(arr1.length - 3); //lay 3 phan tu cuoi

arr.splice(1, 2); // xoa phan tu thu 2,3

arr.splice(1, 0, "Nhi", "Hùng"); // 1-start, 0 - so phan tu muon xoa

console.log(arr.indexOf("Ba"));

console.log(arr.indexOf("Thảo"));

console.log(arr.includes("Mai Anh"));

console.log(arr.toString());

arr.join("-");

arr.reverse();

[arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];

arr.splice();

//intermediate
//1
function max(arr) {
  let gg = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (gg < arr[i]) gg = arr[i];
  }
  return gg;
}

console.log(max([1, 5, 3, 4, 2]));

//2
let arr = [1, 5, 3, 4, 2];

function minMax(arr) {
  a = [];
  arr.sort(function (a, b) {
    return a - b;
  });
  a.push(arr[0]);
  a.push(arr[arr.length - 1]);
  return a;
}

console.log(minMax(arr));

//3
function avg(arr) {
  count = 0;
  for (i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  return count / arr.length;
}

console.log(avg([1, 5, 3, 4, 2]));

//4
let a = [1, 5, 3, 4, 2];

function swap(arr, x, y) {
  let tg;
  tg = arr[x];
  arr[x] = arr[y];
  arr[y] = tg;
  return arr;
}

swap(a, 0, 2);

console.log(a);

//5
function secondLargest(arr) {
  arr.sort();
  return arr[arr.length - 2];
}

console.log(secondLargest([1, 5, 3, 4, 2]));

//6
function mix(arr1, arr2) {
  concat = [];
  for (i = 0; i < arr1.length; i++) {
    concat.push(arr1[i]);
    concat.push(arr2[i]);
  }
  return concat;
}

console.log(mix([1, 2, 3], [4, 5, 6]));

//7
const arr = [10, 12, 15];
function shuffle(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

console.log(shuffle(arr))