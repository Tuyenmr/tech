let dog={
    name:'micky',
    age:2,
    bread:'ta',
    gender:'duc',
    color:'vang',
    legs:4,
    favoritefood:'keo',
    eat(){
       console.log(this.name+' is eating '+this.favoritefood+', yum yum' )
    },
    run(){
        console.log(this.name +' is running on '+ this.legs +' legs')
    },
    bark(){
        console.log(' woof woof wooof... ' )
    }
}
console.log(dog)
console.log(dog.name)
console.log(dog.favoritefood)
dog.color="brown";
dog.age= dog.age +2;
dog.eat();
dog.run();
for(let key in dog){
    console.log(key)
}
for(let key in dog)
{
    console.log(dog[key])
}
dog.isCrazy=true;
dog.Crazy= function(){
   console.log('con cho dien')
};

if(dog.isCrazy==true){
   for(let i=1;i<=5;i++)
   {
    console.log(dog.name+' is running on '+dog.legs+' legs...woof woof woof'+dog.name+' is running...woof woof')
   }
}
else{
    console.log(dog.name+' not is crazy')
};

dog.isCrazy=false;
dog.Crazy();
delete dog.isCrazy;

for(let key in dog)
{
    console.log(key+' '+dog[key] +" la "+ typeof dog[key])
};

//coppy clone

let coppy={};
for(let key in dog)
{
   coppy.key=dog.key;
   coppy[key]=dog[key];
    
};
console.log(coppy);
coppy.name='trong';
console.log(coppy)

function dogg(name,age,bread,gender,color,legs,favoritefood){
    this.name=name;
    this.age=age;
    this.bread=bread;
    this.gender=gender;
    this.color=color;
    this.legs=legs;
    this.favoritefood=favoritefood;
}

let clone= new dogg('Trong',2,'ta','duc,vang',4,'keo');
console.log(clone);

///Intermediate
//bai1
const guess_list = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
   };

   let input = prompt("Nhập name: ");
   function greeting(name) {
     let check=false;
     for (let key in guess_list)
      {
       if (key == name) {
         console.log("Hi,I'am " + key + " I'm from " + guess_list[key]);
         check = true;
       }
     }
     if (check == false) {
       console.log("Hi! I'm a guess.");
     }
   }
greeting(input)
//bai2
const family = {
    Susan: 32,
    Fred: 34,
   }
   console.log(family)
function afterNYears(family, years)
{
    for(let key in family)
    {
        console.log(key+' : '+(family[key]+years))
    }
}
afterNYears(family,5);
//bai4
const obj = { a: 1, b: 2, c: 3 };
function invert(object) {
  for (let key in object) {
    let va = object[key];
    k = key;
    delete this.key;
    this.k = va;
  }
}

invert(obj);
console.log(obj);


