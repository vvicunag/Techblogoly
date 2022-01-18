const router = require("express").Router();
const { Post, Comment, User } = require("../models");

// GET route main
router.get("/", async (req, res) => {
  // This method is rendering the 'home' Handlebars.js template
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: Comment,
          attributes: ["comment_content", "user_id", "created_on"],
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);
    res.render("home", { posts });
  } catch {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;