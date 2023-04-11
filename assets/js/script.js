// for nav
document.querySelector(".navbar-btn").onclick = function () {
  document.querySelector(".navbar-item").classList.toggle("hide");
};

document.querySelector(".navbar-btn").onclick = function () {
  document.querySelector(".navbar-item").classList.toggle("hide");
};

// for pop
let popup = document.getElementById("pop");
function openpopup() {
  popup.classList.add("open-popup");
}
function exit_pop() {
  popup.classList.remove("open-popup");
}

//login button

let pop_up = document.querySelector(".signup-pop");

function open_pop() {
  pop_up.classList.add("sign-block");
  popup.classList.remove("open-popup");
}
function exit_popup() {
  pop_up.classList.remove("sign-block");
}

///my signup

let checker = false;
const signup = document.getElementById("signUp");
signup.addEventListener("submit", function (event) {
  event.preventDefault();
  let arrayOfUserDetails = [];
  if (localStorage.getItem("userData") != null) {
    arrayOfUserDetails = JSON.parse(localStorage.getItem("userData"));
  }
  let sign_type = document.getElementById("input_type").value;
  let userName = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let phoneNo = document.getElementById("phone-no").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm-password").value;
  let u_id = Date.now();

  let userDetails = {
    username: userName,
    email: email,
    phoneNo: phoneNo,
    password: password,
    confirmPassword: confirmPassword,
    u_id,
    sign_type,
  };

  for (let i = 0; i < arrayOfUserDetails.length; i++) {
    if (email === arrayOfUserDetails[i]["email"]) {
      checker = true;
      alert("email already exist");
      break;
    }
    if (phoneNo === arrayOfUserDetails[i]["phoneNo"]) {
      checker = true;
      alert("phone number already exist");
      break;
    } else {
      checker = false;
    }
  }
  if (checker === false) {
    if (userDetails.password == userDetails.confirmPassword) {
      if (userDetails.sign_type === "customer") {
        arrayOfUserDetails.push(userDetails);
        stringArray = JSON.stringify(arrayOfUserDetails);
        localStorage.setItem("userData", stringArray);
        alert("You have successfully Registered");
        window.open("/Pages/Product.html");
      }
      if (
        localStorage.getItem("seller") === null &&
        userDetails.sign_type === "seller"
      ) {
        alert("exe");
        let seller_array = [];
        seller_array.push(userDetails);
        seller_str = JSON.stringify(seller_array);
        localStorage.setItem("seller", seller_str);
        window.location.href = "../Pages/seller.html";
      } else if (
        localStorage.getItem("seller") != null &&
        userDetails.sign_type === "seller"
      ) {
        let get_seller = JSON.parse(localStorage.getItem("seller"));
        get_seller.push(userDetails);
        string_seller = JSON.stringify(get_seller);
        localStorage.setItem("seller", string_seller);
        alert("succesfully seller added");
        window.location.href = "../Pages/seller.html";
      } else {
        alert("password not match");
      }
    }
  }
});
// MY LOGIN
let loginForm = document.getElementById("login_form");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;
  let isExist = false;
  let find_customer = JSON.parse(localStorage.getItem("userData"));
  let find_seller = JSON.parse(localStorage.getItem("seller"));
  const find = find_customer.find(function (user) {
    if (email === user["email"]) {
      isExist = true;
      if (password === user["password"]) {
        alert("successfully loged in");
        window.open("/Pages/Product.html");
        localStorage.setItem("login", JSON.stringify(user["u_id"]));
        return isExist;
      }
      alert("password not match");
      return isExist;
    }
    return isExist;
  });
  if (isExist == false) {
    const seller = find_seller.find(function (user) {
      if (email === user["email"]) {
        isExist = true;
        if (password === user["password"]) {
          alert("successfully loged in");
          window.open("/Pages/seller.html");
          localStorage.setItem("login", JSON.stringify(user["u_id"]));
          return isExist;
        }
      }
      return isExist;
    });
  }

  if (isExist === false) {
    alert("Invalid user crentials");
  }
});
