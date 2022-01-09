const router = require("express").Router();

// GET route main
router.get("/", async (req, res) => {
  // This method is rendering the 'home' Handlebars.js template
  res.render("home");
});

module.exports = router;
