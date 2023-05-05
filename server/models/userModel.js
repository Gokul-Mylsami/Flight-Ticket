const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please enter your email"],
    lowercase: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  age: {
    type: Number,
    required: [true, "Please enter your age"],
  },
  phone: {
    type: String,
    required: [true, "Please enter your phone number"],
  },
  country: {
    type: String,
    required: [true, "Please enter your country"],
  },
  aadharNo: {
    type: String,
    required: [true, "Please enter your aadhar number"],
  },
  passport: {
    type: Boolean,
    required: [true, "Please enter your passport"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator(el) {
        return el === this.password;
      },
      message: "Password are not same",
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
});

userSchema.pre("save", async function (next) {
  //run only if the password is modified
  if (!this.isModified("password")) return next();

  //pasword hashing
  this.password = await bcrypt.hash(this.password, 12);

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
