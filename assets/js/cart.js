let btnCart = document.querySelector(".count");
let cart = document.querySelector(".cart");
let btnClose = document.querySelector("#cart-close");

btnCart.addEventListener("click", () => {
  cart.classList.add("cart-active");
});
btnClose.addEventListener("click", () => {
  cart.classList.remove("cart-active");
});
document.addEventListener("DOMContentLoaded", loadProduct);
function loadProduct() {
  loadContent();
}

function loadContent() {
  //Remove product cart_array from cart
  let btnRemove = document.querySelectorAll(".cart-remove");
  btnRemove.forEach((btn) => {
    btn.addEventListener("click", removeItem);
  });

  // product item change event
  let qtyElement = document.querySelectorAll(".cart-quantity");
  qtyElement.forEach((input) => {
    input.addEventListener("change", changeQty);
  });
}
//product cart
let cartBtns = document.querySelectorAll(".add_Cart");
cartBtns.forEach((btn) => {
  btn.addEventListener("click", addCart);
});

function removeItem() {
  let product = this.parentElement;
  let title = product.querySelector(".product-title").innerHTML;
  let price = product.querySelector(".cart-price").innerHTML;
  let image = product.querySelector(".cart-img").src;
  let items = {
    title: title,
    price: price,
    image: image,
    quantity: 1,
  };
  let checkQty = JSON.parse(localStorage.getItem("items"));
  for (let i = 0; i < checkQty?.length; i++) {
    let key = checkQty[i];
    if (key.title == items.title) {
      checkQty.splice(i, 1);
      localStorage.setItem("items", JSON.stringify(checkQty));
      break;
    }
  }
  location.reload();
}

function changeQty() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
}
// add cart
function addCart() {
  let login_uid = JSON.parse(localStorage.getItem("login"));
  let product = this.parentElement;
  let title = product.querySelector(".product-name").innerHTML;
  let price = product.querySelector(".product-cost").innerHTML;
  let image = product.querySelector(".img-src").src;
  let items = {
    title: title,
    price: price,
    image: image,
    quantity: 1,
    product_id: login_uid,
  };
  let checkQty = JSON.parse(localStorage.getItem("items"));
  for (let i = 0; i < checkQty?.length; i++) {
    let key = checkQty[i];
    haveTitle = true;
    if (key.title == items.title) {
      key.quantity += items.quantity;
      localStorage.setItem("items", JSON.stringify(checkQty));
      haveTitle = false;
      break;
    }
  }
  if (checkQty === null || checkQty.length === 0) {
    alert("Successfully added into the cart");
    window.localStorage.setItem("items", JSON.stringify([items]));
  } else {
    if (haveTitle) {
      let cart = window.localStorage.getItem("items");
      let whole_cart = JSON.parse(cart);
      whole_cart.push(items);
      window.localStorage.setItem("items", JSON.stringify(whole_cart));
    } else {
      alert("exist");
    }
  }
  location.reload();
}

let getCartItems = JSON.parse(localStorage.getItem("items"));
let matched_products;
let login_uid = JSON.parse(localStorage.getItem("login"));
let finded_product = getCartItems?.find(function (user) {
  let product_id = user["product_id"];
  if (login_uid == product_id) {
    matched_products = getCartItems.filter(
      (getting) => getting["product_id"] == login_uid
    );
  }
});
for (let i = 0; i < matched_products?.length; i++) {
  let div_card = document.createElement("div");
  div_card.setAttribute("class", "cart-box");
  let card_img = document.createElement("img");
  card_img.setAttribute("src", matched_products[i].image);
  card_img.setAttribute("class", "cart-img");
  card_img.setAttribute("id", "image");
  div_card.append(card_img);
  let div_card1 = document.createElement("div");
  div_card1.setAttribute("class", "detail-box");
  div_card.append(div_card1);
  let div_card2 = document.createElement("div");
  div_card2.setAttribute("id", "product_name");
  div_card2.setAttribute("class", "product-title");
  div_card2.innerText = matched_products[i].title;
  div_card1.append(div_card2);
  let price_div = document.createElement("div");
  price_div.setAttribute("class", "price-box");
  div_card1.append(price_div);
  let price_div1 = document.createElement("div");
  price_div1.setAttribute("id", "price");
  price_div1.setAttribute("class", "cart-price");
  let m = matched_products[i].price;
  let n = m.split(".");
  price_div1.innerText = "Rs." + n[1] * matched_products[i].quantity;
  price_div.append(price_div1);
  let input = document.createElement("input");
  input.setAttribute("value", matched_products[i].quantity);
  input.setAttribute("type", "number");
  input.setAttribute("class", "cart-quantity");
  div_card1.append(input);
  let ion = document.createElement("ion-icon");
  ion.setAttribute("class", "cart-remove");
  ion.setAttribute("id", "delete");
  ion.setAttribute("name", "trash");
  div_card.append(ion);
  let cart_content = document.querySelector(".cart-content");
  cart_content.prepend(div_card);
}

let add = 0;
for (let i = 0; i < matched_products?.length; i++) {
  let split = matched_products[i].price;
  let result = split.split(".");
  add += parseInt(result[1] * matched_products[i].quantity);
}
let view = (document.getElementById("total").innerText = "Rs." + add);

function order() {
  alert("hie");
  window.location.href = "../Pages/delivery.html";
  let order_cart = document.querySelector(".cart-box");
  order_cart.style.display = "none";
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
  // let add = 0;
  // for (let i = 0; i < cart_items?.length; i++) {
  //   let split = cart_items[i].price;
  //   let result = split.split(".");
  //   add += parseInt(result[1] * cart_items[i].quantity);
  // }
  // let view = (document.getElementById("total").innerText = "Rs." + add);
}
