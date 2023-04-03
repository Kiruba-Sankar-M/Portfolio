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

const sliders = document.querySelectorAll(".sliders");
appearOnScrollOptions = {
    threshole: 0,
    rootMargin: "250px 0px -150px 0px"
};
const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting)
            return;
        entry.target.classList.toggle("appear", entry.isIntersecting);
        appearOnScroll.unobserve(entry.target);

    })
}, appearOnScrollOptions)

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
})