/* eslint-disable */
new WOW().init();
window.onscroll = function () {
    scrollNavbar();
};
function scrollNavbar() {
    var navbar = document.getElementById("topNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar w3-card-2 w3-animate-top w3-white";
    } else {
        navbar.className = navbar.className = "w3-bar w3-text-white";
    }
}