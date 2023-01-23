import "./styles/index.css";

//Main carousel elements
const mainCarouselBtn = document.querySelector(".carousel-btn");

//Page sections
const cardsSection = document.querySelector("#cards-section");
const portfolioSection = document.querySelector("#portfolio-section");
const partnersSection = document.querySelector("#partners-section");
const dataSection = document.querySelector("#data-section");
const teamsSection = document.querySelector("#team-section");

const portfolioBtn = document.querySelector(".portfolio-btn");
const portfolioBulletNavParents = document.querySelector(".controls ul");
const mainCarouselBulletNavParents = document.querySelector(
  ".main-carousel-controls ul"
);

const header = document.querySelector(".primary-header");
const headerHeight = header.offsetHeight + 8;

let resizeTimer;
var portfolioSectionIndex = 0;
var mainCarouselSectionIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  cardsSection.style.paddingTop = headerHeight + "px";
  portfolioSection.style.paddingTop = headerHeight + "px";
  partnersSection.style.paddingTop = headerHeight + "px";
  dataSection.style.paddingTop = headerHeight + "px";
  teamsSection.style.paddingTop = headerHeight + "px";
});

mainCarouselBtn.addEventListener("click", moveCarouselSection);
portfolioBtn.addEventListener("click", moveCarouselSection);

document
  .querySelectorAll(".main-carousel-controls li")
  .forEach(function (indicator, ind) {
    indicator.addEventListener("click", () => {
      console.log("Click main");
      const slider = document.querySelector(".main-carousel-slider");
      mainCarouselSectionIndex = ind;
      document
        .querySelector(".main-carousel-controls .selected")
        .classList.remove("selected");
      indicator.classList.add("selected");
      slider.style.transform =
        "translate(" + mainCarouselSectionIndex * -25 + "%)";
    });
  });

document.querySelectorAll(".controls li").forEach(function (indicator, ind) {
  indicator.addEventListener("click", () => {
    const slider = document.querySelector(".slider");
    portfolioSectionIndex = ind;
    document.querySelector(".controls .selected").classList.remove("selected");
    indicator.classList.add("selected");
    slider.style.transform = "translate(" + portfolioSectionIndex * -25 + "%)";
  });
});

function moveCarouselSection(event) {
  const buttonParentElementClass = event.target.parentNode.classList;
  if (buttonParentElementClass.contains("carousel-btn")) {
    console.log("alo");
    const slider = document.querySelector(".main-carousel-slider");
    mainCarouselSectionIndex =
      mainCarouselSectionIndex < 3 ? mainCarouselSectionIndex + 1 : 0;
    document
      .querySelector(".main-carousel-controls .selected")
      .classList.remove("selected");
    mainCarouselBulletNavParents.children[
      mainCarouselSectionIndex
    ].classList.add("selected");
    slider.style.transform =
      "translate(" + mainCarouselSectionIndex * -25 + "%)";
  } else {
    const slider = document.querySelector(".slider");
    portfolioSectionIndex =
      portfolioSectionIndex < 3 ? portfolioSectionIndex + 1 : 0;
    document.querySelector(".controls .selected").classList.remove("selected");
    portfolioBulletNavParents.children[portfolioSectionIndex].classList.add(
      "selected"
    );
    slider.style.transform = "translate(" + portfolioSectionIndex * -25 + "%)";
  }
}

window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});
