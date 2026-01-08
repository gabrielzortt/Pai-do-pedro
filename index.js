window.addEventListener('scroll', function () {
    const parallax = document.querySelector('#sobre');
    if (parallax) {
        let offset = window.pageYOffset;
        parallax.style.backgroundPositionY = offset * 0.5 + "px";
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

