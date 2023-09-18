//Toán tử đặc biệt
//()?x:y
x=100;
y=200;

z= (x>y)?x:y; //z=200
console.log("z=(",x,">",y,")?=>",z);

z= (x>y)?"Long":"Hổ"; //z=Hổ
console.log("z=(",x,">",y,")?=>",z);

//Typof => xác định kiểu dử liệu của biến/hằng

kq = typeof(x);
console.log("kiểu:",kq);//kiểu :number

x="100";
kq = typeof(x);
console.log("kiểu:",kq);//kiểu: string

x=100.34;
kq = typeof(x);
console.log("kiểu:",kq);//kiểu: number

x={
    name:"Hiền",
    age:19
}
kq = typeof(x);
console.log("kiểu:",kq);//kiểu: object

x=[
    "Hiền",19
]
kq = typeof(x);
console.log("kiểu:",kq);//kiểu: object

x=()=>{
    console.log("Xin chào ai đó");
}
kq = typeof(x);
console.log("kiểu:",kq);//kiểu: function

//Các hàm chuyển đổi

x="100";//string
kq=parseInt(x);// kq: number -> giá trị tính toán kiểu int

y="123.23";//string
console.log(y);//->123.23(số màu trắng)

y=parseFloat(y);// number -> float
console.log(y);//->123.23(dạng số)

y=parseInt(y);
console.log(y);//123(số nguyên)

x="123";
y=456;
z=x+y;
console.log(z);//->123456


z=eval(x+y);
console.log(z);//->123456(string)
console.log(typeof(z));//->123456(number)
//eval: khi thực hiện xong phép toán mới chuyển về kiểu số

m=eval(z=x+y, z++);
console.log(m);



