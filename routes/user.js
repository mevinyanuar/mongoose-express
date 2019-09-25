const express = require("express")
const router = express.Router()


const {
    getUser,
    addUser,
    deleteUser,
    updateUser
} = require("../controllers/user")


router.get("/", getUser)
router.post("/", addUser)
router.delete("/:id", deleteUser)
router.put("/:id", updateUser)

module.exports = router