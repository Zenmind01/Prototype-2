const docModel = require("../models/doc.model");
const docServices = require("../services/doc.service");



exports.register = async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
  
      const successRes = await docServices.registerdoc(name, email, password);
  
      res.json({ status: true, message: successRes });
    } catch (error) {
      res.status(501).json({ status: false, message: error });
    }
  };
  
  exports.login = async (req, res, next) => {
    try {
      
      const { email,password} = req.body;
  
      if (!email && !password) {
        throw new Error("Parameter are not correct");
      }
  
      const doc = await docServices.getdocByEmail(email);
  
      if (!doc) {
        res.json({ status: true, message: "user does not exist" });
      }
      const isPasswordCorrect = await doc.comparePassword(password);
      if (isPasswordCorrect === false) {
        res.json({ status: true, message: "password or username wrong" });
      }
      // Creating Token
      let tokenData;
      tokenData = { _id: doc._id, email: doc.email };
  
      const token = await docServices.generateAccessToken(
        tokenData,
        "secret",
        "1h"
      );
      res.status(200).json({ status: true, success: doc, token: token });
    } catch (error) {
      console.log(error)
      res.status(501).json({ status: false, message: error });
    }
  };
  
  exports.updatedoc = async (req, res) => {
    try {
      const docId = req.params.id;
      const updateData = req.body;
  
      const updateddoc = await docModel.findOneAndUpdate(
        { _id: docId },
        updateData,
        { new: true }
      );
  
      if (!updateddoc) {
        res.json({ status: true, message: "user not found" });
      }
  
      return res.json({
        success: true,
        data: updateddoc,
        message: "user updated!",
      });
    } catch (ex) {
      //console.log(ex)
      return res.status(501).json({ success: false, message: ex });
    }
  };
  
  exports.getdoc = async (req, res, next) => {
    try {
      const docId = req.params.id;
  
      const doc = await docModel.findById(docId);
  
      return res.json({ success: true, data: doc, message: "here you go" });
    } catch (error) {
      return res.status(501).json({ success: false, message: error });
    }
  };
  