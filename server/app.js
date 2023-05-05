const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const globalErrorHandler = require("./controller/errorController");
const AppError = require("./utils/appError");

const userRoutes = require("./routes/userRoutes");

const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());
app.use(cors());

app.use("/api/v1/users", userRoutes);
// app.use("/api/v1/tours");

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
