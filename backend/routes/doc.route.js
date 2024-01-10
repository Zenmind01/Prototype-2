const router = require("express").Router();
const docController = require("../controller/doc.controller");
const docModel = require("../models/doc.model");

router.post("/signup", docController.register);

router.post("/login", docController.login);

router.patch("/:id", docController.updatedoc);

router.get("/:id", docController.getdoc);

router.get("/", async (req, res) => {
    try {
      //console.log(req.doc);
      const courses = await docModel.find();
  
      return res.json({ success: true, data: courses, message: "here you go" });
    } catch (error) {
      return res.json({ success: false, message: error });
    }
  });


module.exports = router;
