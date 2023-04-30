let products = [
  {
    productName: "Protein serum-50ml",
    cost: 200,
    image: {
      src: "../assets/images/Protien-Serum.jpg.webp",
      alt: "serum",
    },
    id: 100,
  },
];

let get_product1 = JSON.parse(localStorage.getItem("proObject"));
let ayurvedic = get_product1.filter(
  (get) => get["product_type"] == "Ayurvedic Range"
);
productDiv2(ayurvedic, ".products");
function productDiv2(products, id) {
  for (let i = 0; i < products.length; i++) {
    let name = products[i];
    let anger_tag = document.createElement("a");
    anger_tag.setAttribute(
      "href",
      "../Pages/productDetails.html?id=" + products[i]["id"]
    );
    //first div
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
    card_img.setAttribute("src", products[i].image["src"]);
    card_img.setAttribute("height", "250");
    card_img.setAttribute("width", "250");
    card_img.setAttribute("class", "img-src");
    card_img.setAttribute("alt", products[i].image["alt"]);
    div2.append(card_img);
    //div for h3 and h5 tags
    let div1_card = document.createElement("div");
    div_card.append(div1_card);
    //h3 tag
    let h3_tag = document.createElement("h3");
    h3_tag.setAttribute("class", "product-name");
    h3_tag.innerText = products[i].productName;
    div2.append(h3_tag);
    let h5_tag = document.createElement("h5");
    h5_tag.innerText = products[i].cost;
    h5_tag.setAttribute("class", "product-cost");
    div2.append(h5_tag);
    let button_tag = document.createElement("button");
    button_tag.innerText = "Add to cart";
    button_tag.setAttribute("class", "add_Cart");
    div2.append(button_tag);
    //append
    let insert_div = document.querySelector(id);
    insert_div.append(anger_tag);
  }
}
productDiv2(products, ".products");

function changeQty() {
  if (isNaN(this.value) || this.value < 1) {
    this.value = 1;
  }
}
let cartButton = document.querySelectorAll(".add_Cart");
cartButton.forEach((btn) => {
  btn.addEventListener("click", addCart);
});

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
    product_id: Date.now(),
  };
  let checkQty = JSON.parse(localStorage.getItem("items"));

  for (var i = 0; i < checkQty?.length; i++) {
    var key = checkQty[i];
    var haveTitle = true;
    if (key?.title == items.title) {
      key.quantity += items.quantity;
      localStorage.setItem("items", JSON.stringify(checkQty));
      haveTitle = false;
      break;
    }
  }
  if (checkQty === null || checkQty.length === 0) {
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
