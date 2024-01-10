const router = require("express").Router();
const UserController = require("../controller/user.controller");
const userModel = require("../models/user.model");

router.post("/signup", UserController.register);

router.post("/login", UserController.login);

router.patch("/:id", UserController.updateUser);

router.get("/:id", UserController.getUser);

router.get("/", async (req, res) => {
  try {
    //console.log(req.user);
    const courses = await userModel.find();

    return res.json({ success: true, data: courses, message: "here you go" });
  } catch (error) {
    return res.json({ success: false, message: error });
  }
});

module.exports = router;
