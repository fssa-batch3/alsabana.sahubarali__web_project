let form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let customer_details = [];
  if (localStorage.getItem("details") != null) {
    customer_details = JSON.parse(localStorage.getItem("details"));
  }
  let login_id = JSON.parse(localStorage.getItem("login"));
  let cus_name = document.getElementById("name").value;
  let number = document.getElementById("number").value;
  let select_state = document.getElementById("select").value;
  let pincode = document.getElementById("pincode").value;
  let address = document.getElementById("address").value;
  let order_id = Date.now(),
    details = {
      cus_name,
      number,
      select_state,
      pincode,
      address,
      login_id,
      order_id,
    };
  customer_details.push(details);
  stringDetail = JSON.stringify(customer_details);
  localStorage.setItem("details", stringDetail);

  localStorage.setItem("order_id", JSON.stringify(order_id));
  window.location.href = "../Pages/check.html";
});
