var contrastCounter = 0;
function switchContrast() {
    contrastCounter++;
    let hr = document.getElementsByTagName("hr");
    if (contrastCounter % 2) {
        for (let i = 0; i < hr.length; i++) {
            hr[i].style.borderColor = "rgb(70, 77, 89)";
            hr[i].style.backgroundColor = "rgb(70, 77, 89)";
        }
    } else {
        for (let i = 0; i < hr.length; i++) {
            hr[i].style.borderColor = "lightgray";
            hr[i].style.backgroundColor = "lightgray";
        }
    }
    let projectLink = document.getElementsByClassName("project-name-link");
    if (contrastCounter % 2) {
        for (let i = 0; i < projectLink.length; i++) {
            projectLink[i].style.backgroundColor = "gray";
        }
    } else {
        for (let i = 0; i < projectLink.length; i ++) {
            projectLink[i].style.backgroundColor = "rgb(134, 241, 197)";
        }
    }
    let description = document.getElementsByClassName("description");
    if (contrast % 2) {
        for (let i = 0; i < description.length; i++) {
            description[i].style.color = "rgb(200, 200, 210)";
        }
    } else {
        for (let i = 0; i < description.length; i++) {
            description[i].style.color = "rgb(124, 124, 124)";
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
