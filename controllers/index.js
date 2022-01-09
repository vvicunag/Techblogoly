const router = require("express").Router();
const homeRoutes = require("./home-routes.js");
router.use("/", homeRoutes);

module.exports = router;

/*
// Login route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// Logout route
router.get("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy();
    res.redirect("/");
    return;
  }
  res.render("login");
});
*/
