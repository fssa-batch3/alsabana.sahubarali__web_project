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
let check = false;
const signup = document.getElementById("signUp");
signup?.addEventListener("submit", function (event) {
  event.preventDefault();
  if (localStorage.getItem("userData") != null) {
    let arrayOfUserDetails = JSON.parse(localStorage.getItem("userData"));
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
    image:
      "https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg",
  };
  let check = checkUser(phoneNo, email);

  if (check == false) {
    if (userDetails.password == userDetails.confirmPassword) {
      if (userDetails.sign_type == "customer") {
        let customer = [];
        if (JSON.parse(localStorage.getItem("userData")) != null) {
          customer = JSON.parse(localStorage.getItem("userData"));
        }
        customer.push(userDetails);
        let stringArray = JSON.stringify(customer);
        localStorage.setItem("userData", stringArray);
        Notify.success(
          "You have successfully Registered Please login your account"
        );
        location.reload();
      }
      if (userDetails.sign_type == "seller") {
        let seller = [];
        if (JSON.parse(localStorage.getItem("seller")) != null) {
          seller = JSON.parse(localStorage.getItem("seller"));
        }
        seller.push(userDetails);
        let seller_str = JSON.stringify(seller);
        localStorage.setItem("seller", seller_str);
        Notify.success(
          "You have successfully Registered please login to your account"
        );
        location.reload();
      }
    } else {
      Notify.error("Please Check Your Details");
    }
  }
});
// function check user
function checkUser(phn, email) {
  let user = [];
  if (JSON.parse(localStorage.getItem("userData") != null)) {
    user = JSON.parse(localStorage.getItem("userData"));
  }
  let seller = [];
  if (JSON.parse(localStorage.getItem("seller") != null)) {
    seller = JSON.parse(localStorage.getItem("seller"));
  }
  let check = false;
  user.find((e) => {
    if (e["email"] == email) {
      check = true;
      Notify.error("Email already Exist");
      return true;
    }
    if (phn == e["phoneNo"]) {
      check = true;
      Notify.error("Phone number already exist");
      return true;
    }
  });

  seller.find((e) => {
    if (e["email"] == email) {
      check = true;
      Notify.error("Email already exist");
      return true;
    }
    if (phn == e["phoneNo"]) {
      check = true;
      Notify.error("Phone number Already exist");
    }
  });
  return check;
}
// MY LOGIN
let loginForm = document.getElementById("login_form");
loginForm?.addEventListener("submit", function (event) {
  event.preventDefault();
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;
  let isExist = false;
  let find_customer = JSON.parse(localStorage.getItem("userData"));
  let find_seller = JSON.parse(localStorage.getItem("seller"));
  find_customer?.find(function (user) {
    if (email === user["email"]) {
      isExist = true;
      if (password === user["password"]) {
        Notify.success("successfully loged in");
        window.open("/Pages/Product.html");
        localStorage.setItem("login", JSON.stringify(user["u_id"]));
        return isExist;
      } else {
        Notify.error("password not match");
        return isExist;
      }
    }
    return isExist;
  });
  if (isExist == false) {
    find_seller?.find(function (user) {
      if (email === user["email"]) {
        isExist = true;
        if (password === user["password"]) {
          Notify.success("successfully seller loged in");
          window.location.href = "../Pages/sellerAdd.html";
          localStorage.setItem("login_seller", JSON.stringify(user["u_id"]));
          return isExist;
        } else {
          Notify.error("password not match");
        }
      }
      return isExist;
    });
  }
  if (email === "admin@gmail.com") {
    if (password == 1234567890) {
      Notify.success("Welcome");
      window.open("/Pages/adPanel.html");
    } else {
      Notify.error("invalid please check");
    }
  }
  if (isExist === false) {
    Notify.error("Invalid user crentials");
  }
});

let logged = JSON.parse(localStorage.getItem("login"));
let login_btn = document.getElementById("login_btn");
let profile = document.querySelector(".pro_img");
let nav = document.querySelector(".navbar-item");
if (logged != null) {
  login_btn.style.display = "none";
  profile.style.display = "block";
  nav.style.marginRight = "100px";
  profile.style.marginTop = "20px";
}

let show_profile = document.getElementById("show_profile");
let user = JSON.parse(localStorage.getItem("userData"));
let log_user = user.find((obj) => logged == obj["u_id"]);
show_profile.setAttribute("src", log_user["image"]);

// To  drop down
function dropdown() {
  document.getElementById("drop").classList.toggle("show");
}
window.onclick = function (e) {
  if (!e.target.matches("#product_drop")) {
    let dropdown = document.querySelector(".dropdown");
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
  }
};
let tog = document.getElementById("drop");
if (logged != null) {
  tog.style.position = "absolute";
  tog.style.right = "6%";
}
