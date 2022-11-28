import "./styles/index.css";

const imagesAmount = document.querySelectorAll(".carousel-content").length;
const rightCarouselArrow = document.getElementById("btnR");
const leftCarouselArrow = document.getElementById("btnL");
const indicatorParents = document.querySelector(".carousel-bullet-nav-container");
const carouselSwipeArea = document.querySelector("#carousel-main");
const hiddenCards = document.querySelector('.hidden-cards')
const knowMoreCardsBtn = document.querySelector('#cards-btn')

const slider = document.querySelector('.slider')
const rightPortfolioArrow = document.querySelector('.arrow-right')
const portfolioBulletNavParents = document.querySelector('.controls ul')

let images;
let imagesPosition = 0;
let touchStart, touchEnd;
let resizeTimer;
var arrayPosition = 0;
var portfolioSectionIndex = 0;


leftCarouselArrow.addEventListener("click", function() {
  arrayPosition = (arrayPosition > 0) ? arrayPosition - 1 : 0;
  setIndex();
  indicatorParents.children[arrayPosition].classList.add("selected");
  console.log(arrayPosition)
});

rightCarouselArrow.addEventListener("click", function() {
  arrayPosition = (arrayPosition < 2) ? arrayPosition + 1 : 2;
  setIndex();
  indicatorParents.children[arrayPosition].classList.add("selected");
  console.log(arrayPosition)
});


document.querySelectorAll('.controls li').forEach(function (indicator, ind) {
  indicator.addEventListener('click', function () {
    portfolioSectionIndex = ind
    document.querySelector('.controls .selected').classList.remove('selected');
    indicator.classList.add('selected');
    slider.style.transform = 'translate(' + (portfolioSectionIndex) * -25 + '%)';
    console.log(portfolioSectionIndex)
  });

});

rightPortfolioArrow.addEventListener('click', () => {
  portfolioSectionIndex = (portfolioSectionIndex < 3) ? portfolioSectionIndex + 1 : 0;
  document.querySelector('.controls .selected').classList.remove('selected');
  portfolioBulletNavParents.children[portfolioSectionIndex].classList.add('selected')
  slider.style.transform = 'translate(' + (portfolioSectionIndex) * -25 + '%)';
})

document.addEventListener("DOMContentLoaded", function () {
  document.documentElement.style.setProperty(
    "--windowWidth",
    `${window.innerWidth / 2000 + "s"}`
  );

  images = document.querySelector("#carousel-items");

  document.querySelector("#btnL").addEventListener("click", () => {
    move(1);
  });
  document.querySelector("#btnR").addEventListener("click", () => {
    move(-1);
  });
  carouselSwipeArea
    .addEventListener("touchstart", (event) => {
      touchStart = Math.floor(event.changedTouches[0].screenX);
    });
    carouselSwipeArea
    .addEventListener("touchend", (event) => {
      touchEnd = Math.floor(event.changedTouches[0].screenX);
      if (touchStart > touchEnd) {
        move(-1);
        arrayPosition = (arrayPosition < 2) ? arrayPosition + 1 : 2;
        setIndex();
        indicatorParents.children[arrayPosition].classList.add("selected");
        console.log(arrayPosition)
      } else {
        move(1);
        arrayPosition = (arrayPosition > 0) ? arrayPosition - 1 : 0;
        setIndex();
        indicatorParents.children[arrayPosition].classList.add("selected");
      }
    });
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
  document.querySelector('#carousel-section .selected').classList.remove("selected");
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
