function searchProjects() {
    let query = document.getElementById("search-query").value.toLowerCase();
    let projectSlip = document.getElementsByClassName("project-slip");
    let projectNames = document.getElementsByClassName("project-name");
    let hr = document.getElementsByTagName("hr");
    for (let i = 0; i < projectSlip.length; i++) {
        if (projectNames[i].innerHTML.toLowerCase().includes(query)) {
            projectSlip[i].style.display = "flex";
            hr[i].style.display = "block";
        } else {
            projectSlip[i].style.display = "none";
            hr[i].style.display = "none";
        }
    }
}
