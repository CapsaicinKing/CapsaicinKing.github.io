var contrastCounter = 0;
function switchContrast() {
  contrastCounter++;
  if (contrastCounter % 2 == 0) {
    document.getElementById("contrast").src = "images/light-mode.png";
  } else {
    document.getElementById("contrast").src = "images/dark-mode.png";
  }
}