let before_login = `<nav class="navbar-item hide">
<ul>
<input type="text" id="search_input" name="search" placeholder="Search..">

  <li><a href="../index.html">Home</a></li>
  <li><a href="../Pages/analysis.html">Hair Analysis</a></li>
  <li class="dropdown"><a href="../Pages/Product.html">Products</a></li>
  <li class="box count" onclick="open_popup()">
     <span class="bi bi-cart4"></span>Cart
  </li>
</ul>
</div>
</nav>`;

let after_login = `<nav class="navbar-item hide">
<ul>
<input type="text" id="search_input" name="search" placeholder="Search..">

  <li><a href="../index.html">Home</a></li>
  <li><a href="../Pages/analysis.html">Hair Analysis</a></li>
  <li class="dropdown"><a href="../Pages/Product.html">Products</a></li>
  <li class="box count" onclick="open_popup()">
     <span class="bi bi-cart4"></span>Cart
  </li>
  <li>
    <a href="../Pages/acc.html"
     class="bi bi-person-circle" >
  Account  </a>
  </li>
</ul>
</div>
</nav>`;

let header = document.getElementById("js_header");
let login_id = JSON.parse(localStorage.getItem("login"));
if (login_id == null) {
  header.innerHTML = before_login;
} else {
  header.innerHTML = after_login;
}
