let payment_form = document.getElementById("pay_form");
payment_form.addEventListener("submit", function (event) {
  event.preventDefault();

  let order = JSON.parse(localStorage.getItem("order_id"));
  let details = JSON.parse(localStorage.getItem("details"));

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

  let new_obj = {
    card_name,
    card_number,
    date,
    cvc_num,
  };

  let pay = Object.assign(find_id, new_obj);
  let index = details.indexOf(find_id);

  details[index] = pay;
  localStorage.setItem("details", JSON.stringify(details));
  alert("order succeed");
  location.href = "../Pages/confirmation.html";
});

