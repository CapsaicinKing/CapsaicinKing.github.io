var contrastCounter = 0;
function switchContrast() {
    // dark ui is the if statement; else statement is for the light ui
    contrastCounter++;
    let hr = document.getElementsByTagName("hr");
    if (contrastCounter % 2) {
        for (let i = 0; i < hr.length; i++) {
            hr[i].style.borderColor = "#464D59";
            hr[i].style.backgroundColor = "#464D59";
        }
    } else {
        for (let i = 0; i < hr.length; i++) {
            hr[i].style.borderColor = "#D3D3D3";
            hr[i].style.backgroundColor = "#D3D3D3";
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
            description[i].style.color = "#C8C8D2";
        }
    } else {
        for (let i = 0; i < description.length; i++) {
            description[i].style.color = "#818181";
        }
    }
    let lastUpdated = document.getElementsByClassName("last-updated");
    if (contrastCounter % 2) {
        for (let i = 0; i < lastUpdated.length; i++) {
            lastUpdated[i].style.color = "#C8C8D2";
        }
    } else {
        for (let i = 0; i < lastUpdated.length; i++) {
            lastUpdated[i].style.color = "#6E6E6E";
        }
    }
    if (contrastCounter % 2) {
        document.getElementById("main-header").style.backgroundColor = "#242C3A";
        document.getElementById("main-header").style.boxShadow = "0 0 6px #00000066";
        document.getElementById("body").style.backgroundColor = "#242A38";
        document.getElementById("dark-search-icon").style.opacity = 1;
        document.getElementById("light-search-icon").style.opacity = 0;
    } else {
        document.getElementById("main-header").style.backgroundColor = "#5CFFB3";
        document.getElementById("main-header").style.boxShadow = "0 0 6px #4E4E4E33";
        document.getElementById("body").style.backgroundColor = "#FFFFFF";
        document.getElementById("light-search-icon").style.opacity = 1;
        document.getElementById("dark-search-icon").style.opacity = 0;
    }
}
