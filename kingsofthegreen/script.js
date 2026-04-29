document.addEventListener('DOMContentLoaded', () => {
    const bgLayer = document.getElementById('main-bg');
    const blocks = document.querySelectorAll('.narrative-block');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const newBg = entry.target.getAttribute('data-bg');
                if (newBg) {
                    // Pre-loading the image to ensure a smooth transition
                    const img = new Image();
                    img.src = newBg;
                    img.onload = () => {
                        bgLayer.style.backgroundImage = `url('${newBg}')`;
                    };
                }
            }
        });
    }, { threshold: 0.4 }); // Trigger slightly before full center for a "pro" feel

    blocks.forEach(block => observer.observe(block));
});
