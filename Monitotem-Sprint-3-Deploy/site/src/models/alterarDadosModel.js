var database = require("../database/config");

function alterarDados() {
    var instrucao = `
          SELECT * FROM usuario where id = 42;
      `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }

  function updateUsuario(id, nomeUsuario, emailUsuario, telefoneUsuario, senhaUsuario) {
    console.log("MODEL: ", id);
    console.log("MODEL: ", nomeUsuario);
    console.log("MODEL: ", emailUsuario);
    console.log("MODEL: ", telefoneUsuario);
    console.log("MODEL: ", senhaUsuario);

    var instrucao = `
          UPDATE usuario SET nomeUsuario = '${nomeUsuario}', 
          emailUsuario = '${emailUsuario}', 
          telefoneUsuario = '${telefoneUsuario}',
          senhaUsuario = '${senhaUsuario}'
          WHERE id = 42;
      `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }
  

  module.exports = {
    alterarDados,
    updateUsuario
  };