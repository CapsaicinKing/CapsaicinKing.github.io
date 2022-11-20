var contrastCounter = 0;
function switchContrast() {
    contrastCounter++;
    let hr = document.getElementsByTagName("hr");
    for (let i = 0; i < hr.length; i++) {
        if (contrastCounter % 2 == 0) {
            hr[i].style.borderColor = "lightgray";
            hr[i].style.backgroundColor = "lightgray";
        } else {
            hr[i].style.borderColor = "rgb(70, 77, 89)";
            hr[i].style.backgroundColor = "rgb(70, 77, 89)";
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
    let description = document.getElementsByClassName("description");
    for (let i = 0; i < description.length; i++) {
        if (contrastCounter % 2 == 0) {
            description[i].style.color = "rgb(124, 124, 124)";
        } else {
            description[i].style.color = "rgb(200, 200, 210)";
        }
    }
    let lastUpdated = document.getElementsByClassName("last-updated");
    if (contrastCounter % 2) {
        for (let i = 0; i < lastUpdated.length; i++) {
            lastUpdated[i].style.color = "rgb(200, 200, 210)";
        }
    } else {
        for (let i = 0; i < lastUpdated.length; i++) {
            lastUpdated[i].style.color = "rgb(110, 110, 110)";
        }
    }
    if (contrastCounter % 2 == 0) {
        document.getElementById("main-header").style.backgroundColor = "rgb(92, 255, 179)";
        document.getElementById("body").style.backgroundColor = "white";
        document.getElementById("body").style.backgroundColor = "white";
    } else {
        document.getElementById("main-header").style.backgroundColor = "rgb(17, 20, 28)";
        document.getElementById("body").style.backgroundColor = "rgb(32, 39, 47)";
    }
}