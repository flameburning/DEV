// zone3
document.bgColor = "red";
function fn_ClickHere(){
    document.body.style.color = "yellow";
}
//end

// alert('Chào mừng bạn đến với Devmaster')

//Biến
// 1,Quy tắc khai báo
// cách 1:data_type name ;
//<kiểu dữ liệu> <tên biến>
//Cách 2: <data_type> name = <value>;

//data_type : định nghĩa: int number = 15; string str = Devmaster; 
//             tự định nghĩa: var x = 15; ==> kiểu dữ liệu của x là dạng số
//                            left y = 15; ==> kiểu dữ liệu của y là chuỗi


//Toán tử trong js

//Toán tử số học

//số học: + ; - ; * ; / ; %

var number1 = 10;
var number2 = 20;
var str1 = "Devmaster";
var str2 = "JS";

var totalNumber = number1 + number2;

var string = str1 + str2;
document.write(string);
console.log(totalNumber);
console.log(string);

// *Lưu ý:
//1,  số + số = số
//2, chuỗi + chuỗi = chuỗi
//3, số + chuỗi = chuỗi

var a = 10;
var b = "50";

var c = a + b;
var d = parseInt(a) + parseInt(b)
console.log("c = a + b = " + a + " + " + b + " = " + c);
console.log("d = a + b = " + a + " + " + b + " = " + d);


//Toán tử so sánh:
//so sánh về value: == ; > ; < ; >= ;<= 

//so sánh cả value và data_type: ===
//debugger;
if( a == b){
    console.log("a và b bằng nhau");
    if(a === b){
        console.log("a và b cùng dữ liệu");
    }
}
console.log(typeof(a));
console.log(typeof(b));

var x = 10;
var y = 15;

var z = (x > y) ? (x - y) : (y - x);
console.log("z = " + z);

//Biện luận  số nghiệm của phương trình bậc nhất 1 ẩn : m*x + n = 0
 
var m = 5;
var n = 10;

if( m == 0){
    if(n == 0){
          //0*x + 0 = 0
          console.log("phương trình có số nghiệm là: vô số nghiệm");
    }else{
        
        console.log("phương trình có số nghiệm là:vô nghiệm");
    }
} else{
    console.log("phương trình có số nghiệm là: 1 nghiệm");
}

//console.log("phương trình có số nghiệm là:");

for(var i = 0; i < 10; i++){
            console.log(i + 1);
}
console.log("da het for");

//Bước 1: Khởi tạo biến đếm
//Bước 2: Kiểm tra điều kiện
//       nếu true: thực thi các câu lệnh trong khối {}
//                tương tác biến đếm
//                 trở lại bước 2
//       nếu false: dừng vòng lặp

//khai báo 1 số bất kỳ p; log ra màn hình tất cả các giá trị thỏa mãn điều kiện là số chẵn và nhỏ hơn p
var p = 20;
for(var i = 1; i < p; i++){
    if( i % 2 == 0){
        console.log(i);
    }else{
        console.log("số lẻ:" + i);
    }
}
  //Array:mảng
var array_name = [1,5,8,15,30,45];
var array_str = ["a","ba","array"];
console.log(array_name);
//độ dài mảng: lenght
//vd: array_str.lenght ===> 4
//cú pháp lấy phần tử: <array_name>[<index>]
//vd: array_str[3] ==> string

for(var i = 0; i <  array_str.lenght ; i++ ){
    console.log("phần tử thứ" + i + "trong mảng  array_str là " + array_str[i]);
}

//Khai báo 1 mảng chứa các phần tử có kiểu dữ liệu dạng int
//1,log tất cả phần tử trong mảng có vị trí là số lẻ
//2,chỉ log các phần tử là số chẵn 
//3,tính tổng các phần tử có giá trị là số lẻ và log ra màn hình
//4, tính tổng các phần tử có giá trị là số lẻ và có vị trí là số chẵn sau đó log ra màn hình
//5, tính tổng các phần tử có giá trị chia hết cho n và log ra màn hình
//6,tính tổng các phần tử có giá trị chia hết cho 3 và log ra màn hình
var arr = [3,4,5,7,8,9,10,15,20,40,57]
for(var i = 0; i < arr.lenght ;i++){
    if(i % 2 != 0){
        console.log("các phần tử có giá trị thoả mãn yc 1 là:" + arr[i]);
    }
}
//yc 2
for(var i = 0; i < arr.lenght ;i++){
    if(arr[i] % 2 == 0){
        console.log("các phần tử có giá trị thoả mãn yc 2 là:" + arr[i]);
    }
}
//yc 3
var total  = 0;
for(var i = 0; i < arr.lenght ;i++){
    if(arr[i] % 2 != 0){
        total = total + arr[i];
    }
}
console.log("kết quả yc 3: " + total);
//yc 4
var total  = 0;
for(var i = 0; i < arr.lenght ;i++){
    if(arr[i] % 2 != 0){
        total = total + arr[i];
    }
}
for(var i = 0; i < arr.lenght ;i++){
    if(i % 2 == 0){
        console.log("các phần tử có giá trị thoả mãn yc 4 là:" + arr[i]);
    }
}
