let darkmode = localStorage.getItem('darkmode')
const sun = document.getElementById("M_sun");
const moon = document.getElementById("M_moon");

sun.addEventListener("click", () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode',null);
});

moon.addEventListener("click", () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
});

document.addEventListener("DOMContentLoaded", function () {
    const numParticles = 100; // Increase number of particles
    const container = document.body;

    for (let i = 0; i < numParticles; i++) {
        let particle = document.createElement("div");
        particle.classList.add("particle");

        // Random size, position, speed
        let size = Math.random() * 6 + 2; // Random size between 2px to 8px
        let duration = Math.random() * 5 + 3; // Random duration between 3s to 8s
        let delay = Math.random() * 2; // Random delay up to 2s
        let leftPosition = Math.random() * 100; // Random horizontal position (0% to 100%)
        let topPosition = Math.random() * 100; // Random vertical position (0% to 100%)

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${leftPosition}vw`;
        particle.style.top = `${topPosition}vh`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;

        container.appendChild(particle);
    }
});
