
//  navbar

document.addEventListener("DOMContentLoaded", () => {
    const navContainer = document.getElementById("nav-container");

    if (!navContainer) return;

    // Carga asíncrona del archivo nav.html
    fetch("nav.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar la barra de navegación.");
            }
            return response.text();
        })
        .then(data => {
            // Inyectar el HTML cargado en el contenedor
            navContainer.innerHTML = data;

            // Asignar los eventos de apertura/cierre una vez inyectado el HTML
            initMenuEvents();
        })
        .catch(error => console.error("Error al cargar el nav:", error));
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

