// xử lý số
//bai 1
function theTichHinhCau(r)
{
   return (4/3)*3.14*Math.pow(r,3)
}

console.log(theTichHinhCau(10))
//bai2
function sumN(a,b)
{
    let sum=0
    for(let i=a+1;i<b;i++){
        sum+=i
    }
    return sum

}
console.log(sumN(3,8))
//bai3
function TongUoc(a)
{
    let sum=0;
    for(let i=1;i<=a;i++)
    {
        if(a%i == 0)
        {
            sum+=i
        }
    }
    return sum;
}
console.log(TongUoc(8))
//bai4
function SoNguyenTo(a)
{
 if(a<2){
    return false;
 }
 for(let i=2;i<a;i++)
 {
    if(a%i==0) return false;
 }
 return true;
}
console.log(SoNguyenTo(5))
console.log(SoNguyenTo(8))
//bai5
function SumSoNguyenTo(n)
{
 let sum=0;
 for(let i=0;i<n;i++)
 {
    if(SoNguyenTo(i))
    [
        sum+=i
    ]
 }
 return sum
}
console.log(SumSoNguyenTo(12))
// Xử lý chuỗi 
//bai 1
let str='HELLO world'
    let tuyen=str.trim()
   console.log(tuyen.slice(0,1).toUpperCase().concat(tuyen.slice(1,5).toLowerCase().concat(tuyen.slice(5,7).toUpperCase().concat(tuyen.slice(7)))))
//bai 2
let tuyen2=str.trim()
console.log(tuyen2.toLowerCase().split(' ').join('-'))
//bai 3
function isPalindrome(str) {
    let a = str.trim().split(" ").join("").toLowerCase();
    if (a == a.trim().split("").reverse().join("").toLowerCase()) return true;
    else return false;
  }
  console.log(isPalindrome("woow"));
//bai4
let str3 = "HELLO world";
let str4 = "hey"
function abc(str1, str2) {
  let string1 = str1.toLowerCase().split("");
  let string2 = str2.toLowerCase().split("");
  change = 0;
  for(i = 0; i< string2.length;i++){
    for(j= 0 ; j < string1.length; j++){
      if(string2[i] == string1[j]){
        string1.splice(i,1);
        change+= 1;
        break;
      }
    }
  }
  if (change == string2.length) return true;
  else return false;
}
console.log(abc(str3,str4));
  // xử lý mảng
  //bai1
  arr = [1, 2, false, null,0, undefined, NaN, ""];
function check(arr) {
  return arr.filter(Boolean);
}

console.log(check(arr));
//bai 2
arr2 = ['tuyen', 'yeu', 'thao', 'thao', 'tuyen']
function fil(arr){
  result = []
  max = arr[0].length;
  for(i = 1; i< arr.length; i++){
    if (arr[i].length > max) max = arr[i].length;
  }
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length ==  max) result.push(arr[i])
  }
  return result;
}
console.log(fil(arr2))
//bai 3
function bai3arr(arr1, arr2) {
    return arr1
      .filter(function (x) {
        return !arr2.includes(x);
      })
      .concat(
        arr2.filter(function (x) {
          return !arr1.includes(x);
        })
      );
  }
  
  console.log(bai3arr([1, 2, 3], [1, 3, 4, 5, 5]));
//ojb
//bai1
let arr3=[ { name: 'Huy', age: 20 },{ name: 'tuyen', age: 40 },{ name: 'ruy', age: 20 },{ name: 'huy', age: 10 },]
function getTotalAge(arr3) {
    return arr3.reduce((a, c) => a + c.age, 0);
  }
  console.log(getTotalAge(arr3))
//bai2
function getTotalAge2(arr3) {
    return arr3.sort((a, b) => a.age-b.age);
  }
  console.log(getTotalAge2(arr3))
//bai3
function getTotalName(arr3) {
    return arr3.sort((a, b) => a.name - b.name );
  }
  console.log(getTotalName(arr3))

//bai4
function getTotalAge4(arr3) {
    return arr3.filter( a => (a.name.startsWith("H"))||(a.name.startsWith("h")));
  }
  console.log(getTotalAge4(arr3))

//bai tap tong hop
//bai 2

function day(h,x,y){
  if (x <= y) return 'oc khong len duoc'
  else if (x >= h) return 'oc leo 1 ngay ';
  else return h / (x - y);
}
console.log(day(5,4,3))

