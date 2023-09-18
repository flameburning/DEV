var listItem =[{
    id : 1,
    name : "C++",
    content : "Curious which components explicitly require jQuery",
    image :"https://devmaster.edu.vn/uploads/images/course/csharp.jpg",
},
{
    id : 2,
    name : "ASP NET",
    content : "Curious which components explicitly require jQuery",
    image :"https://devmaster.edu.vn/uploads/images/course/java_form.jpg",
},
{
    id : 3,
    name : "devmaster",
    content : "Curious which components explicitly require jQuery",
    image :"https://devmaster.edu.vn/uploads/images/course/android.jpg",
},
{
    id : 4,
    name : "IT",
    content : "Curious which components explicitly require jQuery",
    image :"https://devmaster.edu.vn/uploads/images/2022/Devmaster-frontend%20(1).png",
},
{
    id : 5,
    name : "NET CORE",
    content : "Curious which components explicitly require jQuery",
    image :"https://devmaster.edu.vn/uploads/images/course/android.jpg",
},
{
    id : 6,
    name : "Salary",
    content : "Curious which components explicitly require jQuery",
    image :"https://devmaster.edu.vn/uploads/images/2022/Devmaster-frontend%20(1).png",
}]

function setItem(arr){
    $("#list-item").html('');
   for(var i = 0; i<arr.length ;i++){
       renderItem(arr[i]);
   }
}

function renderItem(obj){
    var item = `  <div class="col-3 mb-4">
    <div class="card">
        <img class="card-img-top" src="${obj.image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${obj.name}</h5>
          <p class="card-text">${obj.content}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>`;
    $("#list-item").append(item);
}
$(document).ready(function(){
    setItem(listItem);
})


var pageSize = 5;
var pageIndex = 1;