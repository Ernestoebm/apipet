var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var helmet = require("helmet");
var passport = require("passport");
require("./auth/auth");
require("./database/config")

var userRouter = require("./routers/user.router");
var antiParasitesRouter = require("./routers/antiparasites.router");
var calendarRouter = require("./routers/calendar.router");
var medicineRouter = require("./routers/medicine.router");
var petRegisterRouter = require("./routers/petRegister.router");
var vaccineRegisterRouter = require("./routers/vaccineRegister.router");
var vetVisitRouter = require("./routers/vetVisit.router");
var authRouter = require("./routers/auth.router");
var errorHandler = require("./middleware/errorHandler");

const { authadmin } = require("./auth/auth");

var app = express();

app.use(logger("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(authRouter);
app.use(passport.authenticate("jwt", { session: false }))
app.use("/user", userRouter);
app.use("/antiParasite", antiParasitesRouter);
app.use("/calendar", calendarRouter);
app.use("/medicine", medicineRouter);
app.use("/petRegister", petRegisterRouter);
app.use("/vaccineRegister", vaccineRegisterRouter);
app.use("/vetVisitRegister", vetVisitRouter);
app.use(errorHandler);

module.exports = app;