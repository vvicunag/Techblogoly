const router = require("express").Router();
const { Post, Comment, User } = require("../models");

//router.use("/dashboard",dashboardRouter);

router.get("/dashboard", async (req, res) => {
    try{
      //const id = req.session.userId;
      const id = 1
      const dashboardData = await User.findByPk(id, {
        attributes: { exclude: ['password'] },
        include: [{model: Post}, {model: Comment}],
      });
      userData = dashboardData.dataValues;
      console.log(userData);
      //dashboardData = dashboardData.get({plain: true});
      //dashboardData = dashboardData.dataValues;
      res.render("dashboard", {
          loggedIn: req.session.loggedIn,
          userData,
      });
    }
    catch {
    return res.status(500).json({ error: "Failed to load dashboard" });
    }
  });

module.exports = router;

