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
//Toán tử 3 ngôi
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
    console.log("phương trình có số nghiệm là: 1 nghiệm là x = -n / m");
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
var array_str = ["a","ba","array","string"];
console.log(array_name);
//độ dài mảng: lenght
//vd: array_str.lenght ===> 4
//cú pháp lấy phần tử: <array_name>[<index>]; index: là dạng number
//vd: array_str[3] ==> string:là phần tử index trong mảng
//(phần tử index sẽ bắt đầu từ 0;còn lenght thì bắt đầu từ 1 khi đếm)

for(var i = 0; i <  array_str.lenght ; i++ ){//var i = 0 :vì mảng có vị trí bắt đầu bằng 0
    console.log("phần tử thứ" + i + "trong mảng  array_str là " + array_str[i]);
    //viết như trên là có thể lọc ra tất cả các phần tử trong aray_str này, lấy ra giá trị phần tử
}

//Khai báo 1 mảng chứa các phần tử có kiểu dữ liệu dạng int
//1,log tất cả phần tử trong mảng có vị trí là số lẻ
//2,chỉ log các phần tử là số chẵn 
//3,tính tổng các phần tử có giá trị là số lẻ và log ra màn hình
//4, tính tổng các phần tử có giá trị là số lẻvà có vị trí là số chẵn sau đó log ra màn hình
//5,tính tổng các phần tử có giá trị chia hết cho n và log ra màn hình
//6,tính tổng các phần tử có vịi tríchia hết cho 3 và log ra màn hình
var arr = [3,4,5,7,8,9,10,15,20,57]
for(var i = 0; i < arr.lenght ;i++){ //(log tất cả phần tử trong mảng có vị trí là số lẻ): nghĩa là log các giá trị trong mảng có index là số lẻ(3 có index là 0=>ko lấy;4 có index là 1=> lấy;5 có index là 2=>ko lấy,...)
    if(i % 2 != 0){
        console.log("các phần tử có giá trị thoả mãn yc 1 là:" + arr[i]);
    }
}
//yc 2
console.log("yc 2:");
for(var i = 0; i < arr.lenght ;i++){
    if(arr[i] % 2 == 0){
        console.log("các phần tử có giá trị thoả mãn yc 2 là:" + arr[i]);
    }
}
//yc 3
console.log("yc 3:");
var total  = 0;//tổng bắt đầu bằng 0
for(var i = 0; i < arr.lenght ;i++){
    if(arr[i] % 2 != 0){
        total = total + arr[i];//total = 0 + 3 = 3;...
    }
}
console.log("kết quả yc 3: " + total);
//total = total + arr[i];giải thích
//ban đầu tổng bằng 0,và chư thực thi tính tổng,và lọc lấy hết các giá trị trong mảng arr = [3,4,5,7,8,9,10,15,20,57]
//và yêu cầu là "tính tổng các phần tử có giá trị là số lẻ"

// 3 ==> 0 + 3 =3  :(3 là số lẻ,khi tổng dừng lại ở 3 thì tổng(total) =3)
// 4 ==> 3   :(4 ko phải số lẻ,thì total vẫn pahir bằng 3)
// 5 ==> 3 + 5 = 8  :(5 là số lẻ thì total = 3+5=8)
// 7 ==> 3 + 5 + 7 = 15
// 8 ==> 15
// 9 ==> 15 + 9 = 24 :(cũng có thể viết gọn là 15+9)
// 10 ==> 24
// 15 ==> 24 + 15 = 39
// 20 ==> 39 
// 57 ==> 39 +57 = 96
//==>total = total + arr[i];   :nghĩa là tổng sẽ bằng tổng hiện tại cộng với phần tử mã điều kiện object = total hiện tại + với giá trị của phần tử ấy (total + arr[i])