var database = require("../database/config");

function listarStatus() {
    var instrucao = `
          SELECT * FROM registro order by dataRegistro desc;
      `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }

  module.exports = {
    listarStatus
  };