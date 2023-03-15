const btnCart = document.querySelector(".count");
const cart = document.querySelector(".cart");
const btnClose = document.querySelector("#cart-close");

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
  //Remove food items from cart
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
//remove item
function removeItem() {
  if (confirm("Are you sure to remove")) {
    this.parentElement.remove();
  }
}
//change quantity
function changeQty() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
}
// add cart
let cart_array = [];
function addCart() {
  let product = this.parentElement;
  let title = product.querySelector(".product-name").innerHTML;
  let price = product.querySelector(".product-cost").innerHTML;
  let image = product.querySelector(".img-src").src;

  let items = {
    title: title,
    price: price,
    image: image,
  };
  if (window.localStorage.getItem("items") === null) {
    window.localStorage.setItem("items", JSON.stringify(cart_array));
  } else {
    let cart = window.localStorage.getItem("items");
    let whole = JSON.parse(cart);
    whole.push(items);
    window.localStorage.setItem("items", JSON.stringify(whole));
  }
}

/* <div class="cart-box">
<img src="../assets/iages "id="image" class="cart-img">
<div class="detail-box">
  <div id="product_name" class="product-title">caffeine shampoo</div>
  <div class="price-box">
    <div id="price" class="cart-price">Rs.678</div>
    <div class="cart-amt">Rs.72</div>
  </div>
  <input type="number" value="1" class="cart-quantity">

</div>
<ion-icon name="trash" class="cart-remove"></ion-icon> */

// </div>
for (let i = 0; i < cart_array.length; i++) {
  let detail = window.parse(localStorage.getItem("items"));
  detail = cart_array[i];

  document.getElementById("product_name").innerHTML = detail.title;
  document.getElementById("price").innerHTML = detail.price;
  document.getElementById("image").src = detail.image;
}

let div_card = document.createElement("div");
div_card.setAttribute("class", "cart-box");
let card_img = document.createElement("img");
card_img.setAttribute("src", "../assets/images/Caster-Hair-Oil-.jpg.webp");
card_img.setAttribute("class", "cart-img");
card_img.setAttribute("id", "image");
div_card.append(card_img);
let div_card1 = document.createElement("div");
div_card1.setAttribute("class", "detail-box");
div_card.append(div_card1);
let div_card2 = document.createElement("div");
div_card2.setAttribute("id", "product_name");
div_card2.setAttribute("class", "product-title");
div_card2.innerText = "Caffein shampoo";
div_card1.append(div_card2);
let price_div = document.createElement("div");
price_div.setAttribute("class", "price-box");
div_card1.append(price_div);
let price_div1 = document.createElement("div");
price_div1.setAttribute("id", "price");
price_div1.setAttribute("class", "cart-price");
price_div1.innerText = "Rs,124";
price_div.append(price_div1);
let price_div2 = document.createElement("div");
price_div2.setAttribute("class", "cart-amt");
price_div2.innerText = "Rs,124";
price_div.append(price_div2);
let input = document.createElement("input");
input.setAttribute("value", "1");
input.setAttribute("type", "number");
input.setAttribute("class", "cart-quantity");
div_card1.append(input);
let ion = document.createElement("ion-icon");
ion.setAttribute("class", "cart-remove");
ion.setAttribute("name", "trash");
div_card.append(ion);
let cart_content = document.querySelector(".cart-content");
cart_content.prepend(div_card);
console.log(cart_content);
