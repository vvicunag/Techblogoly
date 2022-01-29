const router = require("express").Router();
const { Post, Comment, User } = require("../models");

// GET request for dashboard
router.get("/dashboard", async (req, res) => {
    try{
      //const id = req.session.userId;
      const id = 1
      let dashboardData = await User.findByPk(id, {
        attributes: { exclude: ['password'] },
        include: [{model: Post}, {model: Comment}],
      });
      dashboardData = dashboardData.get({plain: true});
      res.render("dashboard", {
          loggedIn: req.session.loggedIn,
          dashboardData,
      });
    }
    catch (err) {
      console.log(err);
    return res.status(500).json({ error: "Failed to load dashboard" });
    }
  });

  // GET request to display a post
router.get("/post/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    let post = await Post.findByPk(postId, {include: [
      {
        model: Comment,
        attributes: ["comment_content", "user_id", "created_on"],
        include: [{model: User, attributes: ["username"],}]
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
    });
    console.log(post);
    res.json(post);
  }
  catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Failed to load post" });
  }
});

module.exports = router;

