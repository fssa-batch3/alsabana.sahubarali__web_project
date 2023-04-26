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

// let review = document.getElementById("review");
// let input = document.getElementById("input");
// input.addEventListener("submit", function (event) {
//   event.preventDefault();
//   let review = document.getElementById("review").value;
// });

let div = document.createElement("div");
div.setAttribute("class", "reviews");
let div_card = document.createElement("div");
let img_tag = document.createElement("img");
img_tag.setAttribute("width", "50");
img_tag.setAttribute("height", "50");
img_tag.setAttribute("src", "../assets/images/alodia-target.jpeg");
div_card.append(img_tag);

let div_card1 = document.createElement("div");
let h3_tag = document.createElement("h3");
h3_tag.innerText = "name";
div_card1.append(h3_tag);
let p_tag = document.createElement("p");
p_tag.innerText = "good product";
div_card1.append(p_tag);
div.append(div_card);
div.append(div_card1);
let insert = document.querySelector(".whole");
insert.append(div);
console.log(insert);
