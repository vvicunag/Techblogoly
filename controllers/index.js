const router = require("express").Router();
const homeRoutes = require("./home-routes.js");
const auth = require("../utils/auth");
const privateRoutes = require("./private-routes")

router.use("/", homeRoutes);
router.use(auth, privateRoutes);


module.exports = router;
