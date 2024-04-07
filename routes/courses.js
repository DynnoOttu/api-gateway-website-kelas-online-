const express = require("express");
const router = express.Router();

const cousesHandler = require("./handler/courses");

router.post("/", cousesHandler.create);
router.put("/:id", cousesHandler.update);
router.delete("/:id", cousesHandler.destroy);

module.exports = router;
