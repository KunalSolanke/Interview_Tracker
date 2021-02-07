var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
const cors = require("cors");
var logger = require("morgan");
var helmet = require("helmet");
const expressLayouts = require("express-ejs-layouts");
const {
  baseRouter,
  usersRouter,
  problemRouter,
  interview,
} = require("./routes");
require("dotenv").config();
const { User, Question, Topic, InterviewExp } = require("./models");
const jwt = require("jsonwebtoken");
const AdminBro = require("admin-bro");
const AdminBroExpress = require("@admin-bro/express");
const AdminBroMongoose = require("@admin-bro/mongoose");
const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;
const multer = require("multer");

(async () => {
  const connection = await mongoose.connect(mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: true,
    useFindAndModify: false,
  });

  await AdminBro.registerAdapter(AdminBroMongoose);

  const adminBro = new AdminBro({
    databases: [connection],
    rootPath: "/admin",
    loginPath: "/admin/login",
  });

  var app = express();
  app.use(logger("tiny"));

  let router = express.Router();

  router = AdminBroExpress.buildAuthenticatedRouter(
    adminBro,
    {
      authenticate: async (email, pass) => {
        try {
          const admin = await User.findByCredentials(email, pass);
          return admin;
        } catch (err) {
          console.log(err);
          return null;
        }
      },
      cookiePassword: "iuwhe2uW3RHWI",
    },
    router
  );
  router = AdminBroExpress.buildRouter(adminBro, router);

  app.use("/admin", router);
  app.use(express.json());
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  //console.log(listEndpoints(app));
  app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "ejs");
  app.use(expressLayouts);

  //to add body to default request object generated by express

  //to add cookies to default request object generated by express

  app.use(async (req, res, next) => {
    const token = req.get("Authorization")
      ? req.get("Authorization").split(" ")[1]
      : null;
    console.log(token);
    if (token) {
      const data = await jwt.verify(token, process.env.JWT_REFRESH_KEY);
      const user = await User.findById(data._id);
      res.locals.user = user;
      req.user = user;
    } else {
      res.locals.user = null;
    }
    next();
  });

  app.use("/static", express.static(path.join(__dirname, "public")));

  app.use("/", baseRouter);
  app.use("/accounts", usersRouter);
  app.use("/problems", problemRouter);
  app.use("/interviews", interview);

  // error handler
  app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    console.log(err);
    res.status(err.status || 500);
    res.send("Error");
  });

  /// testing
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`http://localhost/${PORT}`);
  });
})();
