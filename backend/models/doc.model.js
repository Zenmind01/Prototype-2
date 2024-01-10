const mongoose = require("mongoose");
const db = require("../config/db");

const { Schema } = mongoose;

const docSchema = new Schema({
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
  phone: {
    type: Number,
    default: 0,
  },
  password: {
    type: String,
    require: true,
  },
  dob: {
    type: String,
    default: 0,
  },
  gender: {
    type: String,
    default: "",
  },
  about: {
    type: String,
    default: "",
  },
  totalYearsOfExprience: {
    type: Number,
    default: 0,
  },
  edu: {
    type: [{}],
    default: [
      {
        institution_name: "",
        degree: "",
        yearOfPassing: "",
        duration: "",
      },
    ],
  },
  exp: {
    type: [{}],
    default: [
      {
        company_name: "",
        desgination: "",
        servicePeriod: "",
        location: "",
      },
    ],
  },
  Govt_id: {
    type: [{}],
    default: [{ type: "", number: "" }],
  },

  bankDetail: {
    type: {},
    default: {
      bank_name: "",
      ac_no: "",
      ifsc_code: "",
      branch_name: "",
      upi: "",
      card_no: ""
    },
  },

  updatedOn: { type: Date },
  createdOn: { type: Date },
});

docSchema.pre("save", function (next) {
  this.updatedOn = new Date();
  this.createdOn = new Date();

  // Hash the password

  next();
});

docSchema.pre("findOneAndUpdate", function (next) {
  const update = this.getUpdate();
  delete update._id;

  this.updatedOn = new Date();

  next();

  // Hash the password
});

docSchema.methods.comparePassword = async function (candidatePassword) {
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

const docModel = db.model("doc", docSchema);

module.exports = docModel;
