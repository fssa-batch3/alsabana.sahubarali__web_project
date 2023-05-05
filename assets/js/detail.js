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
let pic = document.getElementById("imgs");
let productname = document.getElementById("pro_name");
let product_price = document.getElementById("pro_cost");
let description = document.getElementById("description");
productname.innerText = pro_detail["productName"];
product_price.innerText = "₹" + pro_detail["cost"];
description.innerText = pro_detail["product_detail"];
pic.setAttribute("src", pro_detail["image"]["src"]);
range.innerText = pro_detail["product_type"];

let reviews = JSON.parse(localStorage.getItem("reviews"));
let products_id = window.location.search;
let parameter = new URLSearchParams(products_id);
let search_id = product_params.get("id");
let cus_reviews = reviews.filter((id) => search_id == id["product_id"]);
for (let i = 0; i < cus_reviews.length; i++) {
  let div = document.createElement("div");
  div.setAttribute("class", "reviews");
  let div_card = document.createElement("div");
  div.append(div_card);
  let img_tag = document.createElement("img");
  img_tag.setAttribute("width", "50");
  img_tag.setAttribute("height", "50");
  img_tag.setAttribute("src", cus_reviews[i]["image"]);
  div_card.append(img_tag);
  let div_card1 = document.createElement("div");
  div.append(div_card1);
  let h3_tag = document.createElement("h3");
  h3_tag.innerText = cus_reviews[i]["username"];
  div_card1.append(h3_tag);
  let p_tag = document.createElement("p");
  p_tag.innerText = cus_reviews[i]["customer_reviews"];
  div_card1.append(p_tag);
  let button = document.createElement("button");
  button.setAttribute("class", "edit_btn");
  button.innerText = "Edit";
  div_card1.append(button);
  let rating_div = document.createElement("div");
  rating_div.setAttribute("class", "rating_section");
  let stars = document.createElement("h3");
  stars.innerText = cus_reviews[i]["ratings"];
  rating_div.append(stars);
  let insert = document.querySelector(".whole");
  insert.append(div);
  insert.append(rating_div);
}

let postBtn = document.getElementById("form_submit");
postBtn.addEventListener("submit", function (e) {
  e.preventDefault();
  let array = [];
  if (localStorage.getItem("reviews") != null) {
    array = JSON.parse(localStorage.getItem("reviews"));
  }
  let product_id = product_params.get("id");
  let login_acc = JSON.parse(localStorage.getItem("login"));
  let userData = JSON.parse(localStorage.getItem("userData"));
  let find_user = userData.find(function (login) {
    if (login_acc == login["u_id"]) {
      return true;
    }
  });

  let username = find_user["username"];
  let image = find_user["image"];
  let customer_reviews = document.getElementById("input_field").value;
  let ratings = document.getElementById("select_ratings").value;
  let reviews = {
    customer_reviews,
    login_acc,
    ratings,
    username,
    image,
    product_id,
  };

  array.push(reviews);
  let stringify = JSON.stringify(array);
  localStorage.setItem("reviews", stringify);
  alert("successfully your review added");
  location.reload();
});
