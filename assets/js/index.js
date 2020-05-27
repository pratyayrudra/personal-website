document.querySelector(".project-full").style.display = "none"
document.querySelector(".close").style.display = "none"

displayProjects = () => {
    document.querySelector(".content").style.display = "none"
    document.querySelector(".sidebar ul").style.display = "none"
    document.querySelector(".project-full").style.display = "block"
    document.querySelector(".close").style.display = "flex"
    window.scrollTo(0, 0)
}

closeProjects = () => {
    document.querySelector(".project-full").style.display = "none"
    document.querySelector(".close").style.display = "none"
    var x = window.matchMedia("(min-width: 1024px)");
    if (x.matches) {
        document.querySelector(".sidebar ul").style.display = "block"
    }
    document.querySelector(".content").style.display = "block"
}