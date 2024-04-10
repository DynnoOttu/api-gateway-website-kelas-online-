const express = require("express");
const router = express.Router();

const cousesHandler = require("./handler/courses");

const verifyToken = require("../middlewares/verifyToken");

router.get("/:id", cousesHandler.get);
router.get("/", cousesHandler.getAll);

// enpoint ini membutuhkan middleware
router.post("/", verifyToken, cousesHandler.create);
router.put("/:id", verifyToken, cousesHandler.update);
router.delete("/:id", verifyToken, cousesHandler.destroy);

module.exports = router;
