var contrastCounter = 0;
function switchContrast() {
    contrastCounter++;
    let hr = document.getElementsByTagName("hr");
    for (let i = 0; i < hr.length; i++) {
        if (contrastCounter % 2 == 0) {
            hr[i].style.borderColor = "lightgray";
            hr[i].style.backgroundColor = "lightgray";
        } else {
            hr[i].style.borderColor = "rgb(20, 21, 23)";
            hr[i].style.backgroundColor = "rgb(20, 21, 23)";
        }
    }
    let projectLink = document.getElementsByClassName("project-name-link");
    for (let i = 0; i < projectLink.length; i++) {
        if (contrastCounter % 2 == 0) {
            projectLink[i].style.backgroundColor = "rgb(134, 241, 197)";
        } else {
            projectLink[i].style.backgroundColor = "gray";
        }
    }
    if (contrastCounter % 2 == 0) {
        document.getElementById("main-header").style.backgroundColor = "rgb(92, 255, 179)";
        document.getElementById("body").style.backgroundColor = "white";
    } else {
        document.getElementById("main-header").style.backgroundColor = "rgb(16, 18, 22)";
        document.getElementById("body").style.backgroundColor = "rgb(10, 11, 12)";
    }
}