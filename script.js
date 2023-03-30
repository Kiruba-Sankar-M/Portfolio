const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const primaryNavigation = document.querySelector(".primary-navigation");

mobileNavToggle.addEventListener('click', () => {
    var dataVisible = primaryNavigation.getAttribute("data-visibility");
    console.log(dataVisible);
    if (dataVisible === "false") {
        primaryNavigation.setAttribute("data-visibility", "true");
        mobileNavToggle.setAttribute("area-expanded", "true");
    }
    else {
        primaryNavigation.setAttribute("data-visibility", "false");
        mobileNavToggle.setAttribute("area-expanded", "false");

    }
})