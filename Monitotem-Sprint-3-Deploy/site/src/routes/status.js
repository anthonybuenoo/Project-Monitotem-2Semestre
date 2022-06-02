const express = require("express");
const router = express.Router();

const statusController = require("../controllers/statusController");
router.get("/getStatus", function (req,res){
    statusController.listarStatus(req, res)
  });

module.exports = router;