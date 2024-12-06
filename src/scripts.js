const cursor = document.getElementById("cursor");
const starsContainer = document.getElementById("stars-container");

// Add stars randomly on the screen
function createStars() {
    const maxStars = 32;

    for (let i = 0; i < maxStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        starsContainer.appendChild(star);
    }
}

createStars();

// Cursor movement effect
document.addEventListener("mousemove", (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
});

// Clickable hover effect
document.querySelectorAll(".clickable").forEach((item) => {
    item.addEventListener("mouseenter", () => {
        cursor.classList.add("fill");
    });
    item.addEventListener("mouseleave", () => {
        cursor.classList.remove("fill");
    });
});

// Back Button and Team Cards Hover Effect
document.querySelectorAll('.clickable').forEach((element) => {
    element.addEventListener('mouseenter', () => cursor.classList.add('fill'));
    element.addEventListener('mouseleave', () => cursor.classList.remove('fill'));
});

if ('ontouchstart' in window || navigator.maxTouchPoints) {
    document.getElementById('cursor').style.display = 'none';
} else {
    document.addEventListener('mousemove', (e) => {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
    });
}