var {
    createVaccineRegister,
    getAllVaccineRegister,
    profileVaccineRegister,
    updateVaccineRegister,
    deleteVaccineRegister
} = require("../controllers/vaccineRegister.controller");
var express = require("express");
var router = express.Router();

router.get("/", getAllVaccineRegister);
router.get("/:id", profileVaccineRegister);
router.post("/", createVaccineRegister);
router.put("/:id", updateVaccineRegister);
router.delete("/:id", deleteVaccineRegister);

module.exports = router;