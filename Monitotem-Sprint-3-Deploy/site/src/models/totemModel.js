var database = require("../database/config");


function atualizarTotem(idTotem, sistema, fabricante, ipTotem) {
    console.log("MODEL: ", idTotem);
    console.log("MODEL: ", sistema);
    console.log("MODEL: ", fabricante);
    console.log("MODEL: ", ipTotem);
    var instrucao = `
          UPDATE totem SET sistema = '${sistema}', 
          fabricante = '${fabricante}', 
          ipTotem = '${ipTotem}'
          WHERE idTotem = ${idTotem}
      `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }

  function deletarTotem(idTotem) {
    var instrucao = `
          DELETE FROM totem WHERE idTotem = 66;
      `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }


module.exports = {
    atualizarTotem,
    deletarTotem
  };
  