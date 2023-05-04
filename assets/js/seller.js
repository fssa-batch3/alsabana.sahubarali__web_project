let form = document.getElementById("submitBtn");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let array = [];
  if (localStorage.getItem("seller_details" != null)) {
    array = JSON.parse(localStorage.getItem("seller_details"));
  }
  let fullName = document.getElementById("name").value;
  let number = document.getElementById("number").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirm_password = document.getElementById("confirm_password").value;
  let company_name = document.getElementById("company_name").value;
  let company_address = document.getElementById("company_address").value;
  console.log(fullName);
  let seller_details = {
    fullName,
    number,
    email,
    password,
    confirm_password,
    company_name,
    company_address,
  };
  array.push(seller_details);
  let stringify = JSON.stringify(array);
  localStorage.setItem("seller_details", stringify);
  alert("please login!!!");
  window.open("../index.html");
});
