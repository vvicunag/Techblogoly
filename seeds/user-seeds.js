const { User } = require("../models");

const userData = [
  {
    username: "constantin",
    password: "dundeePeople6",
  },
  {
    username: "julius",
    password: "pocionmagica$",
  },
  {
    username: "incognito100",
    password: "Berlin?%",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
