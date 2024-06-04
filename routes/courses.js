const express = require("express");
const router = express.Router();

const cousesHandler = require("./handler/courses");

const verifyToken = require("../middlewares/verifyToken");
const can = require("../middlewares/permisson");

router.get("/:id", cousesHandler.get);
router.get("/", cousesHandler.getAll);

// enpoint ini membutuhkan middleware
router.post("/", verifyToken, can("admin"), cousesHandler.create);
router.put("/:id", verifyToken, can("admin"), cousesHandler.update);
router.delete("/:id", verifyToken, can("admin"), cousesHandler.destroy);

module.exports = router;
