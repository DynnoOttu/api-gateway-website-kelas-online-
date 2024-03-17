const express = require("express");
const router = express.Router();

const mentorsHandler = require("./handler/mentors");

router.get("/", mentorsHandler.getAll);

module.exports = router;
