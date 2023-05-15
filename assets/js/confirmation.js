let get_id = JSON.parse(localStorage.getItem("id"));
let product = JSON.parse(localStorage.getItem("total_product"));
let pro_name;
let cost;
let image;
let totals;
for (let i = 0; i < product.length; i++) {
  if (get_id == product[i]["id"]) {
    pro_name = product[i]["productName"];
    cost = product[i]["cost"];
    image = product[i]["image"];
    totals = product[i]["cost"];
  }
}
let product_name = (document.getElementById("product_name").innerText =
  pro_name);
let pro_cost = (document.getElementById("product_cost").innerText =
  "Rs." + cost);
let images = (document.getElementById("image").src = image);
let total = (document.getElementById("totals").innerText = "Rs." + cost);

let order_id = JSON.parse(localStorage.getItem("order_id"));
let order_details = JSON.parse(localStorage.getItem("details"));
let customer_name;
let cus_address;
let state;
let number;
let order_detail;
let id;
for (let j = 0; j < order_details.length; j++) {
  if (order_id == order_details[j]["order_id"]) {
    customer_name = order_details[j]["cus_name"];
    cus_address = order_details[j]["address"];
    state = order_details[j]["select_state"];
    number = order_details[j]["number"];
    order_detail = order_details[j]["currentDate"];
    id = order_details[j]["order_id"];
  }
}
let cus_name = (document.getElementById("cus_name").innerHTML =
  customer_name + ",");
let address = (document.getElementById("address").innerHTML =
  cus_address + ",");
let cus_state = (document.getElementById("state").innerHTML = state + ",");
let phone = (document.getElementById("number").innerHTML = number + ".");
let orderdetail = (document.getElementById("date").innerHTML =
  order_detail + ".");
let order = (document.getElementById("order_id").innerHTML = id);

function order() {
  alert("worl");
  let cart_items = JSON.parse(localStorage.getItem("items"));
  for (let i = 0; i < cart_items.length; i++) {
    let div_card = document.createElement("div");
    div_card.setAttribute("class", "cart-box");
    let card_img = document.createElement("img");
    card_img.setAttribute("src", cart_items[i].image);
    card_img.setAttribute("class", "cart-img");
    card_img.setAttribute("id", "image");
    div_card.append(card_img);
    let div_card1 = document.createElement("div");
    div_card1.setAttribute("class", "detail-box");
    div_card.append(div_card1);
    let div_card2 = document.createElement("div");
    div_card2.setAttribute("id", "product_name");
    div_card2.setAttribute("class", "product-title");
    div_card2.innerText = cart_items[i].title;
    div_card1.append(div_card2);
    let price_div = document.createElement("div");
    price_div.setAttribute("class", "price-box");
    div_card1.append(price_div);
    let price_div1 = document.createElement("div");
    price_div1.setAttribute("id", "price");
    price_div1.setAttribute("class", "cart-price");
    let m = cart_items[i].price;
    let n = m.split(".");
    price_div1.innerText = "Rs." + n[1] * cart_items[i].quantity;
    price_div.append(price_div1);
    let input = document.createElement("input");
    input.setAttribute("value", cart_items[i].quantity);
    input.setAttribute("type", "number");
    input.setAttribute("class", "cart-quantity");
    div_card1.append(input);
    let cart_content = document.querySelector(".cart_content");
    cart_content.prepend(div_card);
  }
  let add = 0;
  for (let i = 0; i < cart_items?.length; i++) {
    let split = cart_items[i].price;
    let result = split.split(".");
    add += parseInt(result[1] * cart_items[i].quantity);
  }
  let view = (document.getElementById("total").innerText = "Rs." + add);
}
