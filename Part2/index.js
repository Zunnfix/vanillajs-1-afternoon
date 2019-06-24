let idInput = document.getElementById('idInput');
let colorInput = document.getElementById('colorInput');

function setCard() {
  let card = document.getElementById(idInput.value);
  card.style.color = colorInput.value;
}

function reset() {
  let styleRem = document.getElementsByTagName('section')
  styleRem.removeAttribute('style');
}