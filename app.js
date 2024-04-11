require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// route user
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const paymentsRouter = require("./routes/payments");
const ordersRouter = require("./routes/orders");
const mediaRouter = require("./routes/media");
const coursesRouter = require("./routes/courses");
const mentorsRouter = require("./routes/mentors");
const chaptersRouter = require("./routes/chapters");
const lessonsRouter = require("./routes/lessons");

// route refres token
const verifyToken = require("./middlewares/verifyToken");
const refreshTokenRouter = require("./routes/refreshTokens");

const app = express();

app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/payments", paymentsRouter);
app.use("/orders", ordersRouter);
app.use("/media", mediaRouter);
app.use("/courses", coursesRouter);
app.use("/refresh-tokens", refreshTokenRouter);
app.use("/mentors", verifyToken, mentorsRouter);
app.use("/chapters", verifyToken, chaptersRouter);
app.use("/lessons", lessonsRouter);

module.exports = app;
