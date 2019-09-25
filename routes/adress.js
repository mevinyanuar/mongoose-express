const express = require("express")
const router = express.Router()

const { addAdress } = require('../controllers/adress')

router.post("/", addAdress)

module.exports= router