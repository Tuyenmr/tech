function getRandNumbers(min,max,length)
{
    let a=[]
 for(let i=0;i<length;i++)
 {
   a[i]=Math.floor(Math.random()*(max-min)+min)
 }
 return a
}
console.log(getRandNumbers(1,10,4))
function getTotal(arr) {
    let a=0
    for(let i of arr){
         a += i
    }
    return a
}
console.log(getTotal([1, 2, 3]))
function run(object) {
    let a=[]
 for(let i in object)
 {
     a.push('thuoc tinh'+i+'co gia tri'+object[i])
 }
 return a
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));