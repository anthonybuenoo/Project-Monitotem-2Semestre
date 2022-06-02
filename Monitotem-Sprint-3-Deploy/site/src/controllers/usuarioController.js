var usuarioModel = require("../models/usuarioModel");

function entrarEmpresa(req, res) {
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

  if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está indefinida!");
  } else {
    usuarioModel
      .entrarEmpresa(email, senha)
      .then(function (resultado) {
        console.log(`\nResultados encontrados: ${resultado.length}`);
        console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

        if (resultado.length == 1) {
          console.log(resultado);
          res.json(resultado[0]);
        } else if (resultado.length == 0) {
          res.status(403).send("Email e/ou senha inválido(s)");
        } else {
          res.status(403).send("Mais de um usuário com o mesmo login e senha!");
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o login! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function cadastrarEmpresa(req, res) {
  var cnpj = req.body.cnpjServer;
  var nome = req.body.nomeServer;
  var email = req.body.emailServer;
  var cep = req.body.cepServer;
  var telefone = req.body.telefoneServer;
  var senha = req.body.senhaServer;

  if (nome == undefined) {
    res.status(400).send("Seu nome está undefined!");
  } else if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está undefined!");
  } else {
    usuarioModel
      .cadastrarEmpresa(cnpj, nome, email, cep, telefone, senha)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(10).json(erro.sqlMessage);
      });
  }
}

function entrarUsuario(req, res) {
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

  if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está indefinida!");
  } else {
    usuarioModel
      .entrarUsuario(email, senha)
      .then(function (resultado) {
        console.log(`\nResultados encontrados: ${resultado.length}`);
        console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

        if (resultado.length == 1) {
          console.log(resultado);
          res.json(resultado[0]);
        } else if (resultado.length == 0) {
          res.status(403).send("Email e/ou senha inválido(s)");
        } else {
          res.status(403).send("Mais de um usuário com o mesmo login e senha!");
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o login! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function cadastrarUsuario(req, res) {
  var nome = req.body.nomeServer;
  var email = req.body.emailUsuarioServer;
  var telefone = req.body.telefoneServer;
  var genero = req.body.generoServer;
  var senha = req.body.senhaUsuarioServer;

  if (nome == undefined) {
    res.status(400).send("Seu nome está undefined!");
  } else if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está undefined!");
  } else {
    usuarioModel
      .cadastrarUsuario(nome, email, telefone, genero, senha)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(10).json(erro.sqlMessage);
      });
  }
}

function listarUsuario(req, res) {
  usuarioModel
    .listarUsuario()
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("\nHouve um erro ao pegar os usuarios", erro.sqlMessage);
      res.status(10).json(erro.sqlMessage);
    });
}

function listarTotem(req, res) {
  usuarioModel
    .listarTotem()
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("\nHouve um erro ao pegar os usuarios", erro.sqlMessage);
      res.status(10).json(erro.sqlMessage);
    });
}

function removerUsuario(req, res) {
  console.log(req.params);
  usuarioModel
    .deletarUsuario(req.params.id)
    .then(function (resultado) {
      res.json({ ok: true });
    })
    .catch(function (erro) {
      console.log(erro);
      console.log("\nHouve um erro ao pegar os usuarios", erro.sqlMessage);
      res.status(10).json(erro.sqlMessage);
    });
}


function atualizarUsuario(req, res) {
  var id = req.params.idUsuario;
  var nome = req.body.nomeServer;
  var email = req.body.emailServer;
  var telefone = req.body.telefoneServer;

  console.log("CONTROLLER: ", id);
  console.log("CONTROLLER: ", nome);
  console.log("CONTROLLER: ", email);
  console.log("CONTROLLER: ", telefone);

    usuarioModel
      .updateUsuario(id, nome, email, telefone)
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



// Reiniciar a Máquina


function reiniciarMaquina(req, res) {
  var reiniciarTotem = req.body.reiniciarMaquinaServer;

  let idTotem = req.body.idTotem;

    usuarioModel
      .reiniciarMaquina(reiniciarTotem, idTotem)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  
}


function getMemoryTotalRam(req, res) {

  let idTotem = req.params.idTotem;

  usuarioModel.getMemoryTotalRam(idTotem)
      .then(function (resultado) {
          if (resultado.length > 0) {
              res.status(200).json(resultado);
          } else {
              res.status(204).send("Nenhum resultado encontrado!")
          }
      }).catch(
          function (erro) {
              console.log(erro);
              console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
              res.status(500).json(erro.sqlMessage);
          }
      );
}

function getMemoryTotally(req, res) {

  let idTotem = req.params.idTotem;

  usuarioModel.getMemoryTotally(idTotem)
      .then(function (resultado) {
          if (resultado.length > 0) {
              res.status(200).json(resultado);
          } else {
              res.status(204).send("Nenhum resultado encontrado!")
          }
      }).catch(
          function (erro) {
              console.log(erro);
              console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
              res.status(500).json(erro.sqlMessage);
          }
      );
}

module.exports = {
  getMemoryTotally,
  getMemoryTotalRam,
  reiniciarMaquina,
  entrarEmpresa,
  entrarUsuario,
  cadastrarEmpresa,
  cadastrarUsuario,
  removerUsuario,
  atualizarUsuario,
  listarUsuario,
  listarTotem,
};
