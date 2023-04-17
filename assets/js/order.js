let form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let customer_details = [];
  if (localStorage.getItem("details") != null) {
    customer_details = JSON.parse(localStorage.getItem("details"));
  }

  let cus_name = document.getElementById("name").value;
  let number = document.getElementById("number").value;
  let select_state = document.getElementById("select").value;
  let pincode = document.getElementById("pincode").value;
  let address = document.getElementById("address").value;

  details = {
    cus_name,
    number,
    select_state,
    pincode,
    address,
  };
  customer_details.push(details);
  stringDetail = JSON.stringify(customer_details);
  localStorage.setItem("details", stringDetail);
  window.location.href = "../Pages/check.html";
});
