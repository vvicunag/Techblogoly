const User = require("./User");
const Comment = require("./Comment");

User.hasMany(Comment, {
  foreignKey: "id",
});

Comment.belongsTo(User, {
  foreignKey: "id",
});

module.exports = { User, Comment };
