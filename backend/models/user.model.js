const mongoose = require("mongoose");
const db = require("../config/db");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    lowercase: true,
    require: true,
    unique: true,
  },
  phone:{
    type: Number,
    default: 0,
  },
  password: {
    type: String,
    require: true,
  },
  dob:{
    type: String,
    default: 0,
  },
  gender:{
    type: String,
    default: "",
  },
  p1:{
    type: [String],
    default: [],
  },
  p2:{
    type: [String],
    default: [],
  },
  p3:{
    type: [String],
    default: [],
  },
  p4:{
    type: [String],
    default: [],
  },
  p5:{
    type: [String],
    default: [],
  },
  p6:{
    type: [String],
    default: [],
  },
  bankDetail:{type:{},default:{
    bank_name: "",
      ac_no: "",
      ifsc_code: "",
      branch_name: "",
      upi: "",
      card_no: ""
  }},

  updatedOn: { type: Date },
  createdOn: { type: Date },
});

userSchema.pre("save", function (next) {
  this.updatedOn = new Date();
  this.createdOn = new Date();

  // Hash the password

  next();
});

userSchema.pre("findOneAndUpdate", function (next) {
  const update = this.getUpdate();
  delete update._id;

  this.updatedOn = new Date();

  next();

  // Hash the password
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    //console.log('----------------no password',this.password);
    // @ts-ignore
    if (candidatePassword == this.password) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

const userModel = db.model("users", userSchema);

module.exports = userModel;
