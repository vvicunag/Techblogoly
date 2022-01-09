const { Post } = require("../models");

const postData = [
  {
    post_content: "I like the new Playstation!",
    user_id: 1,
  },
  {
    post_content: "I am thinking on learning Python... what do you think?",
    user_id: 1,
  },
  {
    post_content:
      "Which API is your favorite??? There is some cool stuff out there!",
    user_id: 2,
  },
  {
    post_content: "What kind of programming do you thin they use on Teslas??",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
