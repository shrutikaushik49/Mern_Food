const mongoose = require("mongoose");

const UserModel = mongoose.model("Users", {
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
});

module.exports = UserModel;
