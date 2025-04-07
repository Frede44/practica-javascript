const calendar = document.getElementById("calendar");

const meses = [
  "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
];
const dias = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];


const fecha = new Date();
const diaActual = fecha.getDate();
const mesActual = fecha.getMonth();
const añoActual = fecha.getFullYear();


function renderCalendar() {
  const primerDiaMes = new Date(añoActual, mesActual, 1).getDay();
  const diasEnMes = new Date(añoActual, mesActual + 1, 0).getDate();

  let diasHTML = "";

  for (let i = 0; i < primerDiaMes; i++) {
    diasHTML += `<div class="vacío"></div>`;
  }

  for (let i = 1; i <= diasEnMes; i++) {
    if (i === diaActual) {
      diasHTML += `<div class="hoy">${i}</div>`;
    } else {
      diasHTML += `<div>${i}</div>`;
    }
  }

  calendar.innerHTML = `
    <div class="mes">${meses[mesActual]} </div>
    <div class="año">${añoActual}</div>
    <div class="divCalendario">
     <div class="dias">${dias.join("</div><div>")}</div>
    </div>
    <div class="numeros">${diasHTML}</div>
   
  `;
}

renderCalendar();
