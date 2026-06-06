document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Loading Screen Handler
    const loadingScreen = document.getElementById("loading-screen");
    window.addEventListener("load", function() {
        // Safe timeout execution to ensure smooth presentation
        setTimeout(() => {
            loadingScreen.classList.add("hidden");
        }, 600);
    });

    // 2. Mobile Hamburger Navigation Logic
    const hamburger = document.querySelector(".hamburger");
    const navWrapper = document.querySelector(".nav-wrapper");
    const navLinks = document.querySelectorAll(".nav-link");

    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("active");
        navWrapper.classList.toggle("active");
    });

    // Close menu when a navigation item is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            hamburger.classList.remove("active");
            navWrapper.classList.remove("active");
            
            navLinks.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // 3. Language Switching Mechanism (RO/EN) - Pure Text & Cookie Free
    const langRoBtn = document.getElementById("lang-ro-btn");
    const langEnBtn = document.getElementById("lang-en-btn");
    const bodyElement = document.body;

    langRoBtn.addEventListener("click", function() {
        bodyElement.className = "lang-ro";
        langRoBtn.classList.add("active");
        langEnBtn.classList.remove("active");
    });

    langEnBtn.addEventListener("click", function() {
        bodyElement.className = "lang-en";
        langEnBtn.classList.add("active");
        langRoBtn.classList.remove("active");
    });

    // 4. Modern Intersection Observer for Entry Scroll Animations
    const revealElements = document.querySelectorAll(".scroll-reveal");
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target); // Animate once
        });
    }, revealOptions);

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});
