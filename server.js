// Dependencies
const express = require("express");
// Import express-handlebars
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const path = require("path");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3535;

//setting Handlebars.js as the default template engine.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname, "public")));
app.use(require("./controllers/index"));

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});
