let buy_btn = document.getElementById("buy");
buy_btn?.addEventListener("click", function () {
  alert("hi");
  const product_id = window.location.search;
  const product_params = new URLSearchParams(product_id);
  const get_details = product_params.get("id");
  if (get_details) {
    let string = JSON.stringify(get_details);
    localStorage.setItem("id", string);
  }
});

let get_id = JSON.parse(localStorage.getItem("id"));
let product = JSON.parse(localStorage.getItem("proObject"));
let pro_name;
let cost;
let image;
let totals;
for (let i = 0; i < product.length; i++) {
  if (get_id == product[i]["id"]) {
    pro_name = product[i]["productName"];
    cost = product[i]["cost"];
    image = product[i]["image"]["src"];
    totals = product[i]["cost"];
  }
}
let product_name = (document.getElementById("product_name").innerHTML =
  pro_name);
let pro_cost = (document.getElementById("product_cost").innerHTML =
  "Rs." + cost);
let images = (document.getElementById("image").src = image);
let total = (document.getElementById("totals").innerHTML = "Rs." + cost);

let order_id = JSON.parse(localStorage.getItem("order_id"));
let order_details = JSON.parse(localStorage.getItem("details"));
let customer_name;
let cus_address;
let state;
let number;
let id;
for (let j = 0; j < order_details.length; j++) {
  if (order_id == order_details[j]["order_id"]) {
    customer_name = order_details[j]["cus_name"];
    cus_address = order_details[j]["address"];
    state = order_details[j]["select_state"];
    number = order_details[j]["number"];
    id = order_details[j]["order_id"];
  }
}
let cus_name = (document.getElementById("cus_name").innerHTML =
  customer_name + ",");
let address = (document.getElementById("address").innerHTML =
  cus_address + ",");
let cus_state = (document.getElementById("state").innerHTML = state + ",");
let phone = (document.getElementById("number").innerHTML = number + ".");
let order = (document.getElementById("order_id").innerHTML = id);
