var totemModel = require("../models/totemModel");

function atualizarTotem(req, res) {
    var id = req.params.idTotem;
    var sistema = req.body.sistemaServer;
    var fabricante = req.body.fabricanteServer;
    var ipTotem = req.body.ipTotemServer;
   
    console.log("CONTROLLER: ", id);
    console.log("CONTROLLER: ", sistema);
    console.log("CONTROLLER: ", fabricante);
    console.log("CONTROLLER: ", ipTotem);
      totemModel
        .atualizarTotem(id, sistema, fabricante, ipTotem) 
        .then(function (resultado) {
          res.json(resultado);
        })
        .catch(function (erro) {
          console.log(erro);
          console.log(
            "\nHouve um erro ao atualizar usuario! Erro: ",
            erro.sqlMessage
          );
          res.status(500).json(erro.sqlMessage);
        });
    }

    function removerTotem(req, res) {
      console.log(req.params);
      totemModel
        .deletarTotem(req.params.idTotem)
        .then(function (resultado) {
          res.json({ ok: true });
        })
        .catch(function (erro) {
          console.log(erro);
          console.log("\nHouve um erro ao pegar os usuarios", erro.sqlMessage);
          res.status(500).json(erro.sqlMessage);
        });
    }
    

module.exports = {
    atualizarTotem,
    removerTotem
  };