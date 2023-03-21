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
      arrayOfUserDetails.push(userDetails);
      stringArray = JSON.stringify(arrayOfUserDetails);
      localStorage.setItem("userData", stringArray);
      alert("You have successfully Registered");
      window.open("/Pages/Product.html");
    } else {
      alert("password not match");
    }
  }
});

// MY LOGIN
let loginForm = document.getElementById("login_form");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let userArray = [];

  let login_data = JSON.parse(localStorage.getItem("userData"));

  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;
  let isExist = false;
  for (let i = 0; i < login_data?.length; i++) {
    // console.log(login_data[i]["email"]);
    if (
      email == login_data[i]["email"] &&
      password == login_data[i]["password"]
    ) {
      isExist = true;
      userArray.push(login_data[i]);
      localStorage.setItem("login", JSON.stringify(login_data[i]["u_id"]));

      break;
    } else {
      isExist = false;
    }
  }

  if (isExist == true) {
    window.open("/Pages/Product.html");
    alert("You have successfully loged-in");
  } else {
    alert("Invalid user crentials");
  }
});
