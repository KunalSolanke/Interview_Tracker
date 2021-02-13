const { User } = require("../models");
const jwt = require("jsonwebtoken");
const auth = async (req, res, next) => {
  const token = req.get("Authorization")
    ? req.get("Authorization").split(" ")[1]
    : null;
  // console.log(token);
  if (token) {
    const data = await jwt.verify(token, process.env.JWT_REFRESH_KEY);
    const user = await User.findById(data._id);
    res.locals.user = user;
    req.user = user;
    req.token = token;
  } else {
    res.locals.user = null;
  }
  next();
};

module.exports = auth;
