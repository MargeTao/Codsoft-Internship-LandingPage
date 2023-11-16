document.addEventListener("DOMContentLoaded", function () {
    const scrollRevealOptions = {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
    };

    function revealElement(selector, options, delay) {
        ScrollReveal().reveal(selector, {
            ...options,
            delay,
        });
    }

    // Navigation Smooth Scroll
    const navLinks = document.querySelectorAll(".nav__links .link a");
    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Scroll reveal animations for various sections
    revealElement(".header__image img", { duration: 1000 }, 0);
    revealElement(".header__content h1", scrollRevealOptions, 500);
    revealElement(".header__content p", scrollRevealOptions, 1000);
    revealElement(".header__btns", scrollRevealOptions, 1500);

    revealElement(".about__container h2", scrollRevealOptions, 0);
    revealElement(".about__container .section__subheader", scrollRevealOptions, 500);
    revealElement(".about__container p", scrollRevealOptions, 1000);

    const advisorSection = document.querySelector(".advisor-section");
    revealElement(advisorSection, scrollRevealOptions, 0);

    const advisorCards = advisorSection.querySelectorAll(".advisor");
    advisorCards.forEach((card, index) => {
        revealElement(card, scrollRevealOptions, (index + 1) * 500);
    });

    // Event listeners for new and existing elements
    const registerButton = document.querySelector(".btn.btn__secondary");
    registerButton.addEventListener("click", function () {
        // Add code to handle registration or display a registration form.
    });

    const contactForm = document.querySelector("form");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Add code to handle form submission and send user messages.
    });

    const socialMediaIcons = document.querySelectorAll(".footer__socials a");
    socialMediaIcons.forEach((icon) => {
        icon.addEventListener("click", function (event) {
            event.preventDefault();

            // Add code to open the corresponding social media profile or page.
        });
    });

    // Additional event listeners
    const resourceLinks = document.querySelectorAll(".resource a");
    resourceLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Add code to handle resource link clicks.
        });
    });

    // Add more event listeners for new elements here
});
