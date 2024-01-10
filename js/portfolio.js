// 부드러운 이동
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// main에 글자 색 채워짐
document.addEventListener("scroll", function () {
  const mainTextElements = document.querySelectorAll(".main-text-box");

  mainTextElements.forEach(function (mainTextBox) {
    const bounding = mainTextBox.getBoundingClientRect();

    if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
      mainTextBox.classList.add("active");
    } else {
      mainTextBox.classList.remove("active");
    }
  });
});

document.addEventListener("scroll", function () {
  const body = document.body;
  const scrolled = window.scrollY > 0;
  body.classList.toggle("scrolled", scrolled);
});

// 스크롤하면 컨텐츠 나타남
window.addEventListener("scroll", function () {
  var scrolled = window.scrollY;
  var mainContainers = document.querySelectorAll("section");

  mainContainers.forEach(function (mainContainer) {
    if (scrolled > mainContainer.offsetTop - window.innerHeight / 4) {
      mainContainer.classList.add("active");
    }
  });
});

// 스크롤하면 라인 나타남
window.addEventListener("scroll", function () {
  var scrolled = window.scrollY;

  var projectLines = document.querySelectorAll(".project-line");
  var stackLines = document.querySelectorAll(".stack-line");
  var stackTopLines = document.querySelectorAll(".stack-top-line");
  var stackBottomLines = document.querySelectorAll(".stack-bottom-line");
  var bottomLines = document.querySelectorAll(".bottom-line");

  projectLines.forEach(function (projectLine) {
    if (scrolled > projectLine.offsetTop - window.innerHeight / 1) {
      projectLine.classList.add("active");
    }
  });

  stackLines.forEach(function (stackLine) {
    if (scrolled > stackLine.offsetTop - window.innerHeight / 1) {
      stackLine.classList.add("active");
    }
  });

  stackTopLines.forEach(function (stackLine) {
    if (scrolled > stackLine.offsetTop - window.innerHeight / 1) {
      stackLine.classList.add("active");
    }
  });
  stackBottomLines.forEach(function (stackLine) {
    if (scrolled > stackLine.offsetTop - window.innerHeight / 1) {
      stackLine.classList.add("active");
    }
  });

  bottomLines.forEach(function (stackLine) {
    if (scrolled > stackLine.offsetTop - window.innerHeight / 1) {
      stackLine.classList.add("active");
    }
  });
});
