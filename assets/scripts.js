// Cargar el contenido 
document.addEventListener("DOMContentLoaded", function () {
    // Navbar
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
                <p>Dirección: Calle Verde 123, Ciudad Eco, España </p>
                <p>Teléfono: 123 456 789 | <a href="mailto:info@greendev.com">info@greendev.com</a> </p> 
                <p>Política de Neutralidad de CO2</p>
                </div>
            </footer>
        `;
    }

        fetch('assets\ods.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('ods-container');
            data.forEach(ods => {
                const odsElement = document.createElement('div');
                odsElement.innerHTML = `
                    <h2>${ods.titulo}</h2>
                    <p>${ods.descripcion}</p>
                    <img src="${ods.imagen}" alt="${ods.titulo}" />
                `;
                container.appendChild(odsElement);
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
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