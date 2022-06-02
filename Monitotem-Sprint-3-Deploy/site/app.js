//process.env.AMBIENTE_PROCESSO = "desenvolvimento";
process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var medidasRouter = require("./src/routes/medidas");
var totemRouter = require("./src/routes/totem");
var alertasRouter = require("./src/routes/alertas");
var statusRouter = require("./src/routes/status");
var alterarDados = require("./src/routes/alterarDados");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/medidas", medidasRouter);
app.use("/totem", totemRouter);
app.use("/alertas", alertasRouter);
app.use("/status", statusRouter);
app.use("/alterarDados", alterarDados);

app.listen(PORTA, function () {
  console.log(`Servidor do site está rodando rodando: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", banco local (MySQL Workbench). \n
    \t\tSe "producao", banco remoto (SQL Server em nuvem Azure)`);
});