const router = require("express").Router();
// GET route main
router.get("/", async (req, res) => {
  // Add a comment describing the purpose of the render method
  // This method is rendering the 'all' Handlebars.js template. This is how we connect each route to the correct template.
  res.render("home");
});

module.exports = router;
