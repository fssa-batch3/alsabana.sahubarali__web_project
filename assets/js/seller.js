function createCustomerCard(arr) {
  for (let i = 0; i < arr.length; i++) {
    let a_tag = document.createElement("a");
    a_tag.setAttribute(
      "href",
      "../Pages/customerDetails.html?id=" + arr[i]["user_id"]
    );
    let div_card = document.createElement("div");
    div_card.setAttribute("class", "whole_card");
    a_tag.append(div_card);
    let div_card1 = document.createElement("div");
    div_card1.setAttribute("class", "profile_name");
    div_card.append(div_card1);
    let div_card2 = document.createElement("div");
    div_card1.append(div_card2);
    let image_card = document.createElement("img");
    image_card.setAttribute("src", arr[i]["image"]);
    image_card.setAttribute("alt", "image");
    div_card2.append(image_card);
    let div_card3 = document.createElement("div");
    div_card3.setAttribute("class", "cus_name");
    let name = document.createElement("p");
    name.innerText = "Name : " + arr[i]["username"];
    div_card3.append(name);
    let number = document.createElement("p");
    number.innerText = "Phone No : " + arr[i]["phoneNo"];
    div_card3.append(number);
    let email = document.createElement("p");
    email.innerText = "email : " + arr[i]["email"];
    div_card3.append(email);
    div_card1.append(div_card3);
    let h2_tag = document.createElement("button");
    h2_tag.innerText = "View more details";
    div_card3.append(h2_tag);
    let insert_div = document.querySelector(".whole");
    insert_div.append(a_tag);
  }
}
