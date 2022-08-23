

//Serviços em andamento
let services = [
    {
        name: "Tubulações em PRFV",
        image: "../assets/prfv.jpeg"
    },
    {
        name: 'Eletrobomba CR1',
        image: "../assets/eletrobomba.jpeg"
    },
    {
        name: 'Polpa Marrom',
        image: "../assets/placa.jpg"
    }
];

let doneServices = [
    {
        name: "CR2 Cinzas",
        image: "../assets/prfv.jpeg"
    },
    {
        name: 'Outro serviço',
        image: "../assets/eletrobomba.jpeg"
    },
    {
        name: 'Outro serviço 2',
        image: "../assets/placa.jpg"
    }
]

//Serviços em andamento
const serviceText1 = document.getElementById('service-title1').innerHTML = services[0].name;
const serviceImg1 = document.getElementById('service-img1').src = services[0].image;

const serviceText2 = document.getElementById('service-title2').innerHTML = services[1].name;
const serviceImg2 = document.getElementById('service-img2').src = services[1].image;

const serviceText3 = document.getElementById('service-title3').innerHTML = services[2].name;
const serviceImg3 = document.getElementById('service-img3').src = services[2].image;

//Serviços finalizados
const doneserviceText1 = document.getElementById('done-service-title1').innerHTML = doneServices[0].name;
const doneserviceImg1 = document.getElementById('done-service-img1').src = doneServices[0].image;

const doneserviceText2 = document.getElementById('done-service-title2').innerHTML = doneServices[1].name;
const doneserviceImg2 = document.getElementById('done-service-img2').src = doneServices[1].image;

const doneserviceText3 = document.getElementById('done-service-title3').innerHTML = doneServices[2].name;
const doneserviceImg3 = document.getElementById('done-service-img3').src = doneServices[2].image;



function goPage() {
    window.location.href = "../pages/specific-service1.html";
}