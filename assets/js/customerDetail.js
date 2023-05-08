let cus_id = window.location.search;
let id_params = new URLSearchParams(cus_id);
let cus_details = id_params.get("id");
let customer = JSON.parse(localStorage.getItem("userData"));
console.log(customer);
let customer_details = customer.find(function (event) {
  let id = event["u_id"];
  if (cus_details == id) {
    return true;
  }
});
console.log(customer_details);
let customer_image = document.getAnimations("profile_pic");
customer_image_image.src = customer_details["image"];
let username = document.getElementById("username");
username.value = customer_details["username"];
let address = document.getElementById("address");
address.value = customer_details["address"];
let phone_number = document.getElementById("phone_number");
phone_number.value = customer_details["phoneNo"];
let alter_num = document.getElementById("alter_number");
alter_num.value = customer_details["alter_num"];
let company_name = document.getElementById("cname");
company_name.value = customer_details["company_name"];
let email = document.getElementById("email");
email.value = customer_details["email"];
