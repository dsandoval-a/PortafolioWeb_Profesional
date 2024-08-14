function setLanguage(lang) {
    const elements = document.querySelectorAll('a[data-lang-es], a[data-lang-en]');
    elements.forEach(element => {
        element.textContent = element.getAttribute(`data-lang-${lang}`);
    });

    // Actualizar el botón de idioma activo
    document.getElementById('lang-es').style.backgroundColor = lang === 'es' ? '#E68F59' : '#04BADE';
    document.getElementById('lang-en').style.backgroundColor = lang === 'en' ? '#E68F59' : '#04BADE';
}

// Configurar el idioma predeterminado en español
setLanguage('es');

// Mostrar u ocultar el botón en función del scroll
window.onscroll = function() {
    var scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// Función para el scroll hacia arriba
document.getElementById("scrollTopBtn").onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
