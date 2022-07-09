/*console.log('bai 1')

function isLeafYear(year){
    if((year%4 == 0 && year%100 != 0) || year %400 == 0 )
    {
      return console.log(year+' la nam nhuan')
    }
    else
      return  console.log(year+' la nam k nhuan')
}
isLeafYear(2020);
isLeafYear(2021);



console.log('bai 2')
function daysOfMonth(month,year)
{
    if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12)
    {
        return console.log( 'thang '+month+' co 31 ngay')
    }
    if(month==4 || month==6 || month==11 || month==9)
    {
        return console.log( 'thang '+month+' co 30 ngay')
    }

   if(month==2){
    if((year%4 == 0 && year%100 != 0) || year %400 == 0 ){
        return console.log('thang '+month+ ' nam '+year+ ' co 29 ngay')
    }
    else 
    console.log('thang '+month+ ' nam '+year+ ' co 28 ngay')
   }

    if (year<0 ||  month>12 || month<1)
    {
       return console.log('ban nhap sai');
    }

}
daysOfMonth(1)
daysOfMonth(6)
daysOfMonth(2,2000)
daysOfMonth(2,2001)
daysOfMonth(-15,2001)



console.log('bai 3')
function calcGrade(point)
{
    if(point <4 )
    {
        return console.log(point+' xep loai F')
    }
   if (point>=4 && point <5.5 )
   {
       return    console.log( point+' xep loai D')
   }
   if (point>=5.5 && point < 7 )
   {
    return    console.log(point+' xep loai C')
   }
   if (point>=7 && point < 8.5 )
   {
    return    console.log(point+' xep loai B')
   }
   else
    console.log( point+' xep loai A')
}
calcGrade(3.9)
calcGrade(7)
calcGrade(8.7)



console.log('bai 4')
function calcTaxiFee(km){
    if(km<=30)
    {
        return km*11000+10000;
    }
    else
    return km*11000 + (km-30)*9500 +10000;
}

console.log('so tien phai tra sau 2km la '+calcTaxiFee(2)+' vnd')
console.log('so tien phai tra sau 40km la '+calcTaxiFee(40)+' vnd')



console.log('bai 5')
function maxOfThree(a, b, c){
          let max=a;
          if(b>max){
            max=b;
          }
          if(c>max)
          {
            max=c; 
          }
          return max;
}

console.log( 'số lớn nhất trong dãy số: 4,5,4 la: '+ maxOfThree(4,5,4))
console.log( 'số lớn nhất trong dãy số: 1,2,4 la: '+ maxOfThree(1,2,4))



console.log('bai 6')
function solveEquation(a, b, c)
{
    if(a==0)
    {
        if(b==0){
            if(c==0){
                return Infinity;
            }
            return null;
        }
        return -c/b;
    }
    if(a !=0 )
    {
        let delta=b**2-4*a*c;
        if(delta<0)
        {
            return null;
        }
        else
           return  '[x1,x2]=' +[(-b + Math.sqrt(b**2-4*a*c))/(2*a),(-b -Math.sqrt(b**2-4*a*c))/(2*a)];
    }
}
console.log('pt co nghiem la: '+solveEquation(0,0,0))
console.log('pt co nghiem la: '+solveEquation(0,0,2))
console.log('pt co nghiem la: '+solveEquation(0,5,25))
console.log('pt co nghiem la: '+solveEquation(4,2,6))
console.log('pt co nghiem la: '+solveEquation(3,-3,-8))




for(let i=1;i<11;i++)
{
    console.log(i)
}
for (let i=1;i<= 100;i++)
{
    if(i%2==0)
    console.log(i)
}
for(let i=1;i<=10;i++)
{
    console.log(i + ' * 3= '+i*3)
}

for(let i=100;i>0;i--)
{
    if(i%2 !=0) console.log(i)
}*/

const tkmk={
      taikhoan :'tuyen',
      matkhau:1234 ,
}
let taikhoan
let matkhau
while (taikhoan!==tkmk.taikhoan || matkhau !== tkmk.matkhau) {

    taikhoan=import('ten tk');
    matkhau=import('ten mk');
}

console.log('chao mung Tuyen')

