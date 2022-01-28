const { User } = require("../models");
const bcrypt = require("bcrypt");


const tryPass2 = async () => {
  buble = await bcrypt.hash("Berlin?%", 10);
  return buble
}


const userData = [
  {
    username: "constantin",
    password: "$2b$10$rN8Hnk71IVXl2yMSnCHfp.r76H50rX3VArjt6EebtD/RABnXwbeem", // dundeePeople6
  },
  {
    username: "julius",
    password: "$2b$10$eVeEgo0EI9VJCMKTlxfowON6MqEUGE0jcX6scBQ9jdS8eEWRK2/XO", // pocionmagica$
  },
  {
    username: "incognito100",
    password: "$2b$10$uXxYPYEp01gBn/u0B39JGO/KEUD1rORdLpdcbs0IdhxJ7GERKo41W", // Berlin?%
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
