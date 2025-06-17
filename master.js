let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".mainDiv");
if (window.localStorage.getItem("color")) {
  exp.style.backgroundColor = window.localStorage.getItem("color");
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  document
    .querySelector(`[data-color=${window.localStorage.getItem("color")}]`)
    .classList.add("active");
}

lis.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    // console.log(e.currentTarget.dataset.color)
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    exp.style.backgroundColor = window.localStorage.getItem("color");
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    document
      .querySelector(`[data-color=${window.localStorage.getItem("color")}]`)
      .classList.add("active");
  });
});
