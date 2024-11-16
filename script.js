document.querySelectorAll('[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(tjis.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});