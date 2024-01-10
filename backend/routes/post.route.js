const router = require("express").Router();
const postModel = require("../models/post.model");

//--------------create post ---------------------------

router.post("/", async (req, res) => {
  try {
    const { userId, title, desc } = req.body;

    const createPost = new postModel({ userId, title, desc });

    await createPost.save();

    return res.json({
      status: true,
      data: createPost,
      message: "post crested",
    });
  } catch (error) {
    return res.json({ status: false, data: [], message: "error: " + error });
  }
});

//--------------reply post----------------------------

router.put("/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const { userId, replyText } = req.body;

    const updatedPost = await postModel.findByIdAndUpdate(
      postId,
      { $set: { replies: [{ userId, replyText }] } },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json({ status: true, data: updatedPost, message: "reply added" });
  } catch (error) {
    return res.json({ success: false, message: error });
  }
});

//--------------like post ---------------------------

router.patch("/:pId/:uId", async (req, res) => {
  try {
    const postId = req.params.pId;
    const userId = req.params.uId;
    let updatedPost;

    const isLiked = await postModel.findOne({
      _id: postId,
      likes: userId,
    });

    if (isLiked) {
      updatedPost = await postModel.findByIdAndUpdate(
        postId,
        { $pull: { likes: userId } },
        { new: true }
      );
    } else {
      updatedPost = await postModel.findByIdAndUpdate(
        postId,
        { $set: { likes: [userId] } },
        { new: true }
      );
    }

    res.json({
      success: true,
      likes: updatedPost.likes.length,
      data: updatedPost,
      message: "post Liked",
    });

    return;

    //console.log(updatedPost.likes);
  } catch (error) {
    console.error(error);
    return res.json({ success: false, message: error });
  }
});

//------------------------get request------------------------------

//get a post
router.get("/:id", async (req, res) => {
  try {
    //console.log(req.user);
    const courses = await postModel.findById(req.params.id);
    return res.json({ success: true, data: courses, message: "here you go" });
  } catch (error) {
    return res.json({ success: false, message: error });
  }
});

//get doc posts
router.get("/doc/:id", async (req, res) => {
  try {
    //console.log(req.user);
    const courses = await postModel.find({ userId: req.params.id});
    return res.json({ success: true, data: courses, message: "here you go" });
  } catch (error) {
    return res.json({ success: false, message: error });
  }
});

//get user post
router.get("/user/:id", async (req, res) => {
  try {
    //console.log(req.user);
    const courses = await postModel.find({ userId: req.params.id });
    return res.json({ success: true, data: courses, message: "here you go" });
  } catch (error) {
    return res.json({ success: false, message: error });
  }
});

//get all post
router.get("/", async (req, res) => {
  try {
    //console.log(req.user);
    const courses = await postModel.find();
    return res.json({ success: true, data: courses, message: "here you go" });
  } catch (error) {
    return res.json({ success: false, message: error });
  }
});

module.exports = router;
