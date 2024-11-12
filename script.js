var navbar = document.querySelector('.navbar')
var mainscroll = window.pageYOffset;

window.onscroll = function () {
    var currentscroll = window.pageYOffset;

    if (mainscroll > currentscroll) {

        navbar.style.top = "0px"
        navbar.style.opacity = "1";
    }
    else {
        navbar.style.top = "-100px"
        navbar.style.opacity = "0"
        navbar.style.transition = ".5s linear";
    }

    mainscroll=currentscroll ;
}