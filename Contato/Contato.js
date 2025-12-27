const form = document.getElementById('contactForm');
        const successMessage = document.getElementById('success-message');

        form.onsubmit = function(e) {
            e.preventDefault();
            
            // Simulação de carregamento
            const btn = form.querySelector('button');
            const originalContent = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Enviando...</span>';
            btn.disabled = true;

            setTimeout(() => {
                successMessage.style.display = 'flex';
                form.reset();
                btn.innerHTML = originalContent;
                btn.disabled = false;
            }, 1500);
        };

        function resetForm() {
            successMessage.style.display = 'none';
        }