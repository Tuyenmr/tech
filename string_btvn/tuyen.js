let namee=['thao','uyen2','tuyen3','tuyen4']
let str='tuyen';
str.startsWith
function upptoLowercase(name,index){
    console.log(name.toUpperCase()+index)
}
//forEach
namee.forEach(upptoLowercase);
namee.forEach(console.log)
//Find-callback tra ve gia tri boolean
let tuyen=namee.find(function(name){
    if (name.startsWith('tu')) return true;
    else return false;
})
console.log(tuyen)
//filter
let tuyen2=namee.filter(function(name){
    return name.startsWith('t')
})
console.log(tuyen2)
//map
let tuyen3=namee.map(function(name){
    return name.charAt(1)
})
console.log(tuyen3)
//
let tuyen4=namee.map(function(name){
    return name.length
})
console.log(tuyen4)
//reduce
let arr=[1,2,8,11,6]

let tuyen5=arr.reduce(function(sum,number){
    sum+=number;
    return sum
},10)
console.log(tuyen5)
//short
let tuyen6=arr.sort(function(number1,number2){
    if(number1>number2) return -1
    else
    return 1;
})
console.log(tuyen6)

let tuyenok={
    name:'tuyen',

};
let thao={
    name:'thao',

};
let trong={
    name:'trong',

};
let trung={
    name:'trung',

};
let hocvien=[tuyenok,thao,trong,trung];
let tuyen7=hocvien.sort(function(hocvien1,hocvien2){
    if(hocvien1.name<hocvien2.name) return -1;
    else return 1
})
console.log(tuyen7)

//btvn
//8
function intersection(arr1, arr2){
    let a=[];
    for(let i=0;i<arr1.length;i++)
    {
        for(let j=0;j<arr2.length;j++)
        {
            if(arr1[i]==arr2[j])
                {
                    a.push(arr1[i])
                }
        }
    }
    return a;
}
console.log(intersection([1,2,3],[3,4,5]))
//1
const arrr=[5, 3, 8, 1]
function filterRange(arrr, a, b){
    return arrr.filter((item) => a <= item && item <= b);
}
console.log(filterRange(arrr, 1, 4));
