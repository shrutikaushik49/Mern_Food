const UserModel = require("../model/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getLoginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email: email });
  if (user) {
    const isPasswordMatchingFromDb = await bcrypt.compare(
      password,
      user.password
    );

    if (isPasswordMatchingFromDb) {
      const token = jwt.sign({ userId: user._id }, "randomsecret");
      return res.status(200).json({
        user: user,
        token: token,
      });
    } else {
      res.status(401).send("password doesnt match");
    }
  } else {
    res.status(401).send("User Does Not Exists");
  }
};
module.exports = { getLoginUser };
