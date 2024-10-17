// Cargar el contenido 
document.addEventListener("DOMContentLoaded", function () {
    // Cargar la Navbar
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        navbarContainer.innerHTML = `
            <nav>
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="sostenibilidad.html">Sostenibilidad</a></li>
                    <li><a href="servicios.html">Servicios</a></li>
                    <li><a href="investigacion.html">I+D</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                    
                </ul>
            </nav>
        `;
    }

    // Footer
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = `
            <footer>
                <p>&copy; 2024 GreenDev - Tecnología para un futuro sostenible</p>
                <p>Dirección: Calle Verde 123, Ciudad Eco, España | Teléfono: +34 123 456 789</p>
                <p><a href="mailto:info@greendev.com">info@greendev.com</a> | Política de Neutralidad de CO2</p>
            </footer>
        `;
    }

    // Carrusel
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carouselContainer = document.querySelector('.carousel-container');

    if (prevBtn && nextBtn && carouselContainer) {
        let currentIndex = 0;

        const updateCarousel = () => {
            const odsItems = document.querySelectorAll('.ods-item');
            odsItems.forEach((item, index) => {
                item.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
            });
        };

        nextBtn.addEventListener('click', () => {
            const totalItems = document.querySelectorAll('.ods-item').length;
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            const totalItems = document.querySelectorAll('.ods-item').length;
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateCarousel();
        });

        // Inicializar el carrusel
        updateCarousel();
    }
});

