var {
    createVetVisit,
    getAllVetVisit,
    profileVetVisit,
    updateVetVisit,
    deleteVetVisit
} = require("../controllers/vetVisit.controller");
var express = require("express");
var router = express.Router();

router.get("/", getAllVetVisit);
router.get("/:id", profileVetVisit);
router.post("/", createVetVisit);
router.put("/:id", updateVetVisit);
router.delete("/:id", deleteVetVisit);

module.exports = router;