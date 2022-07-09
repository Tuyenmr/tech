
let str = "hello WOrld";

function capitalize(str) {
  let trimed = str.trim();
  return trimed.slice(0, 1).toUpperCase().concat(trimed.slice(1).toLowerCase());
}

console.log(capitalize(str));

let namee = ['tuyen','trong','trung','thuan']
for(let i=0;i<namee.length;i++){
   console.log(namee[i])
}

for(let key of namee)
{
   //console.log(key)
}
for(let key of 'tuyen nguyen')
{
    //console.log(key)
};
//console.log(namee.reverse())
let arr = ["Linh", "Nhi", "Hùng", "Hà", "Mai Anh"]
console.log(arr)
console.log(arr.length)
console.log(arr[0])
console.log(arr[3])
console.log(arr[arr.length-1])
console.log(arr[-1])
for(let i=0;i<arr.length;i++)
{
   console.log(arr[i])
}
for(let i=0;i<=arr.length;i++)
{
   console.log(arr[i]+ arr.indexOf(arr[i]))
}

for(let i=arr.length-1;i>=0;i--)
{
   console.log(arr[i]+ arr.indexOf(arr[i]))
}
console.log(arr.push('ba'))
console.log(arr)