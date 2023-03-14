let User,senha;
do {
  User = prompt("Digite seu nome :");
  senha = prompt("Digite sua senha:");
  if (User === senha) {
    alert("Erro: senha não pode ser igual ao nome.");
  }
} while (User === senha); 
alert("Nome : " + User + "\nSenha: " + senha);
