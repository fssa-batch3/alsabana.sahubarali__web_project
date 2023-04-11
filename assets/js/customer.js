function createUserCard(arr) {
  for (let i = 0; i < arr.length; i++) {
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
    let name = document.createElement("p");
    name.innerText = "Name : " + arr[i]["username"];
    div_card3.append(name);
    let number = document.createElement("p");
    number.innerText = "Phone No : " + arr[i]["phoneNo"];
    div_card3.append(number);

    let email = document.createElement("p");
    email.innerText = "email : " + arr[i]["email"];
    div_card3.append(email);
    let password = document.createElement("p");
    password.innerText = "password : " + arr[i]["password"];
    div_card3.append(password);
    div_card1.append(div_card3);
    let insert_div = document.querySelector(".whole");
    insert_div.append(div_card);
  }
}

