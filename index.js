function validacao() {
    // Obter os valores dos campos
    let nome = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let cpf = document.getElementById("cpf").value;
    let password = document.getElementById("password").value;

    // Verificar se algum campo está vazio
//     if (nome === "") {
//         let idName = document.getElementById('idName')
//         idName.textContent = "*Campo Obrigatório*"
//         idName.classList.remove("sucess")
//         idName.classList.add("error")
//     } if (email === ""){
//         let id1 = document.getElementById("id1")
//         id1.textContent = "*Campo Obrigatório*"
//         id1.classList.remove("sucess")
//         id1.classList.add("error")
//     } if(phone === ""){
//         let idPhone = document.getElementById("idPhone")
//         idPhone.textContent = "*Campo Obrigatório*"
//         idPhone.classList.remove("sucess")
//         idPhone.classList.add("error")
//     } if (cpf === ""){
//         let idCPF = document.getElementById("idCPF")
//         idCPF.textContent = "*Campo Obrigatório*"
//         idCPF.classList.remove("sucess")
//         idCPF.classList.add("error")
//     } if (password === ""){
//         let idPassord = document.getElementById("idPassword")
//         idPassord.textContent = "*Campo Obrigatório*"
//         idPassord.classList.remove("sucess")
//         idPassord.classList.add("error")
//     }
//     else  {
//         alert("Cadastro realizado com sucesso")
//       let novaDiv = document.getElementById("novaDiv");
//     //   console.log(nome, email, phone, cpf, password)
//       novaDiv.textContent = "Cadastro realizado com sucesso!";
//       novaDiv.classList.remove("error");
//       novaDiv.classList.add("sucess");
//     }
//   }
    if (nome === "" || email === "" || phone === "" || cpf === "" || password === "") {
        alert("Preencha os dados!")
      let novaDiv = document.getElementById("novaDiv");
      novaDiv.textContent = "Campos obrigatórios não registrados."
      novaDiv.classList.remove("sucess");
      novaDiv.classList.add("error1");
            //   let novaDiv2 = document.querySelectorAll(".inputDiv")
            //   novaDiv2.textContent = "Campo obrigatório"
            //   novaDiv2.classList.remove("sucess")
            //   novaDiv2.classList.add("error")
        let id1 = document.getElementById("id1")
        id1.textContent = "*Campo Obrigatório*"
        id1.classList.remove("sucess")
        id1.classList.add("error")

        let idName = document.getElementById('idName')
        idName.textContent = "*Campo Obrigatório*"
        idName.classList.remove("sucess")
        idName.classList.add("error")

        let idPhone = document.getElementById("idPhone")
        idPhone.textContent = "*Campo Obrigatório*"
        idPhone.classList.remove("sucess")
        idPhone.classList.add("error")

        let idCPF = document.getElementById("idCPF")
        idCPF.textContent = "*Campo Obrigatório*"
        idCPF.classList.remove("sucess")
        idCPF.classList.add("error")

        let idPassord = document.getElementById("idPassword")
        idPassord.textContent = "*Campo Obrigatório*"
        idPassord.classList.remove("sucess")
        idPassord.classList.add("error")
        
    }    else {

        let novaDiv = document.getElementById("novaDiv");
        novaDiv.textContent = "Cadastro realizado com sucesso!";
        novaDiv.classList.remove("error");
        novaDiv.classList.add("sucess");
    }
    
    console.log(`Nome: ${nome}\nEmail: ${email}\nTelefone: ${phone}\nCPF: ${cpf}\nSenha: ${password}`)
    alert("Cadastro realizado com sucesso!")
    
    // let novaDiv = document.getElementById("novaDiv");
    // novaDiv.textContent = "Cadastro realizado com sucesso!";
    // novaDiv.classList.remove("error");
    // novaDiv.classList.add("sucess");
}
