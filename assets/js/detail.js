let buy_btn = document.getElementById("buy");
buy_btn?.addEventListener("click", function () {
  let user_login = JSON.parse(localStorage.getItem("login"));
  if (user_login == null) {
    alert("You didn't login please login or signup");
    window.open("/index.html");
  } else {
    alert("successfully clicked");
    window.open("../Pages/delivery.html");
    let search_id = window.location.search;
    let product_params = new URLSearchParams(search_id);
    let get_details = product_params.get("id");
    if (get_details) {
      let string = JSON.stringify(get_details);
      localStorage.setItem("id", string);
    }
  }
});

let find_id = window.location.search;
let product_params = new URLSearchParams(find_id);
let get_detail = product_params.get("id");
let products = JSON.parse(localStorage.getItem("proObject"));
let pro_detail = products.find((event) => get_detail == event["id"]);
let range = document.getElementById("range");
let pic = document.getElementById("imgs");
let product_name = document.getElementById("pro_name");
let product_price = document.getElementById("pro_cost");
let description = document.getElementById("description");
product_name.innerText = pro_detail["productName"];
product_price.innerText = "₹" + pro_detail["cost"];
description.innerText = pro_detail["product_detail"];
pic.setAttribute("src", pro_detail["image"]["src"]);
range.innerText = pro_detail["product_type"];

let reviews = JSON.parse(localStorage.getItem("reviews"));
let products_id = window.location.search;
let parameter = new URLSearchParams(products_id);
let search_id = product_params.get("id");
let cus_reviews = reviews?.filter((id) => search_id == id["product_id"]);
if (cus_reviews == null) {
  let no_reviews = document.getElementById("no_reviews");
  no_reviews.innerText = "No Reviews";
}

let div_card = document.createElement("div");
div_card.setAttribute("class", "whole");
let div_card1 = document.createElement("div");
div_card1.setAttribute("class", "whole_child");
div_card.append(div_card1);
let div_card2 = document.createElement("div");
div_card2.setAttribute("class", "reviews");
div_card1.append(div_card2);
let child_div = document.createElement("div");
div_card2.append(child_div);
let image_tag = document.createElement("img");
image_tag.setAttribute("src", "../assets/images/Caster-Hair-Oil-.jpg.webp");
image_tag.setAttribute("width", "50");
image_tag.setAttribute("height", "50");
child_div.append(image_tag);
let child_div1 = document.createElement("div");
div_card2.append(child_div1);
let h3_tag = document.createElement("h3");
h3_tag.innerText = "Alsabana";
child_div1.append(h3_tag);
let p_tag = document.createElement("p");
p_tag.innerText = "good product";
child_div1.append(p_tag);
let button = document.createElement("button");
button.setAttribute("class", "edit_btn");
child_div1.append(button);
let rate_div = document.createElement("div");
rate_div.setAttribute("class", "rating_section");
div_card1.append(rate_div);
let star_h3 = document.createElement("h3");
star_h3.innerText = "4 stars-good";
rate_div.append(star_h3);

let postBtn = document.getElementById("form_submit");
postBtn.addEventListener("submit", function (e) {
  e.preventDefault();
  let array = [];
  if (localStorage.getItem("reviews") != null) {
    array = JSON.parse(localStorage.getItem("reviews"));
  }
  let id_product = product_params.get("id");
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
    id_product,
  };

  array.push(reviews);
  let stringify = JSON.stringify(array);
  localStorage.setItem("reviews", stringify);
  alert("successfully your review added");
  location.reload();
});
