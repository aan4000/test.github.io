// navbar.js

document.addEventListener("DOMContentLoaded", () => {
    const navContainer = document.getElementById("nav-container");

    if (!navContainer) return;

    // Obtener la barra de navegación desde el almacenamiento local
    const cachedNav = sessionStorage.getItem("navHTML");

    if (cachedNav) {
        // Inyección instantánea desde memoria: evita parpadeos o descargas
        navContainer.innerHTML = cachedNav;
        initMenuEvents();
    } else {
        // Primera visita: realiza el fetch por única vez
        fetch("nav.html")
            .then(response => {
                if (!response.ok) throw new Error("No se pudo cargar la barra de navegación.");
                return response.text();
            })
            .then(data => {
                sessionStorage.setItem("navHTML", data);
                navContainer.innerHTML = data;
                initMenuEvents();
            })
            .catch(error => console.error("Error al cargar el nav:", error));
    }
});

function initMenuEvents() {
    const btnMenu = document.getElementById("resMenu");
    const nav = document.getElementById("respNav");
    const close = document.getElementById("close");

    if (btnMenu && nav) {
        btnMenu.addEventListener("click", () => {
            nav.classList.toggle("showMe");
        });
    }

    if (close && nav) {
        close.addEventListener("click", () => {
            nav.classList.toggle("showMe");
        });
    }
}