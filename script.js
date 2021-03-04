var flag = 0;
var f1 = 0;
var f2 = 0;
var f3 = 0;
var f4 = 0;
var cat1=0;

function cat(){
  cat1=1;
}

var form = document.querySelector("#form1");

form.addEventListener('submit', function(e) {
  e.preventDefault();
  var name = document.querySelector("#title1").value;
  if (name === '') {
    alert("Title is required.");
    flag = 1;
  } else if (name.length < 2 || name.length > 65) {
    alert("Title should have 2 to 65 characters.")
    flag = 1;
  }
  var price = document.querySelector("#price1").value;
  if (price === '') {
    alert("Price is required.");
    flag = 1;
  }
  var numbers = /^[0-9]+$/;
  if (!price.match(numbers)) {
    alert("Price has to be a number");
    flag = 1;
  }

  var dol = document.querySelector("#dateOfLaunch1").value;
  if (dol === '') {
    alert("Date of launch is required");
    flag = 1;
  }

  /*var category = document.querySelector("#category1").value;
  if (category === "Select") {
    alert("Select one category");
    flag = 1;
  }*/

  if(cat1==0){
    flag = 1;
    alert("Select one category");
  }
  if (flag == 0) {
    location.href = "edit-menu-item-status.html"
  } else {
    document.location.reload(true);
  }
});

function addToCart() {
  document.querySelector("#myDiv").innerHTML = "Item Added to Cart Successfully";
}

function delCart1() {
  document.querySelector("#myDivCart").innerHTML = "Item Deleted from Cart Successfully";
  document.querySelector("#a").remove();
  document.querySelector("#t").innerHTML = "278.00";
  if (f2 == 1 && f3 == 0) {
    document.querySelector("#t").innerHTML = "149.00";
  }
  else if (f3 == 1 && f2 == 0) {
    document.querySelector("#t").innerHTML = "129.00";
  }
  f1 = 1;
  if(f1+f2+f3==3) {
    location.href = "cart-empty.html";

  }
}

function delCart2() {
  document.querySelector("#myDivCart").innerHTML = "Item Deleted from Cart Successfully";
  document.querySelector("#b").remove();
  document.querySelector("#t").innerHTML = "248.00";
  if (f1 == 1 && f3 == 0) {
    document.querySelector("#t").innerHTML = "149.00";
  }
  else if (f3 == 1 && f1 == 0) {
    document.querySelector("#t").innerHTML = "99.00";
  }
  f2 = 1;
  if (f1+f2+f3==3) {
    location.href = "cart-empty.html";
  }
}

function delCart3() {
  document.querySelector("#myDivCart").innerHTML = "Item Deleted from Cart Successfully";
  document.querySelector("#c").remove();
  document.querySelector("#t").innerHTML = "228.00";
  if (f1 == 1 && f2 == 0) {
    document.querySelector("#t").innerHTML = "129.00";
  }
  else if (f1 == 0 && f2 == 1) {
    document.querySelector("#t").innerHTML = "99.00";
  }
  f3 = 1;
  if (f1+f2+f3==3) {
    location.href = "cart-empty.html";
  }

}
