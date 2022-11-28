import "./styles/index.css";

const imagesAmount = document.querySelectorAll(".carousel-content").length;
const rightCarouselArrow = document.getElementById("btnR");
const leftCarouselArrow = document.getElementById("btnL");
const indicatorParents = document.querySelector(".carousel-bullet-nav-container");
const carouselSwipeArea = document.querySelector("#carousel-main");

let images;
let imagesPosition = 0;
let touchStart, touchEnd;
let resizeTimer;
var arrayPosition = 0;


document.querySelectorAll("#carousel-section .opa").forEach(function(indicator, ind) {
    indicator.addEventListener("click", function() {
    arrayPosition = ind;
    indicator.classList.add("selected");
})
});


// USED TO CONTROL ARRAY POSITION VALUES
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



function setIndex() {
  document.querySelector('#carousel-section .selected').classList.remove("selected");
}



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
