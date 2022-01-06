// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const path = require("path");
const sequelize = require("./config/connection");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3535;

//setting Handlebars.js as the default template engine.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(require("./controllers/index"));

// Starts database and the server to begin listening
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
