const ligar = document.querySelector("#ligar");
const desligar = document.querySelector("#desligar");
const lamp = document.querySelector("#lamp");

ligar.addEventListener("click", lampOn);

desligar.addEventListener("click", lampOff);

lamp.addEventListener("mouseover", lampOn);

lamp.addEventListener("mouseout", lampOff);

lamp.addEventListener("dblclick", lampBroken);

function lampOn() {
  if (!isLampBroken()) {
    lamp.setAttribute("src", "./img/ligada.jpg");
  }
}

function lampOff() {
  if (!isLampBroken()) {
    lamp.setAttribute("src", "./img/desligada.jpg");
  }
}

function lampBroken() {
  lamp.setAttribute("src", "./img/quebrada.jpg");
}

function isLampBroken() {
  return lamp.src.indexOf("quebrada") > 1;
}
