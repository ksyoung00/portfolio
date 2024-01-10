const globalMenu = document.querySelector(".global-menu");
const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");

openBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  globalMenu.style.transform = "translateY(0)";
});
closeBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  globalMenu.style.transform = "translateY(-200px)";
});

document.addEventListener("scroll", function () {
  const body = document.body;
  const scrolled = window.scrollY > 0;
  body.classList.toggle("scrolled", scrolled);
});

// 스크롤하면 라인 나타남
window.addEventListener("scroll", function () {
  var scrolled = window.scrollY;

  var headerLines = document.querySelectorAll(".header-line");
  var bottomLines = document.querySelectorAll(".header-bottom-line");

  headerLines.forEach(function (headerLine) {
    if (scrolled > headerLine.offsetTop - window.innerHeight / 1) {
      headerLine.classList.add("active");
    }
  });

  bottomLines.forEach(function (bottomLine) {
    if (scrolled > bottomLine.offsetTop - window.innerHeight / 1) {
      bottomLine.classList.add("active");
    }
  });
});
