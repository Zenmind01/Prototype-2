const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");

class UserService {
  static async registerUser(name, email, password) {
    try {
      const createUser = new UserModel({
        name,
        email,
        password,
      });

      return await createUser.save();
    } catch (error) {
      return error;
    }
  }

  static async getUserByEmail(email) {
    try {
      //console.log("ByEmail")
      return await UserModel.findOne({ email });
    } catch (err) {
      console.log(err);
    }
  }

  static async generateAccessToken(tokenData, JWTSecret_Key, JWT_EXPIRE) {
    return jwt.sign(tokenData, JWTSecret_Key, { expiresIn: JWT_EXPIRE });
  }
}

module.exports = UserService;
