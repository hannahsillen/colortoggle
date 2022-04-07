let toggle = false

let togglenav = function() {
    let sidebar = document.querySelector(".colors");
    let sidebarul = document.querySelector(".colors ul");
    let sidebarspan = document.querySelector(".color span")
    let sidelinks = document.querySelectorAll(".colors a");

    if (toggle === false) {
        sidebarul.style.visibility = "visible";
        sidebar.style.width = "300px";
        sidebarspan.style.opacity = "0.5";
        
        let arrayLength = sidelinks.length;
        for (let i = 0; i < arrayLength; i++) {
            sidelinks[i].style.opacity = "1";
        }

        toggle = true;
    }

    else if (toggle === true) {
        sidebar.style.width = "50px";
        sidebarspan.style.opacity = "0";
        
        let arrayLength = sidelinks.length;
        for (let i = 0; i < arrayLength; i++) {
            sidelinks[i].style.opacity = "1";
        }

        toggle = false;
    }
}