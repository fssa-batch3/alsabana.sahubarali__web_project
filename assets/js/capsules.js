let products1 = [
  {
    productsname: "Hair growth and hair fall capsules",
    cost: 499,
    image: {
      src: "../assets/images/capsules.webp",
      alt: "hair growth capsules",
    },
  },
];
let get_product1 = JSON.parse(localStorage.getItem("proObject"));
const capsules = get_product1.filter(
  (get) => get["product_type"] == "Capsules"
);
productDiv4(capsules, ".Products");

function productDiv4(products1, id) {
  for (let i = 0; i < products1.length; i++) {
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
    h5_tag.innerText = " Rs." + products1[i].cost;
    let button_tag = document.createElement("button");
    button_tag.innerText = "Add to cart";
    button_tag.setAttribute("class", "add_Cart");
    div2.append(button_tag);
    //append
    let insert_div = document.querySelector(id);
    insert_div.append(anger_tag);
  }
}
productDiv4(products1, ".Products");
