const color = document.getElementById('color');
const texto = document.querySelector("h1")
console.log(color.value); // #ff0000

color.addEventListener('input', () => {
  console.log(color.value); // #00ff00

  texto.style.color = color.value


})