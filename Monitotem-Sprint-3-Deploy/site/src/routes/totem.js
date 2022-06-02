const express = require("express");
const router = express.Router();


const totemController = require("../controllers/totemController");


router.put("/:idTotem", function (req, res) {
    console.log("CHEGOU leolindo");
    totemController.atualizarTotem(req, res);
  });

  router.delete("/:idTotem", function (req, res) {
    console.log("to AQ");
    totemController.removerTotem(req, res);
  });
  

  module.exports = router;
  
