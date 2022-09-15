//Serviços em andamento
let services = [
    {
        name: "Tubulações em PRFV - Cloro Soda",
        text: "Realização de troca e manutenção de tubulações em PRFV (Plástico reforçado com fibra de vidro) para o setores de engenharia e manutenção da fábrica, na área da Planta Química, na fábrica da CMPC, em Guaíba",
        year: "2022",
        //period: "00/00 a 05/09",
        category: "Engenharia",
        hirer: "CMPC"
    },
    {
        name: "Eletrobomba - CR1",
        text: "Realocação da turbo bomba, fabricação e instalação de spools e Tie-IN's para a extensão de alimentação da eletrobomba da caldeira de recuperação G1 (Guaíba 1), CMPC",
        year: "2022",
        //period: "00/00 a 06/09",
        category: "Engenharia",
        hirer: "CMPC"
    },
    {
        name: "Polpa Marrom",
        text: "Criação de uma nova linha de Polpa da G1 para G2 (Fabricação e instalação de spools e instalação de válvulas).",
        year: "2022",
        // period: "00/00 a 00/00",
        category: "Engenharia",
        hirer: "CMPC"
    },
    {
        name: "TAC 31 - Desvio de Massa",
        text: " Desvio de massa dos tanques de polpa da G1 para G2 (Fabricação e instalação de Spool´s e Tie-Ins, montagem de andaimes para realização do serviço e instalação de válvulas)",
        year: "2022",
        // period: "00/00 a 00/00",
        category: "Engenharia",
        hirer: "CMPC"
    }

    //bocais 15/08 até 12/09
];

//CURRENT SERVICES
const serviceName1 = document.getElementById('service-name1').innerHTML = services[0].name;
const serviceName2 = document.getElementById('service-name2').innerHTML = services[1].name;
const serviceName3 = document.getElementById('service-name3').innerHTML = services[2].name;
const serviceName4 = document.getElementById('service-name4').innerHTML = services[3].name;

const serviceText1 = document.getElementById('project-text1').innerHTML = services[0].text;
const serviceText2 = document.getElementById('project-text2').innerHTML = services[1].text;
const serviceText3 = document.getElementById('project-text3').innerHTML = services[2].text;
const serviceText4 = document.getElementById('project-text4').innerHTML = services[3].text;

const serviceDate1 = document.getElementById('service-year1').innerHTML = services[0].year;
const serviceDate2 = document.getElementById('service-year2').innerHTML = services[1].year;
const serviceDate3 = document.getElementById('service-year3').innerHTML = services[2].year;
const serviceDate4 = document.getElementById('service-year4').innerHTML = services[3].year;

//const servicePeriod1 = document.getElementById('service-period1').innerHTML = services[0].period;
//const servicePeriod2 = document.getElementById('service-period2').innerHTML = services[1].period;
//const servicePeriod3 = document.getElementById('service-period3').innerHTML = services[2].period;
//const servicePeriod4 = document.getElementById('service-period4').innerHTML = services[3].period;

const serviceCategory1 = document.getElementById('service-category1').innerHTML = services[0].category;
const serviceCategory2 = document.getElementById('service-category2').innerHTML = services[1].category;
const serviceCategory3 = document.getElementById('service-category3').innerHTML = services[2].category;
const serviceCategory4 = document.getElementById('service-category4').innerHTML = services[3].category;

const serviceHirer1 = document.getElementById('service-hirer1').innerHTML = services[0].hirer;
const serviceHirer2 = document.getElementById('service-hirer2').innerHTML = services[1].hirer;
const serviceHirer3 = document.getElementById('service-hirer3').innerHTML = services[2].hirer;
const serviceHirer4 = document.getElementById('service-hirer4').innerHTML = services[3].hirer;


function showAlert() {
    alert("O conteúdo específico dos serviços ainda não está disponível, porém será disponibilizado em breve no site.")
}