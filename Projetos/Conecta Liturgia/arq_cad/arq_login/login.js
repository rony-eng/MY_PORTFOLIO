// Função para simular o processo de login (sem validação)
        function handleLogin(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const messageBox = document.getElementById('feedbackMessage');

            // Exibe uma mensagem de sucesso simulada
            messageBox.textContent = `Login simulado com sucesso! Usuário: ${email}. A validação será implementada em breve.`;
            messageBox.classList.remove('hidden');
            messageBox.classList.remove('bg-red-200', 'text-red-700');
            messageBox.classList.add('bg-green-200', 'text-green-700');

            // Onde o link da próxima página seria colocado:
            // window.location.href = '/dashboard-link'; 
            
            console.log('Login attempt:');
            console.log('Email:', email);
            console.log('Password:', password);
        }

        function acessar(){
            var usuario = document.getElementById('email').value;
            var senha = document.getElementById('password').value;

            if(usuario == "rony" || "ronyy.oo026@gmail.com" && senha == "1302" || "251302"){
                alert('Acesso Aprovado');
                location.href = '/Projetos/Conecta Liturgia/index.html'
            }else{
                alert('Acesso negado')
            }


        }