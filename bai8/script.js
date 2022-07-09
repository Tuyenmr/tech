//alert("xin chao");
//alert để hiển thị thông báo trong trình duyệt
// không bắt buộc có dấu ; nhưng nên sử dụng.

console.log("Tuyen dz vcl");
//hiển thị kết quả ra tab console
// biến var,let.const để khai báo biến
//cú pháp keyword var="data"
let myname = "tuyen";
let myage = 22;
let myjob = "sinh vien";
let myhobbies = "play game";
//khai báo biến không kèm giá trị.
let myPhoneNumber;
//biến giống như hộp cho phép mình chứa giá trị bên trong.
myPhoneNumber = "0923878751";
//thay đổi dữ liệu của biến
myjob = "deleloper";
console.log(myPhoneNumber, myname);
console.log(myname);
console.log(myhobbies);
console.log(myjob);
//hằng số const sử dụng chho nhữ giá trị
//xác định đc từ đàu và giá trị ban đầu của nó.

// số- sử dụng ký tự số để biểu diễn
let todayLuckynumber = 68;
let myHeight = 1.69;
// chuỗi sử dụng kí tự bất kì
// chuỗi đặt trong "" ''
let myName = "tuyen :))";
//logic(boolean) chỉ có 2 hằng số true/fales;
let iAmTuyen = true; // 1
let iAmRic = false; // 0
// undefined-đại diện 1 giá trị chưa đc xác định;
let something;
//null- đại diện cho một biến không có giá trị
let abc = null;
// object, function - kiểu phức hợp
// lưu tữ nhiều giá trị trong 1 biến duy nhất
// mỗi giá trị ánh xạ 1 khóa
let tuyen = {
  name: "Tuyen",
  age: 22,
  job: "deleloper",
  iHanSome: true,
};
console.log(tuyen);
// cú pháp truy cập từng giá trị cụ thể
//opbject.key
console.log(tuyen.name);
console.log(console);
console.error("loi roi em");
// typeof kiem tra du lieu su dung
console.log(typeof tuyen);
console.log(typeof todayLuckynumber);
console.log(typeof myName);
console.log(typeof myhobbies);
console.log(typeof myHeight);
//function là cách để cấu trúc mã(goí các đoạn mã tahfnh 1 block )
// giúp tái sử dụng mã
// function chương trình
// cú pháp function funcName()
// input của hàm đc khai báo bên trong () para
function greeting(name) {
  console.log("ham nhan vao tham so name gia tri la:", name);
  console.log("chao mung " + name + " den voi trang web");
}
//gọi hàm
// truyền input vào cho hàm -aeguments
// input truyền vào theo thứ tự tương ứng trong khai báo
greeting("tuyen");
greeting("tuyen2");
greeting("tuyen3");

function sum(a, b) {
  let ketqua = a + b;
  return ketqua;
}
let ketqua = sum(1, 2);
console.log("ket qua phep tinh 1+2 la " + ketqua);

function sub(a,b){
    let ketqua2= a-b;
    return ketqua2;
}
let ketqua2 = sub(5,4);
console.log('ket qua phep tinh' + 5 + '-' + 4 + 'la '+ketqua2)
function mucal(a,b){
    let ketqua3= a*b;
    return ketqua3;
}
let ketqua3 = mucal(5,4);
console.log('ket qua phep tinh 5*4 la '+ketqua3)

function div(a,b){
    let ketqua4= a/b;
    return ketqua4;
}
let ketqua4 = div(20,4);
console.log('ket qua phep tinh 20/4 la '+ketqua4)
console.log('ket qua phep tinh 20/4 la '+div(20,4))
// với toán tử cộng 
// nếu có 1 toán hạng là chuỗi thì sẽ kết quả chuyển về chuỗi
// còn lại tát cả trường hợp khác thì chuyển về số cộng số
// tất cả toán tử khác cũng chuyển về số
// NaN > nếu là cộng chuỗi thì là chuỗi 
// >nếu là các phép 


let troimua=true
if (troimua){
  console.log('mac ao mua')

}
else
console.log('k mac ao mua')
//let tuyen1=confirm('ban dong y xoa khong');

//let input= prompt('vui long nhap thong tin')

//if (input % 2==0){
 // console.log(+input+'day la so chan')
//}
//else
//console.log('day la so le')

console.log('------------------------------')

function isOddNumber(number){
  if(number % 2 !=0)
  {
  
    console.log('day la so le')

  }
  else{
    
    console.log('day la so chan')
  }
}
isOddNumber(5)

console.log('cau 2')

function maxOfTwo(a, b){
  if(a>b)
  {
    console.log(+a+' lớn hơn '+b)
    return true;
  }
  else
  console.log(a+' nho hon '+b)
      return false;
}
maxOfTwo(5,4)

console.log('cau 1')
function isOddNumberT(number){
  if(number % 2 !=0)
  {
  
    return true;

  }
  else{
    
    return false;
  }
}
console.log(isOddNumberT(5))
console.log('bai 3')

function  divisibleByThreeAndFive(number)
{
  if(number % 3==0 && number %5 ==0)
  {
    return true;
  }
    else return false;
}

console.log(divisibleByThreeAndFive(11))

console.log('cau 4')
function season(month){
  if(month==1 || month==12 || moth==2)
  {
    console.log('la mua xuan')
  }
  else if(moth==3 || moth==4 || moth==5)
  {
    console.log( 'la mua ha')
  }
  else 
  console.log('la mua thu')
}
season(12)
console.log('cau 6')
function calcCommissions(totalSales)
{
    if(totalSales<=10000){
      return totalSales*5/100;
    }
    else if(10000<totalSales<30000)
    {
      return totalSales*10/100;
    }
    else
    return totalSales*20/100;
}
console.log(calcCommissions(10000));


console,log('cau 1')

function isLeafYear(year){
  if(year%4==0 && year%100 !=0 || year %400 == 0 )
  {
    console.log('nam nhuan')
  }
  else console.log('k phai nam nhuan')
}



