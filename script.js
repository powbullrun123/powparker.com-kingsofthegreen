document.addEventListener('DOMContentLoaded', () => {
    const bgLayer = document.getElementById('main-bg');
    const blocks = document.querySelectorAll('.narrative-block');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const newBg = entry.target.getAttribute('data-bg');
                if (newBg) {
                    bgLayer.style.backgroundImage = `url('${newBg}')`;
                }
            }
        });
    }, { threshold: 0.5 });

    blocks.forEach(block => observer.observe(block));
});
