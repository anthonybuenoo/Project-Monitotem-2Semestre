const express = require("express");
const router = express();

const usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
  usuarioController.testar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    usuarioController.listarUsuario(req, res);
  });

  router.get("/listarTotem", function (req, res) {
    usuarioController.listarTotem(req, res);
  });

router.get("/listarUsuario", function (req, res) {
  usuarioController.listarUsuario(req, res);
});

router.post("/cadastrarEmpresa", function (req, res) {
  usuarioController.cadastrarEmpresa(req, res);
});

router.post("/autenticar", function (req, res) {
  usuarioController.entrarEmpresa(req, res);
});
router.post("/cadastrarUsuario", function (req, res) {
  usuarioController.cadastrarUsuario(req, res);
});

router.post("/autenticarUsuario", function (req, res) {
  usuarioController.entrarUsuario(req, res);
});

router.post("/reiniciarMaquina", function (req, res) {
  usuarioController.reiniciarMaquina(req, res);
});

router.delete("/:id", function (req, res) {
  console.log("CHEGOU AQ");
  usuarioController.removerUsuario(req, res);
});

router.put("/:idUsuario", function (req, res) {
  console.log("CHEGOU AQiiii"); 
  usuarioController.atualizarUsuario(req, res);
});

router.get("/getMemoryTotalRam/:idTotem", function (req,res){
  usuarioController.getMemoryTotalRam(req, res)
});

router.get("/getMemoryTotally/:idTotem", function (req,res){
  usuarioController.getMemoryTotally(req, res)
});



module.exports = router;
