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

