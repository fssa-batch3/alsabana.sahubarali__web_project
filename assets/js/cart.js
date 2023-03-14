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

  localStorage.setItem("items", JSON.stringify(items));
  location.reload();
}
let cartArray = [];
if (localStorage.getItem("items") != null) {
  cartArray = JSON.parse(localStorage.getItem("items"));
}
// console.log(getItem);
for (let i = 0; i < cartArray.length; i++) {
  document.getElementById("pro").innerHTML = getItem.title;
  document.getElementById("pri").innerHTML = getItem.price;
  document.getElementById("im").src = getItem.image;
  cartArray.push(item);
}
console.log(cartArray);
