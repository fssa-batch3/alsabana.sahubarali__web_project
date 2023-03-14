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
    let parseCart = JSON.parse(cart);
    parseCart.push(items);
    window.localStorage.setItem("items", JSON.stringify(parseCart));
  }
}

for (let i = 0; i < cart_array.length; i++) {
  let detail = cart_array[i];
  document.getElementById("product_name").innerHTML = detail.title;
  document.getElementById("price").innerHTML = detail.price;
  document.getElementById("image").src = detail.image;
  cartArray.push(item);
}
