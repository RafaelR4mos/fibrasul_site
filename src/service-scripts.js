//Serviços em andamento
let services = [
    {
        name: "Tubulações em PRFV",
        image: "../assets/prfv.jpeg",
        description: "lorem ipsum tanana tanana na ta ta dkkfkdkk ksosswkd um doi 202e94 lslsmcsl 2doas, wowoow ,xcmsskl",
        date: "01/01/01",
        hirer: "CMPC",
        location: "Complexo da CMPC - Guaíba",
        serviceObjective: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
        serviceImgDescription: "Montagem de Tubulações",
        responsiblePerson: "Matheus Kutter"

    },
    {
        name: 'Eletrobomba CR1',
        image: "../assets/eletrobomba.jpeg",
        description: "Descrição 2",
        date: "02/02/02",
        hirer: "CMPC",
        location: "Complexo da CMPC - Guaíba",
        serviceObjective: "",
        serviceImgDescription: "",
        responsiblePerson: "Matheus Kutter"
    },
    {
        name: 'Polpa Marrom',
        image: "../assets/placa.jpg",
        description: "Descrição 3",
        date: "03/03/03",
        hirer: "CMPC",
        location: "Rua G2",
        serviceObjective: "o objetivo do serviço é um objetivo muito nobre",
        serviceImgDescription: "",
        responsiblePerson: "Matheus Kutter"
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


//MODALS

// Get DOM Elements
const modal1 = document.querySelector('#my-modal1');
const modal2 = document.querySelector('#my-modal2');
const modal3 = document.querySelector('#my-modal3');

const closeBtn1 = document.querySelector('#close-btn1');
const closeBtn2 = document.querySelector('#close-btn2');
const closeBtn3 = document.querySelector('#close-btn3');


closeBtn1.addEventListener('click', closeModal1);
closeBtn2.addEventListener('click', closeModal2);
closeBtn3.addEventListener('click', closeModal3);

window.addEventListener('click', outsideClick);

// Open MODALS
function openModal1() {
    modal1.style.display = 'block';
}

function openModal2() {
    modal2.style.display = 'block';
}

function openModal3() {
    modal3.style.display = 'block';
}

// Close MODALS
function closeModal1() {
    modal1.style.display = 'none';
}


function closeModal2() {
    modal2.style.display = 'none';
}

function closeModal3() {
    modal3.style.display = 'none';
}


// Close If Outside Click
function outsideClick(e) {
    if (e.target == modal1 || e.target == modal2 || e.target == modal3) {
        modal1.style.display = 'none';
        modal2.style.display = 'none';
        modal3.style.display = 'none';
    }
}

//MODALS CONTENT
const modalTitle1 = document.getElementById('modal-title1').innerHTML = services[0].name;
// const modalTitle2 = document.getElementById('modal-title2').innerHTML = services[1].name;
// const modalTitle3 = document.getElementById('modal-title3').innerHTML = services[2].name;

const modalDate1 = document.getElementById('date1').innerHTML = services[0].date;
// const modalDate2 = document.getElementById('date2').innerHTML = services[1].date;
// const modalDate3 = document.getElementById('date3').innerHTML = services[2].date;

const modalHirer1 = document.getElementById('hirer1').innerHTML = services[0].hirer;
// const modalHirer2 = document.getElementById('hirer2').innerHTML = services[1].hirer;
// const modalHirer3 = document.getElementById('hirer3').innerHTML = services[2].hirer;

const modalLocation1 = document.getElementById('location1').innerHTML = services[0].location;
// const modalLocation2 = document.getElementById('location2').innerHTML = services[1].location;
// const modalLocation3 = document.getElementById('location3').innerHTML = services[2].location;

const modalObjective1 = document.getElementById('serviceObjective1').innerHTML = services[0].serviceObjective;
// const modalObjective2 = document.getElementById('serviceObjective2').innerHTML = services[1].serviceObjective;
// const modalObjective3 = document.getElementById('serviceObjective3').innerHTML = services[2].serviceObjective;

const modalDescription1 = document.getElementById('description1').innerHTML = services[0].description;
// const modalDescription2 = document.getElementById('description2').innerHTML = services[1].description;
// const modalDescription3 = document.getElementById('description3').innerHTML = services[2].description;

const modalServiceImgDescription1 = document.getElementById('imgDescription1').innerHTML = services[0].serviceImgDescription;
// const modalServiceImgDescription2 = document.getElementById('imgDescription2').innerHTML = services[1].serviceImgDescription;
// const modalServiceImgDescription3 = document.getElementById('imgDescription3').innerHTML = services[2].serviceImgDescription;

const modalResponsiblePerson1 = document.getElementById('responsiblePerson1').innerHTML = services[0].responsiblePerson;
// const modalResponsiblePerson2 = document.getElementById('responsiblePerson2').innerHTML = services[1].responsiblePerson;
// const modalResponsiblePerson3 = document.getElementById('responsiblePerson3').innerHTML = services[2].responsiblePerson;

// function goPage() {
//     window.location.href = "../pages/specific-service1.html";
// }