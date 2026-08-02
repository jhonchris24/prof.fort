/* ==========================================================
   JHON CHRIS TORRALBA PORTFOLIO
   script.js
==========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       Navbar Active Link
    ========================================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    function activeMenu() {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", activeMenu);

    /* ==========================================
       Navbar Background
    ========================================== */

    const navbar = document.querySelector(".navbar");

    function navbarScroll() {

        if (window.scrollY > 80) {

            navbar.style.background = "rgba(15,23,42,.98)";
            navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.20)";

        } else {

            navbar.style.background = "rgba(15,23,42,.92)";
            navbar.style.boxShadow = "none";

        }

    }

    window.addEventListener("scroll", navbarScroll);

    /* ==========================================
       Scroll To Top Button
    ========================================== */

    const scrollBtn = document.getElementById("scrollTop");

    function scrollButton() {

        if (window.scrollY > 300) {

            scrollBtn.classList.add("show");

        } else {

            scrollBtn.classList.remove("show");

        }

    }

    window.addEventListener("scroll", scrollButton);

    scrollBtn.addEventListener("click", function (e) {

        e.preventDefault();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* ==========================================
       Skill Progress Animation
    ========================================== */

    const progressBars = document.querySelectorAll(".skill-progress");

    function animateSkills() {

        progressBars.forEach(bar => {

            const width = bar.dataset.width;

            const position = bar.getBoundingClientRect().top;

            if (position < window.innerHeight - 80) {

                bar.style.width = width + "%";

            }

        });

    }

    window.addEventListener("scroll", animateSkills);

    animateSkills();

    /* ==========================================
       Smooth Scroll
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

    /* ==========================================
       Project Card Hover Animation
    ========================================== */

    const cards = document.querySelectorAll(".project-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-10px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

    /* ==========================================
       Reveal Elements
    ========================================== */

    const reveals = document.querySelectorAll(".fade-up");

    function reveal() {

        reveals.forEach(item => {

            const top = item.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {

                item.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", reveal);

    reveal();

    /* ==========================================
       Contact Form
    ========================================== */

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("Thank you! Your message has been received.");

            form.reset();

        });

    }

});
