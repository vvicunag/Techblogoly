const router = require("express").Router();
const { Post, Comment, User } = require("../models");

//router.use("/dashboard",dashboardRouter);

router.get("/dashboard", (req, res) => {
    res.render("dashboard", {
        loggedIn: req.session.loggedIn,
    });
  });

module.exports = router;