function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang-es], [data-lang-en]');
    elements.forEach(element => {
        element.textContent = element.getAttribute(`data-lang-${lang}`);
    });

    document.getElementById('lang-es').style.backgroundColor = lang === 'es' ? '#E68F59' : '#04BADE';
    document.getElementById('lang-en').style.backgroundColor = lang === 'en' ? '#E68F59' : '#04BADE';
}

setLanguage('es');



  
window.onscroll = function() {
    var scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

document.getElementById("scrollTopBtn").onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
