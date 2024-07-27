const jwt = require("jsonwebtoken");
const UserModel = require("../model/Users");

const getorder = async (req, res) => {
  const { email, id, name } = req.body();

  const newOrder = new UserModel({
    name: name,
    email: email,
    id: id,
  });

  const savedUser = newOrder.save();
  const token = jwt.sign({ orderId: savedUser._id }, "randomsecret");
  return res.status(200).json({
    user: newUser,
    token: token,
  });
};
module.exports = { getorder };
