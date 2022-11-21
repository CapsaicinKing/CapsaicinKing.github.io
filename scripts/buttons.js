var contrastCounter = 0;
function switchContrast() {
    // dark ui is the if statement; else statement is for the light ui
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
    let darkProjectNameContainer = document.getElementsByClassName("dark-project-name-container");
    let lightProjectNameContainer = document.getElementsByClassName("light-project-name-container");
    if (contrastCounter % 2) {
        for (let i = 0; i < darkProjectNameContainer.length; i++) {
            darkProjectNameContainer[i].style.opacity = 1;
            lightProjectNameContainer[i].style.opacity = 0;
        }
    } else {
        for (let i = 0; i < lightProjectNameContainer.length; i++) {
            lightProjectNameContainer[i].style.opacity = 1;
            darkProjectNameContainer[i].style.opacity = 0;
        }
    }
    let description = document.getElementsByClassName("description");
    if (contrastCounter % 2) {
        for (let i = 0; i < description.length; i++) {
            description[i].style.color = "rgb(200, 200, 210)";
        }
    } else {
        for (let i = 0; i < description.length; i++) {
            description[i].style.color = "rgb(129, 129, 129)";
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
    if (contrastCounter % 2) {
        document.getElementById("main-header").style.backgroundColor = "rgb(36, 44, 58)";
        document.getElementById("main-header").style.boxShadow = "0 0 6px rgba(0, 0, 0, 0.4)";
        document.getElementById("body").style.backgroundColor = "rgb(36, 42, 56)";
        document.getElementById("dark-search-icon").style.opacity = 1;
        document.getElementById("light-search-icon").style.opacity = 0;
    } else {
        document.getElementById("main-header").style.backgroundColor = "rgb(92, 255, 179)";
        document.getElementById("main-header").style.boxShadow = "0 0 6px rgba(78, 78, 78, 0.2)";
        document.getElementById("body").style.backgroundColor = "white";
        document.getElementById("light-search-icon").style.opacity = 1;
        document.getElementById("dark-search-icon").style.opacity = 0;
    }
}
