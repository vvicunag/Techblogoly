const { Comment } = require("../models");

const commentData = [
  {
    comment: "I like the new Playstation!",
    user_id: 1,
    time: "1/1/2022",
  },
  {
    comment: "I am thinking on learning Python... what do you think?",
    user_id: 1,
    time: "3/1/2022",
  },
  {
    comment:
      "Which API is your favorite??? There is some cool stuff out there!",
    user_id: 2,
    time: "2/1/2022",
  },
  {
    comment: "What kind of programming do you thin they use on Teslas??",
    user_id: 3,
    time: "2/1/2022",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
