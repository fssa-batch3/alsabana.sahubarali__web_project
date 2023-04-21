const allstar = document.querySelectorAll(".fa-regular");
const showRating = document.getElementById("showRating");
allstar.forEach((star, index) => {
  //  console.log(index)
  star.addEventListener("click", (e) => {
    e.preventDefault();
    let current_star = index + 1;
    // console.log(current_star)
    showRating.innerText = `${current_star} of 5`;
    allstar.forEach((star, i) => {
      if (current_star >= i + 1) {
        star.innerHTML = "&#9733";
      } else {
        star.innerHTML = "&#9734;";
      }
    });
  });
});

let review = document.getElementById("review");
let input = document.getElementById("input");
input.addEventListener("submit", function (event) {
  event.preventDefault();
  let review = document.getElementById("review").value;
  console.log(review);
});
