var {
    createCalendar,
    getAllCalendar,
    profileCalendar,
    updateCalendar,
    deleteCalendar
} = require("../controllers/calendar.controller");
var express = require("express");
var router = express.Router();

router.get("/", getAllCalendar);
router.get("/:id", profileCalendar);
router.post("/", createCalendar);
router.put("/:id", updateCalendar);
router.delete("/:id", deleteCalendar);

module.exports = router;