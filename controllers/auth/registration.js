const User = require("../../models/User.model");
const { registrationValidation } = require("../../services/validation");
const register = async (req, res, next) => {
  try {
    const registerValues = await (req.body);
    console.log("values aa gu",registerValues);
    const { username, email, phone, password,} = registerValues;

    const userVerification = await User.findOne({
      username,
    });
    const userEmailAddress = await User.findOne({
      email,
    });
    const userPassword = await User.findOne({
      password,
    });
    console.log(userVerification);
    if (userVerification) {
      return res.status(200).json({
        success: false,
        message: "User Exist already",
      });
    }
    if (userPassword) {
      return res.status(409).json({
        success: false,
        message: "User Password exists",
      });
    }
    if (userEmailAddress) {
      return res.status(409).json({
        success: false,
        message: "User Email exists",
      });
    }
    
    const newUser = new User({
      username,
      email,
      phone,
      password
    });
    await newUser.save();
    console.log("newUser",newUser);

    res.status(200).json({
      success: true,
      message: "User registered successfully",
      data: registerValues,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = register;