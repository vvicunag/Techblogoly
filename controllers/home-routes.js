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
})

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
      res.status(400).json({validPassword, message: "Incorrect password." });
      return;
    }
    return res.status(200).json({message: "You are logged in!" });
  }
  catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Failed login." });
  };
})



//------------------
// const userLogin = async (req, res) => {
//   try {
//     const user = await User.findOne({
//       where: {
//         user_name: req.body.user_name,
//       },
//     });
//     if (!user) {
//       res.status(401).json({ message: "Incorrect username or password." });
//       return;
//     }
//     // Check if password correct
//     const validPassword = user.checkPassword(req.body.password);
//     if (!validPassword) {
//       res.status(400).json({ message: "Incorrect username or password." });
//       return;
//     }
//     req.session.save(() => {
//       req.session.loggedIn = true;
//       req.session.userId = user.id;
//       req.session.user_name = user.user_name;
//       return res.status(200).json({ user, message: "You are logged in!" });
//     });
//   } catch (error) {
//     console.error(error.message);
//     return res.status(500).json({ error: "Failed login." });
//   }
// };

//----------------
module.exports = router;
