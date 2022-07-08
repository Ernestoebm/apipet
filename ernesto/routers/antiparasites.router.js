var {
    createAntiParasite,
    getAllAntiParasite,
    profileAntiParasite,
    updateAntiParasite,
    deleteAntiParasite
} = require("../controllers/antiparasites.controller");
var express = require("express");
var router = express.Router();

router.get("/", getAllAntiParasite);
router.get("/:treatName", profileAntiParasite);
router.post("/", createAntiParasite);
router.put("/:id", updateAntiParasite);
router.delete("/:id", deleteAntiParasite);

module.exports = router;