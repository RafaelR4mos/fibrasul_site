
const highlightsData = [

    {
        topText: "",
        bottomText: "DIAS SEM ACIDENTES/INCIDENTES NO TRABALHO",
        number: 1200,
        icon: "shield-icon",
        extraClasses: ["specific1"]
    },
    {
        topText: "",
        bottomText: "FUNCIONÁRIOS QUALIFICADOS",
        number: 50,
        icon: "quality-icon",
        extraClasses: ["specific2"]
    },
    {

        topText: "MACRO E MICRO",
        bottomText: "SERVIÇOS REALIZADOS",
        number: 150,
        icon: "job-icon",
        extraClasses: ["specific3"]
    }
]


const imagesAmount = document.querySelectorAll(".carousel-content").length;
let images;
let imagesPosition = 0;
let touchStart, touchEnd;

async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

async function loadHighlights(index, data) {
    let hl = document.createElement('div');
    hl.innerHTML = await fetchHtmlAsText("highlight.html");
    hl.classList.add("container");
    hl.classList.add("item-" + index);
    hl.querySelector(".container .top-text").innerHTML = data.topText;
    hl.querySelector(".container .number-text").innerHTML = data.number;
    hl.querySelector(".container .bottom-text").innerHTML = data.bottomText;
    hl.querySelector(".container .logo").innerHTML = '<img src="../assets/icons/' + data.icon + '.svg" alt="">';
    if (data.extraClasses && data.extraClasses.length > 0) {
        for (let i = 0; i < data.extraClasses.length; i++) {
            hl.classList.add(data.extraClasses[i]);
        }
    }
    document.querySelector('.highlights').appendChild(hl);
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

    for (let i = 0; i < highlightsData.length; i++) {
        loadHighlights(i + 1, highlightsData[i]);

    }
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