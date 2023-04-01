let div_card = document.createElement("div");
div_card.setAttribute("class", "whole_card");
let div_card1 = document.createElement("div");
div_card1.setAttribute("class", "profile_name");
div_card.append(div_card1);
let div_card2 = document.createElement("div");
div_card1.append(div_card2);
let image_card = document.createElement("img");
image_card.setAttribute("src", "../assets/images/alovera.png");
image_card.setAttribute("alt", "image");
div_card2.append(image_card);
let div_card3 = document.createElement("div");
div_card3.setAttribute("class", "cus_name");
div_card3.innerText = "Customer Name";
div_card1.append(div_card3);
let form = document.createElement("form");
form.innerHTML = `<label>Mobile-number: <input type="number" disabled /> </label>
<label
  >Address:
  <input type="text" disabled />
</label>
<label>
  Email:
  <input type="email" disabled />
</label>
<label>Password: <input type="password" disabled /> </label>`;
div_card.append(form);
let insert_div = document.querySelector(".whole");
insert_div.append(div_card);
console.log(div_card);
