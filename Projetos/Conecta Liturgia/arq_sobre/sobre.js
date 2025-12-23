document.addEventListener('DOMContentLoaded', () => {
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');

            // Toggle Mobile Menu
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
            
            // Simular o comportamento de links (apenas para a navegação)
            const navLinks = document.querySelectorAll('a[href]');
            navLinks.forEach(link => {
                if (link.getAttribute('href').endsWith('.html')) {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                        // Simulação de navegação.
                        console.log(`Navegando para: ${link.getAttribute('href')}`);
                    });
                }
            });
        });