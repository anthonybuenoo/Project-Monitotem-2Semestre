const express = require("express");
const router = express.Router();

const alterarDadosController = require("../controllers/alterarDadosController");

router.get("/alterarDados", function (req, res) {
  alterarDadosController.alterarDados(req, res);
});

router.put("/:id", function (req, res) {
  console.log("CHEGOU AQiiii");
  alterarDadosController.atualizarDados(req, res);
});

module.exports = router;
