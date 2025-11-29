function acessar(){
	var usuario = document.getElementById('loginEmail').value;
	var senha = document.getElementById('loginPassword').value;

	if(usuario == "ronymenezes" || usuario == "ronyy.oo026@gmail.com" && senha == "251302" || senha == "1302"){
		alert('Acesso Aprovado');
		location.href = '/Projetos/Caixa Mercado/index.html';
	}else{
		alert("Acesso Negado");
	}
}