let get_product = JSON.parse(localStorage.getItem("proObject"));
const samples = get_product.filter((get) => get["product_type"] == "samples");
productDiv(samples, ".products");
function productDiv(products, id) {
  for (let i = 0; i <= products.length; i++) {
    //first div
    let div_card = document.createElement("div");
    div_card.setAttribute("class", "product-listing-1");
    //second div
    let div1 = document.createElement("div");
    div1.setAttribute("class", "listing-1");
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
    let tag_h5 = document.createElement("h5");
    div2.append(tag_h5);
    //h5 tag
    let h5_tag = document.createElement("h5");
    h5_tag.innerText = products[i].cost;
    // h5_tag.innerText = "Rs.";
    h5_tag.setAttribute("class", "product-cost");
    div2.append(h5_tag);
    //button tag
    let button_tag = document.createElement("button");
    button_tag.innerText = "Add to cart";
    button_tag.setAttribute("class", "add_Cart");
    div2.append(button_tag);
    //append
    let insert_div = document.querySelector(id);
    insert_div.append(div_card);
  }
}
productDiv(products, ".products");
