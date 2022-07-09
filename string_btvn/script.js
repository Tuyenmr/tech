let str=' tuyen nguyen ';
function title(str){
    let tuyen=str.trim()
    return tuyen.slice(0,1).toUpperCase().concat(tuyen.slice(1,5).concat(tuyen.slice(5,7).toUpperCase().concat(tuyen.slice(7))))
     
}
console.log(title(str))
//3
let email='tuyennguyen@gmail.com'
function  protectEmail(email)
{
    let string=email.trim().split("@");
    string[0]=string[0].replace(string[0].slice(2), "...");
    return string.join('@')
}
console.log(protectEmail(email))
//4

function reverse(str){
    return str.split('').reverse().join(' ')
}
console.log(reverse('tuyen nguyen'))
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
  
  console.log(countVowel("tuyenu"));
  //6
  function reverseWords(str){
    let tuyen=str.split(' ').reverse().join(' ')
    return tuyen
  }

console.log(reverseWords('tuyen yeu thao'))
//7
function randomHex(){
    let hexa='#'
    for(let i=0;i<6;i++)
    {
      hexa+=Math.floor(Math.random()*16).toString(16)
    }
    return hexa
}
console.log(randomHex())
//8
function  parameterize(str){
    let tuyen=str.split(' ').join('-')
    return tuyen
}
console.log(parameterize('tuyen huhu aaa'))
//9
function isPalindrome(str) {
    let a = str.trim().split(" ").join("").toLowerCase();
    if (a == a.trim().split("").reverse().join("").toLowerCase()) return true;
    else return false;
  }