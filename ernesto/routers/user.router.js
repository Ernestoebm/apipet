var {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/user.controller");
var express = require("express");
var router = express.Router();

router.get("/", getAllUsers);
router.get("/:email", getUser);
router.post("/", createUser);
router.put("/:email", updateUser);
router.delete("/:email", deleteUser);

module.exports = router;