const User = require("../../models/User.model");
const { registrationValidation } = require("../../services/validation");
const register = async (req, res, next) => {
  try {
    const registerValues = (req.body);
    console.log("User Registered",registerValues);
    const { username, email, phone, password,} = registerValues;

    const userFullName = await User.findOne({
      username,
    });
    const userEmailAddress = await User.findOne({
      email,
    });
    const userPassword = await User.findOne({
      password,
    });
    console.log(userVerification);
    if (userFullName) {
      return res.status(200).json({
        // success: false,
        message: "User Exist already",
      });
    }
    if (userEmailAddress) {
      return res.status(409).json({
        // success: false,
        message: "User Email exists",
      });
    }
    if (userPassword) {
      return res.status(409).json({
        // success: false,
        message: "User Password exists",
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