const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);

  // res.cookie("jwt", token, {
  //   expires: new Date(Date.now() + expires * 24 * 60 * 60 * 1000),
  //   httpOnly: true,
  // });

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const {
    name,
    email,
    age,
    phone,
    country,
    aadharNo,
    passport,
    password,
    passwordConfirm,
  } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    return next(new AppError("User already exists", 400));
  }
  const newUser = await User.create({
    name,
    email,
    age,
    phone,
    country,
    aadharNo,
    passport,
    password,
    passwordConfirm,
  });

  createSendToken(newUser, 201, req, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Please provide email and password!", 400));
  }
  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  createSendToken(user, 200, req, res);
});
