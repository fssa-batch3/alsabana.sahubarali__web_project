let get_product = JSON.parse(localStorage.getItem("proObject"));
const Caffeine = get_product.filter(
  (getting) => getting["product_type"] == "Caffeine Range"
);
productDiv1(Caffeine, ".Products");

function productDiv1(products1, id) {
  for (let i = 0; i < products1.length; i++) {
    let anger_tag = document.createElement("a");
    anger_tag.setAttribute(
      "href",
      "../Pages/productDetails.html?id=" + products[i]["id"]
    );
    // first div
    let div_card = document.createElement("div");
    div_card.setAttribute("class", "product-listing3");
    anger_tag.append(div_card);

    //second div
    let div1 = document.createElement("div");
    div1.setAttribute("class", "pro-list-1");
    div_card.append(div1);
    //third div
    let div2 = document.createElement("div");
    div1.append(div2);
    //img tag and attributes
    let card_img = document.createElement("img");
    card_img.setAttribute("src", products1[i].image["src"]);
    card_img.setAttribute("height", "250");
    card_img.setAttribute("width", "250");
    card_img.setAttribute("alt", products1[i].image["alt"]);
    div2.append(card_img);
    //div for h3 and h5 tags
    let div1_card = document.createElement("div");
    div_card.append(div1_card);
    //h3 tag
    let h3_tag = document.createElement("h3");
    div2.append(h3_tag);

    h3_tag.innerText = products1[i].productName;
    //h5 tag
    let h5_tag = document.createElement("h5");
    div2.append(h5_tag);
    h5_tag.innerText = products1[i].cost;
    let button_tag = document.createElement("button");
    button_tag.innerText = "Add to cart";
    button_tag.setAttribute("id", "addCart");
    div2.append(button_tag);
    //append
    let insert_div = document.querySelector(id);
    insert_div?.append(anger_tag);
  }
}
productDiv1(products1, ".Products1");

// let caffeine_button = document.querySelectorAll("#addCart");
// caffeine_button.forEach((btn) => {
//   btn.addEventListener("click", addCart);
//   alert("clicked");
// });

// function changeQty() {
//   if (isNaN(this.value) || this.value < 1) {
//     this.value = 1;
//   }
// }
// add cart
// function add_Cart() {
//   let product = this.parentElement;
//   let title = product.querySelector(".product-title").innerHTML;
//   let price = product.querySelector(".cart-price").innerHTML;
//   let image = product.querySelector(".cart-img").src;
//   let items = {
//     title: title,
//     price: price,
//     image: image,
//     quantity: 1,
//     product_id: Date.now(),
//   };
//   let checkQty = JSON.parse(localStorage.getItem("items"));

//   for (var i = 0; i < checkQty?.length; i++) {
//     var key = checkQty[i];
//     var haveTitle = true;
//     if (key?.title == items.title) {
//       key.quantity += items.quantity;
//       localStorage.setItem("items", JSON.stringify(checkQty));
//       haveTitle = false;
//       break;
//     }
//   }
//   if (checkQty === null || checkQty.length === 0) {
//     window.localStorage.setItem("items", JSON.stringify([items]));
//   } else {
//     if (haveTitle) {
//       let cart = window.localStorage.getItem("items");
//       let whole_cart = JSON.parse(cart);
//       whole_cart.push(items);
//       window.localStorage.setItem("items", JSON.stringify(whole_cart));
//     } else {
//       alert("exist");
//     }
//   }
//   location.reload();
// }
