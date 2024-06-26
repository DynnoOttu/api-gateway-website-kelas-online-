require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// route user
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const ordersPaymentsRouter = require("./routes/orderPayments");
const mediaRouter = require("./routes/media");
const coursesRouter = require("./routes/courses");
const mentorsRouter = require("./routes/mentors");
const chaptersRouter = require("./routes/chapters");
const lessonsRouter = require("./routes/lessons");
const imageCoursesRouter = require("./routes/imageCourses");
const myCoursesRouter = require("./routes/myCourses");
const reviewsRouter = require("./routes/reviews");
const webhookRouter = require("./routes/webhook");

// route refres token
const verifyToken = require("./middlewares/verifyToken");
const refreshTokenRouter = require("./routes/refreshTokens");

const can = require("./middlewares/permisson");

const app = express();

app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/orders", verifyToken, can("admin", "student"), ordersPaymentsRouter);
app.use("/media", can("admin", "student"), mediaRouter);
app.use("/courses", coursesRouter);
app.use("/refresh-tokens", refreshTokenRouter);
app.use("/mentors", verifyToken, can("admin"), mentorsRouter);
app.use("/chapters", verifyToken, can("admin"), chaptersRouter);
app.use("/lessons", verifyToken, can("admin"), lessonsRouter);
app.use("/image-courses", verifyToken, can("admin"), imageCoursesRouter);
app.use("/my-courses", verifyToken, can("admin"), myCoursesRouter);
app.use("/reviews", verifyToken, can("admin", "student"), reviewsRouter);
app.use("/webhook", webhookRouter);

module.exports = app;
