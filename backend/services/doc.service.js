const jwt = require("jsonwebtoken");
const docModel = require("../models/doc.model");

class docService {
  static async registerdoc(name, email, password) {
    try {

      const createdoc = new docModel({
        name,
        email,
        password
      });

      return await createdoc.save();
    } catch (error) {
        return error;
    }
  }

  static async getdocByEmail(email) {
    try {
      //console.log("ByEmail")
      return await docModel.findOne({ email });
    } catch (err) {
      console.log(err);
    }
  }
  

  static async generateAccessToken(tokenData, JWTSecret_Key, JWT_EXPIRE) {
    return jwt.sign(tokenData, JWTSecret_Key, { expiresIn: JWT_EXPIRE });
  }
}

module.exports = docService;
