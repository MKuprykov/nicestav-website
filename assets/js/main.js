document.addEventListener('DOMContentLoaded', () => {
    // 1. Логика мобильного меню (бургера)
    const burgerBtn = document.getElementById('burger-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Открытие/закрытие меню по клику на бургер
    burgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Анимация самого бургера (превращение в крестик)
        burgerBtn.classList.toggle('open');
    });

    // Закрытие мобильного меню при клике на любую ссылку
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            burgerBtn.classList.remove('open');
        });
    });

    // 2. Делаем фон шапки чуть прозрачным при скролле (красивый эффект)
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(15, 32, 39, 0.95)'; // чуть прозрачный dark-blue
        } else {
            header.style.backgroundColor = 'var(--dark-blue)'; // плотный цвет
        }
    });
    // === ЛОГИКА ВСПЛЫВАЮЩИХ ФОТО (ЛАЙТБОКС) ===
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightboxBtn = document.querySelector('.close-lightbox');
    const galleryImages = document.querySelectorAll('.gallery-img');

    // Открытие фото при клике
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            if (lightbox && lightboxImg) {
                lightbox.classList.add('active');
                lightboxImg.src = img.src; // Берем картинку, на которую кликнули
            }
        });
    });

    // Закрытие по крестику
    if (closeLightboxBtn) {
        closeLightboxBtn.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });
    }

    // Закрытие при клике на темный фон (вокруг фото)
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) {
                lightbox.classList.remove('active');
            }
        });
    }
});