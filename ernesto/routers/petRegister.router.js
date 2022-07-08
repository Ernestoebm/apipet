var {
    createPetRegister,
    getAllPetRegister,
    profilePetRegister,
    updatePetRegister,
    deletePetRegister
} = require("../controllers/petRegister.controller");
var express = require("express");
var router = express.Router();

router.get("/", getAllPetRegister);
router.get("/:id", profilePetRegister);
router.post("/", createPetRegister);
router.put("/:id", updatePetRegister);
router.delete("/:id", deletePetRegister);

module.exports = router;