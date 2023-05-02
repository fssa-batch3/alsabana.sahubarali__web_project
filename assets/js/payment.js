let payment_form = document.getElementById("pay_form");
payment_form.addEventListener("submit", function (event) {
  event.preventDefault();

  let order = JSON.parse(localStorage.getItem("order_id"));
  let details = JSON.parse(localStorage.getItem("details"));
  let id = JSON.parse(localStorage.getItem("id"));
  let product = JSON.parse(localStorage.getItem("proObject"));
  let find_product = product.find(function (pro) {
    let product_id = pro["id"];
    if (product_id == id) {
      return true;
    }
  });

  let find_id = details.find(function (obj) {
    let id = obj["order_id"];
    if (id == order) {
      return true;
    }
  });

  let card_name = document.getElementById("name").value;
  let card_number = document.getElementById("number").value;
  let date = document.getElementById("date").value;
  let cvc_num = document.getElementById("cvc").value;
  let productName = find_product["productName"];
  let cost = find_product["cost"];
  let image = find_product["image"]["src"];

  let new_obj = {
    card_name,
    card_number,
    date,
    cvc_num,
    productName,
    cost,
    image,
    delivery_date: new Date(),
  };

  let pay = Object.assign(find_id, new_obj);
  let index = details.indexOf(find_id);
  details[index] = pay;
  localStorage.setItem("details", JSON.stringify(details));
  alert("order succeed");
  location.href = "../Pages/confirmation.html";
});
