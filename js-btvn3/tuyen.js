let Tuyen= {
   myNAme:'tuyen',
   tuoi:14,
   que:'nam dinh',
   sodt:0923878751,
   an: function () {
    console.log('an mi tom')
   },
   choigame: function () {
        console.log('choi lien quan')
   }
}
console.log(Tuyen);
Tuyen.an();
Tuyen['choigame']();

// let obj={
//     a: 1,
//     b: 2,
//     name:'tuyen dz vcl'
// }
//const key =prompt("nhap vao gia tri");

//console.log(obj[key])
// for(let key in Tuyen)
// {
//     console.log(key);
// }
// for(let key in Tuyen)
// {
//     console.log(Tuyen[key]);
// }
let tuyen ={
    name:'tuyen',
    noi(){
       console.log('toi la '+this.name)
    }
}

tuyen.noi()

let thao={
    nam :'thao'
}

let dog = {
    name: "bingo",
    age: 1,
    breed: "husky",
    legs: 4,
  
    bark() {
      console.log(this.name + "is barking");
    },
  
    run() {
      console.log(this.name + " go " + this.breed + " ngao");
    },
    gg() {
      this.bark(); 
      this.run();
    },
  
    //obj to pimitive
    //tu dong goi khi can chuyen doi tuong ve kieu nguyen thuy
    toString() {
      return this.name;
    },
    valueOf() {
      return this.age;
    },
  };
  
  dog.gg();
  
  console.log(dog - 1);
  
function book(trang, dong, tieude,){
        this.trang=trang;
        this.dong=dong;
        this.tieude=tieude;
}
const book1= new book('1','12','js')
const book2= new book('2','12','js')
const book3= new book('3','12','js')
const book4= new book('4','12','js')
console.log(book1);
console.log(book2);
console.log(book2);

function Weapon(type,damege,speed)
{
    this.type=type;
    this.damege=damege;
    this.speed=speed;
}
function character(name, level,Weapon)
{
    this.nam=name;
    this.level=level;
    this.Weapon=Weapon;
}
character.prototype.attack =function()
{
      
}
character.prototype.chageweapon =function()
{
  this.Weapon= new Weapon;
}

const vukhi1= new Weapon('dao','300','3')
const vukhi2= new Weapon('kiem','400','3')
const tuyencute= new character('tuyen','12',vukhi1)
const tuyencute2= new character('thao','12',vukhi2)

console.log(tuyencute2)

tuyencute.chageweapon(vukhi2)
console.log(tuyencute)