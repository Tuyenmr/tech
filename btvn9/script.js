console.log('------------bài 1-----------')
function usd2Vnd(a)
{
    let ketqua=a*23000;
    return ketqua;
}
console.log('2 dolla có mệnh giá là: '+usd2Vnd(2)+' vnd');
console.log('10 dolla có mệnh giá là: '+usd2Vnd(10)+' vnd');
console.log('------------bài 2---------- ')
 function findArea(a,b)
{
    let chieudai=a;
    let chieurong=b;
    let dientich=chieudai*chieurong;
    return dientich;
}
console.log('diện tích hình chữ nhật có độ dài 2 cạnh 2 và 3 là: '+findArea(2,3));
console.log('diện tích hình chữ nhật có độ dài 2 cạnh 3 và 5 là: '+findArea(3,5));
console.log('------------bài 3----------')
function celsiusToFahrenheit(c)
{
    let f=c*1.8+32;
    return f;
}
console.log('0 độ C tương ứng với '+celsiusToFahrenheit(0)+' độ F');
console.log('37 độ C tương ứng với '+celsiusToFahrenheit(37)+' độ F');
console.log('100 độ C tương ứng với '+ celsiusToFahrenheit(100)+' độ F ');


console.log('------------bài 4----------')
function pow(a,b)
{
    let luythua= a**b;
    return luythua;
}
console.log('2 mũ 2 bằng: '+pow(2,2) );
console.log('3 mũ 3 bằng: '+pow(3,3));
console.log('5 mũ 1 bằng: '+pow(5,1));

console.log('------------bài 5----------')

function findArea0fTriang(a,b,c)
{
 let p=(a+b+c)/2;
 let s= Math.sqrt(p*(p-a)*(p-b)*(p-c));
 return s;   
}
console.log('diện tích tam giác với độ dài 3 cạnh 10 17 và 21 là: '+ findArea0fTriang(10,17,21))

 