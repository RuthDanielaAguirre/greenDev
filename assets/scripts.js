// Cargar el contenido 
document.addEventListener("DOMContentLoaded", function () {
    // Cargar la Navbar
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        navbarContainer.innerHTML = `
        <header>
           <div class="logo">
              <a href="index.html">
                <img src="./assets/icons/solar--leaf-bold-duotone.png" alt="logo-image">
                <h1>GREENDEV</h1>
            </a>
            </div>

            <input type="checkbox" id="menu-toggle">
        <label for="menu-toggle" class="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </label>

            <nav>
                <ul>
                    <li><a href="sostenibilidad.html">Sostenibilidad</a></li>
                    <li><a href="servicios.html">Servicios</a></li>
                    <li><a href="investigacion.html">I+D</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                    
                </ul>
            </nav>
            </header>
        `;
    }

    // Footer
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = `
            <footer class="footer-container">
          <div class="logo">
              <a href="index.html">
                <img src="./assets/icons/solar--leaf-bold-duotone.png" alt="logo-image">
                <h1>GREENDEV</h1>
            </a>
            </div>
                <div class = "footer-texto">
                <p>&copy; 2024 GreenDev - Tecnología para un futuro sostenible</p>
                <p>Dirección: Calle Verde 123, Ciudad Eco, España | Teléfono: +34 123 456 789</p>
                <p><a href="mailto:info@greendev.com">info@greendev.com</a> | Política de Neutralidad de CO2</p>
                </div>
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

let capa1 = document.getElementById('fondoSO');
let capa2 = document.getElementById('circulos');
let capa3 = document.getElementById('nubes');
let parallaxTitle = document.getElementById('parallaxTitle');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    const maxScroll = document.body.scrollHeight - window.innerHeight;

    
    if (value > maxScroll){
        value = maxScroll;
    }
    
    // Limita el movimiento del título a un valor por ejemplo 200px
    if (value * 1.5 <= 500) {
        parallaxTitle.style.marginTop = value * 1.5 + 'px';
    }

    capa1.style.bottom = value * -1.5 + 'px';
    capa2.style.left = value * 0.5 + 'px';
    capa3.style.left = value * 0.5 + 'px';
});