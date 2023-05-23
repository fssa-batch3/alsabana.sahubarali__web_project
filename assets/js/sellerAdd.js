let arr = JSON.parse(localStorage.getItem("total_product"));
let login_email = JSON.parse(localStorage.getItem("login_seller"));
let show_product = arr.filter((product) => login_email == product["login_id"]);
for (let showProduct of show_product) {
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
  card_img.setAttribute("src", showProduct["image"]);
  card_img.setAttribute("height", "250");
  card_img.setAttribute("width", "250");
  card_img.setAttribute("alt", "product");
  div2.append(card_img);
  //div for h3 and h5 tags
  let div1_card = document.createElement("div");
  div_card.append(div1_card);
  //h3 tag
  let h3_tag = document.createElement("h3");
  div2.append(h3_tag);
  h3_tag.innerText = showProduct.productName;
  //h5 tag
  let h5_tag = document.createElement("h5");
  div2.append(h5_tag);
  h5_tag.innerText = " Rs. " + showProduct.cost;
  //button tag
  let anchor = document.createElement("a");
  anchor.setAttribute("class", "edit_btn");
  anchor.setAttribute("href", "./upPro.html?id=" + showProduct.productName);
  anchor.innerText = "EDIT";
  div2.append(anchor);
  let delete_button = document.createElement("a");
  delete_button.setAttribute("class", "edit_btn");
  delete_button.innerText = "DELETE";
  delete_button.setAttribute(
    "href",
    "./upPro.html?id=" + showProduct.productName
  );
  div2.append(delete_button);
  let insert_div = document.getElementById("app");
  insert_div.append(div_card);
}

let logout = document.getElementById("logOut");
logout.addEventListener("click", function (e) {
  localStorage.removeItem("login_seller");
  window.open("/index.html");
});
