//lap tu 1 - 10
// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }

//in ra so chan trong khoang tu 1 - 100
// for (i = 1; i <= 100; i++) {
//   if (i % 2 == 0) console.log(i);
// }

//in ra bang cuu chuong cua 3
// for (let i = 1; i <= 10; i++) {
//   console.log("3 * " + i + " = " + i * 3);
// }

//in cac so le trong khoang 1 - 100 theo thu tu giam dan
// for (let i = 100; i > 0; i--) {
//   if (i % 2 != 0) console.log(i);
// }

// let accept = false;
// while(accept == false){
//   accept = confirm("gg")
// }
// console.log("go")

// const user = {
//   username: "user",
//   password: "123456",
// };

// let username;
// let password;

// while (username != user.username || password != user.password) {
//   username = prompt("Ten tai khoan");
//   password = prompt("mat khau");
// }
// console.log("wellcome " + user.username);

const girls = ["xinh", "xau", "xau", "xinh", "xau"];

for (let each of girls) {
  if (each != "xinh") {
    continue;
  }

  console.log("nhan tin");
  console.log("choi");
  console.log("di an");
}

function printNumbers(a, b) {
    if(a<b)
    for(let i=a;i<=b;i++)
    {
            console.log(i)
    }
}
printNumbers(1,10)

function printNumbers(a, b) {
    if(a>b)
    for(let i=a;i>=b;i--)
    {
            console.log(i)
    }
}
printNumbers(10,1)

function sumOfOddNumbers(a, b)
{
    let sum=0;
   if(a<b)
   {
    
    for(let i=a;i<=b;i++)
    if(i%2==1){
       sum = sum +i;
    }
    console.log(sum)
   }
   else if(a>b)
   {
    for(let i=a;i>=b;i--)
    if(i%2==1){
       sum = sum +i;
    }
    console.log(sum)
   }

}
sumOfOddNumbers(1,10)
sumOfOddNumbers(100,1)

//bai4 
function  divisor(number){
    for(let i=0;i<=number;i++)
    if(i%number==0)
    {
        console.log(i)
    }
}
divisor(15)
//bai 5
function factorial(number)
{
    let tuyen=1
    for(let i=1;i<number;i++)
    {
        tuyen = tuyen* i;
    }

    return tuyen
}
factorial(3)

//bai 6

function countFolding(thickness){
    thickness *= 1000
    let count=0;
    let curren=0.1;
    while(curren<thickness){
        curren *=2;
        count++;
    }
    return count;
}
console.log(countFolding())

function countYears(dad, son)
{
    let count=0;
    while(dad !=2 *son)
    {
        dad++;
        son++;
        count++;
    }
    return count;

}