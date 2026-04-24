document.addEventListener('DOMContentLoaded', () => {
    
    // Cambiar texto en "Sobre mí"
    const btnCambiar = document.getElementById('btn-cambiar-texto');
    const textoSobreMi = document.getElementById('sobre-mi-texto');

    if (btnCambiar && textoSobreMi) {
        btnCambiar.addEventListener('click', () => {
            if (textoSobreMi.textContent.includes("grandes ideas")) {
                textoSobreMi.textContent = "¡Hola! Soy Luis Angel, desarrollador frontend apasionado por crear experiencias digitales modernas y trabajar en equipo.";
            } else {
                textoSobreMi.textContent = "Soy un desarrollador de software con grandes ideas y metas por alcanzar. Me apasiona crear páginas web atractivas y funcionales. Me encanta trabajar en equipo.";
            }
        });
    }

    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav-menu');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle("show");
        });
    }

    console.log("Portafolio de Luis Angel Piña Meriño cargado correctamente.");
});