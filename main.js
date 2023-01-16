import "./styles/index.css";

//Main carousel elements
const imagesAmount = document.querySelectorAll(".carousel-content").length;
const rightCarouselArrow = document.getElementById("btnR");
const leftCarouselArrow = document.getElementById("btnL");
const carouselSwipeArea = document.querySelector("#carousel-main");

//Cards section elements
const hiddenCards = document.querySelector(".hidden-cards");
const knowMoreCardsBtn = document.querySelector("#cards-btn");

//Portfolio carousel elements
const indicatorParents = document.querySelector(".carousel-bullet-nav-container");
const slider = document.querySelector(".slider");
const rightPortfolioArrow = document.querySelector(".arrow-right");
const portfolioBulletNavParents = document.querySelector(".controls ul");

// const partnersBtn = document.querySelector(".partners-galery-container + button");
// const partnersHiddenItems = document.querySelectorAll(".partners-galery-container .disabled-small-screen");

let images;
let imagesPosition = 0;
let touchStart = 0;
let touchEnd = 0;
let resizeTimer;
var arrayPosition = 0;
var portfolioSectionIndex = 0;

// partnersBtn.addEventListener('click', () => {
//   partnersHiddenItems.classList.remove('disabled-small-screen');
// })


//First Page carousel
leftCarouselArrow.addEventListener("click", function () {
  move(1);
  arrayPosition = arrayPosition > 0 ? arrayPosition - 1 : 0;
  setIndex();
  indicatorParents.children[arrayPosition].classList.add("selected");
  console.log(arrayPosition);
});

rightCarouselArrow.addEventListener("click", function () {
  move(-1);
  arrayPosition = arrayPosition < 2 ? arrayPosition + 1 : 2;
  setIndex();
  indicatorParents.children[arrayPosition].classList.add("selected");
  console.log(arrayPosition);
});

carouselSwipeArea.addEventListener("touchstart", (event) => {
  touchStart = Math.floor(event.changedTouches[0].screenX);
});
carouselSwipeArea.addEventListener("touchend", (event) => {
  touchEnd = Math.floor(event.changedTouches[0].screenX);
  if (touchStart > touchEnd) {
    move(-1);
    arrayPosition = arrayPosition < 2 ? arrayPosition + 1 : 2;
    setIndex();
    indicatorParents.children[arrayPosition].classList.add("selected");
    console.log(arrayPosition);
  } else {
    move(1);
    arrayPosition = arrayPosition > 0 ? arrayPosition - 1 : 0;
    setIndex();
    indicatorParents.children[arrayPosition].classList.add("selected");
  }
});


//Second Page carousel in the Portfolio Section
document.querySelectorAll(".controls li").forEach(function (indicator, ind) {
  indicator.addEventListener("click", function () {
    portfolioSectionIndex = ind;
    document.querySelector(".controls .selected").classList.remove("selected");
    indicator.classList.add("selected");
    slider.style.transform = "translate(" + portfolioSectionIndex * -25 + "%)";
    console.log(portfolioSectionIndex);
  });
});

rightPortfolioArrow.addEventListener("click", () => {
  portfolioSectionIndex = portfolioSectionIndex < 3 ? portfolioSectionIndex + 1 : 0;
  document.querySelector(".controls .selected").classList.remove("selected");
  portfolioBulletNavParents.children[portfolioSectionIndex].classList.add(
    "selected"
  );
  slider.style.transform = "translate(" + portfolioSectionIndex * -25 + "%)";
});

slider.addEventListener('touchend', (event) => {
  touchEnd = Math.floor(event.changedTouches[0].screenX);
  if (touchStart > touchEnd) {
    portfolioSectionIndex = portfolioSectionIndex < 3 ? portfolioSectionIndex + 1 : 0;
    document.querySelector(".controls .selected").classList.remove("selected");
    portfolioBulletNavParents.children[portfolioSectionIndex].classList.add(
      "selected"
    );
    slider.style.transform = "translate(" + portfolioSectionIndex * -25 + "%)";
  }
})



document.addEventListener("DOMContentLoaded", function () {
  document.documentElement.style.setProperty(
    "--windowWidth",
    `${window.innerWidth / 2000 + "s"}`
  );

  images = document.querySelector("#carousel-items");
});

window.addEventListener("resize", function () {
  document.documentElement.style.setProperty(
    "--windowWidth",
    `${window.innerWidth / 2000 + "s"}`
  );
  move(0);
});

window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

function setIndex() {
  document
    .querySelector("#carousel-section .selected")
    .classList.remove("selected");
}

function move(direction) {
  const imageW = images.offsetWidth;
  imagesPosition += direction;

  imagesPosition =
    imagesPosition > 0
      ? 0
      : Math.abs(imagesPosition) <= imagesAmount - 1
      ? imagesPosition
      : -(imagesAmount - 1);

  if (direction == 0) {
    images.classList.remove("animate");
  } else {
    images.classList.add("animate");
  }

  images.style.transform = "translateX(" + imagesPosition * imageW + "px)";
}

