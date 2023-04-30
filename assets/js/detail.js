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
let range = document.getElementById("range");
let images = document.getElementById("imgs");
let product_name = document.getElementById("pro_name");
let product_price = document.getElementById("pro_cost");
let description = document.getElementById("description");
product_name.innerText = pro_detail["productName"];
product_price.innerText = "₹" + pro_detail["cost"];
description.innerText = pro_detail["product_detail"];
images.setAttribute("src", pro_detail["image"]["src"]);
range.innerText = pro_detail["product_type"];

// const allstar = document.querySelectorAll(".fa-regular");
// const showRating = document.getElementById("showRating");
// allstar.forEach((star, index) => {
//   star.addEventListener("click", (e) => {
//     e.preventDefault();
//     let current_star = index + 1;
//     showRating.innerText = `${current_star} of 5`;
//     allstar.forEach((star, i) => {
//       if (current_star >= i + 1) {
//         star.innerHTML = "&#9733";
//       } else {
//         star.innerHTML = "&#9734;";
//       }
//     });
//   });
// });

// let form_2 = document.getElementById("input_2");
// form_2.addEventListener("submit", function (event) {
//   event.preventDefault();
//   let reviewArray = [];
//   if (localStorage.getItem("reviews") != null) {
//     productArray = JSON.parse(localStorage.getItem("reviews"));
//   }
//   let product_review = document.getElementById("review").value;
//   reviews = {
//     product_review: product_review,
//     review_id: Date.now(),
//   };
//   reviewArray.push(reviews);
//   stringReview = JSON.stringify(reviewArray);
//   localStorage.setItem("reviews", stringReview);
// });

// let div = document.createElement("div");
// div.setAttribute("class", "reviews");
// let div_card = document.createElement("div");
// let img_tag = document.createElement("img");
// img_tag.setAttribute("width", "50");
// img_tag.setAttribute("height", "50");
// img_tag.setAttribute("src", "../assets/images/alodia-target.jpeg");
// div_card.append(img_tag);
// let div_card1 = document.createElement("div");
// let h3_tag = document.createElement("h3");
// h3_tag.innerText = "name";
// div_card1.append(h3_tag);
// let p_tag = document.createElement("p");
// p_tag.innerText = "good product";
// div_card1.append(p_tag);
// div.append(div_card);
// div.append(div_card1);
// let insert = document.querySelector(".whole");
// insert.append(div);

let buy_btn = document.getElementById("buy");
buy_btn.addEventListener("click", function (event) {
  event.preventDefault();
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
});
