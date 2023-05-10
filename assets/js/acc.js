///profile
const logEmail = JSON.parse(localStorage.getItem("login"));
const userData = JSON.parse(localStorage.getItem("userData"));

let select_user = userData.find(function (event) {
  const customerEmail = event["u_id"];
  if (logEmail === customerEmail) {
    return true;
  }
});
const email = document.getElementById("email");
const phNo = document.getElementById("phNo");
const userName = document.getElementById("username");
const password = document.getElementById("pass");
const address = document.getElementById("country");
let showName = document.getElementById("user_name");
showName.innerHTML = select_user["username"];
let userImg = document.getElementById("image");
userImg.setAttribute("src", select_user["image"]);
let image = document.getElementById("user_img");
image.setAttribute("src", select_user["image"]);
email.value = select_user["email"];
phNo.value = select_user["phoneNo"];
userName.value = select_user["username"];
password.value = select_user["password"];
address.value = select_user["address"];
userImg.value = select_user["image"];

let detail_name = document.getElementById("detail_name");
let detail_no = document.getElementById("detail_no");
let detail_email = document.getElementById("detail_email");
let detail_address = document.getElementById("detail_address");
detail_name.innerText = select_user["username"];
detail_no.innerText = select_user["phoneNo"];
detail_email.innerText = select_user["email"];
detail_address.innerText = select_user["address"];

const form = document.getElementById("proform");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let phoneNo = document.getElementById("phNo").value;
  let password = document.getElementById("pass").value;
  let address = document.getElementById("country").value;
  let image = document.getElementById("image").value;

  let newData = {
    username,
    email,
    phoneNo,
    password,
    address,
    image,
  };

  const combineData = Object.assign(select_user, newData);
  let findIndex = userData.indexOf(select_user);
  userData[findIndex] = combineData;
  localStorage.setItem("userData", JSON.stringify(userData));
  alert("successfully changed");
  location.reload();
});
let delete_user = document.getElementById("delete");
delete_user.addEventListener("click", function (event) {
  event.preventDefault();
  let indexDel = userData.indexOf(select_user);
  let msg = confirm("Are you sure you want to delete this account");
  if (msg !== true) {
    return;
  } else {
    userData.splice(indexDel, 1);
    window.location.href = "/index.html";
    localStorage.setItem("userData", JSON.stringify(userData));
  }
});

let logout = document.getElementById("logOut");
logout.addEventListener("click", function (e) {
  localStorage.removeItem("login");
  window.open("/index.html");
});

let login_acc = JSON.parse(localStorage.getItem("login"));
let order_details = JSON.parse(localStorage.getItem("details"));
let find_orders = order_details?.filter(
  (logid) => login_acc == logid["login_id"]
);

let no_order = document.querySelector(".no-order");
if (find_orders.length === 0) {
  console.log("check");
  no_order.style.display = "block";
}
for (let i = 0; i < find_orders?.length; i++) {
  let div_card = document.createElement("div");
  div_card.setAttribute("class", "order-container");
  let div_card1 = document.createElement("div");
  div_card.append(div_card1);
  let img_tag = document.createElement("img");
  img_tag.setAttribute("src", find_orders[i]["image"]);
  img_tag.setAttribute("class", "image");
  img_tag.setAttribute("width", "100");
  img_tag.setAttribute("height", "110");
  div_card1.append(img_tag);
  let div_card2 = document.createElement("div");
  div_card.append(div_card2);
  let h4_tag = document.createElement("h4");
  h4_tag.innerText = find_orders[i]["productName"];
  div_card2.append(h4_tag);
  let div_card3 = document.createElement("div");
  div_card.append(div_card3);
  let h5_tag = document.createElement("h5");
  h5_tag.innerText = "Rs." + find_orders[i]["cost"];
  div_card3.append(h5_tag);
  let div_card4 = document.createElement("div");
  div_card.append(div_card4);
  // span
  let span_tag = document.createElement("span");
  span_tag.setAttribute("class", "dot");
  div_card4.append(span_tag);
  let span1_tag = document.createElement("span");
  span1_tag.innerText = "Delivered by " + find_orders[i]["date"];
  div_card4.append(span1_tag);
  let p_tag = document.createElement("p");
  p_tag.innerText = "Your product has been delivered";
  div_card4.append(p_tag);
  let span2_tag = document.createElement("span");
  span2_tag.setAttribute("class", "fa fa-star checked");
  div_card4.append(span2_tag);
  let span3_tag = document.createElement("span");
  span3_tag.innerText = "Rate & Review product";
  div_card4.append(span3_tag);
  // let cancel_button = document.createElement("button");
  // cancel_button.innerText = "cancel";
  // cancel_button.setAttribute("class", "cancel_btn");
  // div_card3.append(cancel_button);
  let insert_div = document.querySelector(".scnd-container");
  insert_div.append(div_card);
}
function change() {
  let cus_details = document.querySelector(".customer_details");
  let form_Detail = document.getElementById("proform");
  cus_details.style.display = "none";
  form_Detail.style.display = "block";
}
