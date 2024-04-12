const express = require("express");
const router = express.Router();

const imageCoursessHandler = require("./handler/image-courses");

router.post("/", imageCoursessHandler.create);
router.delete("/:id", imageCoursessHandler.destroy);

module.exports = router;
