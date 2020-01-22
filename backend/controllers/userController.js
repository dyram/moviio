const model = require("../models");
const User = model.Users;
const passwordHash = require("password-hash");
const jwt = require("jsonwebtoken");
const key = require("../config/token.json");

Users = () => {};

Users.addUser = async (name, pass) => {
  let promise = User.create({ name: name, pass: pass, role: "user" });
  return promise;
};

Users.loginUser = async (name, pass, role) => {
  let promise = await User.findAll({
    attributes: ["name", "pass", "role", "id"],
    where: { name: name, role: role }
  });
  let valid = passwordHash.verify(pass, promise[0].pass);
  if (valid) {
    token = {
      id: jwt.sign(
        {
          exp: Date.now() / 1000 + 60 * 60,
          id: promise[0].id
        },
        key.tokenKey
      ),
      validity: true
    };
    return token;
  } else {
    token = {
      id: jwt.sign({ id: promise[0].id }, key.tokenKey),
      validity: false
    };
    return token;
  }
};

Users.getUserType = async id => {
  let promise = await User.findAll({
    where: { id: id }
  });
  let role = promise[0].role;
  if (role === "admin" || role === "sadmin") return true;
  else return false;
};

Users.adminLogin = async (name, pass, role) => {
  let promise = await User.findAll({
    attributes: ["name", "pass", "role", "id"],
    where: { name: name, role: role }
  });
  let valid = passwordHash.verify(pass, promise[0].pass);
  if (valid) {
    token = {
      id: jwt.sign(
        {
          exp: Date.now() / 1000 + 60 * 60,
          id: promise[0].id
        },
        key.tokenKey
      ),
      validity: true
    };
    return token;
  } else {
    token = {
      id: jwt.sign({ id: promise[0].id }, key.tokenKey),
      validity: false
    };
    return token;
  }
};
module.exports = Users;
