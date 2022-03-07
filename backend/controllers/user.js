const User = require("../models/user");
const jwt = require("jsonwebtoken");
exports.createUser = async (req, res) => {
  
  const { userName, password, email } = req.body;
  const isUser = await User.isUserInDB(email);

  if (isUser) {
    return res.json({
      success: false,
      message: "User is already registered. Try Sign-in ",
    });
  }
  const user = await User({
    userName,
    password,
    email,
  });
  await user.save();
  res.json(user);
};

exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user)
    return res.json({
      success: false,
      message: "User not Found with the given email",
    });

  const result = await user.comparePassword(password);
  if (!result)
    return res.json({
      success: false,
      message: "Incorrect Password",
    }); 

  const token = jwt.sign(
    {
      userId: user._id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  res.json({
    success: true,
    user,
    token
  });

};
