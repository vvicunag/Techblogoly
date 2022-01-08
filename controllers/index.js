const router = require("express").Router();
// GET route main
router.get("/", async (req, res) => {
  // This method is rendering the 'home' Handlebars.js template
  res.render("home");
});

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
