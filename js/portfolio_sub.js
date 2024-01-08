document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// 스크롤하면 컨텐츠 나타남
window.addEventListener("scroll", function () {
  var scrolled = window.scrollY;
  var mainContainers = document.querySelectorAll("section");

  mainContainers.forEach(function (mainContainer) {
    if (scrolled > mainContainer.offsetTop - window.innerHeight / 5) {
      mainContainer.classList.add("active");
    }
  });
});
