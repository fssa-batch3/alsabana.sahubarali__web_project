// const { json } = require("stream/consumers");

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
  //Remove food cart_array from cart
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

// remove item
// function removeItem() {
//   if (confirm("Are you sure to remove")) {
//     console.log(this.parentElement);
//     this.parentElement.remove();
//     window.localStorage.setItem("items", JSON.stringify(this.parentElement));
//   }
// }

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
  for (var i = 0; i < checkQty?.length; i++) {
    var key = checkQty[i];
    if (key.title == items.title) {
      if (key) {
        console.log("hi", delete key);
        console.log(checkQty);
      }
      localStorage.setItem("items", JSON.stringify(checkQty));
      break;
    }
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
    quantity: 1,
  };
  let checkQty = JSON.parse(localStorage.getItem("items"));

  for (var i = 0; i < checkQty?.length; i++) {
    var key = checkQty[i];
    var haveTitle = true;
    if (key.title == items.title) {
      if (key) {
        key.quantity += items.quantity;
      }
      localStorage.setItem("items", JSON.stringify(checkQty));
      haveTitle = false;
      break;
    }
  }

  if (checkQty == null) {
    console.log("hello");
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

for (let i = 0; i < getCartItems?.length; i++) {
  let div_card = document.createElement("div");
  div_card.setAttribute("class", "cart-box");
  let card_img = document.createElement("img");
  card_img.setAttribute("src", getCartItems[i].image);
  card_img.setAttribute("class", "cart-img");
  card_img.setAttribute("id", "image");
  div_card.append(card_img);
  let div_card1 = document.createElement("div");
  div_card1.setAttribute("class", "detail-box");
  div_card.append(div_card1);
  let div_card2 = document.createElement("div");
  div_card2.setAttribute("id", "product_name");
  div_card2.setAttribute("class", "product-title");
  div_card2.innerText = getCartItems[i].title;
  div_card1.append(div_card2);
  let price_div = document.createElement("div");
  price_div.setAttribute("class", "price-box");
  div_card1.append(price_div);
  let price_div1 = document.createElement("div");
  price_div1.setAttribute("id", "price");
  price_div1.setAttribute("class", "cart-price");
  price_div1.innerText = getCartItems[i].price;
  price_div.append(price_div1);
  let price_div2 = document.createElement("div");
  price_div2.setAttribute("class", "cart-amt");
  price_div2.innerText = getCartItems[i].price;
  price_div.append(price_div2);
  let input = document.createElement("input");
  input.setAttribute("value", getCartItems[i].quantity);
  input.setAttribute("type", "number");
  input.setAttribute("class", "cart-quantity");
  div_card1.append(input);

  let ion = document.createElement("ion-icon");
  ion.setAttribute("class", "cart-remove");
  ion.setAttribute("id", "delete");
  ion.setAttribute("name", "trash");
  // ion.setAttribute("onclick", "del(" + getCartItems[i].cart_id + ")");
  div_card.append(ion);

  let cart_content = document.querySelector(".cart-content");
  cart_content.prepend(div_card);
}

//delete
// function del(id) {
//   const arr = JSON.parse(localStorage.getItem("items"));
//   let delobj = arr.find(function (event) {
//     if (id === e.cart_id) {
//       return true;
//     }
//   });
//   let index = arr.indexOf(delobj);
//   arr.splice(index, 1);
//   alert("removed sucessfully ");
// }
