console.log("Welcome to javascript in Devmaster");
//Biến, hằng
// Khai báo biến : let, var
var name = "Hiền Hiền";
console.log("Welcom,",name);
var name = "Devmaster"
console.log("Welcom,",name);//Khai báo lại
var age=4;
console.log("Welcom,",name,age);
age=100;// gán lại giá trị cho biến
console.log("Welcom,",name,age);
//local(let)
let address ="25 Vũ Ngọc Phan, Láng Hạ, Đống Đa, Hà Nội";
console.log("Address:",address);

//let address ="25 Vũ Ngọc Phan"; => lỗi ở đây

// Gán lại giá trị ( let)
address ="Tầng 6, Tòa Viện Công Nghệ , Số 25 Vũ Ngọc Phan";
console.log("Address:",address);

//hằng : biến hằng  -> không cho kkhai báo lại, không cho phép khai báo lại
const PI= 3.14;
console.log("PI:",PI);
//gán lại -> lỗi ->Assignment to constsnt variable.
PI=3.2415;
console.log("PI:",PI);
//không cho phép khai báo lại
//const PI= 3.141555;//lỗi -> Identifier 'PI' há already been declared
