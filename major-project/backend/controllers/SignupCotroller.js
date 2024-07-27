const UserModel = require("../model/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getSignUpUser = async (req, res) => {
  console.log("hi inside sign up controller");
  console.log(req.body);

  //getting varaibles from req.body
  const { email, password, name } = req.body;
  const user = await UserModel.findOne({ email: email });

  // cheok on user exisitence
  if (!user) {
    // Hash password using bcrypt module
    const salt = await bcrypt.genSalt(10);
    console.log(salt);

    //encrypting the password
    const hashPassword = await bcrypt.hash(password, salt);

    //setting encrypted password into model
    const newUser = new UserModel({
      name: name,
      email: email,
      password: hashPassword,
    });

    const savedUser = newUser.save();
    // create payload then Generate an access token

    const token = jwt.sign({ userId: savedUser._id }, "randomsecret");
    return res.status(200).json({
      user: newUser,
      token: token,
    });
  } else {
    return res.status(500).send("User already exists!");
  }
};

module.exports = { getSignUpUser };
