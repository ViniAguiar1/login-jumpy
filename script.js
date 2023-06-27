let input1 = document.getElementById("name");
let nome = input1.value;
let input2 = document.getElementById("email");
let email = input2.value;
let input3 = document.getElementById("phone");
let phone = input3.value;
let input4 = document.getElementById("cpf");
let cpf = input4;
let input5 = document.getElementById("password");
let password = input5.value;

validacao = () => {
  if (nome == "") {
      alert("Os dados estão vazios")
} else {
        // Obtém a referência à div existente
        var divExistente = document.getElementById("novaDiv");
        
        // Cria um novo elemento de parágrafo
        var novoParagrafo = document.createElement("p");
        
        // Define a classe para o novo parágrafo
        novoParagrafo.className = "sucess";
        
        // Define o texto do parágrafo
        novoParagrafo.textContent = "Sucesso";
        
        // Adiciona o novo parágrafo à div existente
        divExistente.appendChild(novoParagrafo);
        console.log("voce conseguiu")
    }
};
validacao();
