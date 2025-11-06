//!-- JavaScript para o scroll suave e modais -->
        // Scroll suave
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Lógica dos Modais
        document.addEventListener('DOMContentLoaded', () => {
            const projectCards = document.querySelectorAll('.project-card');
            const modals = document.querySelectorAll('.modal');
            const closeButtons = document.querySelectorAll('.close-button');

            projectCards.forEach(card => {
                card.addEventListener('click', (event) => {
                    const projectId = card.dataset.project;
                    const targetModal = document.getElementById(`modal-${projectId}`);
                    if (targetModal) {
                        targetModal.style.display = 'flex'; // Mostra o modal
                        document.body.style.overflow = 'hidden'; // Evita scroll do corpo
                    }
                });
            });

            closeButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const modal = button.closest('.modal');
                    if (modal) {
                        modal.style.display = 'none'; // Esconde o modal
                        document.body.style.overflow = ''; // Restaura scroll do corpo
                    }
                });
            });

            // Fechar modal ao clicar fora dele
            modals.forEach(modal => {
                modal.addEventListener('click', (event) => {
                    if (event.target === modal) {
                        modal.style.display = 'none';
                        document.body.style.overflow = '';
                    }
                });
            });
        });