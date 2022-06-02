var alterarDadosModel = require("../models/alterarDadosModel");

function alterarDados(req, res) {
  alterarDadosModel
    .alterarDados()
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("\nHouve um erro ao pegar os usuarios", erro.sqlMessage);
      res.status(10).json(erro.sqlMessage);
    });
}

function atualizarDados(req, res) {
  var id = req.params.idUsuario;
  var nome = req.body.nomeServer;
  var email = req.body.emailServer;
  var telefone = req.body.telefoneServer;
  var senha = req.body.senhaServer;


  console.log("CONTROLLER: ", id);
  console.log("CONTROLLER: ", nome);
  console.log("CONTROLLER: ", email);
  console.log("CONTROLLER: ", telefone);

    alterarDadosModel
      .updateUsuario(id, nome, email, telefone, senha)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao atualizar usuario! Erro: ",
          erro.sqlMessage
        );
        res.status(10).json(erro.sqlMessage);
      });
  }

module.exports = {
  alterarDados,
  atualizarDados,
};
