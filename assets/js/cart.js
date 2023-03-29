
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

