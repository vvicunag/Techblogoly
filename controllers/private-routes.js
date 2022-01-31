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
    post = post.get({plain: true});
    console.log(post);
    res.render("post", post);
  }
  catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Failed to load post" });
  }
});
 // POST request to create a post
router.post("/post", async (req, res) => {
  //const id = req.session.userId;
  const id = 1;
  try {
    const newPost = {
      post_content: req.body.post_content,
      user_id: id,
    };
    savedPost = await Post.create(newPost);
    return res.status(200).json({message: "Post successfully created"});
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({error: "Failed to create post"});
  }
});

// POST request to create a comment
router.post("/comment/:post", async (req, res) => {
  //const id = req.session.userId;
  const id = 1;
  try {
    const newComment = {
      comment_content: req.body.comment_content,
      user_id: id,
      post_id: req.params.post,
    };
    savedComment = await Comment.create(newComment);
    return res.status(200).json({message: "Comment successfully created"});
  }
  catch (error) {
    console.log(error);
    return res.status(500).json({error: "Failed to create comment"});
  }
});

// PUT request to update post

// PUT request to update comment

// DELETE request to delete a post

// DELETE request to delete a comment

module.exports = router;

