window.onload = pageLoaded;

function pageLoaded() {
    var btn = document.getElementById("burger-menu");
    var topnav = document.getElementById("top-nav");
    var close = document.getElementsByClassName("close")[0];
    var headerColor = document.getElementById("header");
    var defaultSize = window.matchMedia("(min-width: 768px)");
    var hideToggleNav = window.matchMedia("(max-width:768px)");
    var logo = document.getElementsByClassName("logo")[0];
    var togglemenu = document.getElementsByClassName("toggle")[0];

    defaultHeader(defaultSize);

    defaultSize.addListener(defaultHeader)
    btn.addEventListener("click", showNav);
    close.addEventListener("click", closeNav);

    function showNav() {
        topnav.style.display = "block";
    }

    function closeNav() {
        topnav.style.display = "none";
    }

    function defaultHeader(defaultSize) {
        if (defaultSize.matches) {
            showNav();
        } else
            closeNav();
    }
}
