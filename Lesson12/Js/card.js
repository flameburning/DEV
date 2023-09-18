var listItemCard =[{
    id : 1,
    name : "C++",
    content : "Curious which components explicitly require jQuery",
    image :"https://devmaster.edu.vn/uploads/images/course/csharp.jpg",
    price : 100000,
    limit: 100,
},
// {
//     id : 2,
//     name : "ASP NET",
//     content : "Curious which components explicitly require jQuery",
//     image :"https://devmaster.edu.vn/uploads/images/course/java_form.jpg",
//     price : 100000,
//     limit: 100,
// },
]

function setItemCard(arr){
    $("#list-card").html('');
   for(var i = 0; i<arr.length ;i++){
       renderItemCard(arr[i]);
   }
}

function renderItemCard(obj){
    var item = ` <div class="col-12">
    <div class="card mb-3" id="card-${obj.id}" data-id="${obj.id}">
        <img class="card-img-top" src="${obj.image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${obj.name}</h5>
          
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <div class="d-flex justify-content-between">
            <div>
                Gia thanh ssan pham: ${obj.price}<span>vnd</span>
                <input type="number" id="qlty-${obj.id}">
            </div>
          </div>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        
        </div>
      </div>
</div>`;
    $("#list-card").append(item);
}
$(document).ready(function(){
    setItemCard(listItemCard);
})

var result = 0;
function getQlty(){
   for(var j = 0;j< listItemCard.length;j++){
    var number = $("#qlty-" + listItemCard[j].id).val();
    if(number > listItemCard[j].limit){
        alert("chi con" + listItemCard[j].limit + "san pham")
    }else{
       var payItem = total(0,listItemCard[j].price,number);
       result = result + payItem; 
    }
   }
   $("#total-price").text(sum);
   result = 0;
}


function total(id,price,qlty){
    var sum = price * qlty;
    // 
    return parseInt(sum);
}