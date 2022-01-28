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
          include: [{model: User, attributes: ["username"],}]
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("home", { posts });
  } catch {
    console.log(err);
    res.status(500).json(err);
  }
});

//get request to render login page
router.get("/login", (req, res) => {
  res.render("login");
});

// get request to logout
router.get("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      return res.status(200).json({data: "Logout successful."});
    });
  } else {
    return res.status(500).json({data: "Logout failed."})
  }
});

// post request to log in
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    //checks user
    if (!user) {
      res.status(401).json({ message: "Incorrect username" });
      return
    };
    // checks password
    const validPassword = user.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({message: "Incorrect password." });
      return;
    }
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = user.id;
      req.session.username = user.username;
    });
    return res.status(200).json({message: "You are logged in!" });
  }
  catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed login." });
  };
});

module.exports = router;
