cont = 0;

function evento() {
  cont++;

  if (cont == 1) {
    document.getElementById("btnBall").style.marginLeft = "52px";
    document.getElementById("btnBall").style.backgroundColor =
      "rgb(212, 212, 212)";
    document.getElementById("pdp").style.backgroundColor = "#202529";
    document.getElementById("pdp").style.color = "#EAEBE6";
    document.getElementById("btnBall").style.color = "rgb(236, 185, 0)";
    document.getElementById("btn").style.border = "solid 3px #EAEBE6";
    document.getElementById("abrirMenu").style.backgroundColor = "#32383D";
    document.getElementById("activee").style.color = "rgb(40, 40, 40)";
    document.getElementById("btnReiniciar").style.color = "#EAEBE6";
    document.getElementById("btnReiniciar").style.border = "#EAEBE6 solid 1px";
    document.getElementById("bloco_ok").style.backgroundColor = "#1a8200";
    document.getElementById("bloco_alerta").style.backgroundColor = "#927200";
    document.getElementById("bloco_emergencia").style.backgroundColor =
      "#ab0000";
    document.getElementById("grafico_cpu").style.backgroundColor = "#32383D";
    document.getElementById("modal_reiniciar_maquina").style.backgroundColor =
      "#32383D";
    document.getElementById(
      "modalExcluirUsuario_cancelar"
    ).style.backgroundColor = "#32383D";
    document.getElementById("modalExcluirUsuario_cancelar").style.color =
      "white";
    document.getElementById(
      "modalExcluirUsuario_excluir"
    ).style.backgroundColor = "#32383D";
    document.getElementById("modalExcluirUsuario_excluir").style.color =
      "white";

    cont = -1;
  } else {
    document.getElementById("btnBall").style.marginLeft = "52px";
    document.getElementById("btnBall").style.backgroundColor = "black";
    document.getElementById("btnBall").style.color = "rgba(255, 247, 0, 0.45)";
    document.getElementById("btn").style.border = "solid 3px black";
    document.getElementById("btnBall").style.marginLeft = "2px";
    document.getElementById("pdp").style.backgroundColor = "white";
    document.getElementById("pdp").style.color = "black";
    document.getElementById("btnReiniciar").style.color = "black";
    document.getElementById("btnReiniciar").style.border = "black solid 1px";
    document.getElementById("abrirMenu").style.backgroundColor = "#2855b5";
    document.getElementById("activee").style.color = "#2855b5";
    document.getElementById("bloco_ok").style.backgroundColor = "#3cb01f";
    document.getElementById("bloco_alerta").style.backgroundColor = "#ecc122";
    document.getElementById("bloco_emergencia").style.backgroundColor =
      "#ff0202";
    document.getElementById("grafico_cpu").style.backgroundColor = "white";
    document.getElementById(
      "modalExcluirUsuario_cancelar"
    ).style.backgroundColor = "white";
    document.getElementById("modalExcluirUsuario_cancelar").style.color =
      "black";
    document.getElementById(
      "modalExcluirUsuario_excluir"
    ).style.backgroundColor = "white";
    document.getElementById("modalExcluirUsuario_excluir").style.color =
      "black";
      document.getElementById("modal_reiniciar_maquina").style.backgroundColor =
      "white";
  }
}

var contador = 0;

function abrir() {
  contador++;
  if (contador == 1) {
    document.getElementById("abrirMenu").style.width = "22%";
    document.getElementById("menu").style.margin = "0px 0px 0px -70%";
    document.getElementById("user").style.fontSize = "160px";
    document.getElementById("option1").classList.add("active");
    document.getElementById("option2").classList.add("active");
    document.getElementById("option3").classList.add("active");
    document.getElementById("option4").classList.add("active");
    document.getElementById("html").style.overflow = "hidden";
  } else if (contador > 1) {
    document.getElementById("abrirMenu").style.width = "6%";
    document.getElementById("menu").style.margin = "0px 0px 50px 0px";
    document.getElementById("user").style.fontSize = "4rem";
    document.getElementById("option1").classList.remove("active");
    document.getElementById("option2").classList.remove("active");
    document.getElementById("option3").classList.remove("active");
    document.getElementById("option4").classList.remove("active");
    contador = 0;
  }
}

function fechar() {
  document.getElementById("abrirMenu").style.width = "7%";
  document.getElementById("menu").style.margin = "0px 0px 50px 0px";
  document.getElementById("user").style.fontSize = "4rem";
  document.getElementById("option1").classList.remove("active");
  document.getElementById("option2").classList.remove("active");
  document.getElementById("option3").classList.remove("active");
  document.getElementById("option4").classList.remove("active");
  contador = 0;
}

function abrirModal() {
  let modal = document.querySelector(".modal");
  let fundoModal = document.querySelector(".fundoModal");
  fundoModal.style.display = "flex";

  modal.style.display = "flex";
}

function fecharModal() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";

  let fundoModal = document.querySelector(".fundoModal");
  fundoModal.style.display = "none";
}
