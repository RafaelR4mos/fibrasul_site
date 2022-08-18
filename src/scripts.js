const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const imagesAmount = document.querySelectorAll(".carousel-content").length;
const infoButton = document.getElementById('info-btn');
const rightCarouselArrow = document.getElementById('btnR');
const leftCarouselArrow = document.getElementById('btnL');

let images;
let imagesPosition = 0;
let touchStart, touchEnd;
var arrayPosition = 0;


toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

// USED TO CONTROL ARRAY POSITION VALUES
rightCarouselArrow.addEventListener('click', () => {
    arrayPosition += 1;
})

leftCarouselArrow.addEventListener('click', () => {
    arrayPosition -= 1;
})

function selectHref() {

    window.location.href = "../pages/infrastructure.html"
    //if (arrayPosition == 1) {
    //      window.location.href = "../pages/infrastructure.html"
    //}


    // else if (arrayPosition == 2) {
    //     window.location.href = "../pages/services.html"
    //}
}



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
    console.log('resize');
    document.documentElement.style.setProperty('--windowWidth', `${(window.innerWidth / 2000) + "s"}`);
    move(0);
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