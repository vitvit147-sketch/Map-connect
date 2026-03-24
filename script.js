// Инициализация иконок Lucide
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});

// Плавный скролл для якорей
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
