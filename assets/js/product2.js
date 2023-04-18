let products = [
  {
    productName:
      "Macadamia Nut,Avacado,Biotin shampoo,conditioner & hair serum",
    cost: 1597,
    image: {
      src: "../assets/images/mecahair4.webp",
      alt: "avacado",
    },
  },
];
let get_product = JSON.parse(localStorage.getItem("proObject"));
const avocado = get_product.filter((get) => get["product_type"] == "avocado");
productDiv3(avocado, ".products");

function productDiv3(products, id) {
  for (let i = 0; i <= products.length; i++) {
    //first div
    let div_card = document.createElement("div");
    div_card.setAttribute("class", "product-listing3");
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
    card_img.setAttribute("alt", products[i].image["alt"]);
    div2.append(card_img);
    //div for h3 and h5 tags
    let div1_card = document.createElement("div");
    div_card.append(div1_card);
    //h3 tag
    let h3_tag = document.createElement("h3");
    div2.append(h3_tag);
    h3_tag.innerText = products[i].productName;
    //h5 tag
    let h5_tag = document.createElement("h5");
    div2.append(h5_tag);
    h5_tag.innerText = " Rs. " + products[i].cost;
    let button_tag = document.createElement("button");
    button_tag.innerText = "Add to cart";
    button_tag.setAttribute("class", "add_Cart");
    div2.append(button_tag);
    //append
    let insert_div = document.querySelector(id);
    insert_div.append(div_card);
  }
}
productDiv3(products, ".products");

//product cart
let macadamia = document.querySelectorAll(".add_Cart");
macadamia.forEach((btn) => {
  btn.addEventListener("click", addCart);
});

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
