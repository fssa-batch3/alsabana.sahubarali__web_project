const product_id = window.location.search;
const product_params = new URLSearchParams(product_id);
const get_details = product_params.get("id");
const products = JSON.parse(localStorage.getItem("proObject"));
let pro_detail = products.find(function (event) {
  let id = event["id"];
  if (get_details == id) {
    return true;
  }
});

let images = document.getElementById("imgs");
let product_name = document.getElementById("pro_name");
let product_price = document.getElementById("pro_cost");
let description = document.getElementById("description");
product_name.innerText = products["productName"];
product_price.innerText = products["cost"];
description.innerText = products["product_detail"];
images.setAttribute("src", products["src"]);

const allstar = document.querySelectorAll(".fa-regular");
const showRating = document.getElementById("showRating");
allstar.forEach((star, index) => {
  //  console.log(index)
  star.addEventListener("click", (e) => {
    e.preventDefault();
    let current_star = index + 1;
    // console.log(current_star)
    showRating.innerText = `${current_star} of 5`;
    allstar.forEach((star, i) => {
      if (current_star >= i + 1) {
        star.innerHTML = "&#9733";
      } else {
        star.innerHTML = "&#9734;";
      }
    });
  });
});

let review = document.getElementById("review");
let input = document.getElementById("input");
input.addEventListener("submit", function (event) {
  event.preventDefault();
  let review = document.getElementById("review").value;
});
