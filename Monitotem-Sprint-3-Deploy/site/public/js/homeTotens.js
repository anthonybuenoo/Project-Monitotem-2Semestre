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

function listarTotem() {
  fetch("/usuarios//listarTotem", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async function (resposta) {
    const containerTotem = document.querySelector(".container_totens");
    const totens = await resposta.json();
    for (let i = 0; i < totens.length; i++) {
      console.log(totens[i]);
      let idTotens = document.createElement("span");
      let sistema = document.createElement("span");
      let fabricante = document.createElement("span");
      let ipTotem = document.createElement("span");
      let content = document.createElement("div");
      let divIcone = document.createElement("div");
      let divDados = document.createElement("div");
      let buttonEditar = document.createElement("button");
      let buttonExcluir = document.createElement("button");
      let divButtons = document.createElement("div");
      let inputSistema = document.createElement("input");
      let inputFabricante = document.createElement("input");
      let inputIptotem = document.createElement("input");
      let divIconeModal = document.createElement("div");
      let divInputsModal = document.createElement("div");
      let divButtonsModal = document.createElement("div");
      let buttonCancelar = document.createElement("button");
      let buttonSalvar = document.createElement("button");
      let buttonDeletar = document.createElement("button");

      content.setAttribute("class", "content");
      divIcone.setAttribute("class", "icone_totem");
      divDados.setAttribute("class", "dados");
      buttonExcluir.setAttribute("class", "buttonExcluir");
      buttonEditar.setAttribute("class", "buttonEditar");
      divIconeModal.setAttribute("class", "divIconeModal");
      divInputsModal.setAttribute("class", "divInputsModal");
      divButtonsModal.setAttribute("class", "divButtonsModal");
      divButtons.setAttribute("class", "divButtons");
      buttonCancelar.setAttribute("class", "buttonCancelar");
      buttonSalvar.setAttribute("class", "buttonSalvar");

      divIcone.innerHTML = `<i class="fa-solid fa-display"></i> `;
      idTotens.innerHTML = `<h5>ID: &nbsp; </h5> ${totens[i].idTotem}`;
      sistema.innerHTML = `<h5>Sistema: &nbsp;  </h5>  ${totens[i].sistema}`;
      fabricante.innerHTML = `<h5>Fabricante: &nbsp; </h5> ${totens[i].fabricante}`;
      ipTotem.innerHTML = `<h5>IP: &nbsp; </h5> ${totens[i].ipTotem}`;
      buttonExcluir.innerHTML = "Excluir";
      buttonEditar.innerHTML = "Editar";
      divIconeModal.innerHTML = '<i class="fa-solid fa-display"></i>';
      buttonCancelar.innerHTML = "Cancelar";
      buttonSalvar.innerHTML = "Salvar";

      buttonEditar.onclick = function editar() {
        console.log(inputSistema, inputFabricante, inputIptotem);

        inputSistema.setAttribute("value", totens[i].sistema);
        inputFabricante.setAttribute("value", totens[i].fabricante);
        inputIptotem.setAttribute("value", totens[i].ipTotem);

        divInputsModal.append(inputSistema, inputFabricante, inputIptotem);

        divButtonsModal.append(buttonCancelar, buttonSalvar);

        divModal.append(divIconeModal, divInputsModal, divButtonsModal);

        containerTotem.append(divModal);

        divModal.style.display = "flex";
        fundoModal.style.display = "flex";
      };

      buttonCancelar.onclick = function Cancelar() {
        document.location.reload(true);
      };

      buttonSalvar.onclick = function attTotem() {
        fetch("/totem/" + totens[i].idTotem, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sistemaServer: inputSistema.value,
            fabricanteServer: inputFabricante.value,
            ipTotemServer: inputIptotem.value,
          }),
        }).then((res) => console.log(res));

        window.alert("Alteração realizada com sucesso");
        document.location.reload(true);
      };

      buttonExcluir.onclick = function deletar() {
        modalExcluirUsuario.style.display = "block";
        fundoModal.style.display = "block";
      };

      modalExcluirUsuario_cancelar.onclick = function cancelaa() {
        document.location.reload(true);
      };

      modalExcluirUsuario_excluir.onclick = function Delete() {
        fetch("/totem/" + 66, {
          method: "DELETE",
        }).then((res) => console.log(res));

        window.alert("totem excluido");
        document.location.reload(true);
      };

      divDados.append(idTotens, sistema, fabricante, ipTotem);

      divButtons.append(buttonEditar, buttonExcluir);

      content.append(divIcone, divDados, divButtons);

      containerTotem.appendChild(content);
    }
  });
}

window.addEventListener("load", listarTotem);
