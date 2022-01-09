const { Comment } = require("../models");

const commentData = [
  {
    comment_content:
      "Me too! :) Is there a game in particular that you liked???",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_content:
      "Personally, I started my coding journey by learning javascript. I find it more versatile!",
    user_id: 3,
    post_id: 2,
  },
  {
    comment_content: "Python rocks!",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_content: "Not sure... would be interesting to find out!",
    user_id: 1,
    post_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
