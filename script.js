document.addEventListener("DOMContentLoaded", function () {
    let nav = document.querySelector("header");

    setTimeout(() => {
        nav.classList.add("slide-down");
    }, 500);

    let observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1, rootMargin: "50px" });

    document.querySelectorAll(".cuadro, .slide-in").forEach((elemento) => {
        observer.observe(elemento);
    });

    // Evento adicional para detectar scroll manualmente si IntersectionObserver no funciona bien
    window.addEventListener("scroll", () => {
        document.querySelectorAll(".cuadro, .slide-in").forEach((elemento) => {
            let rect = elemento.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                elemento.classList.add("visible");
            }
        });
    });
});
