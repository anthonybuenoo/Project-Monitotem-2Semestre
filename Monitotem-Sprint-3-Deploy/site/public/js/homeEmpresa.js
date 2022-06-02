function abrirmodal() {
  modalUsers.style.display = "flex";
  fundoModal.style.display = "flex";
}

function fecharModal() {
  document.location.reload(true);
}

var contador = 0;

function abrir() {
  contador++;
  if (contador == 1) {
    document.getElementById("abrirMenu").style.width = "18%";
    document.getElementById("menu").style.margin = "0px 0px 0px -70%";
    document.getElementById("user").style.fontSize = "160px";
    document.getElementById("option1").classList.add("active");
    document.getElementById("option2").classList.add("active");
    document.getElementById("option3").classList.add("active");
    document.getElementById("html").style.overflow = "hidden";
  } else if (contador > 1) {
    document.getElementById("abrirMenu").style.width = "100px";
    document.getElementById("menu").style.margin = "0px 0px 50px 0px";
    document.getElementById("user").style.fontSize = "4rem";
    document.getElementById("option1").classList.remove("active");
    document.getElementById("option2").classList.remove("active");
    document.getElementById("option3").classList.remove("active");
    contador = 0;
  }
}

function fechar() {
  document.getElementById("abrirMenu").style.width = "100px";
  document.getElementById("menu").style.margin = "0px 0px 50px 0px";
  document.getElementById("user").style.fontSize = "4rem";
  document.getElementById("option1").classList.remove("active");
  document.getElementById("option2").classList.remove("active");
  document.getElementById("option3").classList.remove("active");
  contador = 0;
}

function listarUsuario() {
  fetch("/usuarios/listarUsuario", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async function (resposta) {
    const container = document.querySelector(".container_usuarios");
    const usuarios = await resposta.json();
    for (let i = 0; i < usuarios.length; i++) {
      console.log(usuarios[i]);
      var div = document.createElement("div");
      div.setAttribute("class", "content");
      var divIcone = document.createElement("div");
      var divDados = document.createElement("div");
      let nomeUsuario = document.createElement("span");
      let emailUsuario = document.createElement("span");
      let telefoneUsuario = document.createElement("span");
      let generoUsuario = document.createElement("span");
      let buttonDeletar = document.createElement("button");
      let buttonEditar = document.createElement("button");
      let divButtons = document.createElement("div");

      //Modal
      let divIconModal = document.createElement("div");
      let divInputs = document.createElement("div");
      let divButtonSalvar = document.createElement("div");
      let buttonSalvar = document.createElement("button");
      let buttonSalvarCancelar = document.createElement("button");
      let buttonCancelar = document.createElement("button");
      let inputNome = document.createElement("input");
      let inputEmail = document.createElement("input");
      let inputTelefone = document.createElement("input");

      inputEmail.setAttribute("type", "text");
      inputNome.setAttribute("type", "text");
      inputTelefone.setAttribute("type", "text");

      divIconModal.innerHTML = "<i class='fa-solid fa-circle-user'></i>";

      divIcone.innerHTML = "<i class='fa-solid fa-circle-user'></i>";

      fundoModal.setAttribute("class", "fundoModal");
      buttonEditar.setAttribute("class", "editar");
      buttonDeletar.setAttribute("class", "excluir");
      buttonDeletar.innerHTML = `<i class="fa-solid fa-circle-minus"></i> Excluir`;
      buttonEditar.innerHTML = `<i class="fa-solid fa-pen-clip"></i> Editar`;
      buttonSalvar.innerHTML = `<i class="fa-solid fa-floppy-disk"></i> Salvar`;
      buttonSalvarCancelar.innerHTML = `<i class="fa-solid fa-circle-minus"></i> Cancelar`;
      buttonCancelar.innerHTML = `<i class="fa-solid fa-ban"></i> Cancelar`;
      buttonSalvar.setAttribute("class", "salvar");
      buttonSalvarCancelar.setAttribute("class", "buttonSalvarCancelar");
      buttonCancelar.setAttribute("class", "cancelar");

      buttonEditar.onclick = function editar() {
        console.log(inputEmail);
        console.log(inputNome, inputTelefone);

        inputEmail.setAttribute("value", usuarios[i].emailUsuario);
        inputNome.setAttribute("value", usuarios[i].nomeUsuario);
        inputTelefone.setAttribute("value", usuarios[i].telefoneUsuario);

        divInputs.append(inputNome, inputEmail, inputTelefone);

        divButtonSalvar.append(buttonSalvarCancelar, buttonSalvar);

        divModal.append(divIconModal, divInputs, divButtonSalvar);

        div.append(divModal);

        divModal.style.display = "flex";
        fundoModal.style.display = "flex";
      };

      buttonSalvarCancelar.onclick = function facha() {
        document.location.reload(true);
      };

      buttonSalvar.onclick = function atualizar() {
        fetch("/usuarios/" + usuarios[i].id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nomeServer: inputNome.value,
            emailServer: inputEmail.value,
            telefoneServer: inputTelefone.value,
          }),
        }).then((res) => console.log(res));

        document.location.reload(true);
        window.alert("Alteração realizada com sucesso");
      };

      buttonDeletar.onclick = function deletar() {
        modalExcluirUsuario.style.display = "block";
        fundoModal.style.display = "block";
      };

      modalExcluirUsuario_cancelar.onclick = function cancelaa() {
        modalExcluirUsuario.style.display = "none";
        fundoModal.style.display = "none";
      };

      modalExcluirUsuario_excluir.onclick = function De() {
        fetch("/usuarios/" + usuarios[i].id, {
          method: "DELETE",
        }).then((res) => console.log(res));

        window.alert("Usuário excluido");
        document.location.reload(true);
      };

      buttonCancelar.onclick = function cancelar() {
        divModal.style.display = "none";
      };

      nomeUsuario.innerHTML = "<h5>Nome: </h5> " + usuarios[i].nomeUsuario;
      emailUsuario.innerHTML = "<h5>Email: </h5>" + usuarios[i].emailUsuario;
      telefoneUsuario.innerHTML =
        "<h5>Telefone: </h5>" + usuarios[i].telefoneUsuario;
      generoUsuario.innerHTML = "<h5>Genero: </h5>" + usuarios[i].genero;

      divDados.append(
        nomeUsuario,
        emailUsuario,
        telefoneUsuario,
        generoUsuario
      );
      divButtons.append(buttonEditar, buttonDeletar);

      div.append(divIcone, divDados, divButtons);
      divIcone.setAttribute("class", "icone");
      divIconModal.setAttribute("class", "divIconModal");
      divInputs.setAttribute("class", "divInputs");
      divButtons.setAttribute("class", "divButtons");
      divDados.setAttribute("class", "dados");
      container.appendChild(div);
    }
  });
}

window.addEventListener("load", listarUsuario);
