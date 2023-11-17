
// função para posteriormente mudar para o modo noturno
function aplicar_modo(){
    const container = document.querySelector('html')
    const div_config = document.querySelector('.div_configuracoes');

    if(container.className === 'light_modo'){
        container.className = 'dark_modo'
        div_config.style.display = 'none'
        alert('Modo noturno ativado!')
    }else{
        container.className = 'light_modo'
        div_config.style.display = 'none'
        alert('Modo claro ativado!')
    }
}