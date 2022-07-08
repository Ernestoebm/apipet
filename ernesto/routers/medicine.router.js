var {
    createMedicine,
    getAllMedicine,
    profileMedicine,
    updateMedicine,
    deleteMedicine
} = require("../controllers/medicine.controller");
var express = require("express");
var router = express.Router();

router.get("/", getAllMedicine);
router.get("/:medicineName", profileMedicine);
router.post("/", createMedicine);
router.put("/:id", updateMedicine);
router.delete("/:id", deleteMedicine);

module.exports = router;