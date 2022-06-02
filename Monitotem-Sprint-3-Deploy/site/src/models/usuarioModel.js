var database = require("../database/config");

function listarUsuario() {
  var instrucao = `
        SELECT * FROM usuario;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarTotem() {
  var instrucao = `
        SELECT * FROM totem;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function entrarEmpresa(emailEmpresa, senhaEmpresa) {
  var instrucao = `
        SELECT * FROM empresa WHERE emailEmpresa = '${emailEmpresa}' AND senhaEmpresa = '${senhaEmpresa}';
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}



function cadastrarEmpresa(
  cnpj,
  nomeEmpresa,
  emailEmpresa,
  cep,
  telefoneEmpresa,
  senhaEmpresa
) {
  var instrucao = `
        INSERT INTO empresa (cnpj, nomeEmpresa, emailEmpresa, cep, telefoneEmpresa, senhaEmpresa) VALUES 
        ('${cnpj}', '${nomeEmpresa}', '${emailEmpresa}', '${cep}', '${telefoneEmpresa}', '${senhaEmpresa}');
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}
function entrarUsuario(emailUsuario, senhaUsuario) {
  var instrucao = `
        SELECT * FROM usuario WHERE emailUsuario = '${emailUsuario}' AND senhaUsuario = '${senhaUsuario}';
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function cadastrarUsuario(
  nomeUsuario,
  emailUsuario,
  telefoneUsuario,
  genero,
  senhaUsuario
) {
  var instrucao = `
        INSERT INTO usuario (nomeUsuario, emailUsuario, telefoneUsuario, genero,  senhaUsuario) VALUES 
        ('${nomeUsuario}', '${emailUsuario}', '${telefoneUsuario}', '${genero}', '${senhaUsuario}');
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function deletarUsuario(id) {
  var instrucao = `
        DELETE FROM usuario WHERE id = ${id};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}


function updateUsuario(id, nomeUsuario, emailUsuario, telefoneUsuario) {
  console.log("MODEL: ", id);
  console.log("MODEL: ", nomeUsuario);
  console.log("MODEL: ", emailUsuario);
  console.log("MODEL: ", telefoneUsuario);
  var instrucao = `
        UPDATE usuario SET nomeUsuario = '${nomeUsuario}', 
        emailUsuario = '${emailUsuario}', 
        telefoneUsuario = '${telefoneUsuario}'
        WHERE id = ${id}
    `; 
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}



function reiniciarMaquina(
  reiniciarTotem,
  idTotem
) {
  var instrucao = `
  update totem set reiniciarTotem = ${reiniciarTotem} where idTotem = ${idTotem};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}


function getMemoryTotalRam(idTotem) {
  console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function getMemoryTotalRam()");
  var instrucao = `
  select top 1 usoMemoria as RamEmUsobd from [dbo].[registro] where fk_totem = ${idTotem} order by dataRegistro desc; `
  ;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function getMemoryTotally(idTotem) {
  console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function getMemoryTotally()");
  var instrucao = `
  select top 1 memoriaTotal as RamTotalbd from [dbo].[registro] where fk_totem = ${idTotem} order by dataRegistro desc; `
  ;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}


module.exports = {
  getMemoryTotally,
  getMemoryTotalRam,
  reiniciarMaquina,
  entrarEmpresa,
  entrarUsuario,
  cadastrarEmpresa,
  cadastrarUsuario,
  deletarUsuario,
  listarUsuario,
  listarTotem,
  updateUsuario
};
