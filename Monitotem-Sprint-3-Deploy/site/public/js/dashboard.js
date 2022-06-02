conter = 0;

function evento() {
  conter++;

  if (conter == 1) {
    document.getElementById("btnBall").style.marginLeft = "52px";
    document.getElementById("btnBall").style.backgroundColor =
      "rgb(212, 212, 212)";
    document.getElementById("pdp").style.backgroundColor = "#202529";
    document.getElementById("pdp").style.color = "#EAEBE6";
    document.getElementById("btnBall").style.color = "rgb(236, 185, 0)";
    document.getElementById("btn").style.border = "solid 3px #EAEBE6";
    document.getElementById("abrirMenu").style.backgroundColor = "#32383D";
    document.getElementById("activee").style.color = "rgb(40, 40, 40)";
    document.getElementById('box_totens').style.border = '.5px solid #A1B4C4'
    document.getElementById('status_bar').style.borderBottom = '.5px solid #A1B4C4'
    document.getElementById('status_bar').style.borderTop = '.5px solid #A1B4C4'
    document.getElementById('box_totens').style.backgroundColor = '#32383D'




    
    conter = -1;
  } else {
    document.getElementById("btnBall").style.marginLeft = "52px";
    document.getElementById("btnBall").style.backgroundColor = "black";
    document.getElementById("btnBall").style.color = "rgba(255, 247, 0, 0.45)";
    document.getElementById("btn").style.border = "solid 3px black";
    document.getElementById("btnBall").style.marginLeft = "2px";
    document.getElementById("pdp").style.backgroundColor = "white";
    document.getElementById("pdp").style.color = "black";
    document.getElementById("abrirMenu").style.backgroundColor = "#2855b5";
    document.getElementById("activee").style.color = "#2855b5";
    document.getElementById('box_totens').style.border = '.5px solid #2855b5'
    document.getElementById('status_bar').style.borderBottom = '.5px solid #2855b5'
    document.getElementById('status_bar').style.borderTop = '.5px solid #2855b5'
    document.getElementById('box_totens').style.backgroundColor = 'white'



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


function listarTotem() {
  fetch("/usuarios//listarTotem", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(async function (resposta) {
    const containerTotem = document.querySelector(".container_content");
    const totens = await resposta.json();
    for (let i = 0; i < totens.length; i++) {
      let content = document.createElement("div");
      let content_id = document.createElement("div");
      let content_status = document.createElement("span");
      let content_action = document.createElement("span");

      fetch("/status/getStatus", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async function (resposta) {
        const status = await resposta.json();
        content_status.innerHTML = status[i].statusRegistro;
      });

      content_action.onclick = function teste() {
        fetch("/usuarios//listarTotem", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }).then(async function (resposta) {
          const totens = await resposta.json();
          sessionStorage.ID_TOTEM = totens[i].idTotem;
          window.location = '../pages/action.html'
        });
      }

      content_id.innerHTML = `<i class="fa-solid fa-display"></i>${totens[i].idTotem}`;

      content_action.innerHTML =
        '<i class="fa-solid fa-circle-exclamation"></i>';

      content.setAttribute("class", "content");
      content_id.setAttribute("class", "content_id");
      content_status.setAttribute("class", "content_status");
      content_action.setAttribute("class", "content_action");

      content.append(content_id, content_status, content_action);

      containerTotem.appendChild(content);
    }
  });
  
}


window.addEventListener("load", listarTotem);