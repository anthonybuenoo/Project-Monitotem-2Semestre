var statusModel = require("../models/statusModel");

function listarStatus(req, res) {
  var id = req.params.fk_totem;
    var status = req.body.statusServer;
    console.log("CONTROLLER: ", id);
    console.log("CONTROLLER: ", status);
    statusModel
      .listarStatus(id, status)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log("\nHouve um erro ao pegar status", erro.sqlMessage);
        res.status(10).json(erro.sqlMessage);
      });
  }


  module.exports = {
    listarStatus
  };