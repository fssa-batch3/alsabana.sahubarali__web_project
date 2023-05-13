let pay = document.getElementById("number");
pay.addEventListener("keyup", function (e) {
  console.log(e.keyCode);
  if (e.keyCode !== 8) {
    if (
      this.value.length === 4 ||
      this.value.length === 9 ||
      this.value.length === 14
    ) {
      this.value = this.value += " ";
    }
  }
});

let payment_form = document.getElementById("pay_form");
payment_form?.addEventListener("submit", function (event) {
  event.preventDefault();

  let order = JSON.parse(localStorage.getItem("order_id"));
  let details = JSON.parse(localStorage.getItem("details"));
  let id = JSON.parse(localStorage.getItem("id"));
  let product = JSON.parse(localStorage.getItem("total_product"));
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
  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  if (day <= 28) {
    day = day + 2;
  }
  if (day > 28) {
    day = 30 - 28;
    month = month + 1;
  }
  // add leading zero if month or day is a single digit
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  let currentDate = `${year}-${month}-${day}`;
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
    currentDate,
  };

  let pay = Object.assign(find_id, new_obj);
  let index = details.indexOf(find_id);
  details[index] = pay;
  localStorage.setItem("details", JSON.stringify(details));
  alert("order succeed");
  location.href = "../Pages/confirmation.html";
});
