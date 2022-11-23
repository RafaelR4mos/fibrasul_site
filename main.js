import './styles/index.css'

const imagesAmount = document.querySelectorAll(".carousel-content").length;
const rightCarouselArrow = document.getElementById('btnR');
const leftCarouselArrow = document.getElementById('btnL');
const carouselBulletNav = document.querySelector('.carousel-bullet-nav-container');
const bulletPoints = document.querySelector('.bullet-nav');


let images;
let imagesPosition = 0;
let touchStart, touchEnd;
let resizeTimer;
var arrayPosition = 0;


carouselBulletNav.addEventListener('click', (e) => {
  const clickedElement = e.target

  if (clickedElement.id == 'bullet-1') {
    move(-1);
  }
  else if (clickedElement.id == 'bullet-2') {
    move(-2);
  }
  else if (clickedElement.id == 'bullet-3') {
    move(-3);
  }
})


// USED TO CONTROL ARRAY POSITION VALUES
rightCarouselArrow.addEventListener('click', () => {
  arrayPosition += 1;
})

leftCarouselArrow.addEventListener('click', () => {
  arrayPosition -= 1;
  
console.log(arrayPosition)
})

document.addEventListener("DOMContentLoaded", function () {
  document.documentElement.style.setProperty('--windowWidth', `${(window.innerWidth / 2000) + "s"}`);

  images = document.querySelector('#carousel-items')

  document.querySelector('#btnL').addEventListener("click", () => { move(1) })
  document.querySelector('#btnR').addEventListener("click", () => { move(-1) })
  document.querySelector('#carousel-main').addEventListener("touchstart", (event) => { touchStart = Math.floor(event.changedTouches[0].screenX) })
  document.querySelector('#carousel-main').addEventListener("touchend", (event) => {
      touchEnd = Math.floor(event.changedTouches[0].screenX);
      if (touchStart > touchEnd) {
          move(-1);
      } else {
          move(1);
      }
  });
});


window.addEventListener("resize", function () {
  document.documentElement.style.setProperty('--windowWidth', `${(window.innerWidth / 2000) + "s"}`);
  move(0);
});

window.addEventListener('resize', () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});



function move(direction) {
  const imageW = images.offsetWidth;
  imagesPosition += direction;

  imagesPosition = (imagesPosition > 0) ? 0 : (Math.abs(imagesPosition) <= (imagesAmount - 1)) ? imagesPosition : -(imagesAmount - 1);

  if (direction == 0) {
      images.classList.remove('animate');
  } else {
      images.classList.add('animate');
  }

  images.style.transform = "translateX(" + imagesPosition * imageW + "px)";
}

